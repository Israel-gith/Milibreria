import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavouriteBorder from "../myfavouriteborder";

describe("MyFavourite component", () => {
 it("El icono se renderiza correctamente", () => {
 render(<MyFavouriteBorder iconcolor={"red"} />);
 const button = screen.getByRole("button");
 expect(button).toBeInTheDocument();
 });
});
