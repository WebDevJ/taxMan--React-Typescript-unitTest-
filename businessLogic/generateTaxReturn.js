const fs = require("fs");
const path = require("path");

function generateTaxReturn(data) {
    const dirPath = path.join(__dirname, "businessLogic");
    const filePath = path.join(dirPath, "tax_return.xml");

    // ✅ Ensure `businessLogic` directory exists
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    // ✅ Read XML template
    let xmlTemplate = fs.readFileSync(path.join(__dirname, "tax_return_template.xml"), "utf-8");

    // ✅ Default values for missing fields
    const defaults = {
        name: "Unknown",
        ssn: "000-00-0000",
        filingStatus: "Single",
        salary: 0,
        otherIncome: 0,
        totalIncome: 0,
        hasRetirementPlan: false,
        contributedToHSA: false,
        medicalExpenses: 0,
        standardDeduction: 12550,
        earnedIncomeCredit: false,
        childTaxCredit: false,
        educationCredit: false,
        taxableIncome: 0,
        taxOwed: 0
    };

    // ✅ Merge provided data with defaults
    const taxData = { ...defaults, ...data };

    // ✅ Replace placeholders in XML with real values
    Object.keys(taxData).forEach(key => {
        xmlTemplate = xmlTemplate.replace(new RegExp(`{${key}}`, "g"), taxData[key]);
    });

    // ✅ Write final XML file
    fs.writeFileSync(filePath, xmlTemplate);

    return xmlTemplate; // Return XML as a string
}

module.exports = generateTaxReturn;
