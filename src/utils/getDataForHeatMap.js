export default function HeatMapLayerData(data) {
    var result = [];
    data.forEach(element =>
        result.push({
            location: new window.google.maps.LatLng(element.lat, element.lon),
            weight: element.severity === "Slight" ? 1 : 2
        }));
    return result;
}