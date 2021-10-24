const Album = require('../models/Album');

const findAlbumByUser = async (userId) => {
  try {
    return await Album.findOne({ userId });
  } catch (error) {
    throw new Error({
      error: true,
      errorMessage: 'Album search failed',
    });
  }
};
const saveAlbum = async (data) => {
  const album = new Album(data);
  try {
    return await album.save();
  } catch (error) {
    throw new Error({
      error: true,
      errorMessage: 'Album saving failed',
    });
  }
};
const updateAlbum = async (data, id) => {
  console.log('repository update', id);
  try {
    return await Album.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new Error({
      error: true,
      errorMessage: 'Album updating failed',
    });
  }
};

module.exports = {
  findAlbumByUser,
  saveAlbum,
  updateAlbum,
};
