import { MouseEventHandler } from 'react';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export interface MyFavouriteBorderProps{
 iconcolor:string; 
 disabled?: boolean; 
 onClick?: MouseEventHandler<HTMLButtonElement>; 
}

function MyFavouriteBorder(props: MyFavouriteBorderProps){
 const { iconcolor, disabled, onClick } = props
 
 return(
<IconButton onClick={onClick} disabled={disabled}>
    <FavoriteBorderIcon sx={{ color: iconcolor }}/>
</IconButton>
 )
}
export default MyFavouriteBorder;