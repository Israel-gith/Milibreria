import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; //importamos el componente Example

const meta: Meta<typeof Example> = {
 title: "MyButton",
 component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
 args: {
 text: "MyButton primary",
 txtcolor: 'black',
 bgcolor: 'blue',
 bordercolor: 'black',
 borderwidth: 2,
 disabled: false,
 hover:{
     hovertxtcolor: "white",
     hoverbgcolor: "yellow"
 },
 size: "large",
 onClick: () => alert("MyButton primary"),
 },
};

export const Secondary: Story = {
 args: {
 text: "Button secondary",
 txtcolor: 'white',
 bgcolor: 'purple',
 bordercolor: 'yellow',
 borderwidth: 4,
 disabled: false,
 hover:{
     hovertxtcolor: "red",
    hoverbgcolor: "white"
    },
 size: "small",
 onClick: () => alert("MyButton secondary"),
 },
}; 