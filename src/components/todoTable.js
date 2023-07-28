import { TodoApp } from "../service/Todo"
import { render } from "../service/render"
const todoApp = new TodoApp()

export function todoTable(data) {
  const table = document.createElement("div")

  const template = `
  
  <table class="table">
  <thead>
  <tr>
      <th>Name</th>
      <th>Created</th>
      <th>Category</th>
      <th>Content</th>
      <th>Dates</th>
      <th>
        <i class="fa-solid fa-trash"></i>
        <i class="fa-solid fa-box-archive"></i>
      </th>
  </tr>
</thead>
<tbody>
${data
  .map(({ name, created, category, content, dates, id, archived }, i) => {
    if (archived) return ""
    return `
    <tr class="table-row" id=${id}>
    <td class="table-cell">${name}</td>
    <td class="table-cell">${created}</td>
    <td class="table-cell">${category}</td>
    <td class="table-cell">${content}</td>
    <td class="table-cell">${dates.join(" ")}</td>
    <td class="table-cell">
      <button>
        <i class="fa-solid fa-trash" id="delete" data-id="${id}"></i>
      </button>
      <button>
        <i class="fa-solid fa-box-archive" id="archive" data-id="${id}"></i>
      </button>
      <button>
      <a  href="edit_todo.html?id=${id}">
        <i class="fa-solid fa-pen-to-square"></i>
      </a>
      </button>
    </td>
</tr> `
  })
  .join(" ")}
  
</tbody>  
  
  </table>
  
<div class="button-box">
  <a class="save-button" href="todo.html"><i class="fa-solid fa-plus"></i></a>
</div>
`
  table.innerHTML = template
  const deleteButton = table.querySelector("#delete")
  const archiveButton = table.querySelector("#archive")

  if (deleteButton) {
    deleteButton.addEventListener("click", (e) => {
      todoApp.delete(e.target.dataset.id)
      render()
    })
  }

  if (archiveButton) {
    archiveButton.addEventListener("click", (e) => {
      todoApp.changeState(e.target.dataset.id)
      render()
    })
  }

  return table
}
