/*You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
*/
function maxDiff(list) {
    if (list.length === 0) return 0;   
    const max = Math.max(...list);
    const min = Math.min(...list);
    return max - min;
} 
console.log(maxDiff([1, 2, 3, 4, 5]));    // 4 (5 - 1)
console.log(maxDiff([-5, -1, -10]));      // 9 (-1 - (-10))
console.log(maxDiff([42]));               // 0 (single element)
console.log(maxDiff([]));                 // 0 (empty array)