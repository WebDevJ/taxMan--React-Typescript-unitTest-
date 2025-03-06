const fs = require("fs");
const path = require("path");

function generateTaxReturn(data) {
    const dirPath = path.join(__dirname, "businessLogic"); // Ensure correct path
    const filePath = path.join(dirPath, "tax_return.xml");

    // ✅ Ensure `businessLogic` directory exists before writing
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    // ✅ Read XML template
    let xmlTemplate = fs.readFileSync(path.join(__dirname, "tax_return_template.xml"), "utf-8");

    // ✅ Replace placeholders with user data
    Object.keys(data).forEach(key => {
        xmlTemplate = xmlTemplate.replace(`{${key}}`, data[key]);
    });

    // ✅ Write the processed XML to `businessLogic/tax_return.xml`
    fs.writeFileSync(filePath, xmlTemplate);

    return xmlTemplate; // Return the generated XML as a string
}

module.exports = generateTaxReturn;
