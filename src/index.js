
exports.min = function min(array) {
    if (array && array.length > 0) {
        let minArray = array.sort((a, b) => a - b);
        return minArray[0];
    } else return `0`;
}

exports.max = function max(array) {
    if (array && array.length > 0) {
        let maxArray = array.sort((a, b) => a - b);
        return maxArray[array.length - 1];
    } else return 0;
}

exports.avg = function avg(array) {
    if (array && array.length > 0) {
        let sum = array.reduce((a, b) => a + b);
        return sum / array.length;
    } else return 0;
}
