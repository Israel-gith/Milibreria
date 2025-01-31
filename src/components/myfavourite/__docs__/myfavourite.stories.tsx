import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; 

const meta: Meta<typeof Example> = {
 title: "MyFavourite",
 component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
 args: {
 iconcolor: 'red',
 disabled: false,
 onClick: () => alert("MyFavourite primary"),
 },
};

export const Disabled: Story = {
 args: {
 iconcolor: 'blue',
 disabled: true,
 onClick: () => alert("MyFavourite disabled"),
 },
}; 