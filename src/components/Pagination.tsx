import React from 'react';
import { Pagination } from '@mui/material';

interface PaginationComponentProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({ count, page, onChange }) => {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={onChange}
      variant="outlined"
      shape="rounded"
      sx={{ margin: '20px 0', '& .MuiPaginationItem-root': { border: 'none' } }}
    />
  );
};

export default PaginationComponent;
