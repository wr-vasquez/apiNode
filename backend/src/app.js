import express from 'express'
import morgan from 'morgan';
const cors = require("cors");

//Routes

import loginRoutes from './routes/login.routes'
import proyectosRoutes from './routes/proyectos.routes'
import planes from './routes/planes.routes'
import ejecucion  from './routes/ejecucion.routes'
import defectosRoutes from './routes/defectos.routes'
import informesRoutes from './routes/informes.routes'
import recursosRoutes from './routes/recursos.routes'

const app = express();

//Midlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.get("/", (res) => {
    res.json("Bienvenidos")
})

//Rutas
app.use(loginRoutes);
app.use(proyectosRoutes);
app.use(planes);
app.use(ejecucion);
app.use(defectosRoutes);
app.use(informesRoutes);
app.use(recursosRoutes);


export default app;