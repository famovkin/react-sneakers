export const sliceError = (string, firstLetter, lastLetter) => {
  return string.toString().split("").slice(firstLetter, lastLetter).join("");
};
