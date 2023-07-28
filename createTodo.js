import "./style.css"
import { TodoApp } from "./src/service/Todo"
const form = document.querySelector("#form")
const statusBox = document.querySelector(".status-box")
const todoApp = new TodoApp()

form.addEventListener("submit", (e) => {
  e.preventDefault()
  let todo = { name: "", content: "", category: "" }

  Array.from(form.children).forEach((element) => {
    const { name, value } = element
    if (element.tagName == "INPUT") {
      if (name === "name") {
        todo = { ...todo, name: value }
        element.value = ""
      }
      if (name === "content") {
        todo = { ...todo, content: value }
        element.value = ""
      }
    }

    if (element.tagName == "SELECT") {
      todo = { ...todo, category: value }
      element.value = ""
    }
  })

  const { category, name, content } = todo
  todoApp.create(name, content, category)

  statusBox.classList.remove("hide")
  setTimeout(() => {
    statusBox.classList.add("hide")
  }, 1000)
})
