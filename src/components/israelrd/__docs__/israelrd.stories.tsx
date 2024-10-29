import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; // Importamos el componente Example que usará el switch

const meta: Meta<typeof Example> = {
  title: "IsraelRD", // Título de la sección en Storybook
  component: Example, // Componente que estamos documentando
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    checked: false, 
    onChange: () => {}, 
  },
};

export const Checked: Story = {
  args: {
    checked: true, 
    onChange: () => {}, 
  },
};