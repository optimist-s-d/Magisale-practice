import { getJSON } from "./task-1.js";

export default function getSequential(urls) {
    const result = [];

    return new Promise((resolve, reject) => {
        urls.map(url => {
            getJSON(url).then(response => {
                result.push(response);
                if (result.length === urls.length) { resolve(result); }
            }).catch(() => {
                reject(new Error(`failed to fetch ${url}`));
            });
        });
    });
}
