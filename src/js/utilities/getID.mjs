export function getID(parameter) {
    const urlID = new URLSearchParams(window.location.search);
    return urlID.get(parameter);
}