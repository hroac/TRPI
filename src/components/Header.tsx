import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Collapse,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  brand: string;
  logo: string;
  menuItems: { label: string; path?: string; parent?: string }[];
}

const Header: React.FC<HeaderProps> = ({ brand, logo, menuItems }) => {
  const navigate = useNavigate();

  const [anchorEls, setAnchorEls] = React.useState<{ [key: string]: HTMLElement | null }>({});
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [openSubmenus, setOpenSubmenus] = React.useState<{ [key: string]: boolean }>({});

  const handleMenuOpen = (label: string) => (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEls({ ...anchorEls, [label]: event.currentTarget });
  };

  const handleMenuClose = (label: string) => () => {
    setAnchorEls({ ...anchorEls, [label]: null });
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const toggleSubmenu = (label: string) => () => {
    setOpenSubmenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const parentItems = menuItems.filter(item => !item.parent);
  const childItems = menuItems.filter(item => item.parent);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box display="flex" justifyContent="center">
      <AppBar
        position="fixed"
        elevation={2}
        sx={{
          backgroundColor: 'primary.main',
          color: 'text.primary',
          borderTop: '4px solid #a8dadc',
          boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
          width: '90%',
          marginRight: !isMobile ? 10 : '20px',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            <Box
              component="img"
              src={logo}
              alt={`${brand} logo`}
              sx={{ width: 32, height: 32 }}
            />
            <Typography
              variant="h6"
              sx={{ fontSize: '1.3rem', fontWeight: 600, color: 'background.paper' }}
            >
              {brand}
            </Typography>
          </Box>

          {/* Desktop menu: visible on larger screens */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 2 }}>
            {parentItems.map((item) => {
              const children = childItems.filter(child => child.parent === item.label);
              return children.length > 0 ? (
                <Box key={item.label}>
                  <Button
                    onClick={handleMenuOpen(item.label)}
                    sx={{
                      textTransform: 'none',
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: 'rgba(168, 199, 161, 0.1)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                  <Menu
                    anchorEl={anchorEls[item.label]}
                    open={Boolean(anchorEls[item.label])}
                    onClose={handleMenuClose(item.label)}
                  >
                    {children.map(child => (
                      <MenuItem
                        key={child.label}
                        component={Link}
                        to={child.path || ''}
                        onClick={handleMenuClose(item.label)}
                      >
                        {child.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path || ''}
                  sx={{
                    textTransform: 'none',
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: 'rgba(168, 199, 161, 0.1)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* Hamburger icon for smaller screens */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'flex', md: 'flex', lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer with submenus */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, paddingTop: 2 }}>
          <List>
            {parentItems.map((item) => {
              const children = childItems.filter(child => child.parent === item.label);
              if (children.length > 0) {
                return (
                  <React.Fragment key={item.label}>
                    <ListItem button onClick={toggleSubmenu(item.label)}>
                      <ListItemText primary={item.label} />
                      {openSubmenus[item.label] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItem>
                    <Collapse in={openSubmenus[item.label]} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {children.map(child => (
                          <ListItem
                            key={child.label}
                            button
                            component={Link}
                            to={child.path || ''}
                            onClick={toggleDrawer(false)}
                            sx={{ pl: 4 }}
                          >
                            <ListItemText primary={child.label} />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </React.Fragment>
                );
              } else {
                return (
                  <ListItem
                    key={item.label}
                    button
                    component={Link}
                    to={item.path || ''}
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText primary={item.label} />
                  </ListItem>
                );
              }
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
