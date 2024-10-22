import { Router } from "express";
import { methods as ControllerPlanes} from "../controllers/planesPruebasCotroller";


const router = Router();

router.post("/api/planes/add", ControllerPlanes.addPlanes );
router.get("/api/planes/get", ControllerPlanes.getPlanes);
router.get("/api/tipopruebas/get", ControllerPlanes.getTipoPrueba);
router.get("/api/planes/rechazo", ControllerPlanes.getPlanesRechazo);



export default router;