import * as React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, Button, Divider, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

function DashboardDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
          <ListItem onClick={handleDrawerToggle} >
          <Link to='feedback'>Feedback</Link>
          </ListItem>
          <ListItem onClick={handleDrawerToggle} >
            <Link to='myOrder'>orders</Link>
          </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {<AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          color:'black',
          boxShadow:'none',
          bgcolor:'rgb(249, 235, 234)'
        }}
      >
        <Toolbar>
          {<IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>}
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <Link  to="/" >
            <Button variant='inherit'>Home</Button>
          </Link>
        </Toolbar>
      </AppBar>}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          style={{backgroundColor:'#f9ebea'}}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, border:'0px',
            bgcolor:'rgb(249, 235, 234)' },
            
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          style={{backgroundColor:'#f9ebea'}}
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth , border:'0px',
            bgcolor:'rgb(249, 235, 234)'},
            
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
      </Box>
    </Box>
  );
}

DashboardDrawer.propTypes = {

  window: PropTypes.func,
};

export default DashboardDrawer;
