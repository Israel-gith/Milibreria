import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; 

const meta: Meta<typeof Example> = {
  title: "MyFavouriteBorder",
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    color: "blue",
    disabled: false,
    onClick: () => alert("Favourite Border Clicked"),
  },
};

export const Disabled: Story = {
  args: {
    color: "gray",
    disabled: true,
    onClick: () => alert("This button is disabled"),
  },
};