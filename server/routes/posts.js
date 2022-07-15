import express from "express";
import {getPost, createPost, updatePost, deletePost, likePost} from "../controllers/posts.js";

const postsRouter = express.Router();

postsRouter
    .get('/', getPost)
    .post('/', createPost)
    .patch('/:id', updatePost)
    .delete('/:id', deletePost)
    .patch('/:id/likePost', likePost);

export default postsRouter;