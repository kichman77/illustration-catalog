import fetch from './fetch.js'
import refs from './refs.js'
import template from '../template/template.hbs'
import debounce from "lodash.debounce"

refs.userInput.addEventListener("input", debounce((e) => {
  fetch.searchQ = e.target.value
  console.log(e.target.value);
  fetch.getFetch()
  .then((data)=> render(data.hits))
},1000))

// fetch.getFetch()
//   .then((data) => render  (data.hits))

function render(data) {
  const item = template(data)
  refs.galleryList.insertAdjacentHTML("beforeend", item)

  }