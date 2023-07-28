export function archiveTable(data) {
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
      <tr class="table-row">
      <td class="table-cell">Task</td>
      <td class="table-cell">1</td>
      <td class="table-cell">0</td>
  </tr>
  </tbody>`

  table.innerHTML = template

  return table
}
