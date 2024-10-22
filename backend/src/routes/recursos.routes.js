import { Router } from "express";
import { methods as ControllerRecursos} from "../controllers/recursosController";

const authMiddleware = require('../authMiddleware');

const router = Router();

router.post("/api/recursos/asignar",  ControllerRecursos.asignarRecursos );

router.get("/api/recursos/get",  ControllerRecursos.getRecursos );



export default router;