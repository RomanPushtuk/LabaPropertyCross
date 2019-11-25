import getQueryParams from '../utils/getQueryParams';

const BASE_URL = 'https://api.nestoria.co.uk/api';
const INITIAL_PARAMS = {
    country: 'uk',
    pretty: 1,
    action: 'search_listings',
    encoding: 'json',
    listing_type: 'buy',
};

export default function fetchApartmentsService(params) {
    const queryParams = getQueryParams({ ...INITIAL_PARAMS, ...params });

    return fetch(`${BASE_URL}${queryParams}`)
        .then((result) => {
            if (result.ok) {
                return result.json();
            }
            throw Error('Resuls is not ok');
        })
        .then(({ response }) => {
            return response;
        });
}
