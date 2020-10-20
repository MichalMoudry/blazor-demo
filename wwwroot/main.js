function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getAllLocalStorageItems() {
    var keys = Object.keys(localStorage);
    var items;
    for (let index = 0; index < keys.length; index++) {
        items[keys[index]] = localStorage.getItem(keys[index]);
    }
    return JSON.stringify(items);
}