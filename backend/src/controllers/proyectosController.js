import {getConnection} from "./../database/database";


//End Point Para Ingresar nuevos proyectos
const addProyecto =  async (req, res) => {
   try {
    // Constante para almacenar los datos 
    const {nombre,objetivo,alcance, presupuesto,fecha_inicio,fecha_fin} = req.body;

    if(nombre == undefined || objetivo == undefined || alcance == undefined || presupuesto == undefined ||  fecha_inicio == undefined || fecha_fin == undefined)
    {
        res.status(400).json({message: "Completar todos los campos"});
    }

    const InserProyecto = {nombre,objetivo, alcance,presupuesto,fecha_inicio,fecha_fin} 
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO proyectos SET ?", InserProyecto) 
    const result2 = await connection.query("select id_proyecto from proyectos order by id_proyecto desc limit 1");
   res.json(result2);
    //res.json([{message: "Registro Insertado ", result2}, result]);
    console.log("Registro Insertado")
   } catch (error) {
    res.status(500);
    res.status(error.message);
    
   }
};


//CONSULTAR PROYECTOS

const getProyectos =  async (req, res) => {
    try {
       const connection = await getConnection();
     const result = await connection.query("SELECT * FROM proyectos ORDER BY id_proyecto DESC;");
     res.json(result);
       
    } catch (error) {
        console.error('Error al obtener proyectos:', error); // Imprimir el error en la consola
        res.status(500).send(error.message); // Enviar el mensaje de error al cliente
        
    }
};



//End Point Para consultar solo los proyectos que estan en proceso 
const proyectEnProceso =  async (req, res) => {
    try {
       const connection = await getConnection();
     const result = await connection.query("select * from proyectos  where estado = 2 ORDER BY id_proyecto DESC;");
     res.json(result);
       
    } catch (error) {
       res.status(500);
       res.send(error.message)
        
    }
};

//End Point Para consultar solo los proyectos que estan en estado no iniciado o en ejecucion para asignarles recursos
const getProyNoiniciadoyEjecucion =  async (req, res) => {
    try {
       const connection = await getConnection();
     const result = await connection.query("select * from proyectos  where estado in(1,2) ORDER BY id_proyecto DESC;");
     res.json(result);
       
    } catch (error) {
       res.status(500);
       res.send(error.message)
        
    }
};


// Metodo para Actualizar Empleados

const updateProyect = async(req, res) => {
    

   try {
    
       const{ id_proyecto } = req.params;
       const {nombre, objetivo, alcance, presupuesto, fecha_inicio,fecha_fin,estado } = req.body;
       //console.log(nombre);

       if(id_proyecto === undefined || nombre === undefined || objetivo === undefined || alcance === undefined || presupuesto === undefined || fecha_inicio === undefined || fecha_fin === undefined || estado === undefined)
       {
           res.status(400).json({message: "Solicitud incorrecta. Por favor complete todos los campos" });
       }
       const UpdateEmp ={nombre, objetivo, alcance ,presupuesto, fecha_inicio, fecha_fin, estado}
       const connection = await getConnection();
       const result = await connection.query("UPDATE proyectos SET ? WHERE id_proyecto = ?",[UpdateEmp,id_proyecto]);
       res.json([{message: "Registro Actualizado"},result]);
   } catch (error) {
       res.status(500);
       res.status(error.message);
   }

};

 




export const methods = {
addProyecto,
getProyectos,
updateProyect,
proyectEnProceso,
getProyNoiniciadoyEjecucion
}