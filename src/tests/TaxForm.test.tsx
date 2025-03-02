import { render, screen, fireEvent } from "@testing-library/react";
import TaxForm from "../components/TaxForm";

test("renders TaxForm component", () => {
    const mockSetTaxableIncome = jest.fn(); // Mocked function
    render(<TaxForm setTaxableIncome={mockSetTaxableIncome} />);

    expect(screen.getByText("Step 1: Personal Information")).toBeInTheDocument();
});

test("moves to next step when valid input is entered", () => {
    const mockSetTaxableIncome = jest.fn(); // Mocked function
    render(<TaxForm setTaxableIncome={mockSetTaxableIncome} />);

    fireEvent.change(screen.getByPlaceholderText("Full Name"), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByPlaceholderText("SSN (XXX-XX-XXXX)"), { target: { value: "123-45-6789" } });
    fireEvent.click(screen.getByText("Next"));

    expect(screen.getByText("Step 2: Income Information")).toBeInTheDocument();
});

test("displays error when SSN format is incorrect", () => {
    const mockSetTaxableIncome = jest.fn(); //  Mocked function
    render(<TaxForm setTaxableIncome={mockSetTaxableIncome} />);

    fireEvent.change(screen.getByPlaceholderText("Full Name"), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByPlaceholderText("SSN (XXX-XX-XXXX)"), { target: { value: "123456789" } });
    fireEvent.click(screen.getByText("Next"));

    expect(screen.getByText("Please enter a valid name and SSN (XXX-XX-XXXX)")).toBeInTheDocument();
});
