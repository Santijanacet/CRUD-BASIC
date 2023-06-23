const  mysql =require("mysql")
const conexión = mysql.createConnection({
    host:"localhost",
    password:"",
    user:"root",
    database:"crud_nodejs_db"
})

conexión.connect((e)=>{
 if(e){
    console.error("error de conexión es",e);
    return
 }
 console.log("Conectado a la BD mysql");
});

module.exports = conexión