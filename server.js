const express = require("express"); 
const cors = require("cors");

const ClientesRoutes = require("./src/routes/clientes.routes")
const ProdutosControllers = require("./src/routes/produtos.routes")
const PedidosControllers = require("./src/routes/pedidos.routes")
const app = express(); 

app.use(cors()); 
app.use(express.json()); 

app.use(ClientesRoutes);
app.use(ProdutosControllers);
app.use(PedidosControllers);

app.listen(3000, () => {

    console.log("Servidor Online na porta 3000");
});