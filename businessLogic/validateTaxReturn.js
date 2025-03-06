const fs = require("fs");
const { XMLValidator } = require("fast-xml-parser");
//TODO; libxmljs2 is out dated, use fast-xml-parser instead
// const libxmljs = require("libxmljs"); USED node 20 ... smh. 😢
function validateTaxReturn() {
    const xmlData = fs.readFileSync("./businessLogic/tax_return.xml", "utf-8");
    const isValid = XMLValidator.validate(xmlData);
    return isValid === true;
}

module.exports = validateTaxReturn;

