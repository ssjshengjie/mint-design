import { TreeOption } from "@mint-design/components/tree/src/interface"
export interface TreeNode extends Required<TreeOption> {
  level: number,
  rawNode: TreeOption
  children: TreeNode[],
  isLeaf: boolean
}