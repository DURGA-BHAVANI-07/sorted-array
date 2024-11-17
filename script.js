function sortArrayAroundMiddle(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  const midIndex = Math.floor(arr.length / 2);
  const leftPart = [];
  const rightPart = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < midIndex) {
      leftPart.push(arr[i]);
    } else {
      rightPart.push(arr[i]);
    }
  }

  for (let i = 0; i < leftPart.length - 1; i++) {
    for (let j = i + 1; j < leftPart.length; j++) {
      if (leftPart[i] > leftPart[j]) {
        [leftPart[i], leftPart[j]] = [leftPart[j], leftPart[i]];
      }
    }
  }

  for (let i = 0; i < rightPart.length - 1; i++) {
    for (let j = i + 1; j < rightPart.length; j++) {
      if (rightPart[i] > rightPart[j]) {
        [rightPart[i], rightPart[j]] = [rightPart[j], rightPart[i]];
      }
    }
  }

  return [...leftPart, ...rightPart];
}

const array = [12, 7, 19, 3, 5, 15, 10];
const sortedArray = sortArrayAroundMiddle(array);
console.log(sortedArray); 




function sortDuplicatesFirst(inputArray) {
    if (!Array.isArray(inputArray) || inputArray.length === 0) return [];

    const countMap = {};
    const duplicateValues = [];
    const uniqueValues = [];

    for (let item of inputArray) {
        countMap[item] = (countMap[item] || 0) + 1;
    }

    inputArray.forEach(item => {
        if (countMap[item] > 1) {
            if (!duplicateValues.includes(item)) {
                duplicateValues.push(...Array(countMap[item]).fill(item)); 
            }
        } else {
            uniqueValues.push(item);
        }
    });

    return [...duplicateValues, ...uniqueValues];
}

const numbers = [3, 9, 3, 4, 5, 9, 6, 4];
const result = sortDuplicatesFirst(numbers);
console.log(result); 
