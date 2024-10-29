import React from "react";
import { describe, expect, it, vi } from "vitest"; // Importo vi en lugar de jest
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import IsraelRD from "../israelrd"; // Importo mi componente IsraelRD

describe("IsraelRD component", () => {
  it("El switch se debería renderizar correctamente", () => {
    render(<IsraelRD checked={false} onChange={() => {}} />); // Renderizo el componente con el estado inicial
    const switchElement = screen.getByRole("switch"); // Busco el switch por su rol
    expect(switchElement).toBeInTheDocument(); // Verifico que el switch esté en el documento
    expect(switchElement).not.toBeChecked(); // Verifico que no esté marcado al inicio
  });

  it("Debería cambiar el estado cuando se activa el switch", () => {
    const handleChange = vi.fn(); // Simulo la función onChange con vi
    render(<IsraelRD checked={false} onChange={handleChange} />); // Renderizo el componente

    const switchElement = screen.getByRole("switch"); // Busco el switch
    fireEvent.click(switchElement); // Simulo un clic en el switch
    expect(handleChange).toHaveBeenCalled(); // Verifico que onChange se haya llamado
  });
});