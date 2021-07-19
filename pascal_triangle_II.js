/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let pascal = [[1], [1, 1], [1, 2, 1]];
  if (rowIndex <= 2) return pascal[rowIndex];

  for (let i = 3; i <= rowIndex; i++) {
    let row = new Array(i + 1);
    row[0] = 1;
    row[row.length - 1] = 1;

    let prevRow = pascal[i - 1];
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = prevRow[j - 1] + prev[j];
    }
    pascal.push(row);
  }
  return pascal[rowIndex];
};
