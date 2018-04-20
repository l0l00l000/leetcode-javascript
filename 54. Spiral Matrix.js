/**
 * 54. Spiral Matrix
 * 
 * Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
 * 
 * Example 1:
 * Input:
 * [
 *  [ 1, 2, 3 ],
 *  [ 4, 5, 6 ],
 *  [ 7, 8, 9 ]
 * ]
 * 
 * Output: [1,2,3,6,9,8,7,4,5]
 * 
 * Example 2:
 * Input:
 * [
 *   [1, 2, 3, 4],
 *   [5, 6, 7, 8],
 *   [9,10,11,12]
 * ]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
	var n = matrix.length;
	var m = (matrix[0] || []).length;
	var res = [];
	var x1 = 0;
	var x2 = m - 1;
	var y1 = 0;
	var y2 = n - 1;
	while (x1 <= x2 && y1 <= y2) {
		for (var x = x1; x <= x2; x++) res.push(matrix[y1][x]);
		for (var y = y1 + 1; y <= y2; y++) res.push(matrix[y][x2]);
		if (x1 < x2 && y1 < y2) {
			for (var x = x2 - 1; x > x1; x--) res.push(matrix[y2][x]);
			for (var y = y2; y > y1; y--) res.push(matrix[y][x1]);
		}
		x1++;
		x2--;
		y1++;
		y2--;
	}
	return res;
};

// 横的当做 x 轴，竖的当 y 轴
// x1、x2、y1、y2 是当前遍历的四边形的四个角
