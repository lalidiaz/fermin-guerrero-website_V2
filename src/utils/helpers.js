export const isImage = (url) => {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
};

export const validateURL = (url) => {
  const parsed = new URL(url);
  return ["https:", "http:"].includes(parsed.protocol);
};

export const sortByYear = (array) =>
  array.sort(
    (a, b) =>
      (b.fields.year != undefined ? b.fields.year : Infinity) -
      (a.fields.year != undefined ? a.fields.year : Infinity)
  );
