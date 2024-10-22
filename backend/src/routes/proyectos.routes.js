import { Router } from "express";
import { methods as Controller} from "../controllers/proyectosController";

const authMiddleware = require('../authMiddleware');

const router = Router();

router.post("/api/proyectos/add",  Controller.addProyecto );
router.get("/api/proyectos/get", Controller.getProyectos);
router.put("/api/proyectos/update/:id_proyecto",Controller.updateProyect);
router.get("/api/proyectos/enprocess", Controller.proyectEnProceso);
router.get("/api/proyectos/asigRecurso", Controller.getProyNoiniciadoyEjecucion);



export default router;