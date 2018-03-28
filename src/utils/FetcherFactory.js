import ObjectUtils from './ObjectUtils';

const FetcherFactory = {
    createApi({ urlModifier, getHeaders }) {
        let createHeaders = () => {
            let headers = new Headers();
            ObjectUtils.forEach(getHeaders(), (value, key) =>
                headers.append(key, value)
            );
            return headers;
        };

        const withPayload = (method) => (url, data) => {
            let headers = createHeaders();
            headers.append("Content-Type", "application/json");
            return fetch(urlModifier(url), {
                method,
                body: data == null ? undefined : JSON.stringify(data),
                headers
            }).then((response) => response.json());
        };
        const withoutPayload = (method) => (url) => {
            let headers = createHeaders();
            return fetch(urlModifier(url), {
                method,
                headers
            }).then((response) => response.json());
        };

        return {
            get: withoutPayload("GET"),
            delete: withoutPayload("DELETE"),
            post: withPayload("POST"),
            put: withPayload("PUT"),
        };
    }
};

export default FetcherFactory;