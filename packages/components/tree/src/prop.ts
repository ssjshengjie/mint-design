import { ExtractPropTypes, PropType } from "vue";
import { Key, TreeOption } from "./interface";


export const treeProps = {
  data: {
    type: Array as PropType<TreeOption[]>,
    default: () => [] as TreeOption[]
  },
  defaultExpandedKeys: {
    type: Array as PropType<Key[]>,
    default: () => [] as Key[]
  },
  labelField: {
    type: String,
    default: 'label'
  },
  keyField: {
    type: String,
    default: 'key'
  },
  childrenField: {
    type: String,
    default: 'children'
  }
} as const

export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>
