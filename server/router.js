const express = require('express');
const { getAllData } = require('./data');

const router = express.Router();

router.get('/intl/all', (req, res) => {
  getAllData(res)
})

module.exports = router;
