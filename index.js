const fs = require('fs')
const startedAt = Date.now()
const db = new (require('./main/table.js'))('database', this.options)

module.exports = {
  version: require('./package.json').version,
  startedAt: startedAt,
  Table: require('./main/table.js'),
  set: (key, value) => db.set(key, value),
  get: (key) => db.get(key),
  all: () => db.all(),
  startsWith: (search) => db.startsWith(search),
  has: (key) => db.has(key),
  type: (key) => db.type(key),
  add: (key, amount) => db.add(key, amount),
  subtract: (key, amount) => db.subtract(key, amount),
  delete: (key) => db.delete(key),
  deleteAll: () => db.deleteTable(),
  import: (data) => db.import(data),
  importQuick: (data) => db.importQuick(data),
  options: (options) => this.options = options
}
