import { PropType } from "vue";
import { ButtonType } from "./types";

const props = {
  type: {
    type: String as PropType<ButtonType>,
    default: "" as ButtonType,
  },
};
export default props;
// export type ButtonProps = ExtractPublicPropTypes<typeof props>
