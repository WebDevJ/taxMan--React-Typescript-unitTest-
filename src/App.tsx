import React, { useState } from "react";
import TaxForm from "./components/TaxForm";
import TaxBracketCalculator from "./components/TaxBracketCalculator";
import FileTaxReturn from "./components/FileTaxReturn";

const App: React.FC = () => {
  const [taxableIncome, setTaxableIncome] = useState<number | null>(null);
  const [summaryData, setSummaryData] = useState<any>(null);

  return (
    <div className="container">
      <h1>
        <span style={{ color: "#d86541" }}>Tax</span>Man App.
      </h1>
      <TaxForm setTaxableIncome={setTaxableIncome} setSummaryData={setSummaryData} />
      {taxableIncome !== null && <TaxBracketCalculator taxableIncome={taxableIncome} />}
      {summaryData && <FileTaxReturn summaryData={summaryData} />}
    </div>
  );
};

export default App;
