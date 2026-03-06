export const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const truncate = (text, length = 100) => {
  if (text.length > length) {
    return text.substring(0, length) + "...";
  }
  return text;
};