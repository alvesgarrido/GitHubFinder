import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor, secondaryColor, contrastText } from './colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: contrastText,
    },
    secondary: {
      main: secondaryColor,
      contrastText: 'white',
    },
    text: {
        primary: contrastText,
    },
  },
});

export default theme