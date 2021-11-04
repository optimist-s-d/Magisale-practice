/* eslint-disable guard-for-in */
/* eslint-disable no-unused-expressions */

export default function merge(data) {
    const res = {};
    data.forEach(obj => {
        for (const prop in obj) {
            prop in res ? res[prop].push(obj[prop]) : (res[prop] = [obj[prop]]);
        }
    });

    return res;
}
