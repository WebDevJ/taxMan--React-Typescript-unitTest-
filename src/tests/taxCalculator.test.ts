import { calculateTax } from "../components/TaxBracketCalculator";

describe("calculateTax", () => {
    it("calculates tax correctly for different incomes", () => {
        expect(calculateTax(10000)).toBeCloseTo(1000);
        expect(calculateTax(50000)).toBeCloseTo(6220);
        expect(calculateTax(150000)).toBeCloseTo(28240);
    });
});
