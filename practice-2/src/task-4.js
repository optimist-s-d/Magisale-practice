/* eslint-disable array-callback-return */
/* eslint-disable radix */
export default function runRover(commandsList) {
    const coords = [...commandsList].sort((a, b) => a.order - b.order);
    const comands = [...coords].map(el => el.command);
    let direction = 0;

    const directionsList = [0, 0, 0, 0];
    /*             top, left, bottom, rigth*/
    comands.map(com => {
        if (com.includes("go")) {
            directionsList[direction] += parseInt(com.replace(/\D+/g, ""));
        }
        if (com.includes("turn")) {
            if (com.includes("left")) {
                direction++;
            }
            if (com.includes("right")) {
                if (direction === 0) {
                    direction = 3;
                } else {
                    direction--;
                }
            }
        }
    });
    return {
        x: directionsList[3] - directionsList[1],
        y: directionsList[0] - directionsList[2]
    };
}
