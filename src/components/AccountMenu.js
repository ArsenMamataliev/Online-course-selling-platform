import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from '../app/features/userSlice';
import logo from '../media/logo.png';
import { hidePhotoSlider, showPhotoSlider } from '../app/features/photoSliderSlice';

export default function AccountMenu() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const courseList = useSelector(state => state.user.courseList);
  const photoSliderStatus = useSelector(state => state.photoSliderStatus.photoSliderStatus);
  const dispatch = useDispatch();
  const history = useHistory();

  const signOutFn = () => {
    dispatch(signOut());
    history.push("/");
  }
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const photoSliderCnangeStatus = () => {
    if (!photoSliderStatus){
      dispatch(showPhotoSlider())
    }else{
      dispatch(hidePhotoSlider())
    }
  }

  const boxStyle = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between', 
    textAlign: 'center',
    padding: '5px 10px',
    color: 'white',
    backgroundColor: '#090d29'
  }

  return (
    <React.Fragment>
      <Box sx={boxStyle}>
        < img src={logo} alt="logo" style={{ minWidth: 80, height: 40 }} />
        <Typography sx={{ minWidth: 50 }}>Уроки: {courseList.length} </Typography>
        <Tooltip title="Настройка аккаунта">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Админ
        </MenuItem>
        <Divider />
        <MenuItem onClick={photoSliderCnangeStatus}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          {
            photoSliderStatus ? "Закрыт слайд" : "Открыт слайд"
          }
        </MenuItem>
        <MenuItem onClick={signOutFn}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Выход
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

