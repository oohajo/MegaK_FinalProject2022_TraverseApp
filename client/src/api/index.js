import axios from "axios";

const url = 'http://localhost:5000/posts';
const api = axios.create({ baseURL: "http://localhost:5000" });

export const fetchPosts = () => api.get("/posts");
export const createPost = (newPost) => api.post("/posts", newPost);
export const updatePost = (id, updatedPost) => api.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => api.delete(`/posts/${id}`);
export const likePost = (id) => api.patch(`/posts/${id}/likePost`);

