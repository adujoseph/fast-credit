export const capitalize = text => {
  let a = text.slice(1);
  let b = text.charAt(0);
  return b.toUpperCase() + a;
};
