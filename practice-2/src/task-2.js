export default function createCounter(n) {
    let res = 0;
    return () => (res += n) - n;
}
