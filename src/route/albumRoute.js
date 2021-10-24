const express = require('express');

const router = express.Router();

const { fetchAlbum, saveAlbum, updateAlbum } = require('../controller/albumController');

router.post('/', saveAlbum);
router.put('/:id', updateAlbum);
router.get('/', fetchAlbum);

module.exports = router;
