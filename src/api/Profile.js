import { apiAuthen } from './ApiAuthen';
import { fetcher } from './Fetcher';
import ListApi from './ListApi';

const profileApi = {
    getProfile(username) {
        return fetcher.get(`${ListApi.user.profile}${username}`).then(({ profile }) => profile);
    },
    follow: apiAuthen((username) => {
        return fetcher.post(`${ListApi.user.profile}${username}/follow`).then(({ profile }) => profile);
    }),
    unfollow: apiAuthen((username) => {
        return fetcher.delete(`${ListApi.user.profile}${username}/follow`).then(({ profile }) => profile);
    }),
};

export default profileApi;