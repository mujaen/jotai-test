/**
 * Logger 메시지를 설정합니다.
 */

const chalk = require('chalk')

const logger = {
  error: err => {
    console.error(chalk.red(err))
  },
  appStarted: port => {
    console.log(`Server started ! ${chalk.green('✓')} Port: ${port}`)
    console.log(`Node Env: ${process.env.NODE_ENV}`)
    console.log(`Distribution Env: ${process.env.DIST_ENV}`)
  },
}

module.exports = logger
