import { MtIcon } from "@mint-design/components/icon";
import { createNamespace } from "@mint-design/utils/create";
import { defineComponent } from "vue";
import { treeNodeProps } from "./prop";
export const MtTreeNode = defineComponent({
  props: treeNodeProps,
  emits: ['toogle'],
  setup(props, { emit }) {
    const bem = createNamespace('tree-node')
    const handleExpand = () => {
      emit('toogle', props.node)
    }
    return () => <div class={[bem.b()]}>
      <div class={bem.e('content')} style={{ paddingLeft: `${props.node.level * 16}px` }}>
        <span class={[bem.e('expand-icon'), props.expanded && !props.node.isLeaf ? 'expaned' : '', bem.is("leaf", props.node.isLeaf)]} onClick={handleExpand}>
          <MtIcon size={20} color="rgba(255, 255, 255, 0.52)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M12 8l10 8l-10 8z"></path></svg>
          </MtIcon>
        </span>
        <span> {props.node?.label}</span>
      </div>
    </div>
  }
})