import React, { useEffect, useState } from "react";
import { fetchTaxData } from "../services/apiService";

interface TaxBracket {
    rate: number;
    income: number;
}

const taxBrackets: TaxBracket[] = [
    { rate: 0.10, income: 11600 },
    { rate: 0.12, income: 47150 },
    { rate: 0.22, income: 100525 },
    { rate: 0.24, income: 191950 },
    { rate: 0.32, income: 243725 },
    { rate: 0.35, income: 609350 },
    { rate: 0.37, income: Infinity },
];

export const calculateTax = (income: number): number => {
    let tax = 0;
    let previousIncome = 0;

    for (const bracket of taxBrackets) {
        if (income > bracket.income) {
            tax += (bracket.income - previousIncome) * bracket.rate;
            previousIncome = bracket.income;
        } else {
            tax += (income - previousIncome) * bracket.rate;
            break;
        }
    }
    return tax;
};

interface Props {
    taxableIncome: number;
}

const TaxBracketCalculator: React.FC<Props> = ({ taxableIncome }) => {
    const [taxOwed, setTaxOwed] = useState<number>(calculateTax(taxableIncome));
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [nationalIncome, setNationalIncome] = useState<number | null>(null);

    useEffect(() => {
        const getTaxData = async () => {
            console.log("calling api")
            try {
                const data = await fetchTaxData();
                console.log("API Response:", data);

                // Correct way to extract "National Average Income"
                if (data && data["0"] && data["0"]["National Average Income"]) {
                    setNationalIncome(parseFloat(data["0"]["National Average Income"].replace(/,/g, "")));
                }
            } catch (error) {
                console.error("API Error:", error);
                setError("Failed to fetch tax data.");
            } finally {
                setLoading(false);
            }
        };

        getTaxData();
    }, []);


    if (loading) return <p>Loading tax data...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div className="container">
            <h2>Tax Bracket Calculator</h2>
            {nationalIncome && <p><strong>National Average Income:</strong> ${nationalIncome.toLocaleString()}</p>}
            <p><strong>Taxable Income:</strong> ${taxableIncome}</p>
            <p><strong>Estimated Tax:</strong> ${taxOwed.toFixed(2)}</p>

            <h3>Tax Brackets</h3>
            <table className="tax-table">
                <thead>
                    <tr>
                        <th>Income Bracket</th>
                        <th>Tax Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {taxBrackets.map((bracket, index) => (
                        <tr key={index}>
                            <td>{bracket.income === Infinity ? "Above Highest Bracket" : `$${bracket.income.toLocaleString()}`}</td>
                            <td>{(bracket.rate * 100).toFixed(2)}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaxBracketCalculator;
