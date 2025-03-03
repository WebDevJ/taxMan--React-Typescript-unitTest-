import React, { useState } from "react";
import TaxForm from "./components/TaxForm";
import TaxBracketCalculator from "./components/TaxBracketCalculator";

const App: React.FC = () => {
  const [taxableIncome, setTaxableIncome] = useState<number | null>(null);
  //TODO: get rid of inline style during cleanUp code session"
  return (
    <div className="container">
      <h1>
        <span style={{ color: "#d86541" }}>Tax</span>Man App.
      </h1>
      <TaxForm setTaxableIncome={setTaxableIncome} />
      {taxableIncome !== null && <TaxBracketCalculator taxableIncome={taxableIncome} />}
    </div>
  );
};

export default App;
