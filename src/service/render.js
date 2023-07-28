import { todoTable } from "../components/todoTable"
import { archiveTable } from "../components/archiveTable"
import { TodoApp } from "../service/Todo"
const todoApp = new TodoApp()

export function render() {
  const todos = todoApp.getTodos()
  document.querySelector("#app").innerHTML = ""
  document.querySelector("#app").appendChild(todoTable(todos))
  document.querySelector("#app").appendChild(archiveTable(todos))
}
