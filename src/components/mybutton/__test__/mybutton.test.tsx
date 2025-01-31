import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyButton from "../mybutton";

describe("MyButton component", () => {
 it("El botón se debería renderizar correctamente", () => {
 render(<MyButton text='Hola' txtcolor={"black"} bgcolor={"blue"} bordercolor={"black"} borderwidth={2} hovertxtcolor= {"white"} hoverbgcolor={"black"}
  />);
 const button = screen.getByRole("button");
 expect(button).toBeInTheDocument();
 });
});
