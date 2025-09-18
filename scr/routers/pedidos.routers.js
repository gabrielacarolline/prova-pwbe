const express = require("express");
const router = express.Router();

const PedidosController = require("../controllers/pedidos.controllers");

router.get("/clientes", Pedidos.listar);
router.get("/clientes/:id", PedidosController.buscar);
router.post("/clientes",PedidosController.cadastrar );
router.patch("/clientes/:id",PedidosController.alterar );
router.put("/clientes",PedidosController.atualizar );

module.exports = router;