const countIntegerInstancesInArray = (arr) => {
  const integerInstances = {};
  arr.forEach((int) => {
    if (Number.isInteger(int)) {
      if (integerInstances[int]) {
        integerInstances[int] += 1;
      } else {
        integerInstances[int] = 1;
      }
    }
  });
  return Object.values(integerInstances);
};

console.log(countIntegerInstancesInArray([1,2,2,3,3,3,0,0,0,0,0,0,4,4,4,4,5,5,5,5]));
