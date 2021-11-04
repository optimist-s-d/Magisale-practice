/* eslint-disable no-unused-expressions */

export default function getTopLetter(str) {
    const message = new Map();
    [...str].forEach(el => {
        !message.has(el)
            ? message.set(el, 1)
            : message.set(el, message.get(el) + 1);
    });
    let maxValue = 0;
    message.forEach(val => {
        maxValue = val > maxValue ? val : maxValue;
    });

    return [...message].find(([, value]) => maxValue === value)[0];
}

