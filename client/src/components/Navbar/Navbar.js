import React from "react";
import {AppBar, Typography} from "@mui/material";
import traverse from "../../images/traverseLogo.png";
import styles from './styles';

export const Navbar = () => {

    return (
        <AppBar
            style={styles.appBar}
            color={'inherit'}
        >
            <img
                src={traverse}
                alt="traverse logo"
                height={'60'}
            />
            <Typography
                style={styles.appBarTypography}
                variant={'h2'}
                align={'center'}
            >
                TRAVERSE
            </Typography>

        </AppBar>
    )
}


