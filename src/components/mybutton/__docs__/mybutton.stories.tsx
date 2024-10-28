import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; 

const meta: Meta<typeof Example> = {
  title: "MyButton",
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    text: "Default Button",
    textColor: "white",
    bgColor: "blue",
    borderColor: "black",
    borderWidth: 1,
    hoverTextColor: "yellow",
    hoverBgColor: "darkblue",
    size: "medium",
    disabled: false,
    onClick: () => alert("Default Button Clicked"),
  },
};

export const Large: Story = {
  args: {
    text: "Large Button",
    textColor: "white",
    bgColor: "green",
    borderColor: "darkgreen",
    borderWidth: 2,
    hoverTextColor: "lightgreen",
    hoverBgColor: "darkgreen",
    size: "large",
    disabled: false,
    onClick: () => alert("Large Button Clicked"),
  },
};