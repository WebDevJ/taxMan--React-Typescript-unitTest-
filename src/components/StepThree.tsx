import React, { useState } from "react";

interface Props {
    nextStep: () => void;
    prevStep: () => void;
    updateFormData: (inputName: "deductions", value: string) => void;
}

const StepThree: React.FC<Props> = ({ nextStep, prevStep, updateFormData }) => {
    const [deductions, setDeductions] = useState<string>("");
    const [error, setError] = useState<string>("");

    const validateAndNext = () => {
        if (!deductions || isNaN(Number(deductions)) || Number(deductions) < 0) {
            setError("Please enter a valid deduction amount.");
            return;
        }
        updateFormData("deductions", deductions);
        nextStep();
    };

    return (
        <div>
            <h2>Step 3: Deductions</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input
                type="number"
                placeholder="Total Deductions"
                value={deductions}
                onChange={(e) => setDeductions(e.target.value)}
            />
            <button onClick={prevStep}>Back</button>
            <button onClick={validateAndNext}>Next</button>
        </div>
    );
};

export default StepThree;
