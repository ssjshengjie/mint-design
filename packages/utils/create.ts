// block 代码块 element 元素 modifier 装饰 bem  satet 状态
//mt-button
//mt-button_element
//mt-button_element--disabled
//is-checked is-enabeld
//:class=[bem.b('button')]
export function createNamespace(name: string) {
  const prefixName = `mt-${name}`;
  return createBEM(prefixName);
}
function createBEM(prefixName: string) {
  const b = (blockSuffix: string = "") => _bem(prefixName, blockSuffix, "", "");
  const e = (element: string = "") =>
    element ? _bem(prefixName, "", element, "") : "";
  const m = (modifier: string = "") =>
    modifier ? _bem(prefixName, "", "", modifier) : "";
  const be = (blockSuffix: string, element: string) =>
    blockSuffix && element ? _bem(prefixName, blockSuffix, element, "") : "";
  const bm = (blockSuffix: string, modifier: string = "") =>
    blockSuffix && modifier ? _bem(prefixName, blockSuffix, "", modifier) : "";
  const em = (element: string, modifier: string = "") =>
    element && modifier ? _bem(prefixName, "", element, modifier) : "";
  const bem = (blockSuffix: string, element: string, modifier: string = "") =>
    blockSuffix && element && modifier
      ? _bem(prefixName, blockSuffix, element, modifier)
      : "";
  const is = (name: string, state: string | boolean) =>
    state ? `is-${name}` : "";
  return { b, e, m, be, bm, em, bem, is };
}
//前缀名字 prefixName-blockSuffix_element--modifier
function _bem(
  prefixName: string,
  blockSuffix: string,
  element: string,
  modifier: string
) {
  if (blockSuffix) {
    prefixName += `-${blockSuffix}`;
  }
  if (element) {
    prefixName += `__${element}`;
  }
  if (modifier) {
    prefixName += `--${modifier}`;
  }
  return prefixName;
}
const bem = createNamespace("");
