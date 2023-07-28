import "./style.css"
import { render } from "./src/service/render"

window.addEventListener("load", () => {
  let todos = JSON.parse(localStorage.getItem("todos")) || []
  render(todos)
})
