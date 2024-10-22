import {getConnection} from "../database/database";


//End Point Para Asignar Recursos a los proyectos
const addRecursos =  async (req, res) => {
    try {
     // Constante para almacenar los datos 
     const {id_proyecto,id_recurso} = req.body;
 
     if(id_proyecto == undefined || id_proyecto == undefined )
     {
         res.status(400).json({message: "Completar todos los campos"});
     }
 
     const AsignarRecurso = {id_proyecto,id_recurso} 
     const connection = await getConnection();
     const result = await connection.query("INSERT INTO proyecto_recursos  SET ?", AsignarRecurso) 
     
    res.json(result);
     //res.json([{message: "Registro Insertado ", result2}, result]);
     console.log("Registro Insertado")
    } catch (error) {
     res.status(500);
     res.status(error.message);
     
    }
 };


 // Endpoint para asignar recursos Múltiples
const asignarRecursos =  async (req, res) => {
    const { id_proyecto, recursos,user } = req.body; // Se espera que recursos sea un array de ids de recursos

    if (!id_proyecto || !Array.isArray(recursos) || recursos.length === 0) {
        return res.status(400).json({ error: 'Datos inválidos' });
    }

    const query = `INSERT INTO proyecto_recursos (id_proyecto, id_recurso) VALUES ?`;
    const query2 = `INSERT INTO proyectos_usuarios (id_proyecto, id_usuario) VALUES ?`;

    // Creamos un array de valores a insertar
    const values = recursos.map(id_recurso => [id_proyecto, id_recurso]);
    const values2 = user.map(id_usuario => [id_proyecto,id_usuario]);

    try {
        // Ejecutamos la inserción múltiple
        const connection = await getConnection();
        await connection.query(query, [values]);
        await connection.query(query2,[values2]);
        res.status(201).json({ message: 'Recursos asignados correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al asignar recursos' });
    }
};


 //CONSULTAR TABLA RECURSOS

const getRecursos =  async (req, res) => {
    try {
       const connection = await getConnection();
     const result = await connection.query("SELECT * FROM recursos;");
     res.json(result);
       
    } catch (error) {
       res.status(500);
       res.send(error.message)
        
    }
};


export const methods ={
    addRecursos,
    getRecursos,
    asignarRecursos
   
 }
 