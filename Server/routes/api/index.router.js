const express = require('express');
const router = express.Router();

const categoriaRouter = require('./categoria.router');
const userRouter = require('./user.router');
const productoRouter = require('./producto.router');
const comprarRouter = require('./comprar.router');
const walletRouter = require('./wallet.router');

router.use('/producto', productoRouter);
router.use('/categoria', categoriaRouter);
router.use('/user', userRouter);
router.use('/comprar', comprarRouter);
router.use('/wallet', walletRouter);


module.exports = router;