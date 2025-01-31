import { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';

export interface MyButtonProps{
 text: string; 
 txtcolor: string; 
 bgcolor:string; 
 bordercolor: string; 
 borderwidth: number; 
 size?: "small" | "medium" | "large"; 
 hovertxtcolor: string;
 hoverbgcolor:string;
 disabled?: boolean; 
 onClick?: MouseEventHandler<HTMLButtonElement>; 
}

function MyButton(props: MyButtonProps){
 const { bgcolor, text, txtcolor, bordercolor, borderwidth, hovertxtcolor, hoverbgcolor, disabled, onClick, size } = props
 
 return(
   <Button
   type="button"
   onClick={onClick}
   disabled={disabled}
   size={size}
   sx={{
     backgroundColor: bgcolor,
     color: txtcolor,
     border: `${borderwidth}px solid ${bordercolor}`,
     "&:hover": {
       backgroundColor: hoverbgcolor,
       color: hovertxtcolor
     }
   }}
 >
   {text}
 </Button>
 )
}
export default MyButton;