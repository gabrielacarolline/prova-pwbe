const produtos = require("../data/produtos.data");

const listar = (req, res) => {
    res.send(produtos).end();
};

const buscar = (req, res) => {
    const codigo = req.params.codigo;

    let produto = produtos.find(produto => produto.codigo === codigo) || "Não Encontrado";

    res.send(produto).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    if (data.quantidade < 0) {
        res.status(400).send("Quantidade não pode ser negativa").end();
        return;
    }
    produtos.push(data);
    res.status(201).send("Cadastrado com Sucesso").end();
};

const apagar = (req, res) => {
    const codigo = req.params.codigo;

    const indice = produtos.findIndex(produto => produto.codigo === codigo);

    if (indice === -1) {
        res.status(404).end();
    } else {
        produtos.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) => {
    const produto = req.body;

    const indice = produtos.findIndex(p => p.codigo === produto.codigo);

    if (indice === -1) {
        res.status(404).end();
    } else {
        if (produto.quantidade < 0) {
            res.status(400).send("Quantidade não pode ser negativa").end();
            return;
        }
        produtos[indice] = produto;
        res.status(201).end();
    }
};

const alterar = (req, res) => {
    const codigo = req.params.codigo;
    const produtoUpdate = req.body;

    const indice = produtos.findIndex(produto => produto.codigo === codigo);

    if (indice === -1) {
        res.status(404).end();
    } else {
        if (produtoUpdate.quantidade !== undefined && produtoUpdate.quantidade < 0) {
            res.status(400).send("Quantidade não pode ser negativa").end();
            return;
        }
        Object.keys(produtoUpdate).forEach((chave) => {
            produtos[indice][chave] = produtoUpdate[chave];
        });
        res.status(200).end();
    }
};

module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar,
    atualizar,
    alterar
};