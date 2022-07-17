import { Component, ExtractPropTypes, PropType } from "vue";
export const iconProps = {
  color: String,
  size: [Number, String] as PropType<string | number>,
  component: Object as PropType<Component>,
} as const;
export type IconProps = ExtractPropTypes<typeof iconProps>;
