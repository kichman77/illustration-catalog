export default {
  key: "18623552-aad7218af3511e8a6a5692c49",
  _query: "",
  page: 1,
  perPage: 12,
   getFetch() {
     const url = `https://pixabay.com/api/videos/?key=${this.key}&q=${this._query}&page=${this.page}&per_page=${this.perPage}`;
    return fetch(url)
       .then(res => res.json())
  },
  set query(inputValue) {
    return this._query = inputValue
  },
  get query() {
    return this._query
  },
  setPage() {
    return this.page++
  },
  resetPage() {
    return this.page = 1
  }
}