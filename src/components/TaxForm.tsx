import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Summary from "./Summary";
import { FormData } from "../types";

const TaxForm: React.FC = () => {
    const [step, setStep] = useState<number>(1);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        ssn: "",
        income: "",
        deductions: "",
    });

    const nextStep = () => setStep((prevStep) => prevStep + 1);
    const prevStep = () => setStep((prevStep) => prevStep - 1);

    const updateFormData = (inputName: keyof FormData, value: string) => {
        setFormData({ ...formData, [inputName]: value });
    };

    return (
        <div>
            {step === 1 && <StepOne nextStep={nextStep} updateFormData={updateFormData} />}
            {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} />}
            {step === 3 && <StepThree nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} />}
            {step === 4 && <Summary formData={formData} prevStep={prevStep} />}
        </div>
    );
};

export default TaxForm;
