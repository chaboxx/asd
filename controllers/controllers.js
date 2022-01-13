
const nodemailer = require("nodemailer");

const enviarCorreoContacto = async (req,res) =>{
    
    try {
        const { emailUsuario , nombreUsuario , mensajeUsuario } = req.body;


    
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, 
            auth: {
                user: "chaboxx159@gmail.com", 
                pass: process.env.APLICACION_WEB_GMAIL, 
            },
        });    

        
        transporter.sendMail({
            from: '"Rodrigo Cueva Pastor Contacto" <chaboxx159@gmail.com>', // sender address
            to: "chaboxx159@gmail.com", // list of receivers
            subject: "Contacto", // Subject line
            html: `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Contacto</title>
                </head>
                <body>
                    <h1>Hola te contacto una persona</h1>
                    <div>
                        <p>
                            Nombre : ${nombreUsuario}
                        </p>
                        <p>
                            Email : ${emailUsuario}
                        </p>
                        <p>
                            Mensaje : ${mensajeUsuario}
                        </p>
                    </div>
                </body>
            </html>
            `, 
        });
        

        return res.status(200).json({
            ok:true,
            msg :"Enviado"
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Error en el servidor" 
        })
    }
    

} 


module.exports = {
    enviarCorreoContacto,
}