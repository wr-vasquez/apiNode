import {getConnection} from "../database/database";

//CONSULTAR INFORMES
const getInforme =  async (req, res) => {
    try {
       const connection = await getConnection();
     const result = await connection.query("select  pr.nombre as proyecto, pl.id_plan_prueba, pl.modulo_aprobar, pl.escenarios_de_prueba, pl.resultados_esperados, rs.resultado, rs.evidencia from planes_prueba pl inner join proyectos pr ON pr.id_proyecto = pl.id_proyecto inner join resultados_prueba rs ON pl.id_plan_prueba = rs.id_plan_prueba;");
     res.json(result);
       
    } catch (error) {
       res.status(500);
       res.send(error.message)
        
    }
};

export const methods ={
    getInforme
    
}