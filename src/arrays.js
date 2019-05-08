export default array => {
  const sortNumber = (a, b) => {
    return a - b;
  };
  const negativeArr = array.filter(item => item < 1).sort(sortNumber);
  const positiveArr = array
    .filter(item => item > 0)
    .sort(sortNumber)
    .reverse();
  console.log("negative: ", negativeArr);
  console.log("positive: ", positiveArr);

  const positivePairs = [];
  const negativePairs = [];

  for (let i = 0; i < positiveArr.length; i++) {
    if (i % 2 === 0) {
      if (positiveArr[i] === 1) {
        positivePairs.push(1);
        continue;
      }
      if (i + 1 < positiveArr.length) {
        if (positiveArr[i + 1] !== 1) {
          positivePairs.push(positiveArr[i] * positiveArr[i + 1]);
        } else {
          positivePairs.push(positiveArr[i]);
        }
      }
    } else {
      if (positiveArr[i] === 1) {
        positiveArr.push(1);
      }
    }
  }

  for (let i = 0; i < negativeArr.length; i += 2) {
    i + 1 < negativeArr.length
      ? negativePairs.push(negativeArr[i] * negativeArr[i + 1])
      : negativePairs.push(negativeArr[i]);
  }

  const positivePairsSum = positivePairs.reduce((a, b) => a + b, 0);
  const negativePairsSum = negativePairs.reduce((a, b) => a + b, 0);

  console.log("pairs product: ", positivePairs);
  console.log("negative product: ", negativePairs);
  console.log("pairs sum: ", positivePairsSum);
  console.log("negative pairs sum: ", negativePairsSum);
  console.log("LARGEST SUM: ", positivePairsSum + negativePairsSum);
  return positivePairsSum + negativePairsSum;
};
