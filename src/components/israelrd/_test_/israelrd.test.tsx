import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import IsraelRD from "../israelrd";

describe("IsraelRD component", () => {
  const props = {
    avatar: "avatar-url.jpg",
    altAvatar: "Avatar Alt Text",
    title: "Título de Ejemplo",
    date: "28 de Octubre, 2024",
    image: "image-url.jpg",
    altImage: "Imagen Alt Text",
    description: "Descripción de ejemplo.",
    likes: 10,
  };

  it("debería renderizar correctamente en el DOM", () => {
    render(<IsraelRD {...props} />);
    
    // Verifica que el título y la descripción se renderizan
    expect(screen.getByText("Título de Ejemplo")).toBeInTheDocument();
    expect(screen.getByText("Descripción de ejemplo.")).toBeInTheDocument();
    
    // Verifica que el contador de likes se renderiza
    expect(screen.getByText("10")).toBeInTheDocument();
  });
});