import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; 

const meta: Meta<typeof Example> = {
  title: "MyFavourite",
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    color: "red",
    disabled: false,
    onClick: () => alert("Favorite Clicked"),
  },
};

export const Disabled: Story = {
  args: {
    color: "gray",
    disabled: true,
    onClick: () => alert("This button is disabled"),
  },
};