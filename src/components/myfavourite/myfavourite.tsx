import { MouseEventHandler } from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export interface MyFavouriteProps{
 iconcolor:string; 
 disabled?: boolean; 
 onClick?: MouseEventHandler<HTMLButtonElement>; 
}

function MyFavourite(props: MyFavouriteProps){
 const { iconcolor, disabled, onClick } = props
 
 return(
<IconButton onClick={onClick} disabled={disabled}>
    <FavoriteIcon sx={{ color: iconcolor }}/>
</IconButton>
 )
}
export default MyFavourite;