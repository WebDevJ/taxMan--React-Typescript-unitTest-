import React, { useState } from "react";

interface Props {
    nextStep: () => void;
    prevStep: () => void;
    updateFormData: (inputName: "income", value: string) => void;
}

const StepTwo: React.FC<Props> = ({ nextStep, prevStep, updateFormData }) => {
    const [income, setIncome] = useState<string>("");
    const [error, setError] = useState<string>("");

    const validateAndNext = () => {
        if (!income || isNaN(Number(income)) || Number(income) < 0) {
            setError("Please enter a valid income amount.");
            return;
        }
        updateFormData("income", income);
        nextStep();
    };

    return (
        <div>
            <h2>Step 2: Income Information</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input
                type="number"
                placeholder="Total Income"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
            />
            <button onClick={prevStep}>Back</button>
            <button onClick={validateAndNext}>Next</button>
        </div>
    );
};

export default StepTwo;
