function filter(array, callback) {
    let filtered = [];
    for (let val of array) {

        const result = callback(val)
        if (result) {
            filtered.push(val);
        }
    }
    return filtered;
}
filter([1, 2, 3, 4], function (num) {
    console.log('hello')
    return num * num
})