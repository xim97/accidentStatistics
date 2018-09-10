export default function getDataForDiagramDayOfTheWeek(data) {
    var result = [], dayOfTheWeek,
        daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "WednesDay", "Thursday", "Friday", "Saturday"];
    data.forEach(element => {
        dayOfTheWeek = daysOfTheWeek[new Date(element.date).getDay()];
        result[dayOfTheWeek] === undefined ? result[dayOfTheWeek] = 1 : result[dayOfTheWeek]++
    }
    );    
    return result;
}