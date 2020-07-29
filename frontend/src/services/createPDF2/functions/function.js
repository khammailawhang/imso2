// function getTime() {
//     const date = new Date()
//     const timeString = date.toLocaleString()
//     const timeArr = timeString.split(' ')
//     const day = '0' + timeArr[0].split('/')[0]
//     const month = '0' + timeArr[0].split('/')[1]
//     const year = timeArr[0].split('/')[2]
//     const time = timeArr[1].substr(0, 5)
//     return `${day.substr(-2)}/${month.substr(-2)}/${year} ${time}`
// }

function getTime(value) {
    const current_datetime = new Date(value)
    const formatted_date = current_datetime.getDate() + " / " + (current_datetime.getMonth() + 1) + " / " + current_datetime.getFullYear() + "  " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
    return (formatted_date)
}

function getValue(value) {
    return value === 'true' ? 'o' : 'x'
}

function getValue1(value) {
    if (value === 'true') {
        return 'ຜ່ານ'
    } else {
        return 'ບໍ່ຜ່ານ'
    }

}

module.exports = {
    getTime,
    getValue,
    getValue1,

}

// export {
//   getTime
// }