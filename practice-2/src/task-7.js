export default function getPolynomial(...coefficients) {
    const trueCoefficients = coefficients.filter(value => value !== 0);
    if (trueCoefficients.length === 0) {
        return "0";
    }
    let n = coefficients.length - 1;

    return coefficients
        .map(el => {
            if (el === 0) {
                el = "";
            } else if (n === 0) {
                el = `${el}`;
            } else if (n === 1 && (el === 1 || el === -1)) {
                el = el === 1 ? "x" : "-x";
            } else if (el === 1 || el === -1) {
                el = el === 1 ? `x^${n}` : `-x^${n}`;
            } else if (n === 1) {
                el = `${el}*x`;
            } else {
                el = `${el}*x^${n}`;
            }
            n--;
            return el;
        })
        .reduce((res, value) => {
            if (value[0] === "-") {
                res += value;
            } else if (value !== "" && res !== "") {
                res += `+${value}`;
            } else {
                res += value;
            }
            return res;
        });
}
