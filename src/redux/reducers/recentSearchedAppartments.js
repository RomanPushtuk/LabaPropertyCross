export default function recentSearchedAppartments(state = [], { type, recentSearches }) {
    switch (type) {
        case 'ADD_RECENT_SEARCHED_APPARTMENTS':
            return recentSearches;
        default:
            return state;
    }
}
