export default function geolocationSearchedAppartments(state = [], { type, geolocationSearches }) {
    switch (type) {
        case 'ADD_GEOLOCATION_SEARCHED_APPARTMENTS':
            return geolocationSearches;
        default:
            return state;
    }
}
