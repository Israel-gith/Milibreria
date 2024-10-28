import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import MyButton from "../mybutton"; 

describe("MyButton component", () => {
  it("El botón se debería renderizar correctamente", () => {
    render(
      <MyButton
        text="Hola"
        textColor="white"
        bgColor="orange"
        borderColor="black"
        borderWidth={1}
        hoverTextColor="gray"
        hoverBgColor="blue"
      />
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});