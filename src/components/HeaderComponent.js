import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ThemedCustomButton from './ButtonComponent';

import logo from './shopping.png'; // Adjust the path accordingly

const pages = [
  { text: 'Home', link: '/home' },
  { text: 'About', link: '/about' },
  { text: 'GitHub', link: 'https://github.com/SinisterNight', external: true }
];

function HeaderComponent() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#10100F' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} alt="Logo" style={{ width: 40, marginRight: 10 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <ThemedCustomButton
                key={page.text}
                to={page.link}
                buttonText={page.text}
                externalLink={page.external || false}
              />
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HeaderComponent;
