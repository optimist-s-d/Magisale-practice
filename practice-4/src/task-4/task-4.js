/* eslint-disable no-unused-expressions */
export default function showDialog(dialogEl) {
    $(dialogEl).modal("show");

    return new Promise((resolve, reject) => {
        dialogEl.addEventListener("click", event => {
            event.target.classList.contains("yes")
                ? resolve()
                : reject(new Error("Failed to confirm"));
        });
    });
}
