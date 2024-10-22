import {getConnection} from "./../database/database";

//End Point Para Ingresar nuevos proyectos
const addPlanes =  async (req, res) => {
    try {
     // Constante para almacenar los datos 
     const {id_tipo_prueba,id_proyecto,modulo_aprobar,escenarios_de_prueba, resultados_esperados,criterios_aceptacion} = req.body;
 
     if(id_tipo_prueba === undefined || id_proyecto === undefined || modulo_aprobar === undefined || escenarios_de_prueba === undefined || resultados_esperados === undefined ||  criterios_aceptacion === undefined )
     {
         res.status(400).json({message: "Completar todos los campos"});
     }
 
     const InsertPlanes = {id_tipo_prueba, id_proyecto,modulo_aprobar, escenarios_de_prueba,resultados_esperados,criterios_aceptacion} 
     const connection = await getConnection();
     const result = await connection.query("INSERT INTO planes_prueba SET ?", InsertPlanes) 

   // res.json(result);
     res.json([{message: "Registro Insertado "}, result]);
     console.log("Registro Insertado")
    } catch (error) {
     res.status(500);
     res.status(error.message);
     
    }
 };




 
//CONSULTAR PLANES DE PRUEBA EN ESTADO PENDIENTE O RECHAZADO

const getPlanes =  async (req, res) => {
    try {
       const connection = await getConnection();
     const result = await connection.query("SELECT pl.id_plan_prueba,tp.tipo_prueba,pr.nombre AS nombre_proyecto,pl.modulo_aprobar,pl.escenarios_de_prueba,pl.resultados_esperados,pl.criterios_aceptacion, pl.estado FROM planes_prueba pl INNER JOIN proyectos pr ON pr.id_proyecto = pl.id_proyecto INNER JOIN tipo_pruebas tp ON tp.id_tipo_prueba = pl.id_tipo_prueba  WHERE pl.estado = 'Pendiente' OR pl.estado = 'Rechazado' ORDER BY pl.id_plan_prueba DESC;");
     res.json(result);
       
    } catch (error) {
       res.status(500);
       res.send(error.message)
        
    }
};

//CONSULTAR PLANES DE PRUENA EN ESTADO RECHAZADO

const getPlanesRechazo =  async (req, res) => {
    try {
       const connection = await getConnection();
     const result = await connection.query("select * from planes_prueba where estado = 'Rechazado' ORDER BY id_plan_prueba DESC;");
     res.json(result);
       
    } catch (error) {
       res.status(500);
       res.send(error.message)
        
    }
};

//CONSULTAR TIPO DE PRUEBAS
const getTipoPrueba =  async (req, res) => {
    try {
       const connection = await getConnection();
     const result = await connection.query("select * from tipo_pruebas ");
     res.json(result);
       
    } catch (error) {
       res.status(500);
       res.send(error.message)
        
    }
};


 export const methods ={
     addPlanes,
     getPlanes,
     getTipoPrueba,
     getPlanesRechazo
 }