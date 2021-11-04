/* eslint-disable func-style */
export default function formatTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let partOfDay;
    if (hours < 12) {
        partOfDay = "AM";
    } else {
        partOfDay = "PM";
        hours %= 12;
    }
    const minutes = Math.floor((seconds % 3600) / 60);
    seconds = seconds % 60;
    hours = hours === 0 ? (hours = 12) : hours;
    const addNull = function(x) {
        return (x <= 9 ? "0" : "") + String(x);
    };
    return `${addNull(hours)}:${addNull(minutes)}:${addNull(seconds)} ${partOfDay}`;
}
