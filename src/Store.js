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
  },

  /**
   * 
   */
  loadDatas() {
    return axios.get(URL).then((response) => this.datas.characters = response.data);
  },

  /**
   * 
   */

  loadPage(pageNb) {
    return axios.get(`${URL}/page/${pageNb}`).then((response) => this.datas.characters = response.data);
  },

  /**
   * 
   * @param {*} id 
   */
  getCharacter(id) {
    return axios.get(`${URL}/details/${id}`).then((res) =>  res.data)
  },

  /**
   * 
   * @param {*} id 
   */
  getComic(id) {
    return axios.get(`${URL}/details/comics/${id}`).then((res) => res.data)
  }



}