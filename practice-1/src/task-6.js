
export default function getStats(data) {
    if (data.length > 0) {
        return {
            min: Math.min(...data),
            max: Math.max(...data),
            avg:
            data.reduce((res, curr) => res + curr) / data.length
        };
    } return {
        min: null,
        max: null,
        avg: null
    };
}
