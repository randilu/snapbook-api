/* eslint-disable no-console */
const albumRepo = require('../repository/albumRepository');

const fetchAlbum = async (userId) => {
  try {
    const response = await albumRepo.findAlbumByUser(userId);
    return { error: false, data: response };
  } catch (error) {
    console.log('[Error] Failed to fetch Album', error);
    return { error: true, errorMessage: error };
  }
};

const saveAlbum = async (data) => {
  try {
    const response = await albumRepo.saveAlbum(data);
    return { error: false, data: response };
  } catch (error) {
    console.log('[Error] Failed to save Album', error);
    return { error: true, errorMessage: error };
  }
};

const updateAlbum = async (data, id) => {
  try {
    const response = await albumRepo.updateAlbum(data, id);
    return { error: false, data: response };
  } catch (error) {
    console.log('[Error] Failed to update Album', error);
    return { error: true, errorMessage: error };
  }
};

module.exports = {
  fetchAlbum,
  saveAlbum,
  updateAlbum,
};
