import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import IsraelRL from "../israelrl";

describe("MyFavourite component", () => {
 it("El icono se renderiza correctamente", () => {
 render(<IsraelRL text={"Barra"} textcolor={"white"} barcolor={"black"}  />);
 const button = screen.getByRole("button");
 expect(button).toBeInTheDocument();
 });
});
