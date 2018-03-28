import { fetcher } from './Fetcher';

const TagApi = {
    getTags() {
        return fetcher.get("/tags").then((resp) => resp.tags);
    },
};

export default TagApi;