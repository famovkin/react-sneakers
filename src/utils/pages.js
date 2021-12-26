export const getPagesCount = (totalCountItems, limit) => {
  return Math.ceil(totalCountItems / limit);
};
