"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _recursosController = require("../controllers/recursosController");
var authMiddleware = require('../authMiddleware');
var router = (0, _express.Router)();
router.post("/api/recursos/asignar", _recursosController.methods.asignarRecursos);
router.get("/api/recursos/get", _recursosController.methods.getRecursos);
var _default = router;
exports["default"] = _default;