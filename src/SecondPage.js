import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    
    <Box sx={{ minWidth: 120 }}>
        <br></br>
        <p style={{textAlign:'center'}}>Don't panic- You can also customize this types in settings</p>
        <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Button>Time and Material</Button>
      <Button disabled>Fixed Fee</Button>
      <Button disabled>Non-Billable</Button>
    </ButtonGroup>
        <h6>Hourly</h6>
        <p>We need hourly rates to track your project's bilable amount.</p>
      <FormControl sx={{ m: 1, minWidth: 100 }} size="small" style={{width: '25ch'}}>
        <InputLabel id="demo-simple-select-label">Hourly rates</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Project hourly"
          onChange={handleChange}
        >
          <MenuItem value={1000}>Thousand</MenuItem>
          <MenuItem value={2000}>Two thousand</MenuItem>
          <MenuItem value={3000}>Three thousand</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 100 }} size="small" style={{width: '25ch'}}>
        <InputLabel id="demo-simple-select-label">₹</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="₹"
          onChange={handleChange}
        >
        </Select>
      </FormControl>
      <h6>Budget</h6>
        <p>We need hourly rates to track your project's billable amount.</p>
        <FormControl sx={{ m: 1, minWidth: 100 }} size="small" style={{width: '25ch'}}>
        <InputLabel id="demo-simple-select-label">Hours/person</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Hours per person"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten hours</MenuItem>
          <MenuItem value={20}>Twenty hours</MenuItem>
          <MenuItem value={30}>Thirty hours</MenuItem>
        </Select>
      </FormControl>
      <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Budget resets every month." />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Sends email if project exceeds 80% of your budget." />
    </FormGroup>
    </Box>
  );
}