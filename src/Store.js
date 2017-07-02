import axios from 'axios'
export const Store = {
  datas: {
    characters: [],
  },

  loadDatas() {
    let api = 'https://gateway.marvel.com:443/v1/public/characters?offset=100&apikey=dd9da99314fa8e5875a042a8fc03aa01';

    axios.get(api).then((res) => {
      this.datas.characters = res.data;
    })
  },

  getCharacter(id) {
    let charURL = ``
  }
}