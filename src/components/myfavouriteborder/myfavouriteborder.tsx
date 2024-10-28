import { MouseEventHandler } from 'react';
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export interface MyFavouriteBorderProps {
  color: string; 
  disabled?: boolean; 
  onClick?: MouseEventHandler<HTMLButtonElement>; 
}

function MyFavouriteBorder(props: MyFavouriteBorderProps) {
  const { color, disabled, onClick } = props;

  return (
    <IconButton onClick={onClick} disabled={disabled}>
      <FavoriteBorderIcon sx={{ color: color }} />
    </IconButton>
  );
}

export default MyFavouriteBorder;