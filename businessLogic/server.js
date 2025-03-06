const express = require("express");
const cors = require("cors"); // Import CORS
const generateTaxReturn = require("./generateTaxReturn");
const validateTaxReturn = require("./validateTaxReturn");

const app = express();

// Enable CORS for all routes
app.use(cors());

// Allow JSON body parsing
app.use(express.json());

app.post("/file-tax-return", (req, res) => {
    const taxData = req.body;

    const generatedXML = generateTaxReturn(taxData);
    const isValid = validateTaxReturn();

    if (isValid) {
        res.json({ message: "✅ Tax return validated!", success: true, xml: generatedXML });
    } else {
        res.json({ message: "❌ Invalid tax return.", success: false, xml: generatedXML });
    }
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
