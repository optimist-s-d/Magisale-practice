/* eslint-disable array-callback-return */
export default function convertToRoman(n) {
    const decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanValues = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ];
    let result = "";
    decimalValues.map((el, index) => {
        while (n >= el) {
            result += romanValues[index];
            n -= el;
        }
    });
    return result;
}
