import {getConnection} from "../database/database";


//CONSULTAR PRUENAS EJECUTADAS
const getEjecucion =  async (req, res) => {
    try {
       const connection = await getConnection();
     const result = await connection.query("select * from resultados_prueba;");
     res.json(result);
       
    } catch (error) {
       res.status(500);
       res.send(error.message)
        
    }
};

//End Point Para Ingresar a la tabla de ejecucion
const addEjecucion =  async (req, res) => {
    try {
        // Obtén el ID del usuario logueado desde el token
        const id_usuario = req.user.id_usuario;
        //console.log(id_usuario)
       // const id_usuario = 1;
       
     // Constante para almacenar los datos 
     const {id_plan_prueba,resultado,evidencia} = req.body;
     
     if(id_plan_prueba === undefined || id_usuario === undefined || resultado === undefined || evidencia === undefined)
     {
         res.status(400).json({message: "Completar todos los campos"});
     }
 
     const InsertPlanes = {id_plan_prueba, id_usuario,resultado, evidencia} 
    
     const connection = await getConnection();
     const result = await connection.query("INSERT INTO resultados_prueba SET ?", InsertPlanes) ;
     if(parseInt(resultado) === 1){
      const result2 = await connection.query("UPDATE planes_prueba SET estado = 'Completado' WHERE id_plan_prueba = ?",[id_plan_prueba]);

     }else{
      const result3 = await connection.query("UPDATE planes_prueba SET estado = 'Rechazado' WHERE id_plan_prueba = ?",[id_plan_prueba]);

     }
     
   res.json(result);
     res.json([{message: "Registro Insertado "}, result]);
     console.log("Registro Insertado")
    } catch (error) {
     res.status(500);
     res.status(error.message);
     
    }
 };




export const methods ={
    getEjecucion,
    addEjecucion
}