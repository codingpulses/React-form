import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import dayjs from 'dayjs';


export default function FirstPage() {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  }

    const [value, setValue] = React.useState(dayjs('2022-04-17'));
  return (

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <br></br>
      <h6>Project Name</h6>
      <TextField id="outlined" label="" variant="outlined" size="small" style={{width: '49ch'}}/>
      <h6>Client</h6>
      <FormControl sx={{ m: 1, minWidth: 100 }} size="small" style={{width: '25ch'}}>
      <InputLabel id="demo-select-small"></InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>0</em>
        </MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
    </FormControl>
      <Button variant="outlined" size="medium" style={{width: '25ch'}}>+ New Client</Button>
      <h6>Dates</h6>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateField', 'DateField']}>
        <DateField
          label="DD/MM/YYYY"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          format="DD-MM-YYYY"
        />
        <DateField
          label="DD/MM/YYYY"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          format="DD-MM-YYYY"
        />
      </DemoContainer>
    </LocalizationProvider>
    <h6>Notes</h6>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    ></Box>
    <TextField
          id="filled-multiline-static"
          label=""
          multiline
          rows={4}
          defaultValue="Optional"
          variant="filled"
        />

        </Box>
  );
  }