// import {makeStyles} from "@mui/material";
import {makeStyles} from "@material-ui/core";

export default makeStyles( (theme) => ({
    appBar: {
        borderRadius: 15,
        margin: "30px 0",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efefef',
    },
    heading: {
        color: '#55133B',
        fontWeight: '400',
        textTransform: 'lowercase',
        fontFamily: 'sans-serif'
    },
    image: {
        marginLeft: '15px'
    },
    postTxt: {
        color: 'green',
        fontWeight: '200',
        fontSize: '1.1em',
        fontFamily: 'sans-serif'
    },
    button: {
        margin: '5px',
    },
    textField: {
        margin: '5px'
    },
    fileBase: {
        margin: '5px'
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: "column-reverse"
        }
    }
}));

// const styles = {
//     layout: {
//         minHeight: "100vh",
//     },
//     header: {
//         color: "#fff",
//         textAlign: "center",
//         fontSize: "3rem",
//         background:
//             "linear-gradient(90deg, rgba(246,83,39,1) 0%, rgba(147,27,252,.95) 50%, rgba(246,83,39,1) 100%)",
//         height: "5rem",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         zIndex: "1",
//     },
//     title: {
//         color: "white",
//         margin: "0",
//     },
//     footer: {
//         color: "white",
//         textAlign: "center",
//         background:
//             "linear-gradient(90deg, rgba(246,83,39,1) 0%, rgba(147,27,252,1) 50%, rgba(246,83,39,1) 100%)",
//     },
// };
// export default styles;
