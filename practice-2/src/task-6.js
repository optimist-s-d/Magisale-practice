export default function findPath(obj) {
    let res = "";

    if (Object.keys(obj).length === 0) {
        return null;
    }
    for (const key in obj) {
        if (obj[key] === 15) {
            res = `${key}`;
        } else if (typeof obj[key] === "object") {
            res = `${key}.${findPath(obj[key])}`;
        }
    }
    if (res !== "" && res.lastIndexOf(".") === res.length - 1) {
        res = null;
    }

    return res;
}
