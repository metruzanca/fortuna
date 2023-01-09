import inquirer from 'inquirer'
import chalk from 'chalk';

import { readFile, writeFile } from 'fs/promises'
import { resolve } from 'path'

// import { flashStudentNames } from './utils.mjs'

const DATA_PATH = resolve('./data.json')

const data = await readFile(DATA_PATH, { encoding: 'utf-8' }).then(str => JSON.parse(str))

// await flashStudentNames(data)

// TODO weighted selection

const selectedIndex = 0
const selected = data.students[selectedIndex].name

console.log(chalk.bold('Checking for understanding'));

const { understands } = await inquirer.prompt([{
  name: 'understands',
  message: `Does ${chalk.blue(selected)} undestand?`,
  type: 'confirm'
}])

understands