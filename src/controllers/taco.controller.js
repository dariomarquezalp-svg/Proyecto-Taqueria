const tacoCtrl = {};
const Taco = require('../models/Taco');

//Ver todos los tacos
tacoCtrl.getTacos = async (req, res) => {
    const tacos = await Taco.find();
    res.json(tacos);
};

//Crear un taco
tacoCtrl.createTaco = async (req, res) => {
    const { nombre, precio, tipo, descripcion } = req.body;
    const newTaco = new Taco({ nombre, precio, tipo, descripcion });
    await newTaco.save();
    res.json({ message: 'Taco guardado con éxito' });
};

//Borrar un taco
tacoCtrl.deleteTaco = async (req, res) => {
    await Taco.findByIdAndDelete(req.params.id);
    res.json({ message: 'Taco eliminado' });
};

//Actualizar un taco
tacoCtrl.updateTaco = async (req, res) => {
    const { nombre, precio, tipo, descripcion } = req.body;
    await Taco.findByIdAndUpdate(req.params.id, { nombre, precio, tipo, descripcion });
    res.json({ message: 'Taco actualizado' });
};

module.exports = tacoCtrl;