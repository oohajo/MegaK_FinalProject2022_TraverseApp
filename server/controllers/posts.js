import express from 'express';
import {PostsMessage} from "../models/postsMessage.js";


export const getPost = async (req, res) => {
    try {
        const postsMessages = await PostsMessage.find();
        res.status(200).json(postsMessages)
    } catch (err) {
        res.status(404).json({message: err.message});
    }
}

export const createPost = async (req, res) => {
    const body = req.body;
    const newPost = new PostsMessage(body);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(409).json({message: err.message});
    }
}

export const updatePost = async (req, res) => {
    const {id: _id} = req.params;
    const post = req.body;

    const updatedPost = await PostsMessage.findByIdAndUpdate(_id, post, {new: true});

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {

    const {id} = req.params;

    await PostsMessage.findByIdAndDelete(id);

    res.json({message: 'Post has been deleted successfully'});
    console.log('Deleted');
}

export const likePost = async (req, res) => {
    const {id} = req.params;

    const post = await PostsMessage.findById(id);
    const updatedPost = await PostsMessage.findByIdAndUpdate(
        id,
        {
            likeCount: post.likeCount + 1,
        },
        {
            new: true,
        },
        );

    res.json(updatedPost);
}

