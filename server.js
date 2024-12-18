import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gato brincando com um novelo de lã",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Gatinho dormindo em uma caixa",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Gatos se olhando",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "Gata curiosa",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 6,
        descricao: "Gato tomando sol",
        imagem: "https://placecats.com/millie/300/150"
    }
];

const app = express();

app.use(express.json());

app.listen(3000, () =>{
    console.log("Servidor escutando");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscaPost(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscaPost(req.params.id)
    res.status(200).json(posts[index]);
});

app.get("/livro", (req, res) => {
    res.status(200).send(

        {
            "titulo": "O Senhor dos Anéis",
            "autor": "J.R.R. Tolkien",
            "ano": 1954,
            "genero": "Fantasia"
        }
    
    );
});