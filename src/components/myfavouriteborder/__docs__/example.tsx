import React from "react";
import MyFavouriteBorder, { MyFavouriteBorderProps } from "../myfavouriteborder"; 

function Example(props: MyFavouriteBorderProps) {
  return (
    <MyFavouriteBorder
      color={props.color}
      disabled={props.disabled}
      onClick={props.onClick}
    />
  );
}

export default Example;