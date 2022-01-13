
const { check, validationResult } = require("express-validator");


const contactValidator = [
    check("emailUsuario","Email Invalido").not().isEmpty().isEmail(),
    check("nombreUsuario","Nombre Invalido").not().isEmpty().isString().isLength({min:3,max:64}),
    check("mensajeUsuario","Mensaje Invalido").not().isEmpty().isString().isLength({max:256}),
    (req,res,next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
        
            return res.status(400).json({
                ok:false,
                errors:errors.mapped()
            })
        }
            
        next();
        
    }   
]

module.exports={
    contactValidator,
}