import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0B93F6',
    },
    secondary: {
      main: '#fff',
    },
    background: {
      default: '#131313',
    },
  },
	overrides: {
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: "$labelcolor"
        }
      }
    }
  }
});

export default theme;