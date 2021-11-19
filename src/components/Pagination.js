import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Paginate() {
  return (
    <Stack spacing={2} >
      <Pagination count={5} color="secondary" justifyContent="center"/>
    </Stack>
  );
}