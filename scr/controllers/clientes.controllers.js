const clientes = require("../data/clientes.data");

const listar = (req, res) => {
    res.send(clientes).end();
};

const buscar = (req, res) => {
    const id = req.params.id;

    var user;

    clientes.forEach((clientes, index) => {
        if(clientes.id === id) {
            user = clientes;
        }
    });

    if(user === "") user = "Não encontrado";

    res.send(user).end();
};
const apagar = (req, res) => {
    res.send(clientes).end();
};

const cadastrar = (req, res) => {
  const data = req.body;
  clientes.push(data);  
  res.send(201).send("Cadastrado com Sucesso").end();
};
module.exports = {
    listar,
    cadastrar,
    buscar,
    apagar
}
