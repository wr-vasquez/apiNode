"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _planesPruebasCotroller = require("../controllers/planesPruebasCotroller");
var router = (0, _express.Router)();
router.post("/api/planes/add", _planesPruebasCotroller.methods.addPlanes);
router.get("/api/planes/get", _planesPruebasCotroller.methods.getPlanes);
router.get("/api/tipopruebas/get", _planesPruebasCotroller.methods.getTipoPrueba);
router.get("/api/planes/rechazo", _planesPruebasCotroller.methods.getPlanesRechazo);
var _default = router;
exports["default"] = _default;