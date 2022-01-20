export const getPagesCount = (totalCountItems, limit) => {
  return Math.ceil(totalCountItems / limit);
};

export const createArrWithEmptyObjs = (number) => {
  const resultArray = [];
  for (let i = 0; i < number; i++) {
    resultArray.push({});
  }

  return resultArray;
};

export const getRandomNumber = (min, max) => {
  return Math.ceil(Math.random() * (max - min + 1));
};
