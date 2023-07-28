import { todoTable } from "../components/todoTable"
import { summaryTable } from "../components/summaryTable"
import { TodoApp } from "../service/Todo"
const todoApp = new TodoApp()

export function render(statements) {
  const todos = todoApp.getTodos()
  const { archiveVariant } = statements

  document.querySelector("#app").innerHTML = ""
  document.querySelector("#app").appendChild(todoTable(todos, archiveVariant))
  document.querySelector("#app").appendChild(summaryTable(todos))
}
