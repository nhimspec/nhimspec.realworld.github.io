function mapValuesToList(obj, fn) {
    let ret = [];

    for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
            ret.push(fn(obj[k], k));
        }
    }

    return ret;
}

function forEach(obj, fn) {
    for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
            let interrupted = fn(obj[k], k);
            if (interrupted) {
                return;
            }
        }
    }
}

const ObjectUtils = {
    forEach,
    mapValuesToList
};

export default ObjectUtils;