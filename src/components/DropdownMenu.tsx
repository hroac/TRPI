import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

interface DropdownMenuProps {
  buttonLabel: string;
  menuItems: string[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ buttonLabel, menuItems }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClick}>
        {buttonLabel}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>{item}</MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DropdownMenu;
