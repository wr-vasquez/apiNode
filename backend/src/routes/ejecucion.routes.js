import { Router } from "express";
import { methods as ControllerEjecucion} from "../controllers/ejecucionPruebasController";
const authMiddleware = require('../authMiddleware');

const router = Router();

router.get("/api/ejecucion/get" ,ControllerEjecucion.getEjecucion );
router.post("/api/ejecucion/add", authMiddleware, ControllerEjecucion.addEjecucion );





export default router;