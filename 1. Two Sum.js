// https://leetcode.com/problems/two-sum/description/

var twoSum = function (nums, target) {
  let n = 0;
  let m = 1;
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[n] + nums[m] === target) {
      result.push(n);
      result.push(m);
      console.log(result);
      return result;
    } else if (m < nums.length) {
      m++;
    } else {
      i = 0;
      n++;
      m = n + 1;
      console.log(n);
    }
  }
};

//segunda versao

var twoSum = function (nums, target) {
  const newArr = [];
  let i = 0;
  while (i < nums.length) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        newArr.push(i);
        newArr.push(j);
        console.log(i, j);
        return newArr;
      }
    }
    i++;
  }
};
