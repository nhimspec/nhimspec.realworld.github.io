let isAuthen = () => true;

const apiAuthen = (api) => (...args) => {
    if (!isAuthen()) {
        return Promise.reject("Unauthorized api access");
    }

    return api.apply(null, args);
};

export { apiAuthen };

const apiAuthenConfig = {
    setAuthen(fn) {
        isAuthen = fn;
    }
};

export default apiAuthenConfig;