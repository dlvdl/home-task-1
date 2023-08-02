import { TodoApp } from "../service/Todo"
import { render } from "../service/render"
const todoApp = new TodoApp()

export function todoTable(data, archiveVariant = false) {
  const table = document.createElement("div")

  const template = `
  <div>
    <button id="toggle">${
      archiveVariant ? "Archived todos" : "Active todos"
    }</button>
  </div>
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
  .map(({ name, created, category, content, dates, id, archived }) => {
    if ((!archived && archiveVariant) || (archived && !archiveVariant))
      return ""
    return `
    <tr class="table-row" id=${id}>
    <td class="table-cell">${name}</td>
    <td class="table-cell">${created}</td>
    <td class="table-cell">${category}</td>
    <td class="table-cell">${content}</td>
    <td class="table-cell">${dates.join(" ")}</td>
    <td class="table-cell">
      <button class="delete-button" type="button" data-id="${id}">
        <i class="fa-solid fa-trash" ></i>
      </button>
      <button class="archive-button" type="button" data-id="${id}">
        <i class="fa-solid fa-box-archive"></i>
      </button>
      <button>
      <a  href="src/pages/edit_todo_page.html?id=${id}">
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
  <a class="save-button" href="src/pages/create_todo_page.html"><i class="fa-solid fa-plus"></i></a>
</div>

<div class="button-box">
  ${data.length == 0 ? `<p>Todo list is empty</p>` : ""}
</div>
`
  table.innerHTML = template
  const deleteButtons = table.querySelectorAll(".delete-button")
  const archiveButtons = table.querySelectorAll(".archive-button")
  const toggleTableButton = table.querySelector("#toggle")

  if (deleteButtons) {
    Array.from(deleteButtons).forEach((element) => {
      element.addEventListener("click", (e) => {
        console.log(e)
        todoApp.delete(e.target.dataset.id)
        render({ archiveVariant })
      })
    })
  }

  if (archiveButtons) {
    Array.from(archiveButtons).forEach((element) => {
      element.addEventListener("click", (e) => {
        todoApp.changeState(e.target.dataset.id)
        render({ archiveVariant })
      })
    })
  }

  toggleTableButton.addEventListener("click", (e) => {
    render({ archiveVariant: !archiveVariant })
  })

  return table
}
