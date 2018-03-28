import { fetcher } from './Fetcher';
import ListApi from './ListApi';

const userApi = {
    register({ email, password, username }) {
        return fetcher.post(ListApi.user.register, { user: { email, password, username } });
    },
    login({ email, password }) {
        return fetcher.post(ListApi.user.login, { user: { email, password } });
    },
    updateUser(user) {
        return fetcher.put(ListApi.user.update, { user });
    },
};

export default userApi;