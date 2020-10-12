import fetch from "./fetch.js"
import refs from "./refs.js"
import template from "../template/template.hbs"
import debounce from "lodash.debounce"

refs.input.addEventListener("input", debounce((e) => {
  refs.list.innerHTML = "";
  fetch.resetPage()
  // console.log(e.target.value);
  fetch.query = e.target.value;
  fetch.getFetch()
    .then(data => {
      // console.log(data.hits)
      insertItem(data.hits)
      e.target.value = ""
    })
  loadMoreBtn.classList.remove("is-hiden")
}, 1000))

const loadMoreBtn = document.createElement("button");
loadMoreBtn.textContent = "Load more..."
loadMoreBtn.classList.add("load-btn", "is-hiden")
refs.list.insertAdjacentElement("afterend",loadMoreBtn)

loadMoreBtn.addEventListener("click", () => {
  fetch.setPage()
  fetch.getFetch()
    .then(data => {
      // console.log(data.hits)
      insertItem(data.hits)
      window.scrollTo(0,10000)
    })
})

function insertItem(data) {
  const item = template(data)
  refs.list.insertAdjacentHTML("beforeend", item)
}