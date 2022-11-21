import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';

import ThisButton from '@mui/material/Button';

const Button = (props) => {
      const theme = createTheme({
        palette: {
          yellow: {
            main: '#FFB703',
          },
          red: {
            main: red[500],
          },
        },
    });

    return(
      <ThemeProvider theme={theme}>
        <ThisButton variant="contained" color="yellow" size="large"
          onClick={() => {
            alert('clicked');
          }}
          >
            {props.children}
        </ThisButton>
      </ThemeProvider>
    );
}

export default Button;