"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _defectosController = require("../controllers/defectosController");
var authMiddleware = require('../authMiddleware');
var router = (0, _express.Router)();
router.get("/api/defectos/get", _defectosController.methods.getDefectos);
router.post("/api/defectos/add", authMiddleware, _defectosController.methods.addDefectos);
var _default = router;
exports["default"] = _default;