import React, { useState } from "react";
import { FormData } from "../types";

interface Props {
    formData: FormData;
    prevStep: () => void;
    setTaxableIncome: (income: number) => void;
}

const Summary: React.FC<Props> = ({ formData, prevStep, setTaxableIncome }) => {
    const taxableIncome = Number(formData.income) - Number(formData.deductions);

    console.log("Summary received data:", formData);

    const handleSubmit = () => {
        alert("Data Submitted!");
        setTaxableIncome(taxableIncome);
    };

    return (
        <div className="container">
            <h2>Summary</h2>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>SSN:</strong> {formData.ssn}</p>
            <p><strong>Income:</strong> ${formData.income}</p>
            <p><strong>Deductions:</strong> ${formData.deductions}</p>
            <p><strong>Taxable Income:</strong> ${taxableIncome}</p>

            <div className="center">
                <button className="button-primary" onClick={prevStep}>Back</button>
                <button className="button-primary" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Summary;
