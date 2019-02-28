module.exports = (object, stringToAppend) => {
    if (Array.isArray(object)) {
        const new_array = [];
        object.forEach((item, index) => {
            new_array[index] = module.exports(item, stringToAppend);
        });
        return new_array;
    } else {
        const new_object = {};
        for (const [key, value] of Object.entries(object)) {
            new_object[`${key}${stringToAppend}`] = value;
        }
        return new_object;
    }
};
