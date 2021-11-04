export default function boundingRect(coordsList) {
    const coordsX = coordsList.map(el => el.x);
    const coordsY = coordsList.map(el => el.y);
    if (coordsList.length === 0) {
        return { top: 0, bottom: 0, left: 0, right: 0 };
    }
    return {
        top: Math.max(...coordsY),
        bottom: Math.min(...coordsY),
        left: Math.min(...coordsX),
        right: Math.max(...coordsX)
    };
}
