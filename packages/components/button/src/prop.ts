
import { Component, ExtractPropTypes, PropType } from "vue";
export const buttonProps = {
  type: {
    type: String as PropType<| "primary" | "success" | "info" | "warning" | "danger" | "">,
    default: () => ""
  },
  icon: Object as PropType<Component>,
  size: {
    type: String as PropType<"mini" | "small" | "medium" | "">,
    default: "",
  },
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  loading: Boolean,
  disabled: Boolean,
} as const;
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;