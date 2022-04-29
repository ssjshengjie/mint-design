import { ElementTypes } from "@vue/compiler-core";
import { PropType } from "vue";
import { ButtonSize, ButtonType } from "./types";

const props = {
  type: {
    type: String as PropType<ButtonType>,
    default: () => "" as ButtonType,
  },
  icon: {
    type: Object as PropType<ElementTypes>,
    default: null,
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: "" as ButtonSize,
  },
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  loading: Boolean,
  disabled: Boolean,
};
export default props;
// export type ButtonProps = ExtractPublicPropTypes<typeof props>
