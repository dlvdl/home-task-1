import "./style.css"
import { table } from "./src/components/Table"
import { setupCounter } from "./counter.js"

document.querySelector("#app").innerHTML = `
  <div>
    ${table()}
  </div>
`

// setupCounter(document.querySelector('#counter'))
