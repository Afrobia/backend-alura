import { getAllPosts, createPosts } from "../models/postsModel.js";
import fs from "fs";

async function listarPosts(req, res) {
  const result = await getAllPosts();
  res.status(200).json(result);
}

async function criarPosts(req, res) {
  const novoPost = req.body;

  try {
    const postCriado = await createPosts(novoPost);
    res.status(201).json(postCriado);
  } catch (erro) {
    res.status(500).json({ "Bad Request": "Erro no servido" });
  };
};

async function uploadImagem(req, res) {
  const novoPost = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: ""
  };
  
    try {
      const postCriado = await createPosts(novoPost);
      const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
      fs.renameSync(req.file.path, imagemAtualizada)
      res.status(201).json(postCriado);
    } catch (erro) {
      res.status(500).json({ "Bad Request": "Erro no servido" });
    };
  };

export { listarPosts, criarPosts, uploadImagem };
