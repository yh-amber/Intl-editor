const express = require('express');
const { getAllData, editMessage, deleteMessage } = require('./data');

const router = express.Router();

router.get('/intl/all', (req, res) => {
  getAllData(res)
})

router.post('/intl/edit', (req, res) => {
  editMessage(req.body, res);
})

router.delete('/intl/delete/:mid', (req, res) => {
  deleteMessage(req.params.mid, res);
})

module.exports = router;
