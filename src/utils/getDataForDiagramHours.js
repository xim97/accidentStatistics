export default function getDataForDiagramDayOfTheWeek(data) {
    var result = [], hour;
    data.forEach(element => {
        hour = new Date(element.date).getHours();
        result[hour] === undefined ? result[hour] = 1 : result[hour]++
    }
    );    
    return result;
}