import { MongoClient } from "mongodb";

export default async function conectarAoBanco(DB_URL) {
  let  mongoClient;
  
  try{
    mongoClient = new MongoClient(DB_URL);
    console.log("Conectando ao banco de dados...");
    await mongoClient.connect();
    console.log("Conexão com MongoDB estabelecida com sucesso!");

    return mongoClient;
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados", error);
    process.exit();
  }
}