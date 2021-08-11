const GeneralOrientations = require('../models/GeneralOrientations');

module.exports = {
    async index(req, res) {
        const { page, limit } = req.query;

        //const general_orientations = await GeneralOrientations.paginate({}, { page: page, limit: parseInt(limit) });
        
        const general_orientations = await GeneralOrientations.find();

        return res.json(general_orientations);
    },

    async show(req, res) {
        try {   
            const general_orientation = await GeneralOrientations.findById(req.params.id);
            
            res.json(general_orientation);
        } catch (error) {
            return res.status(400).send({ error: 'general_orientation.not.found'});
        }
    },

    async create (req, res) {
        try {
            let data = req.body;
                
            const general_orientations = await GeneralOrientations.create(data);

            return res.send({ general_orientations });
        } catch(err) {
            return res.status(400).send({error: err});
        }
    },

    async update(req, res) {
        try {

            let data = req.body;

            const general_orientation = await GeneralOrientations.findByIdAndUpdate(req.params.id, data, { new: true });

            return res.json(general_orientation);
        } catch (error) {
            return res.status(400).send({ error: 'was.not.possible.update'});
        }
    },

    async destroy(req, res) {
        const data = await GeneralOrientations.findById(req.params.id);
        
        try {
            if (data.isDeleted) {
                data.isDeleted = false;
                data.deletedAt = null;
            } else {
                data.isDeleted = true;
                data.deletedAt = Date.now();
            }
            
            await data.save();
        } catch (error) {
            return res.status(400).send({ error: error});
        }
    
        return res.status(201).json();
    }
}