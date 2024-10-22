import { Router } from "express";
import { methods as ControllerDefectos} from "../controllers/defectosController";
const authMiddleware = require('../authMiddleware');

const router = Router();

router.get("/api/defectos/get" ,ControllerDefectos.getDefectos );
router.post("/api/defectos/add", authMiddleware, ControllerDefectos.addDefectos);




export default router;