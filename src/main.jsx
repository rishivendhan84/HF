// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

// // const darkTheme = createTheme({
// //   palette: {
// //     mode: 'dark',
// //   },
// // });
// const theme = createTheme({
//   palette: {
//     primary: '#E6A4B4' , // Soft Rose
//     secondary: '#F4D06F' , // Champagne Gold
//     text: '#4A4A4A'  // Deep Charcoal
//   },
// });

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//      <ThemeProvider theme={theme}>
//     <App />
//     </ThemeProvider>
//   </StrictMode>,
// )


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E6A4B4', // Soft Rose
    },
    secondary: {
      main: '#F4D06F', // Champagne Gold
    },
    text: {
      primary: '#4A4A4A', // Deep Charcoal
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <App />
    </ThemeProvider>
  </StrictMode>
);
