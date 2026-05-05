const { Router } = require('express');
const router = Router();
const { getTacos, createTaco, deleteTaco, updateTaco } = require('../controllers/taco.controller');

router.route('/')
    .get(getTacos)
    .post(createTaco);

router.route('/:id')
    .delete(deleteTaco)
    .put(updateTaco);

module.exports = router;