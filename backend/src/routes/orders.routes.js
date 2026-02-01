const router = require('express').Router();
const {
  getOrders,
  createOrder,
  deleteOrder
} = require('../controllers/orders.controller');

const auth = require('../middlewares/auth');
const admin = require('../middlewares/role');

router.get('/', auth, admin, getOrders);
router.post('/', auth, createOrder);
router.delete('/:id', auth, admin, deleteOrder);

module.exports = router;
