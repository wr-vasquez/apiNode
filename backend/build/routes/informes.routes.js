"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _informesController = require("../controllers/informesController");
var router = (0, _express.Router)();
router.get("/api/informes/get", _informesController.methods.getInforme);
var _default = router;
exports["default"] = _default;