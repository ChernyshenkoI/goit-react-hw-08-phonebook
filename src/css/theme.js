import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#282828',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#FFFFFF',
    },
  },
});

export default theme;
