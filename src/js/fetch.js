const key = "18623552-aad7218af3511e8a6a5692c49";
// const url = "https://pixabay.com/api/"

export default {
  _searchQ: "",
  getFetch() {
    let url = `https://pixabay.com/api/videos/?key=${key}&q=${this._searchQ}`;
    return fetch(url).then(res => res.json())

  },
  get searchQ() {
    return this._search
  },

  set searchQ(x) {
    this._searchQ = x
  }
}