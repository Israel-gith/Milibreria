import React from "react";
import MyFavourite, { MyFavouriteProps } from "../myfavourite"; 

function Example(props: MyFavouriteProps) {
  return (
    <MyFavourite
      color={props.color}
      disabled={props.disabled}
      onClick={props.onClick}
    />
  );
}

export default Example;