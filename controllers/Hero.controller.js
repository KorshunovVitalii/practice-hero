const {Heroes} = require('../models');

module.exports.createHero = async (req, res, next) => {
    try {
        const {body} = req;
        const created = await Heroes.create(body);
        return res.status(201).send(created);
    } catch (error) {
        next(error);
    }
}