import "./style.css"
import { TodoApp } from "./src/service/Todo"

const form = document.querySelector("#form")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  let todo = { name: "", content: "", category: "" }

  Array.from(form.children).forEach((element) => {
    const { name, value } = element
    if (element.tagName == "INPUT") {
      if (name === "name") {
        todo = { ...todo, name: value }
      }
      if (name === "content") {
        todo = { ...todo, content: value }
      }
    }

    if (element.tagName == "SELECT") {
      todo = { ...todo, category: value }
    }
  })

  const { category, name, content } = todo
  const todoApp = new TodoApp()
  todoApp.create(name, content, category)
})
