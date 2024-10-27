import { MouseEventHandler } from 'react';
export interface CustomButtonProps {
    text: string;
    txtcolor: string;
    bgcolor: string;
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function CustomButton(props: CustomButtonProps): import("react/jsx-runtime").JSX.Element;
export default CustomButton;
