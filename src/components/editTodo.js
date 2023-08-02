import "../../style.css"
import { TodoApp } from "../service/Todo"

const params = window.location.search
const id = new URLSearchParams(params).get("id")
const form = document.querySelector("#form")
const todoApp = new TodoApp()
const todo = todoApp.find(id)
const statusBox = document.querySelector(".status-box")

Array.from(form.children).forEach((element) => {
  const { name, value } = element
  if (element.tagName == "INPUT") {
    if (name === "name") {
      element.value = todo.name
    }
    if (name === "content") {
      element.value = todo.content
    }
  }

  if (element.tagName == "SELECT") {
    console.log(todo.category)
    element.value = todo.category
    element.title = todo.category
  }
})

form.addEventListener("submit", (e) => {
  e.preventDefault()
  let inputData = { name: "", content: "", category: "" }

  Array.from(form.children).forEach((element) => {
    const { name, value } = element
    if (element.tagName == "INPUT") {
      if (name === "name") {
        inputData = { ...inputData, name: value }
      }
      if (name === "content") {
        inputData = { ...inputData, content: value }
      }
    }

    if (element.tagName == "SELECT") {
      inputData = { ...inputData, category: value }
    }
  })

  todoApp.edit(id, inputData)

  statusBox.classList.remove("hide")
  setTimeout(() => {
    statusBox.classList.add("hide")
  }, 1000)
})
