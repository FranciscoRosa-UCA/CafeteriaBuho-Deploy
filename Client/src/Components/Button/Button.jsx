import { createTheme, ThemeProvider } from '@mui/material/styles';

import ThisButton from '@mui/material/Button';

const Button = ({children, handler, _color="yellow"}) => {
    const theme = createTheme({
      palette: {
        yellow: {
          main: '#FCA311',
        },
        dark: {
          main: 'rgba(31, 63, 132, 0.25)',
        },
        red:{
          main: '#E84545',
        },
      },
    });

    

    return(
      <ThemeProvider theme={theme}>
        <ThisButton variant="contained" color={_color} size="large"
          onClick={() => {
              handler? handler() : null;
          }}
          >
            {children}
        </ThisButton>
      </ThemeProvider>
    );
}

export default Button;