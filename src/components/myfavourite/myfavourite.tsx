import { MouseEventHandler } from 'react';
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

export interface MyFavouriteProps {
  color: string; 
  disabled?: boolean; 
  onClick?: MouseEventHandler<HTMLButtonElement>; 
}

function MyFavourite(props: MyFavouriteProps) {
  const { color, disabled, onClick } = props;

  return (
    <IconButton onClick={onClick} disabled={disabled}>
      <FavoriteIcon sx={{ color: color }} />
    </IconButton>
  );
}

export default MyFavourite;