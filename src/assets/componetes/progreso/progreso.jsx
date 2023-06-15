import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "./progreso.css"

export default function CircularIndeterminate() {
  return (
    <Box className="box" sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}