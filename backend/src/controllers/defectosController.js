import {getConnection} from "../database/database";


//CONSULTAR LA TABLA DEFECTOS
const getDefectos =  async (req, res) => {
    try {
       const connection = await getConnection();
     const result = await connection.query("SELECT * FROM  defectos;");
     res.json(result);
       
    } catch (error) {
       res.status(500);
       res.send(error.message)
        
    }
};

//End Point Para Ingresar y asignar defectos
const addDefectos =  async (req, res) => {
   try {
       // Obtén el ID del usuario logueado desde el token
       const id_usuario = req.user.id_usuario;
       console.log(id_usuario)
      // const id_usuario = 1;
      
    // Constante para almacenar los datos 
    const {id_plan_prueba,nombre_defecto,descripcion, prioridad, id_user} = req.body;
    
    if(id_plan_prueba === undefined || id_usuario === undefined || nombre_defecto === undefined || descripcion === undefined || prioridad === undefined || id_user === undefined)
    {
        res.status(400).json({message: "Completar todos los campos"});
    }

    const InsertDefectos = {id_plan_prueba, id_usuario,nombre_defecto, descripcion, prioridad} 
    const AsignarUser = {id_user}
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO defectos SET ?", InsertDefectos) ;

     // Obtenemos el id_defecto recién insertado
     const id_defecto = result.insertId;
    // console.log(id_defecto)

   //  const result2 = await connection.query("select id_defecto from defectos order by id_defecto desc limit 1");
   //  res.json(result2);
   //  const result3 = await connection.query("INSERT INTO asignación_defectos SET ?",  result2, AsignarUser) ;

  // res.json(result);


        // Inserta en la tabla asignación_defectos usando el id_defecto y el id_user
        const asignarDefecto = { id_defecto, id_usuario: id_user };
        await connection.query("INSERT INTO asignación_defectos SET ?", asignarDefecto);

        // Responde con el id_defecto y un mensaje de éxito
        res.json({ message: "Registro Insertado", id_defecto });


    res.json([{message: "Registro Insertado "}, result]);
    console.log("Registro Insertado")
   } catch (error) {
    res.status(500);
    res.status(error.message);
    
   }
};



export const methods ={
   getDefectos,
   addDefectos
}
