import { computed, defineComponent } from "vue";
import props from "./props";
import { type, size } from "./types";
import "./button.scss";
const Button = defineComponent({
  name: "mt-button",
  props,
  setup(prop, { slots }) {
    const loading = computed(() => prop.loading);
    const disabled = computed(() => prop.disabled);
    const Class = () => {
      return `
      mt-button
      ${type[prop.type]}
      ${size[prop.size]}
      ${prop.plain ? "is-plain" : ""}
      ${prop.round ? "mt-button-round" : ""}
      ${prop.circle ? "mt-button-circle" : ""}
      `;
    };
    const renderSolt = () => {
      return slots.default && slots?.default();
    };
    const renderIconSolt = () => {
      return props.icon;
    };
    return () => {
      return (
        <button class={Class()}>
          <span>{renderSolt()}</span>
        </button>
      );
    };
  },
});
export default Button;
