import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; //importamos el componente Example

const meta: Meta<typeof Example> = {
 title: "CustomButton",
 component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
 args: {
 text: "Button primary",
 txtcolor: 'black',
 bgcolor: 'red',
 disabled: false,
 size: "small",
 onClick: () => alert("Button Primary"),
 },
};
export const Secondary: Story = {
 args: {
 text: "Button secondary",
 txtcolor: 'white',
 bgcolor: 'pink',
 disabled: false,
 size: "small",
 onClick: () => alert("Button secondary"),
 },
}; 