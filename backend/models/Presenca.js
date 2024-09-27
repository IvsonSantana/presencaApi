const mongoose = require('mongoose');

const ChamadaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    resumoDaAula: { type: String, required: true },
    location: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    photo: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Chamada', ChamadaSchema);
