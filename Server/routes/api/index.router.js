const express = require('express');
const router = express.Router();
const userRouter = require('./user.router');
router.use('/user', userRouter);

const categoryRouter = require('./category.router');
const productRouter = require('./product.router');
const comprarRouter = require('./comprar.router');

router.use('/product', productRouter);
router.use('/category', categoryRouter);
router.use('/comprar', comprarRouter);


module.exports = router;