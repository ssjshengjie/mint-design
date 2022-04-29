const ns = "mt-button-";
export type ButtonType =
  | "primary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "";
export const type = {
  primary: `${ns}primary`,
  success: `${ns}success`,
  info: `${ns}info`,
  warning: `${ns}warning`,
  danger: `${ns}danger`,
  "": `${ns}default`,
};
export type ButtonSize = "mini" | "small" | "medium" | "";
export const size = {
  mini: `${ns}mini`,
  small: `${ns}small`,
  medium: `${ns}medium`,
  "": "",
};
