"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _login = _interopRequireDefault(require("./routes/login.routes"));
var _proyectos = _interopRequireDefault(require("./routes/proyectos.routes"));
var _planes = _interopRequireDefault(require("./routes/planes.routes"));
var _ejecucion = _interopRequireDefault(require("./routes/ejecucion.routes"));
var _defectos = _interopRequireDefault(require("./routes/defectos.routes"));
var _informes = _interopRequireDefault(require("./routes/informes.routes"));
var _recursos = _interopRequireDefault(require("./routes/recursos.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var cors = require("cors");

//Routes

var app = (0, _express["default"])();

//Midlewares
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(cors());
app.get("/", function (res) {
  res.json("Bienvenidos");
});

//Rutas
app.use(_login["default"]);
app.use(_proyectos["default"]);
app.use(_planes["default"]);
app.use(_ejecucion["default"]);
app.use(_defectos["default"]);
app.use(_informes["default"]);
app.use(_recursos["default"]);
var _default = app;
exports["default"] = _default;