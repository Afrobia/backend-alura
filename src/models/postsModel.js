import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.DB_URL);

export default async function getAllPosts() {
    const db = conexao.db("imersao-instabyte");
    const colecao = db.collection("posts");

    return await colecao.find().toArray();
};