export default function getQueryParams(params) {
    const strParams = Object.getOwnPropertyNames(params)
        .map((item) => {
            return `${item}=${params[item]}`;
        })
        .join('&');

    return `?${strParams}`;
}
