import ListApi from './ListApi';
import FetcherFactory from './../utils/FetcherFactory';

let getHeaders = () => ({});

const fetcher = FetcherFactory.createApi({
    urlModifier: (url) => `${ListApi.apiUrl}${url}`,
    getHeaders: () => getHeaders()
});

export { fetcher };

const fetcherConfig = {
    setHeaders: (fn) => getHeaders = fn,
};

export default fetcherConfig;
