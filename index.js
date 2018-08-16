module.exports = (object, stringToAppend) => {
    const new_object = {};
    for (const [key, value] of Object.entries(object)) {
        new_object[`${key}${stringToAppend}`] = value;
    }
    return new_object;
};
