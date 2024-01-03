const express = require('express');
// const Link = require('../models/linkModel');
const {
  getLink,
  getLinks, 
  postLink,
  deleteLink,
  updateLink
} = require('../controllers/linkController');

const router = express.Router();

router.get('/', getLinks);

router.get('/:id', getLink);

router.post('/', postLink);

router.delete('/:id', deleteLink);

router.patch('/:id', updateLink);


module.exports = router;