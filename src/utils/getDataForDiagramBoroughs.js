export default function getDataForDiagramBoroughs(data) {
    var result = [];    
    data.forEach(element =>
        result[element.borough] === undefined ? result[element.borough] = 1 : result[element.borough]++
    );
    return result;
}