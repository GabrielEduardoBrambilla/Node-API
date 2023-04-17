const sqliteConnection = require('../../sqlite')
const createUsers = require('./createUsers')

async function migrationsRun() {
  const schemas = [createUsers].join('')

  sqliteConnection()
    .then(async db => {
      try {
        await db.exec(schemas)
      } catch (error) {
        console.error(
          `Error running migrations in ${__filename}: ${error.message}`
        )
      }
    })
    .catch(error =>
      console.error(`Error connecting to database: ${error.message}`)
    )
}

module.exports = migrationsRun
