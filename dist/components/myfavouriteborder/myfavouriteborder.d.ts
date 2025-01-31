import { MouseEventHandler } from 'react';
export interface MyFavouriteBorderProps {
    iconcolor: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function MyFavouriteBorder(props: MyFavouriteBorderProps): import("react/jsx-runtime").JSX.Element;
export default MyFavouriteBorder;
