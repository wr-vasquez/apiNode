"use strict";

var jwt = require('jsonwebtoken');
//import { config } from "dotenv";

var authMiddleware = function authMiddleware(req, res, next) {
  // Obtener el token de la cabecera de autorización
  var authHeader = req.headers['authorization'];
  var token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).send({
      message: 'Token no proporcionado'
    });
  }

  // Verificar el token
  jwt.verify(token, "Stack", function (err, decoded) {
    if (err) {
      return res.status(401).send({
        message: 'Token inválido o expirado'
      });
    }

    // Almacenar el usuario decodificado en la solicitud
    req.user = decoded;
    next();
  });
};
module.exports = authMiddleware;