const Chamada = require('../models/Presenca');

exports.getAllChamadas = async (req, res) => {
    try {
        const chamadas = await Chamada.find();
        res.json(chamadas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createChamada = async (req, res) => {
    const { nome, resumoDaAula, location, photo } = req.body;
    const newChamada = new Chamada({ nome, resumoDaAula, location, photo });

    try {
        const savedChamada = await newChamada.save();
        res.status(201).json(savedChamada);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateChamada = async (req, res) => {
    try {
        const updatedChamada = await Chamada.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedChamada);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteChamada = async (req, res) => {
    try {
        await Chamada.findByIdAndDelete(req.params.id);
        res.json({ message: 'Presenca deletada' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
