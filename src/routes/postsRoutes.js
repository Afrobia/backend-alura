import express from "express";
import multer from "multer";
import { listarPosts, criarPosts, uploadImagem } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})

const upload = multer({dest: "./uploads", storage})

const routes = (app) => {
    app.use(express.json());

    app.get("/posts", listarPosts);

    app.post("/posts", criarPosts);

    app.post("/upload", upload.single("imagem"), uploadImagem);
};

export default routes;