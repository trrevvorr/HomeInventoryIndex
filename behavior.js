document.addEventListener('DOMContentLoaded', initialize, false);
function initialize() {
    document.getElementById("search-field").addEventListener("keyup", onSearchChange);
}

// #region search
function onSearchChange(searchEl) {

    let results = searchInventory(searchEl.target.value);
    clearResults();
    results.forEach(result => displayResult(result));
    console.log(results);
}

function searchInventory(term) {
    term = term.toLowerCase();
    return INVENTORY.filter(item => searchFilter(term, item))
}

function searchFilter(term, item) {
    return (item.title.includes(term) || item.related_terms.some(t => t.includes(term)));
}

// #endregion

// #region display results
function clearResults() {
    let list = document.getElementById("results-list");
    list.innerHTML = "";
}

function displayResult(item) {
    let list = document.getElementById("results-list");
    let template = document.getElementById("search-result-template");
    let clone = template.content.cloneNode(true);

    clone.querySelector(".search-result-title").textContent = item.title;
    clone.querySelector(".search-result-room").textContent = item.room;
    clone.querySelector(".search-result-container").textContent = item.container;
    clone.querySelector(".search-result-bin").textContent = item.bin;

    list.appendChild(clone);
}
// #endregion