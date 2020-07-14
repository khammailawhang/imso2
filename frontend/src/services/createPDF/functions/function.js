function getTime(value) {
    const current_datetime = new Date(value)
    const formatted_date = current_datetime.getDate() + " / " + (current_datetime.getMonth() + 1) + " / " + current_datetime.getFullYear() + "   " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
    return (formatted_date)
}

function getTimeqr(value) {
    const current_datetime = new Date(value)
    const formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear() + "-" + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
    return (formatted_date)
}

function getValue(value) {
    return value === 'true' ? 'o' : 'x'
}

function getValue1(value) {
    if (value === 'true') {
        return 'o'
    } else {
        return 'x'
    }

}

function getFilename2(value) {
    const current_datetime = new Date(value)
    const formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear() + "-" + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
    return (formatted_date)
}

module.exports = {
    getTime,
    getValue,
    getValue1,
    getTimeqr,
    getFilename2

}

// export {
//     getTime
// }