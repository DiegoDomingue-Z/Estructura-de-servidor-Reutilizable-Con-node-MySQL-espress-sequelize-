const { response } = require('express');
const db = require('../db/config');
const Usuario = require('../models/usuario');
const { where } = require('sequelize');

const usuariosConsulta =  async (req, res) => {
    try {
        const usuarios = await Usuario.findAll(); // Realiza la consulta a la tabla usuarios
        res.json(usuarios); // Devuelve los usuarios en formato JSON
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener usuarios' }); // Manejo de errores
    }
}

const crearUsuario = async (req, res) => {
    try{

        let nuevoUsuario = req.body
        let resultado = await Usuario.create(nuevoUsuario);
        res.json(resultado);
        console.log(resultado)
    }catch(error){
        console.log(error);
        res.json({error: 'al crear el usuario'});
    }
}


const usuarioId = async (req, res) => {
    try{

        let { id } = req.params;

        let resultado = await Usuario.findByPk(id);
        res.json(resultado);
        console.log(resultado)
    }catch(error){
        console.log(error);
        res.json({error: 'al obtener el usuario'});
    }
}


const actualizarUsuario = async (req, res) => {
    try{

        let { idss } = req.params;

        let idSeleccionado = await Usuario.findByPk(idss);
        let cuerpo = req.body;

        if(idSeleccionado){
           await Usuario.update(cuerpo, {where: {id: idss}});
            res.json({
                ms: `usuario ${idss} actualizado`
            })
        }else{
            res.json({
                mg: `El ${idss} no existe en la db`
            })
        }
        console.log(cuerpo)
    }catch(error){
        console.log(error);
        res.json({error: 'al obtener el usuario'});
    }
}


const eliminarUsuario = async (req, res) => {
    try{

        let { id } = req.params;

        let resultado = await Usuario.destroy({ where: { id } })
        // "Elimina donde el campo id sea igual al id que recibimos."
        res.json({
            usuario: id,
            mensaje: 'Usuario eliminado'
        });
        console.log(resultado)
    }catch(error){
        console.log(error);
        res.json({error: 'al obtener el usuario'});
    }
}
 


module.exports = {
    usuarioId,
    crearUsuario,
    usuariosConsulta,
    actualizarUsuario,
    eliminarUsuario,
} 