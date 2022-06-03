export type Dict<T> = Record<string, T>
export type StringDict = Dict<string>
export type NumberDict = Dict<number>

export const or = (
  subject: Dict<unknown>,
  ...fns: Array<(subject: Dict<unknown>) => boolean>
) => fns.reduce((bool, fn) => bool || fn(subject), false)
