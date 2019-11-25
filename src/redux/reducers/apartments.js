export default function offersAppartments(state = {}, { type, apartments }) {
    switch (type) {
        case 'ADD_ARARTMENTS':
            return apartments;
        default:
            return state;
    }
}
