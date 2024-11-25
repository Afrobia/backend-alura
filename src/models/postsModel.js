import { ObjectId } from "mongodb";
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

async function updatePost(id, newPost) {
    const objID = ObjectId.createFromHexString(id)
    const colecaoAtualizada = await acessarBanco().updateOne({ _id: new ObjectId(objID) }, { $set: newPost });
    return colecaoAtualizada;
}

export { getAllPosts, createPosts, updatePost};