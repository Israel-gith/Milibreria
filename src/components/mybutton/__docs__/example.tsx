import React from "react";

import MyButton, { MyButtonProps } from "../mybutton";

function Example(props: MyButtonProps){

 return(
 <MyButton
         text={props.text}
         bgcolor={props.bgcolor}
         txtcolor={props.txtcolor}
         disabled={props.disabled}
         size={props.size}
         onClick={props.onClick} 
         bordercolor={props.bordercolor} 
         borderwidth={props.borderwidth} 
         hovertxtcolor= {props.hovertxtcolor}
         hoverbgcolor= {props.hoverbgcolor}
          />
 )
}
export default Example
