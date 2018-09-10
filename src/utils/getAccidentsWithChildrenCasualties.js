export default function getAccidentsWithChildrenCasualties(data) {
    return (
        data.filter(element =>
            element.casualties.findIndex(casualty =>
                casualty.ageBand === "Child") !== -1
        )
    );
}