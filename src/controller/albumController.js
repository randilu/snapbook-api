const {
  StatusCodes: { BAD_REQUEST, INTERNAL_SERVER_ERROR },
  getReasonPhrase,
} = require('http-status-codes');

const albumService = require('../service/albumService');

const fetchAlbum = async (req, res) => {
  const { userId } = req.query || {};
  if (!userId) {
    return res.status(BAD_REQUEST).send({
      error: getReasonPhrase(BAD_REQUEST),
    });
  }

  const response = await albumService.fetchAlbum(userId);
  if (response.error) {
    return res.status(INTERNAL_SERVER_ERROR).send({
      error: getReasonPhrase(INTERNAL_SERVER_ERROR),
    });
  }
  return res.status(200).send({ error: false, data: response.data });
};

const saveAlbum = async (req, res) => {
  if (!req.body || !Object.keys(req.body)) {
    return res.status(BAD_REQUEST).send({
      error: getReasonPhrase(BAD_REQUEST),
    });
  }
  const response = await albumService.saveAlbum(req.body);
  if (response.error) {
    return res.status(INTERNAL_SERVER_ERROR).send({
      error: getReasonPhrase(INTERNAL_SERVER_ERROR),
    });
  }
  return res.status(201).send({ error: false, data: response.data });
};

const updateAlbum = async (req, res) => {
  if (!req.body || !Object.keys(req.body) || !req.params || !req.params.id) {
    return res.status(BAD_REQUEST).send({
      error: getReasonPhrase(BAD_REQUEST),
    });
  }
  const response = await albumService.updateAlbum(req.body, req.params.id);
  if (response.error) {
    return res.status(INTERNAL_SERVER_ERROR).send({
      error: getReasonPhrase(INTERNAL_SERVER_ERROR),
    });
  }
  return res.status(200).send({ error: false, data: response.data });
};

module.exports = {
  fetchAlbum,
  saveAlbum,
  updateAlbum,
};
