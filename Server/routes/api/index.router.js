const express = require('express');
const router = express.Router();

const categoriaRouter = require('./categoria.router');
const userRouter = require('./user.router');
const productRouter = require('./product.router');
const comprarRouter = require('./comprar.router');
const walletRouter = require('./wallet.router');

router.use('/producto', productRouter);
router.use('/categoria', categoriaRouter);
router.use('/user', userRouter);
router.use('/comprar', comprarRouter);
router.use('/wallet', walletRouter);


module.exports = router;