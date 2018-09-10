export default function createDataArrayForPlot(array) {
    var result = [];
    for (var key in array) {
        result.push({ x: key, y: array[key] });
    }
    return result;
}