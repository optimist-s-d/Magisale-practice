import runRover from "./task-4.js";
import boundingRect from "./task-3.js";

function getExpeditionsTargets(commSeries) {
    return commSeries.map(commList => runRover(commList));
}

export default function boundingRover(commandSeries) {
    const targets = getExpeditionsTargets(commandSeries);
    return boundingRect(targets);
}
