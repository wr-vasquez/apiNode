import {  Router } from "express";
import { methods as Controlador }  from "../controllers/loginController";

const router = Router();


router.post("/api/login", Controlador.login);
router.get("/api/userGet", Controlador.getUser);
router.post("/api/postUser", Controlador.addUser);
router.get("/api/getUser/Dev", Controlador.getUserDesarrollador);
router.put("/api/update/user/:id_usuario", Controlador.updateUser);
router.put("/api/delete/user/:id_usuario", Controlador.deleteUser);
router.get("/api/roles/get", Controlador.getRoles);



export default router;
