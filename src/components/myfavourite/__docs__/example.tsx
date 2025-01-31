import React from "react";
import MyFavourite, { MyFavouriteProps } from "../myfavourite";

function Example(props: MyFavouriteProps){

 return(
 <MyFavourite 
        iconcolor={props.iconcolor}
        disabled={props.disabled}
        onClick={props.onClick}
          />
 )
}
export default Example