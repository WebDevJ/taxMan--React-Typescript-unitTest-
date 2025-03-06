import React, { useState } from "react";
import axios from "axios";

interface Props {
    summaryData: {
        name?: string;
        ssn?: string;
        filingStatus?: string;
        salary?: number;
        otherIncome?: number;
        totalIncome?: number;
        hasRetirementPlan?: boolean;
        contributedToHSA?: boolean;
        medicalExpenses?: number;
        standardDeduction?: number;
        earnedIncomeCredit?: boolean;
        childTaxCredit?: boolean;
        educationCredit?: boolean;
        taxableIncome?: number;
        taxOwed?: number;
    };
}

const FileTaxReturn: React.FC<Props> = ({ summaryData }) => {
    const [message, setMessage] = useState("");
    const [xmlResult, setXmlResult] = useState("");

    const handleSubmit = async () => {
        try {
            const res = await axios.post("http://localhost:5000/file-tax-return", summaryData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            setMessage(res.data.message);
            setXmlResult(res.data.xml);
        } catch (error) {
            console.error("Error submitting tax return:", error);
            setMessage("❌ Failed to submit tax return. Please try again.");
        }
    };

    return (
        <div>
            <button onClick={handleSubmit}>File Tax Return</button>
            {message && <p>{message}</p>}
            {xmlResult && (
                <div>
                    <h3>Generated Tax Return (XML):</h3>
                    <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word", backgroundColor: "#f4f4f4", padding: "10px" }}>
                        {xmlResult}
                    </pre>
                </div>
            )}
        </div>
    );
};

export default FileTaxReturn;
