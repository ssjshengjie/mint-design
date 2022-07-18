import { createNamespace } from "@mint-design/utils/create";
import { computed, defineComponent, h, mergeProps } from "vue";
import { iconProps } from "./prop";

export const MtIcon = defineComponent({
  name: "MtIcon",
  props: iconProps,
  setup(props) {
    const bem = createNamespace("icon");
    const style = computed(() => {
      if (!props.size && !props.color) return {};
      const color = props.color ? { color: `${props.color}` } : {};
      const size = props.size ? { "font-size": `${props.size}px` } : {};
      return {
        ...color,
        ...size,
      };
    });
    return {
      bem,
      style,
    };
  },
  render() {
    const { bem, style, component } = this;
    return h(
      "i",
      mergeProps(this.$attrs, {
        class: bem.b(),
        style,
      }),
      component ? h(component) : this.$slots
    );
  },
});
