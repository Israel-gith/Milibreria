import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import MyFavouriteBorder from "../myfavouriteborder"; 

describe("MyFavouriteBorder component", () => {
  it("El icono se debería renderizar correctamente", () => {
    render(<MyFavouriteBorder color="blue" />);
    const iconButton = screen.getByRole("button");
    expect(iconButton).toBeInTheDocument();
  });
});