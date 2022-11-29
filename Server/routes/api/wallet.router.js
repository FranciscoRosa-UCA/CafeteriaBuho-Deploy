const express = require('express');
const router = express.Router();
const {authentication, authorization} = require('../../middlewares/auth.middleware');
const walletController = require('../../controllers/wallet.controller');

router.post('/recargar',
            authentication,
            authorization('ADMIN'),
            walletController.recargar);

module.exports = router;