import axios from 'axios'
export const Store = {
  datas: {
    characters: [],
  },

  loadDatas() {
    let api = `https://gateway.marvel.com/v1/public/characters?offset=100&ts=1&apikey=dd9da99314fa8e5875a042a8fc03aa01&hash=06dd2f10f2db7f1693516ebe70254ac7
`;

    axios.get(api).then((res) => {
      this.datas.characters = res.data;
    })
  }
}