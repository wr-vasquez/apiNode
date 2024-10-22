"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _loginController = require("../controllers/loginController");
var router = (0, _express.Router)();
router.post("/api/login", _loginController.methods.login);
router.get("/api/userGet", _loginController.methods.getUser);
router.post("/api/postUser", _loginController.methods.addUser);
router.get("/api/getUser/Dev", _loginController.methods.getUserDesarrollador);
router.put("/api/update/user/:id_usuario", _loginController.methods.updateUser);
router.put("/api/delete/user/:id_usuario", _loginController.methods.deleteUser);
router.get("/api/roles/get", _loginController.methods.getRoles);
var _default = router;
exports["default"] = _default;