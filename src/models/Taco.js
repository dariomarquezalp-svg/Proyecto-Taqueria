const { Schema, model } = require('mongoose');

const tacoSchema = new Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    tipo: { type: String, required: true },
    descripcion: String
}, {
    timestamps: true
});

module.exports = model('Taco', tacoSchema);