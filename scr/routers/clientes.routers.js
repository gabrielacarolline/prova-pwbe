const express = require("express");
const router = express.Router();

const ClienteController = require("../controllers/clientes.controllers");


router.get("/clientes", ClienteController.listar);
router.get("/clientes/:id", ClienteController.buscar);
router.post("/clientes",ClienteController.cadastrar );
router.delete("/clientes",ClienteController.apagar);

module.exports = router;