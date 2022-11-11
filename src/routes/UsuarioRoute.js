import express from "express";
import usuarioController from "../controllers/usuariosController.js";

const router = express.Router();

router.get("/usuarios",usuarioController.listarUsuarios);
router.get("/usuarios/:id", usuarioController.listarUsuarioPorId);

router.post('/usuarios', usuarioController.criarUsuario);
router.put('/usuarios/:id', usuarioController.atualizarUsuario);

router.delete('/usuarios/:id', usuarioController.excluirUsuario);


export default router