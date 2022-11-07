//Invocamos a la conexion de la DB
const conexion = require('../database/db');
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('INSERT INTO users SET ?',{user:user, rol:rol}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/');         
        }
});
};
//ACTUALIZAR un REGISTRO
exports.update = (req, res)=>{
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('UPDATE users SET ? WHERE id = ?',[{user:user, rol:rol}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};




//GUARDAR un REGISTRO ALUMNO
exports.savealumno = (req, res)=>{
    const idalumno = req.body.idalumno;
    const materia = req.body.materia;
    const nota1 = req.body.nota1;
    const nota2 = req.body.nota2;
    const nota3 = req.body.nota3;
    conexion.query('INSERT INTO materias SET ?',{idalumno:idalumno, materia:materia, nota1:nota1, nota2:nota2, nota3:nota3}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/alumno');         
        }
});
};
//ACTUALIZAR un REGISTRO ALUMNO
exports.updatealumno = (req, res)=>{
    const id = req.body.id;
    const idalumno = req.body.idalumno;
    const materia = req.body.materia;
    const nota1 = req.body.nota1;
    const nota2 = req.body.nota2;
    const nota3 = req.body.nota3;
    conexion.query('UPDATE materias SET ? WHERE id = ?',[{idalumno:idalumno, materia:materia, nota1:nota1, nota2:nota2, nota3:nota3}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/alumno');         
        }
});
};

//LOGEAR
exports.logear = (req, res)=>{
    const usuario = req.body.usuario;
    const contrasena = req.body.contrasena;
    if(usuario == "admin" && contrasena == "admin"){

        res.redirect('/alumno'); 

    }
    else {
        res.redirect('/login'); 
    }
}
