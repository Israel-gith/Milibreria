import { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';


export interface MyButtonProps {
  text: string; 
  textColor: string; 
  bgColor: string; 
  borderColor: string; 
  borderWidth: number; 
  size?: 'small' | 'medium' | 'large'; 
  hoverTextColor: string; 
  hoverBgColor: string; 
  disabled?: boolean; 
  onClick?: MouseEventHandler<HTMLButtonElement>; 
}

function MyButton(props: MyButtonProps) {
  const {
    text,
    textColor,
    bgColor,
    borderColor,
    borderWidth,
    size,
    hoverTextColor,
    hoverBgColor,
    disabled,
    onClick,
  } = props;

  return (
    <Button
      type="button"
      onClick={onClick}
      disabled={disabled}
      size={size}
      sx={{
        backgroundColor: bgColor,
        color: textColor,
        borderColor: borderColor,
        borderWidth: borderWidth,
        borderStyle: 'solid',
        ':hover': {
          color: hoverTextColor,
          backgroundColor: hoverBgColor,
        },
      }}
    >
      {text}
    </Button>
  );
}

export default MyButton;