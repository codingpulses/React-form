import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';


export default function ThirdPage() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h6>Add a task.</h6>
      <div>
        <span>
        <TextField
          label="Add task"
          id="outlined-size-small"
          defaultValue="Add a task"
          size="small"
        />
    <Button variant="contained" size="large">
          Add
        </Button>
        </span>
        </div>
 
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Marketting website design" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Branding Design" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="UI/UX fundamental" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Wireframe and prototype" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Style guide" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="UX research & flow" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Layout Design" />
    </FormGroup>
    </Box>
  );
}
