import axios from 'axios'


const URL = 'http://localhost:3000';

/**
 * Store Management Pattern
 * https://vuejs.org/v2/guide/state-management.html
 */
export const Store = {

  /**
   * 
   */
  datas: {
    characters: [],
    localDatas: [],
    localList: [],
    localIds: [],
  },

  /**
   * Load datas at the first '/' load
   */
  loadDatas() {
    return axios.get(URL).then((response) => this.datas.characters = response.data);
  },

  /**
   * Load right datas when pagination is used
   * @param {number} pageNb The page number returned by the pagination component from Vuetify
   */

  loadPage(pageNb) {
    return axios.get(`${URL}/page/${pageNb}`).then((response) => this.datas.characters = response.data);
  },

  /**
   * Load character details
   * @param {number} id The id of the clicked character
   */
  getCharacter(id) {
    return axios.get(`${URL}/details/${id}`).then((res) => res.data)
  },

  /**
   * Load character comics
   * @param {number} id The id of the clicked character, required to load comics of the right character
   */
  getComic(id) {
    return axios.get(`${URL}/details/comics/${id}`).then((res) => res.data)
  },

  /**
   * Add a character in localStorage
   * @param {object} item Character's details
   */

  addToFavorites(item) {
      this.datas.localDatas.push({ 'id': item.id, 'picture': item.thumbnail.path + '.' + item.thumbnail.extension, 'name': item.name });
      let datasToLocalStorage = JSON.stringify(this.datas.localDatas);
      window.localStorage.setItem(item.id, datasToLocalStorage);
      this.datas.localDatas = [];
      datasToLocalStorage = '';
  },

  showFavorites() {
    this.datas.localList = [];

    for (let i = 0; i < localStorage.length; i += 1) {
      let localItemsToParse = localStorage.getItem(localStorage.key(i));
      let localItemsToPush = JSON.parse(localItemsToParse);
      this.datas.localList.push(localItemsToPush[0]);
    }
  },



}