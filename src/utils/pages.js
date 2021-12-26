export const getPagesCount = (totalCountItems, limit) => {
  return Math.ceil(totalCountItems / limit);
};

export const createEmptyArray = (number) => {
  let resultArray = [];
  for (let i = 0; i < number; i++) {
    resultArray.push({});
  }

  return resultArray;
};
