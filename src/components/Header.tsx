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

interface MenuItemWithModal {
  label: string;
  path?: string;
  parent?: string;
  /** Now a ReactElement that we’ll clone */
  modalComponent?: React.ReactElement;
}

interface HeaderProps {
  brand: string;
  logo: string;
  menuItems: MenuItemWithModal[];
}

const Header: React.FC<HeaderProps> = ({ brand, logo, menuItems }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // desktop submenu anchors
  const [anchorEls, setAnchorEls] = React.useState<Record<string, HTMLElement | null>>({});
  // mobile drawer
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [openSubmenus, setOpenSubmenus] = React.useState<Record<string, boolean>>({});
  // modal state
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalElement, setModalElement] = React.useState<React.ReactElement | null>(null);

  const parentItems = menuItems.filter(item => !item.parent);
  const childItems  = menuItems.filter(item => item.parent);

  const handleMenuOpen = (label: string) => (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEls(prev => ({ ...prev, [label]: e.currentTarget }));
  };
  const handleMenuClose = (label: string) => () => {
    setAnchorEls(prev => ({ ...prev, [label]: null }));
  };
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  const toggleSubmenu = (label: string) => () => {
    setOpenSubmenus(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const handleItemClick = (item: MenuItemWithModal) => () => {
    if (item.modalComponent) {
      // store the element they passed
      setModalElement(item.modalComponent);
      setModalOpen(true);
    } else if (item.path) {
      navigate(item.path);
    }
  };
  const closeModal = () => {
    setModalOpen(false);
    setModalElement(null);
  };

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
          margin: '0 auto',
          left: 0,
          right: 0,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            <Box component="img" src={logo} alt={`${brand} logo`} sx={{ width: 32, height: 32 }} />
            <Typography variant="h6" sx={{ fontSize: '1.3rem', fontWeight: 600, color: 'background.paper' }}>
              {brand}
            </Typography>
          </Box>

          {/* Desktop menu */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 2 }}>
            {parentItems.map(item => {
              const children = childItems.filter(c => c.parent === item.label);
              if (children.length > 0) {
                return (
                  <Box key={item.label}>
                    <Button
                      onClick={handleMenuOpen(item.label)}
                      sx={{
                        textTransform: 'none',
                        borderRadius: '8px',
                        '&:hover': { backgroundColor: 'rgba(168, 199, 161, 0.1)' },
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
                        <MenuItem key={child.label} onClick={handleItemClick(child)}>
                          {child.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                );
              }
              return (
                <Button
                  key={item.label}
                  onClick={handleItemClick(item)}
                  sx={{
                    textTransform: 'none',
                    borderRadius: '8px',
                    '&:hover': { backgroundColor: 'rgba(168, 199, 161, 0.1)' },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* Mobile hamburger */}
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

      {/* Mobile drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, pt: 2 }}>
          <List>
            {parentItems.map(item => {
              const children = childItems.filter(c => c.parent === item.label);
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
                            onClick={() => {
                              toggleDrawer(false)();
                              handleItemClick(child)();
                            }}
                            sx={{ pl: 4 }}
                          >
                            <ListItemText primary={child.label} />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </React.Fragment>
                );
              }
              return (
                <ListItem
                  key={item.label}
                  button
                  onClick={() => {
                    toggleDrawer(false)();
                    handleItemClick(item)();
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>

      {/* Render your passed-in Modal element, injecting open/onClose */}
      {modalElement &&
        React.cloneElement(modalElement, {
          open: modalOpen,
          onClose: closeModal,
        })}
    </Box>
  );
};

export default Header;
