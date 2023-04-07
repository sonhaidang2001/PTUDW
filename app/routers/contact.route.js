const express = require('express');
const router = express.Router();
const contact = require('../controllers/contact.controller');

router.route('/')
    .get(contact.findAll)
    .post(contact.create)
    .delete(contact.deleteAll);

router.route('/favorite')
    .get(contact.findAllFavorite);

router.route('/:id')
    .get(contact.findOne)
    .put(contact.update)
    .delete(contact.delete);

module.exports = router;