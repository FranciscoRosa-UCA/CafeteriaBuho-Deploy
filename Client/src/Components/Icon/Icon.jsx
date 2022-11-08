import { createTheme, ThemeProvider } from '@mui/material/styles';
import { yellow, red } from '@mui/material/colors';

import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Icon = ({_type="home", _size="large", _color="yellow"}) => {
    
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
      
    switch(_type){
        case "home":
            return (
                <ThemeProvider theme={theme}>
                    <HomeIcon color={_color} fontSize={_size}></HomeIcon>
                </ThemeProvider>
                )
        case "delete":
            return (
                <ThemeProvider theme={theme}>
                    <DeleteIcon color={_color} fontSize={_size}></DeleteIcon>
                </ThemeProvider>
                )
        case "shoppingCart":
            return(
                <ThemeProvider theme={theme}>
                    <ShoppingCartIcon color={_color} fontSize={_size}></ShoppingCartIcon>
                </ThemeProvider>
                )
        case "account":
            return (
                <ThemeProvider theme={theme}>
                    <AccountCircleIcon  color={_color} fontSize={_size}></AccountCircleIcon>
                </ThemeProvider>
                )
        case "wallet":
            return (
                <ThemeProvider theme={theme}>
                    <AccountBalanceWalletIcon  color={_color} fontSize={_size}></AccountBalanceWalletIcon>
                </ThemeProvider>
                )
        default:
            return(
                <ThemeProvider theme={theme}>
                    <HomeIcon color={_color} fontSize={_size}></HomeIcon>
                </ThemeProvider>
                )
    }
    
};

export default Icon;