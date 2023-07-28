import { TodoApp } from "../service/Todo"
import { render } from "../service/render"
const todoApp = new TodoApp()

export function summaryTable(data) {
  const summary = todoApp.getSummary((data) => data.category)

  const table = document.createElement("table")
  table.className = "table"
  const template = `<thead>
    <tr>
        <th>Note category</th>
        <th>Active</th>
        <th>Archived</th>
    </tr>
  </thead>
  <tbody>
    ${summary
      .map((element) => {
        return `<tr class="table-row">
      <td class="table-cell">${element.name}</td>
      <td class="table-cell">${element.active}</td>
      <td class="table-cell">${element.archived}</td>`
      })
      .join("")}
      
  </tr>
  </tbody>`

  table.innerHTML = template

  return table
}
