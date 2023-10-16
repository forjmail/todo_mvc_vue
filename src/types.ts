export interface Todo {
  id: number
  title: string
  completed: boolean
}

export interface Filters {
  [key: string]: Function
}
