const Sequelize = require('sequelize');
const payment = require('../models').payment;
module.exports = {
    create(req, res) {
        return payment
            .create({
                fecha: req.params.fecha,
                cliente: req.params.cliente,
                monto: req.params.monto,
                banco: req.params.monto,
            })
            .then((payment) => res.status(200).send(payment))
            .catch((error) => res.status(400).send(error));
    },
    list(_, res) {
        return payment
            .findAll({})
            .then((payment) => res.status(200).send(payment))
            .catch((error) => res.status(400).send(error));
    },
    find(req, res) {
        return payment
            .findAll({
                where: {
                    id: req.params.id,
                },
            })
            .then((payment) => res.status(200).send(payment))
            .catch((error) => res.status(400).send(error));
    },
};
