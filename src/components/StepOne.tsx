import React, { useState } from "react";

interface Props {
    nextStep: () => void;
    updateFormData: (inputName: "name" | "ssn", value: string) => void;
}

const StepOne: React.FC<Props> = ({ nextStep, updateFormData }) => {
    const [name, setName] = useState<string>("");
    const [ssn, setSSN] = useState<string>("");
    const [error, setError] = useState<string>("");

    const validateAndNext = () => {
        const ssnRegex = /^\d{3}-\d{2}-\d{4}$/;
        if (!name.trim() || !ssnRegex.test(ssn)) {
            setError("Please enter a valid name and SSN (XXX-XX-XXXX)");
            return;
        }
        updateFormData("name", name);
        updateFormData("ssn", ssn);
        nextStep();
    };

    return (
        <div>
            <h2>Step 1: Personal Information</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="SSN (XXX-XX-XXXX)" value={ssn} onChange={(e) => setSSN(e.target.value)} />
            <button onClick={validateAndNext}>Next</button>
        </div>
    );
};

export default StepOne;
