import React, {useEffect, useState} from "react";
import {Container, Grid, Grow} from "@mui/material";
import {useDispatch} from "react-redux";
import {getPosts} from './actions/posts.js';
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import {Navbar} from "./components/Navbar/Navbar";
import {Footer} from "./components/Footer/Footer";

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts);
    }, [currentId, dispatch]);

    return (
        <Container maxWidth={'lg'}>
            <Navbar/>
            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between'
                          alignItems='stretch' spacing={4}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
            <Footer/>
        </Container>
    )
};

export default App;

