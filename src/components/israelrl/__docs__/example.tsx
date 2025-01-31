import React from "react";
import IsraelRL, { IsraelRLProps } from "../israelrl";

function Example(props: IsraelRLProps){

 return(
 <IsraelRL 
     text={props.text} 
     textcolor={props.textcolor}
     barcolor={props.barcolor}
     onClick={props.onClick}          />
 )
}
export default Example