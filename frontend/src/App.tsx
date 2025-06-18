import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button, Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ViewConfiguration from './pages/ViewConfiguration';
import UpdateRemark from './pages/UpdateRemark';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                CodeRower Assignment
              </Typography>
              <Button color="inherit" component={Link} to="/">
                Fetch Configuration
              </Button>
              <Button color="inherit" component={Link} to="/update">
                Update Remark
              </Button>
            </Toolbar>
          </AppBar>
          <Container sx={{ mt: 4 }}>
            <Routes>
              <Route path="/" element={<ViewConfiguration />} />
              <Route path="/update" element={<UpdateRemark />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App; 