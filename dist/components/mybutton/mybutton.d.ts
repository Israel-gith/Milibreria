import { MouseEventHandler } from 'react';
export interface MyButtonProps {
    text: string;
    txtcolor: string;
    bgcolor: string;
    bordercolor: string;
    borderwidth: number;
    size?: "small" | "medium" | "large";
    hover: {
        hovertxtcolor: string;
        hoverbgcolor: string;
    };
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function MyButton(props: MyButtonProps): import("react/jsx-runtime").JSX.Element;
export default MyButton;
