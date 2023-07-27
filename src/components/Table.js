export function table() {
  return `<table class="table">
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
        <tr class="table-row">
            <td class="table-cell">Shopping list</td>
            <td class="table-cell">July 2023</td>
            <td class="table-cell">Task</td>
            <td class="table-cell">Tomatoes, bread</td>
            <td class="table-cell"></td>
            <td class="table-cell">
              <button>
                <i class="fa-solid fa-trash"></i>
              </button>
              <button>
                <i class="fa-solid fa-box-archive"></i>
              </button>
              <button>
              <i class="fa-solid fa-pen-to-square"></i>
              </button>
            </td>
        
    </tbody>
</table>`
}
