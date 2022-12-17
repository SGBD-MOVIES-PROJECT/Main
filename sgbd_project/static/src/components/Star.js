import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const labels = {
  1: 'Rating: 1',
  2: 'Rating: 2',
  3: 'Rating: 3',
  4: 'Rating: 4',
  5: 'Rating: 5',
  6: 'Rating: 6',
  7: 'Rating: 7',
  8: 'Rating: 8',
  9: 'Rating: 9',
  10: 'Rating: 10',
};

export default function Star() {
  const [value, setValue] = useState(0);
  return (
    <Box
    sx={{
      '& > legend': { mt: 2 },
    }}
    >
      <Rating
        name="text-feedback"
        value={value}
        defaultValue={null} max={10} 
        onChange={event => setValue(event.target.value)}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
  );
}
