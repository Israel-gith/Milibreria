import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CustomButton from "../button"; // importo mi componente CustomButton

describe("CustomButton component", () => {
 it("El botón se debería renderizar correctamente", () => {
 render(<CustomButton text='Hola' txtcolor='white' bgcolor='orange' />);
 const button = screen.getByRole("button");
 expect(button).toBeInTheDocument();
 });
});
