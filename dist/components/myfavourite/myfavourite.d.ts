import { MouseEventHandler } from 'react';
export interface MyFavouriteProps {
    iconcolor: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function MyFavourite(props: MyFavouriteProps): import("react/jsx-runtime").JSX.Element;
export default MyFavourite;
