import React from "react";
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@mui/material";
import {ThumbUpAlt, Delete, MoreHoriz} from "@mui/icons-material";
import moment from "moment";
import {useDispatch} from "react-redux";
import {deletePost, likePost} from "../../../actions/posts";
import styles from "./styles";

const Post = ({post, setCurrentId}) => {
    const dispatch = useDispatch();

    return (
        <Card style={styles.card}>
            <CardMedia
                style={styles.cardMedia}
                image={post.selectedFile}
                title={post.title}
            >
                <div style={styles.cardMediaStrap}>
                    <div >
                        <Typography  variant={'h6'}>{post.creator}</Typography>
                        <Typography
                            variant={'body2'}
                            style={styles.timeStamp}
                        >
                            {moment(post.createdAt).fromNow()}
                        </Typography>
                    </div>

                </div>
                <div  style={styles.btn1}>
                    <Button
                        size='small'
                        onClick={() => {
                            setCurrentId(post._id);
                        }}
                    >
                        <MoreHoriz  fontSize={'medium'} style={styles.btn2} />
                    </Button>
                </div>
            </CardMedia>
            <div
                style={styles.tags}
            >
                <Typography
                    variant={'body2'}
                    style={styles.tagsTypography}
                >
                    {post.tags.map(tag => `#${tag} `)}
                </Typography>
            </div>
            <Typography
                variant={'h5'}
                gutterBottom
                style={styles.postTitle}
            >
                {post.title}
            </Typography>
            <CardContent style={styles.postField}>
                <Typography
                    variant={'body2'}
                    style={styles.postText}
                    component={'p'}
                >
                    {post.message}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size={'small'}
                    color={'primary'}
                    onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAlt fontSize={'small'}/>
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button
                    size={'small'}
                    color={'primary'}
                    onClick={() => dispatch(deletePost(post._id))}>
                    <Delete fontSize={'small'}/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};

export default Post;
