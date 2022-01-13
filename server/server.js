require("dotenv").config();

const express = require("express");

const cors = require("cors");
const path = require("path");


class Server {

    constructor(){
        this.port = process.env.PORT;
        this.app = express();
        this.middlewares();
        this.rutas();


    }


    middlewares(){
        this.app.use(cors());
        this.app.use( express.json() );    
        this.app.use("/assets",express.static(path.resolve(__dirname,"../assets")));
        this.app.use( "/" , express.static(path.resolve(__dirname,"../public")) );
    }

    rutas(){
        
        this.app.use("/api",require("../routes/routes"));

        this.app.listen(this.port,()=>{
            console.log("Servidor corriendo en el puerto: ",this.port)
        });
    }

    
    
    

}


module.exports = {
    Server
}





