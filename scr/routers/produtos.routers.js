const express = require("express");
const router = express.Router();

const ProdutosController = require("../controllers/produtos.controllers");

router.get("/clientes", Produtos.listar);
router.get("/clientes/:id", ProdutosController.buscar);
router.post("/clientes",ProdutosController.cadastrar );
router.delete("/clientes",ProdutosController.apagar);
router.patch("/clientes/:id",ProdutosController.alterar );
router.put("/clientes",ProdutosController.atualizar );

module.exports = router;