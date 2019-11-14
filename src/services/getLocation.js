export default function getLocation() {
    const getCoord = new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            const coords = { latitude, longitude };

            resolve(coords);
        });
    });

    return getCoord;
}
