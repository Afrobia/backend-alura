import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.DB_URL);

async function getAllPosts() {
    const db = await conexao.db("imersao-instabyte");
    const colecao = db.collection("posts");

    return await colecao.find().toArray();
};

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando...");
});

app.get("/posts", async (req, res) => {
  const result = await getAllPosts()
  res.status(200).json(result);
});


