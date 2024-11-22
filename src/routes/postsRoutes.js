import express from "express";
import { listarPosts, criarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    app.use(express.json());

    app.get("/posts", listarPosts);

    app.post("/posts", criarPosts);
};

export default routes;