import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  brand: string;
  logo: string; // URL of the logo image
  menuItems: { label: string; path: string }[];
}

const Header: React.FC<HeaderProps> = ({ brand, logo, menuItems }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navigate = useNavigate();
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'primary.main', color: '#fff', width: '100%' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo and Brand Title */}
          <span className="clickable" onClick={() => navigate('/')}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              component="img"
              src={logo}
              alt={`${brand} logo`}
              sx={{ width: 32, height: 32, display: 'inline-block' }}
            />
            <Typography variant="h6" sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
               {brand}
            </Typography>
          </Box>
          </span>

          {/* Navigation buttons for larger screens */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {menuItems.map((item) => (
              <Button 
                key={item.label} 
                component={Link} 
                to={item.path} 
                sx={{ color: '#fff', fontWeight: 'bold', textTransform: 'none' }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Menu icon for mobile screens */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, paddingTop: 2 }}>
          {menuItems.map((item) => (
            <MenuItem
              key={item.label}
              component={Link}
              to={item.path}
              onClick={toggleDrawer(false)}
              sx={{
                paddingY: 1.5,
                borderBottom: '1px solid #e0e0e0',
                '&:hover': {
                  backgroundColor: 'secondary.light',
                  color: 'white',
                },
                transition: 'background-color 0.3s ease',
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
