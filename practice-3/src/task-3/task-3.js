/* eslint-disable no-use-before-define */
export default function filterTable(tbody, filters) {
    let num = 1;

    for (const row of tbody.rows) {
        if (filterRow(row, filters)) {
            row.classList.remove("d-none");
            row.firstElementChild.innerHTML = `${num++}`;
            if (num % 2) {
                row.classList.add("table-row-even");
            } else {
                row.classList.remove("table-row-even");
            }
        } else {
            row.classList.add("d-none");
        }
    }

    function filterRow(row, filter) {
        for (const [key, value] of Object.entries(filter)) {
            const cell = row.querySelector(`[data-field-name="${key}"]`);
            if (!cell.textContent.includes(value)) {
                return false;
            }
        }
        return true;
    }
}

