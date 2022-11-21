const express = require('express');
const router = express.Router();
const userRouter = require('./user.router');
router.use('/user', userRouter);

const categoriaRouter = require('./categoria.router');
const productRouter = require('./product.router');
const comprarRouter = require('./comprar.router');
const walletRouter = require('./wallet.router');

router.use('/product', productRouter);
router.use('/categoria', categoriaRouter);
router.use('/user', productRouter);
router.use('/comprar', comprarRouter);
router.use('/wallet', walletRouter);


module.exports = router;