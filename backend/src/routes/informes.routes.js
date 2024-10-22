import { Router } from "express";
import { methods as ControllerInformes} from "../controllers/informesController";


const router = Router();

router.get("/api/informes/get" ,ControllerInformes.getInforme );


export default router;