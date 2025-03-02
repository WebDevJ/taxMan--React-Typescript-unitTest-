import React, { useState } from "react";
import TaxForm from "./components/TaxForm";
import TaxBracketCalculator from "./components/TaxBracketCalculator";

const App: React.FC = () => {
  const [taxableIncome, setTaxableIncome] = useState<number | null>(null);

  return (
    <div className="container">
      <h1>TaxMan App.</h1>
      <TaxForm setTaxableIncome={setTaxableIncome} />
      {taxableIncome !== null && <TaxBracketCalculator taxableIncome={taxableIncome} />}
    </div>
  );
};

export default App;
