import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function LightsButton() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Lights</Button>
    </Stack>
  );
}