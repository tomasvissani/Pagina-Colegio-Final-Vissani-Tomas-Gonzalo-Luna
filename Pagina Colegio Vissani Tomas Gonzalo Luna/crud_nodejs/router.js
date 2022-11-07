const express = require('express');
const router = express.Router();

//Invocamos a la conexion de la DB
const conexion = require('./database/db');

//RUTA PARA MOSTRAR TODOS LOS REGISTROS
router.get('/', (req, res)=>{           
     conexion.query('SELECT * FROM users',(error, results)=>{
        if(error){
            throw error;
        } else {                                                                
            res.render('index.ejs', {data:results});                                               
        }   
    })
})

//ruta para enviar los datos en formato json
router.get('/data', (req, res)=>{     
    conexion.query('SELECT * FROM users',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            data = JSON.stringify(results);
            res.send(data);          
        }   
    })
})

//RUTA QUE NOS LLEVA AL FORMULARIO PARA DAR DE ALTA UN NUEVO REGISTRO
router.get('/create', (req,res)=>{
    res.render('create');
})

//RUTA PARA EDITAR UN REGISTRO SELECCIONADO
router.get('/edit/:id', (req,res)=>{    
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('edit.ejs', {user:results[0]});            
        }        
    });
});

//RUTA PARA ELIMINAR UN REGISTRO SELECCIONADO
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});


//Invocamos los metodos para el CRUD
const crud = require('./controllers/crud');
const { json } = require('express');

// usamos router.post porque en el formulario el method="POST"
router.post('/save', crud.save);
router.post('/update', crud.update);























//Aca empieza el router de alumno

//RUTA PARA MOSTRAR TODOS LOS REGISTROS
router.get('/alumno', (req, res)=>{           
    conexion.query('SELECT * FROM materias',(error, results)=>{
       if(error){
           throw error;
       } else {                                                                
           res.render('indexalumno.ejs', {data:results});                                               
       }   
   })
})

//ruta para enviar los datos en formato json
router.get('/dataalumno', (req, res)=>{     
    conexion.query('SELECT * FROM materias',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            data = JSON.stringify(results);
            res.send(data);          
        }   
    })
})

//RUTA QUE NOS LLEVA AL FORMULARIO PARA DAR DE ALTA UN NUEVO REGISTRO
router.get('/createalumno', (req,res)=>{
    conexion.query("SELECT * FROM users", (error, results) => {
        res.render('createalumno', {nombres:results});

    }) 
})


//RUTA PARA EDITAR UN REGISTRO SELECCIONADO
router.get('/editalumno/:id', (req,res)=>{    
    const id = req.params.id;
    const idalumno=req.params.idalumno;
    conexion.query('SELECT * FROM materias WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{    
            conexion.query("SELECT * FROM users", (error, results2) => { 
                res.render('editalumno.ejs', {materias:results[0], nombres:results2 });            

            })        
        }        
    });
});

//RUTA PARA ELIMINAR UN REGISTRO SELECCIONADO
router.get('/deletealumno/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM materias WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/alumno');         
        }
    })
});



// usamos router.post porque en el formulario el method="POST"
router.post('/savealumno', crud.savealumno);
router.post('/updatealumno', crud.updatealumno);



//RUTA PARA EL LOGIN
router.get('/login', (req,res)=>{
    res.render('login');
})

//RUTA PARA EL REGISTRO
router.get('/Registroo', (req,res)=>{
    res.render('Registroo');
})

//LOGEAR 
router.get('/logear', (req,res)=>{
    res.render('logear');
    var user, password;

    user=document.getElementById("usuario").value;
    pass=document.getElementById("contrasena").value;


    if(user == "admin" && pass == "admin"){

        res.redirect= "/alumno";

    }   
})


//logear
router.post('/logear', crud.logear);












module.exports = router;