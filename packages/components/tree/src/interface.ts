export type Key = string | number
export interface TreeOption {
  label?: Key,
  key?: Key
  children?: TreeOption[],
  isLeaf?: boolean
  [key: string]: unknown
}