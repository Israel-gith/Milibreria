import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Stack,
  Box,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Slider,
  
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";


export interface IsraelRDProps {
  avatar: string;
  altAvatar: string;
  title: string;
  date: string;
  image: string;
  altImage: string;
  description: string;
  likes: number;
}


function IsraelRD(props: IsraelRDProps) {
  const { avatar, altAvatar, title, date, image, altImage, description, likes } = props;

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(likeCount + (liked ? -1 : 1));
  };

  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setFontSize(newValue as number);
  };

  return (
    <Stack direction="column" alignItems="center" sx={{ marginTop: 5, fontSize }}>
      <Card elevation={12}>
        <CardContent >
          <Box display="flex" justifyContent="space-between" alignItems="center" >
            <Avatar alt={altAvatar} src={avatar} />
            <Box textAlign="center" >
              <Typography variant="caption" color="text.secondary" sx={{ fontSize}}>
                {title}
              </Typography>
              <br />
              <Typography variant="caption" color="text.secondary" sx={{ fontSize}}>
                {date}
              </Typography>
            </Box>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
        </CardContent>

        <CardMedia component="img" height="194" image={image} alt={altImage} />

        <CardContent>
          <Box sx={{ textAlign: "justify" }}>
            <Typography sx={{ fontSize }} variant="subtitle1" color="text.primary">
              {description}
            </Typography>
          </Box>
          <Slider
            value={fontSize}
            onChange={handleSliderChange}
            aria-labelledby="font-size-slider"
            min={10}
            max={30}
            step={1}
            valueLabelDisplay="auto"
            sx={{ mt: 2 }}
          />
          <Typography variant="subtitle2" >Tamaño de fuente</Typography>
          
          <br />

          <Box sx={{ textAlign: "left", display: "flex", alignItems: "center" }}>
            <IconButton onClick={handleLike} sx={{ alignSelf: "flex-start" }}>
              <Typography>{likeCount}</Typography>
              {liked ? <FavoriteIcon color="secondary" /> : <FavoriteBorderIcon color="secondary" />}
            </IconButton>

            <IconButton disabled={!liked} onClick={handleDialogOpen} sx={{ alignSelf: "flex-start" }}>
              <ShareIcon />
            </IconButton>
          </Box>
        </CardContent>

        <Dialog open={dialogOpen} onClose={handleDialogClose}>
          <DialogTitle>COMPARTIR</DialogTitle>
          <DialogContent>
            <DialogContentText>¿A través de qué plataforma quieres compartir?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <IconButton onClick={() => { console.log("Enviando por WhatsApp"); handleDialogClose(); }}>
              <WhatsAppIcon />
            </IconButton>
            <IconButton onClick={() => { console.log("Enviando por Telegram"); handleDialogClose(); }}>
              <TelegramIcon />
            </IconButton>
          </DialogActions>
        </Dialog>
      </Card>
    </Stack>
  );
}

export default IsraelRD;