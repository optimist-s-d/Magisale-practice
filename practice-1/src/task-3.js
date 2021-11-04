export default function sumDigits(n) {
    return String(n)
        .split("")
        .reduce((a, b) => +a + +b);
}
