var connectionStatus;

window.addEventListener("online", () => connectionStatus = "online");
window.addEventListener("offline", () => connectionStatus = "offline");

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getAllLocalStorageItems() {
    var values = new Array();
    var keys = Object.keys(localStorage);
    for (let index = 0; index < keys.length; index++) {
        values.push(localStorage.getItem(keys[index]));
    }
    return JSON.stringify(values);
}