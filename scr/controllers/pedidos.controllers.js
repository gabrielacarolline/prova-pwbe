const pedidos = require("../data/produtos.data");

const listar = (req, res) => {
    res.send(pedidos).end();
};

const buscar = (req, res) => {
    const id = req.params.id;

    var user;

    pedidos.forEach((pedidos, index) => {
        if(pedidos.id === id) {
            user = pedidos;
        }
    });

    if(user === "") user = "Não encontrado";

    res.send(user).end();
};

const alterar = (req, res) => {
    const id = req.params.id;
    const userUpdate = req.body;
   
    var indice = -1

    pedidos.forEach((pedidos, index) => {
        if(pedidos.id === id) {
            indice = index;
        }
    });

    if(indice === -1) {
        res.status(404).end();
    }else {
        Object.keys(userUpdate).forEach((chave) => {
            clientes[indice][chave] = userUpdate[chave];
        });

        res.status(200).end();
    }
};
const atualizar = (req, res) => {
    const user = req.body;

    var encontrei = false;

    pedidos.forEach((pedidos,index)=> {
        if(pedidos.id === user.id) {
            pedidos[index] = user;
            encontrei = true;
        }
    });

    if(encontrei == false) {
        res.status(404).end();
    }else {
        res.status(201).end();
    }
};

const cadastrar = (req, res) => {
  const data = req.body;
  pedidos.push(data);  
  res.send(201).send("Cadastrado com Sucesso").end();
};
module.exports = {
    listar,
    buscar,
    cadastrar,
    alterar,
    atualizar
}