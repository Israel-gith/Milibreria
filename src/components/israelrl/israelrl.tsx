import { MouseEventHandler } from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export interface IsraelRLProps {
  text: string;
  textcolor: string;
  barcolor: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function IsraelRL(props: IsraelRLProps) {
  const { text, textcolor, barcolor, onClick } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: barcolor }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: textcolor }}
            onClick={onClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: textcolor }}>
            {text}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default IsraelRL;