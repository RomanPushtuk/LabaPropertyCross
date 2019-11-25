export default function getListings(state, city) {
    return state.apartments[city].listings || [];
}
