export function highAndLow(numString) {
  const numArr = numString.split(" ");
  // .map((str) => Number(str))
  // .sort((a, b) => a - b);

  // const { 0: low, [numArr.length - 1]: high } = numArr;

  console.log(numArr);
  let i = 0,
    end = numArr.length - 1;
  let high = Number(numArr[0]),
    low = Number(numArr[0]);

  while (i <= end) {
    let item = Number(numArr[i]);
    if (item > high) {
      high = item;
    } else if (item < low) {
      low = item;
    }
    i++;
  }

  console.log(numArr);

  return `${high} ${low}`;
}
