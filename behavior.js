document.addEventListener('DOMContentLoaded', initialize, false);
function initialize() {
    Inventory = INVENTORY.map((match, i) => {
        return { ...match, key: i, rank: 0};
    });
    document.getElementById("search-field").addEventListener("keyup", onSearchChange);

    let context = document.getElementById("results-list");
    ResultsMarker = new Mark(context);
}

// #region search
function onSearchChange(searchEl) {
    let searchPhrase = searchEl.target.value.trim();
    let searchTerms = searchPhrase.split(/\b/).map(term => term.trim());
    let results = searchInventoryTerms(searchTerms);
    clearResults();
    results.forEach(result => displayResult(result));

    ResultsMarker.mark(searchTerms, {"exclude": [".location *"]});
}

function searchInventoryTerms(terms) {
    let matchSet = {};

    terms.forEach((term) => {
        let matches = searchInventoryTerm(term);
        matches.forEach(match => matchSet[match.key] = match);
    });
    
    let matches = Object.values(matchSet);
    return matches.sort((a, b) => (b.rank - a.rank));
}

function searchInventoryTerm(term) {
    if (term === null || term === "") {
        return [];
    }

    term = term.toLowerCase();
    return Inventory.filter(item => searchFilter(term, item));
}

function searchFilter(term, item) {
    if (item.title.includes(term)) {
        item.rank += 2;
        return true;
    }

    if (item.related_terms.some(t => t.includes(term))) {
        item.rank++;
        return true;
    }

    return false;
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