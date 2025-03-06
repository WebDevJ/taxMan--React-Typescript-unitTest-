import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaxForm from "../components/TaxForm"; // Adjust the path if needed
import "@testing-library/jest-dom";

test("renders TaxForm component", () => {
    const mockSetTaxableIncome = jest.fn(); // Mock function for taxable income
    const mockSetSummaryData = jest.fn(); // ✅ Add this mock function

    render(<TaxForm setTaxableIncome={mockSetTaxableIncome} setSummaryData={mockSetSummaryData} />);

    expect(screen.getByText("Step 1: Personal Information")).toBeInTheDocument();
});

test("moves to next step when valid input is entered", () => {
    const mockSetTaxableIncome = jest.fn();
    const mockSetSummaryData = jest.fn(); // ✅ Add this mock function

    render(<TaxForm setTaxableIncome={mockSetTaxableIncome} setSummaryData={mockSetSummaryData} />);

    fireEvent.change(screen.getByPlaceholderText("Full Name"), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByPlaceholderText("SSN (XXX-XX-XXXX)"), { target: { value: "123-45-6789" } });

    fireEvent.click(screen.getByText("Next"));

    expect(screen.getByText("Step 2: Income Details")).toBeInTheDocument();
});

test("displays error when SSN format is incorrect", () => {
    const mockSetTaxableIncome = jest.fn();
    const mockSetSummaryData = jest.fn(); // ✅ Add this mock function

    render(<TaxForm setTaxableIncome={mockSetTaxableIncome} setSummaryData={mockSetSummaryData} />);

    fireEvent.change(screen.getByPlaceholderText("Full Name"), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByPlaceholderText("SSN (XXX-XX-XXXX)"), { target: { value: "123456789" } });

    fireEvent.click(screen.getByText("Next"));

    expect(screen.getByText("Invalid SSN format")).toBeInTheDocument();
});
