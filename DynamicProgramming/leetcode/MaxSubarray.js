var maxSubarray = function(nums) {
  function recursive(arr) {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return arr[0];
    
    const mid = Math.floor(arr.length / 2);
    const left = recursive(arr.slice(0, mid));
    const right = recursive(arr.slice(mid));
    let leftSum = -Infinity;
    let rightSum = -Infinity;
    let tmpSum = 0

    let iter = mid;
    while (iter >= 0) {
      tmpSum += arr[iter];
      if (tmpSum > leftSum) {
        leftSum = tmpSum;
      }
      iter--;
    }
    iter = mid + 1;
    tmpSum = 0;
    while (iter < arr.length) {
      tmpSum += arr[iter];
      if (tmpSum > rightSum) {
        rightSum = tmpSum;
      }
      iter++;
    }
    return Math.max(
      left, right,
      leftSum + rightSum, leftSum, rightSum
    );
  }
  return recursive(nums)
}

console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4]))