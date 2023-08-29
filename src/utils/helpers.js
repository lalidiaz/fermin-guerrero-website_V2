export const isImage = (url) => {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
};

export const validateURL = (url) => {
  const parsed = new URL(url);
  return ["https:", "http:"].includes(parsed.protocol);
};
