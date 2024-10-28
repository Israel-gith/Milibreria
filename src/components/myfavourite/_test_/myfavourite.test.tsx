import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import MyFavourite from "../myfavourite"; 

describe("MyFavourite component", () => {
  it("El icono se debería renderizar correctamente", () => {
    render(<MyFavourite color="red" />);
    const iconButton = screen.getByRole("button");
    expect(iconButton).toBeInTheDocument();
  });
});