import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';

import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ListIcon from '@mui/icons-material/List';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

const Icon = ({_type="home", _size="large", _color="yellow", handler}) => {
    
    const theme = createTheme({
        palette: {
          yellow: {
            main: '#FFB703',
          },
          red: {
            main: red[500],
          },
          white: {
            main: '#FFFFFF',
          },
          black: {
            main: '#000000',
          },
        }
    });

    // const handleClick = () => {
    //     alert('clicked');
    //     //handler();
    // };


    const ThisIcon = ()=> {
        switch(_type){
            case "home":
                return <HomeIcon color={_color} fontSize={_size} label="Clickable"></HomeIcon>

            case "delete":
                return <DeleteIcon color={_color} fontSize={_size} label="Clickable"></DeleteIcon>

            case "shopping":
                return <ShoppingCartIcon color={_color} fontSize={_size} label="Clickable"></ShoppingCartIcon>

            case "addShopping":
                return <AddShoppingCartIcon color={_color} fontSize={_size} label="Clickable"></AddShoppingCartIcon>
    
            case "account":
                return <AccountCircleIcon color={_color} fontSize={_size} label="Clickable"></AccountCircleIcon>

            case "wallet":
                return <AccountBalanceWalletIcon color={_color} fontSize={_size} label="Clickable"></AccountBalanceWalletIcon>

            case "list":
                return <ListIcon color={_color} fontSize={_size} label="Clickable"></ListIcon>

            case "upload":
                return <UploadFileIcon color={_color} label="Clickable" sx={{ fontSize: 100 }}></UploadFileIcon>
            
            case "search":
                return <SearchIcon color={_color} fontSize={_size} label="Clickable"></SearchIcon>

            case "add":
                return <AddIcon color={_color} fontSize={_size} label="Clickable"></AddIcon>

            default:
                return <HomeIcon color={_color} fontSize={_size} label="Clickable"></HomeIcon>
            // onClick={handleClick}
        }
    }

    return(
    <ThemeProvider theme={theme}>
        <ThisIcon ></ThisIcon>
    </ThemeProvider>
    );

    
};

export default Icon;