import { path } from 'ramda';
import getLocation from '../../../services/getLocation';
import fetchApartmentsService from '../../../services/fetchApartmentsService';
import addGeolocationSearched from './addGeolocationSearched';

export default function fetchGeolocationApartmets() {
    return (dispatch) => {
        return getLocation().then(({ latitude, longitude }) => {
            return fetchApartmentsService({
                page: 1,
                centre_point: `${latitude},${longitude}`,
            }).then((apartments) => {
                const totalPages = path(['total_pages'], apartments);

                dispatch(
                    addGeolocationSearched({
                        centre_point: `${latitude},${longitude}`,
                        totalPages,
                    })
                );
            });
        });
    };
}
