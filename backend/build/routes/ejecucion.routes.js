"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _ejecucionPruebasController = require("../controllers/ejecucionPruebasController");
var authMiddleware = require('../authMiddleware');
var router = (0, _express.Router)();
router.get("/api/ejecucion/get", _ejecucionPruebasController.methods.getEjecucion);
router.post("/api/ejecucion/add", authMiddleware, _ejecucionPruebasController.methods.addEjecucion);
var _default = router;
exports["default"] = _default;