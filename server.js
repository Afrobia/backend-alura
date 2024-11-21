import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Foto teste",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Gato fazendo yoga",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 3,
    descricao: "Gatinho com bola de lã",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 4,
    descricao: "Gato curioso olhando pela janela",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 5,
    descricao: "Gato ronronando no sol",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 6,
    descricao: "Gato comendo ração",
    imagem: "https://placecats.com/millie/300/150",
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostPorId(id) {
    return posts.findIndex((post) => post.id === Number(id));
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id);
  res.status(200).json(posts[index]);
});

