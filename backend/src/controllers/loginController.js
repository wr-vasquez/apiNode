 import { getConnection } from "../database/database";
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



//------------LOGIN QUE PERMITE VERIFICAR SI EL USUARIO Y LA CONTRASEÑA ENCRIPTADA COINCIDEN Y DEVUELVE UN TOKEN ----------
const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send({ message: 'Username y password son requeridos' });
    }

    const consult = 'SELECT * FROM usuarios WHERE correo = ?';

    try {
        const connection = await getConnection();

        connection.query(consult, [username], async (err, result) => {
            if (err) {
                console.error("Error en la consulta: ", err);
                return res.status(500).send({ message: 'Error en el servidor' });
            }

            if (result && result.length > 0) {
                const user = result[0];

                // Comparar la contraseña no encriptada con la encriptada en la base de datos
                const match = await bcrypt.compare(password, user.passwd);

                if (match) {
                    // Crear y enviar el token JWT si el usuario es válido
                    const token = jwt.sign({ id_usuario: user.id_usuario, username }, "Stack", {
                        expiresIn: '1d'
                    });
                    console.log(token);
                    return res.status(200).send({ token });
                } else {
                    console.log('Usuario o contraseña incorrectos');
                    return res.status(401).send({ message: 'Usuario o contraseña incorrectos' });
                }
            } else {
                console.log('Usuario o contraseña incorrectos');
                return res.status(401).send({ message: 'Usuario o contraseña incorrectos' });
            }
        });
    } catch (error) {
        console.error("Error en la conexión a la base de datos: ", error);
        return res.status(500).send({ message: 'Error en la conexión a la base de datos' });
    }
};


const getUser =  async (req, res) => {
    try {
       const connection = await getConnection();
     const result = await connection.query("select us.id_usuario, us.nombre, us.apellidos, us.usuario, us.correo, rl.rol from usuarios us  inner join roles rl ON rl.id_rol = us.id_rol where estado = 1;");
     res.json(result);
       
    } catch (error) {
       res.status(500);
       res.send(error.message)
        
    }
};

const getRoles =  async (req, res) => {
    try {
       const connection = await getConnection();
     const result = await connection.query("select * from roles;");
     res.json(result);
       
    } catch (error) {
       res.status(500);
       res.send(error.message)
        
    }
};






const getUserDesarrollador =  async (req, res) => {
    try {
       const connection = await getConnection();
     const result = await connection.query("select * from usuarios where id_rol = 1 and estado = 1 ;");
     res.json(result);
       
    } catch (error) {
       res.status(500);
       res.send(error.message)
        
    }
};


//End Point para registrar Usuarios encriptando la Contraseña
const addUser =  async (req, res) => {
    
     // Constante para almacenar los datos 
     const {nombre,apellidos,usuario, correo,passwd,id_rol} = req.body;
     
     const hashedPassword = await bcrypt.hash(passwd, 10);
 
     if(nombre == undefined || apellidos == undefined || usuario == undefined || correo == undefined ||  passwd == undefined || id_rol == undefined)
     {
         res.status(400).json({message: "Completar todos los campos"});
     }
 
  
   
     const connection = await getConnection();
    const result= await connection.query('INSERT INTO  usuarios set ?', { nombre: nombre, apellidos: apellidos, usuario: usuario, correo: correo, passwd: hashedPassword, id_rol: id_rol }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Usuario Agregado");
            res.json({
                msg: 'Usuario Agregado',
                body: req.body
            });
        }
    });
     

 };

 // Metodo para Actualizar Usuarios

const updateUser = async(req, res) => {
    

    try {
    
        const{ id_usuario } = req.params;
        const {nombre, apellidos, usuario, correo, id_rol } = req.body;
        //console.log(nombre);
 
        if(id_usuario === undefined || nombre === undefined || apellidos === undefined || usuario === undefined || correo === undefined ||  id_rol === undefined)
        {
            res.status(400).json({message: "Solicitud incorrecta. Por favor complete todos los campos" });
        }
        const UpdateEmp ={nombre, apellidos, usuario ,correo, id_rol}
        const connection = await getConnection();
        const result = await connection.query("UPDATE usuarios SET ? WHERE id_usuario = ?",[UpdateEmp,id_usuario]);
        res.json([{message: "Registro Actualizado"},result]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
 
 };

 const deleteUser = async(req, res) => {
    

    try {
    
        const{ id_usuario } = req.params;
        
        //const {nombre, apellidos, usuario, correo, passwd,rol } = req.body;
        //console.log(nombre);
 
        if(id_usuario === undefined )
        {
            res.status(400).json({message: "Solicitud incorrecta. Por favor complete todos los campos" });
        }
        
        const estado = 2;
        const connection = await getConnection();
        const result = await connection.query("update usuarios set estado = ? WHERE id_usuario = ?",[estado,id_usuario]);
        res.json([{message: "Registro Actualizado"},result]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
 
 };




export const methods = {
    login,
    getUser,
    addUser,
    getUserDesarrollador,
    updateUser,
    deleteUser,
    getRoles
    
};


