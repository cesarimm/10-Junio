/* Controllers */
const paymentController = require('../controllers/payment');
module.exports = (app) => {
    app.get('/api', (req, res) =>
        res.status(200).send({
            message: 'Example project did not give you access to the api web services',
        })
    );
    app.post('/api/payment/create/fecha/:fecha/cliente/:cliente/monto/:monto/banco/:banco', paymentController.create);
    app.get('/api/payment/list', paymentController.list);
    app.get('/api/payment/find/id/:id', paymentController.find);
};
