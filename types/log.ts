import { Dict } from './util'
import { Entry } from './entry'

export type Log = Dict<Entry>
export const defaultLog: Log = {}
export const registerLog = (log: Log = defaultLog) => ({
  log,
  addEntry: (entry: Entry) => ({ ...log, [new Date().toISOString()]: entry }),
})
