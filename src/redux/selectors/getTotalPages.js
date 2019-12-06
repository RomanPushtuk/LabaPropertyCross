export { path } from 'ramda';

export default function getTotalPages(apartments, city) {
    return path(['total_pages'], apartments[city]);
}
