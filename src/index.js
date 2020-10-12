import debounce from "lodash.debounce";
import css from "./css/style.css";
// import render from "./js/render.js"
import template from './template/template.hbs'

let inputValue = ``;
const key = "18623552-aad7218af3511e8a6a5692c49";

const input = document.querySelector(".gallery-input");
const ul = document.querySelector(".gallery-list")
// console.log(input);


input.addEventListener("input", debounce((e) => {
   // получаем данные из инпута для запроса
  inputValue = e.target.value;
  console.log(e.target.value);
// подставляем данные из инпута в строку запроса через переменную inputValue
  const url = `https://pixabay.com/api/videos/?key=${key}&q=${inputValue}`
 // делаем запрос к API(базе данных).получаем ответ в формате json.выводим полученные данные
  return fetch(url).then(res => res.json()).then(data => {
    console.log(data)
    // формируем элемент разметки из полученных данных с помощью шаблона
    const item = template(data.hits)
    console.log(item);
    // встраиваем сгенерированные элементы в тег ul
    ul.insertAdjacentHTML("beforeend", item)
  })
}, 1000))

