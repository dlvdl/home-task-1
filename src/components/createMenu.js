export function createMenu(data) {
  const table = document.createElement("div")
  const saveBtn = document.createElement("button")
  saveBtn.innerText = "save"
  saveBtn.className = "save-button"

  const template = `
  <table class="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Content</th>
        </tr>
    </thead>
    <tbody>
        <tr class="table-row">
        <td class="table-cell">
            <input></input>
        </td>
        <td class="table-cell">
            <input></input>
        </td>
        <td class="table-cell">
            <input></input>
        </td>
        </tr> 
    </tbody>
  </table>

  
    `

  table.innerHTML = template
  table.appendChild(saveBtn)

  return table
}
