import HorizontalNonLinearStepper from './HorizontalNonLinearStepper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
  return (
    <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#FFFFFF', height: '110vh' }} style={{padding: "30px 30px 30px 30px" }}>
<HorizontalNonLinearStepper />
</Box>
</Container>
  );
}

export default App;
