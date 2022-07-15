import React from "react";
import {Typography, BottomNavigation} from "@mui/material";
import styles from './styles';

export const Footer = () => {

    return (
        <BottomNavigation style={styles.footerBar} color={'inherit'}>
            <Typography
                style={styles.footerBarTypography}
                variant={'h2'}
                align={'center'}
            >
                MegaK 1st edition - final project 2022 r. - Diana Kalinowska oohajo@gmail.com &nbsp;
                <a href="mailto:oohajo@gmail.com"> Let's talk! </a>
            </Typography>
        </BottomNavigation>
    )
}


