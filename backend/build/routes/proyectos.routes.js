"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _proyectosController = require("../controllers/proyectosController");
var authMiddleware = require('../authMiddleware');
var router = (0, _express.Router)();
router.post("/api/proyectos/add", _proyectosController.methods.addProyecto);
router.get("/api/proyectos/get", _proyectosController.methods.getProyectos);
router.put("/api/proyectos/update/:id_proyecto", _proyectosController.methods.updateProyect);
router.get("/api/proyectos/enprocess", _proyectosController.methods.proyectEnProceso);
router.get("/api/proyectos/asigRecurso", _proyectosController.methods.getProyNoiniciadoyEjecucion);
var _default = router;
exports["default"] = _default;