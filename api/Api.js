let config = require('./config.js')
let axios = require('axios')


/**
 * Class API
 */
class Api {


  /**
   * Get first batch of characters
   */
  getList() {
    return axios.get(`${config.base}?offset=100&ts=1&apikey=${config.apikey}&hash=${config.hash}`).then((response) => response.data.data);
  }


  /**
   * Get 1 character to display details
   */
  getCharacter(id) {
    if (!id) throw 'ID is required!'
    return axios.get(`${config.base}/${id}?ts=1&apikey=${config.apikey}&hash=${config.hash}`).then((response) => response.data.data);
  }


  /**
   * Get comics where the clicked character appears
   */
  getComics(id) {
    if (!id) throw 'ID is required!'
    return axios.get(`${config.base}/${id}/comics?limit=3&ts=1&apikey=${config.apikey}&hash=${config.hash}`).then((response) => response.data.data)
  }

  getPage(pageNb) {
    if (!pageNb) throw 'A page number is required !'
    let offset = 0;
    // Compute the offset value to paginate all characters (20 items per page)
    if (pageNb == 1) {
      offset = 100;
    } else {
      offset = 100 + (20 * pageNb);
    }
    console.log(pageNb);
    console.log(offset)
    return axios.get(`${config.base}?offset=${offset}&ts=1&apikey=${config.apikey}&hash=${config.hash}`).then((response) => response.data.data)
  }

}

/**
 * Export the object
 */
module.exports = new Api();