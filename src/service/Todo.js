class Schema {
  constructor(id, name, content, created, category, dates, archived) {
    this.id = id
    this.name = name
    this.content = content
    this.created = created
    this.category = category
    this.dates = dates
    this.archived = archived
  }
}

class Todo extends Schema {
  constructor(id, name, content, created, category, dates, archived) {
    super(id, name, content, created, category, dates, archived)
  }
}

class DateExtractor {
  extractDates(string) {
    const result = []
    const strPattern = [
      "\\d{2}-\\d{2}-\\d{4}",
      "[0-9]{2}/{1}[0-9]{2}/{1}[0-9]{4}",
      "\\d{1,2}-(January|February|March|April|May|June|July|August|September|October|November|December)-\\d{4}",
      "\\d{4}-\\d{1,2}-\\d{1,2}",
      "[0-9]{1,2}\\s(January|February|March|April|May|June|July|August|September|October|November|December)\\s\\d{4}",
      "\\d{1,2}-\\d{1,2}-\\d{4}",
    ]

    for (let i = 0; i < 6; i++) {
      const pattern = new RegExp(strPattern[i], "g")
      let matcher = string.matchAll(pattern)
      for (const match of matcher) {
        result.push(match)
      }
    }

    return result
  }
}

class Factory {
  constructor() {
    this.dateExtractor = new DateExtractor()
  }
  create(name, content, category) {
    const dates = this.dateExtractor.extractDates(content)
    const id = Math.round(Math.random() * 10000)
    const created = new Date().toLocaleDateString("en-US")
    const archived = false
    return new Todo(id, name, content, created, category, dates, archived)
  }
}

export class TodoApp {
  constructor() {
    this.factory = new Factory()
    this.dateExtractor = new DateExtractor()
  }

  create(name, content, category) {
    const todo = this.factory.create(name, content, category)
    this.save(todo)
    return todo
  }

  save(todo) {
    let todos = this.getTodos()
    todos = [...todos, todo]
    localStorage.clear()
    localStorage.setItem("todos", JSON.stringify(todos))

    console.log(todos)
  }

  getTodos() {
    let todos = JSON.parse(localStorage.getItem("todos")) || []
    return todos
  }

  find(id) {
    let result = null
    let todos = this.getTodos()

    result = todos.find((element) => element.id === +id)

    return result
  }

  delete(id) {
    let result = null
    let todos = this.getTodos()

    result = todos.filter((element) => {
      return element.id !== +id
    })

    localStorage.clear()
    localStorage.setItem("todos", JSON.stringify(result))

    return result
  }

  edit(id, newData) {
    let todos = this.getTodos()
    let result = todos.map((element) => {
      if (element.id === +id) {
        const { name, category, content } = newData
        let dates = this.dateExtractor.extractDates(content)
        element = { ...element, name, category, content, dates }
        return element
      }
    })

    localStorage.clear()
    localStorage.setItem("todos", JSON.stringify(result))

    return result
  }

  changeState(id) {
    let todos = this.getTodos()
    let result = todos.map((element) => {
      if (element.id === +id) {
        element = { ...element, archived: !element.archived }
        return element
      }
    })

    localStorage.clear()
    localStorage.setItem("todos", JSON.stringify(result))

    return result
  }

  getSummary(groupName) {
    let todos = this.getTodos()
    let counts = []

    for (let todo of todos) {
      let name = groupName(todo)
      let known = counts.findIndex((c) => c.name == name)

      if (known == -1) {
        if (todo.archived) {
          counts.push({ name, active: 0, archived: 1 })
        } else {
          counts.push({ name, active: 1, archived: 0 })
        }
      } else {
        if (todo.archived) {
          counts[known].archived++
        } else {
          counts[known].active++
        }
      }
    }

    return counts
  }
}
