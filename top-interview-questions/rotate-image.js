/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    console.log(matrix);

    const n = matrix.length;
    // matrix = matrix.flat();
    for (let x = 0; x < n; x++) {
        let arr = matrix[x];
        for (let y = 0; y < n; y++) {}
    }

    console.log(matrix);
};

rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
]);

// n = 4
// (0, 0) --> (n - 1 - x, y)
// (0, 1) --> (n - 1 - x, y)

// (1, 0) --> (n - 1 - x, y)
// (1, 1) --> (n - 1, x, 1)
