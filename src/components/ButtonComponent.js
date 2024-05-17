import React from 'react';
import { Link } from 'react-router-dom';
import MuiButton from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './styles/ButtonStyles.css';

const themeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#333333', // Dark grey
    },
    secondary: {
      main: '#555555', // Medium grey
    },
    background: {
      default: '#121212', // Very dark grey
      paper: '#1c1c1c', // Slightly lighter dark grey
    },
    text: {
      primary: '#ffffff', // White text
    },
  },
};

const theme = createTheme(themeOptions);

function CustomButton({ to, buttonText, externalLink }) {
  const buttonClassName = 'custom-button';

  if (externalLink) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer">
        <MuiButton variant="contained" className={buttonClassName}>
          {buttonText}
        </MuiButton>
      </a>
    );
  } else {
    return (
      <MuiButton component={Link} to={to} variant="contained" className={buttonClassName}>
        {buttonText}
      </MuiButton>
    );
  }
}

function ThemedCustomButton(props) {
  return (
    <ThemeProvider theme={theme}>
      <CustomButton {...props} />
    </ThemeProvider>
  );
}

export default ThemedCustomButton;
