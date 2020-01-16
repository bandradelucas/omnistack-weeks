module.exports = parseStringAsArray = arrayAsString => {
    return arrayAsString.split(",").map(item => item.trim());
};
