export default function saveByLocalStorage(key, value) {
    return Promise.resolve(localStorage.setItem(key, JSON.stringify(value)));
}
