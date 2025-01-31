import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; 

const meta: Meta<typeof Example> = {
 title: "IsraelRL",
 component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
 args: {
    text: "Barra Primary" ,
    textcolor: "black",
    barcolor: "blue"  , 
    onClick: () => alert("IsraelRL Primary"),
 },
};

export const Secondary: Story = {
 args: {
    text: "Barra Secondary" ,
    textcolor: "white",
    barcolor: "purple"  , 
    onClick: () => alert("IsraelRL Secondary"),
 },
}; 