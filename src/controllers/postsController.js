import getAllPosts from "../models/postsModel.js";

export default async function listarPosts(req, res) {
    const result = await getAllPosts();
    res.status(200).json(result);
}