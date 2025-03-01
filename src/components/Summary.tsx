import React from "react";
import { FormData } from "../types";

interface Props {
    formData: FormData;
    prevStep: () => void;
}

const Summary: React.FC<Props> = ({ formData, prevStep }) => {
    console.log("Summary received data:", formData);
    return (
        <div>
            <h2>Summary</h2>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>SSN:</strong> {formData.ssn}</p>
            <p><strong>Income:</strong> ${formData.income}</p>
            <p><strong>Deductions:</strong> ${formData.deductions}</p>
            <button onClick={prevStep}>Back</button>
            <button onClick={() => alert("Data Submitted!")}>Submit</button>
        </div>
    );
};

export default Summary;
