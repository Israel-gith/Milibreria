import React from "react";
import MyButton, { MyButtonProps } from "../mybutton"; 

function Example(props: MyButtonProps) {
  return (
    <MyButton
      text={props.text}
      bgColor={props.bgColor} 
      textColor={props.textColor} 
      borderColor={props.borderColor}
      borderWidth={props.borderWidth}
      hoverTextColor={props.hoverTextColor}
      hoverBgColor={props.hoverBgColor}
      size={props.size}
      disabled={props.disabled}
      onClick={props.onClick}
    />
  )
}

export default Example;