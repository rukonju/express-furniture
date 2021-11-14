import * as React from 'react';
import useAuth from '../../hooks/useAuth';
import { Avatar, Box, Menu, Button, Typography, IconButton } from '@mui/material';

const User = () => {
    const {user, logOut} = useAuth();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handleLogout = () =>{
        logOut();
        handleClose();
    };

  return (
    <div>
        {
            user.email &&<IconButton
                    sx={{ borderRadius:'50%', cursor:'pointer'}}
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    >
            {
                user.photoURL?<img src={user?.photoURL} alt="" width='40px' style={{ borderRadius:'50%', padding:'3px'}} />
                :<Avatar sx={{borderRadius:'50%', padding:'3px' }}>{user?.displayName?.slice(0,1).toLocaleUpperCase()}</Avatar>
            }
          
      </IconButton>
        }
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Box sx={{p:1}}>
        <Typography>{user?.email}</Typography>
        <Typography sx={{py:1}}>{user.displayName}</Typography>
        <Button onClick={handleLogout} variant='contained' size='small'>Logout</Button>
        </Box>
      </Menu>
    </div>
  );
}

export default User;
