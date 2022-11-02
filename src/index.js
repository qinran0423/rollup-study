import { log } from './logger'
import messages from './messages'
import { name, version } from '../package.json'
console.log(name, version)
log(messages.hi)


import { camelCase } from 'lodash-es'
console.log(camelCase('hello rollup'))