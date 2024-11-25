import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, criarPosts, uploadImagem, atualizaPost } from "../controllers/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200,
};
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
    
    app.use(cors(corsOptions))

    app.get("/posts", listarPosts);

    app.post("/posts", criarPosts);

    app.post("/upload", upload.single("imagem"), uploadImagem);

    app.put("/upload/:id", atualizaPost)
};

export default routes;