import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.DB_URL);

function acessarBanco() {
    return  conexao.db("imersao-instabyte").collection("posts");
}

async function getAllPosts() {
    const colecao = await acessarBanco().find().toArray();
    return  colecao
};

async function createPosts(newPost) {
    const colecao = await acessarBanco().insertOne(newPost);
    return colecao;
};

export { getAllPosts, createPosts};