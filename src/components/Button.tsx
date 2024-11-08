import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ButtonProps extends MuiButtonProps {
  variantType?: 'primary' | 'secondary' | 'outline' | 'icon' | 'rounded';
}

const StyledButton = styled(MuiButton)<ButtonProps>(({ theme, variantType }) => ({
  borderRadius: variantType === 'rounded' ? '50px' : '8px',
  padding: variantType === 'icon' ? '6px' : '10px 20px',
  minWidth: variantType === 'icon' ? 'unset' : 'auto',
  backgroundColor: 
    variantType === 'primary' ? theme.palette.primary.main :
    variantType === 'secondary' ? theme.palette.secondary.main : 
    variantType === 'outline' ? 'transparent' : theme.palette.primary.main,
  color: 
    variantType === 'outline' ? theme.palette.primary.main : '#fff',
  border: variantType === 'outline' ? `1px solid ${theme.palette.primary.main}` : 'none',
  '&:hover': {
    backgroundColor:
      variantType === 'primary' ? theme.palette.primary.dark :
      variantType === 'secondary' ? theme.palette.secondary.dark :
      variantType === 'outline' ? theme.palette.primary.light : theme.palette.primary.dark,
    color: variantType === 'outline' ? '#fff' : undefined,
  },
}));

const Button: React.FC<ButtonProps> = ({ variantType = 'primary', children, ...props }) => {
  return (
    <StyledButton variantType={variantType} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
