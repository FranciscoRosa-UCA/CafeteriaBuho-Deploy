import React from "react";
import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Menu from "./Menu/Menu"
import MenuDay from "./MenuDay/MenuDay";
import Saucer from "./Saucer/Saucer";
import SaucerAdd from "./SaucerAdd/SaucerAdd";

const Container = () => {
    return(
        <div className="p-5">
            {/* <Menu>
            </Menu> */}

            {/* <MenuDay>
            </MenuDay> */}
            {/* <Saucer>
            </Saucer> */}
            <SaucerAdd>
                
            </SaucerAdd>
        </div>
    );
};

export default Container;