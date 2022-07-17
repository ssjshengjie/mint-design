import { createNamespace } from "@mint-design/utils/create";
import { computed, defineComponent, h } from "vue";
import { buttonProps } from "./prop";

export const MtButton = defineComponent({
  name: "MtButton",
  props:buttonProps,
  setup(props, { slots }) {
    const bem = createNamespace("button");
    const mold = {
      primary: `${bem.b(),bem.m('primary')}`,
      success:`${bem.b(),bem.m('success')}`,
      info: `${bem.b(),bem.m('info')}`,
      warning: `${bem.b(),bem.m('warning')}`,
      danger: `${bem.b(),bem.m('danger')}`,
      "": `${bem.b(),bem.m()}`,
    };
     const magnitude = {
      mini: `${bem.b(),bem.m('primary')}`,
      small: `${bem.b(),bem.m('primary')}`,
      medium: `${bem.b(),bem.m('primary')}`,
      "": "",
     };
    const type = `${mold[props.type]}`,
          size = `${magnitude[props.size]}`,
          plain = `${props.plain ? bem.is('plain',true) : ''}`,
          round=` ${props.round ? bem.e('round') : ''}`,
          circle = `${props.circle ? bem.e('circle') : ''} `
    const loading = computed(() => props.loading);
    const disabled = computed(() => props.disabled);
    const renderSolt = () => {
      return slots.default && slots?.default();
    };
    const renderIconSolt = () => {
      return h(props.icon);
    };
    return () => {
      return (
        <button class={[bem.b(), type, size, plain, round, circle]}>
          <span>{ renderIconSolt()}</span>
          <span>{renderSolt()}</span>
        </button>
      );
    };
  },
});

