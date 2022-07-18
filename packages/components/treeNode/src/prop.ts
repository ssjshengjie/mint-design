import { ExtractPropTypes, PropType } from "vue"

import { TreeNode } from "./interface"


export const treeNodeProps = {
  node: {
    type: Object as PropType<TreeNode>,
    required: true
  },
  expanded: {
    type: Boolean,
    required: true
  }
}
export type TreeNodeProps = Partial<ExtractPropTypes<typeof treeNodeProps>>