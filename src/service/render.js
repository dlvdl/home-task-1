import { todoTable } from "../components/todoTable"
import { summaryTable } from "../components/summaryTable"
import { TodoApp } from "../service/Todo"
const todoApp = new TodoApp()

export function render() {
  const todos = todoApp.getTodos()
  document.querySelector("#app").innerHTML = ""
  document.querySelector("#app").appendChild(todoTable(todos))
  document.querySelector("#app").appendChild(summaryTable(todos))
}
