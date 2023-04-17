const path = require('path')

// console.log(path.resolve(__dirname, 'src', 'database', 'knex', 'migrations'))
const fs = require('fs')

fs.access(
  path.resolve(__dirname, 'src', 'database', 'knex', 'migrations'),
  fs.constants.R_OK | fs.constants.W_OK,
  err => {
    if (err) {
      console.error('Unable to access database file:', err)
    } else {
      console.log('File can be read and written')
    }
  }
)

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'src', 'database', 'database.db')
    },
    pool: {
      afterCreate: (conn, cb) => {
        conn.run('PRAGMA foreign_keys = ON', cb)
      }
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.resolve(
        __dirname,
        'src',
        'database',
        'knex',
        'migrations'
      )
    }
  }
}
