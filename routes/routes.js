const { Router } = require("express");

const { enviarCorreoContacto } = require("../controllers/controllers");
const { contactValidator } = require("../middlewares/contact-validator");



const router = Router();


router.post("/enviar-correo-contacto",contactValidator,enviarCorreoContacto)


module.exports=router;