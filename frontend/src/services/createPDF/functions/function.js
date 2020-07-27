import axios from 'axios'
import console from 'console';

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



// function data1(value) {
//     const result = axios.get('http://localhost:9000/api/inspection/fee_id/', value)
//         .then(res => {
//             return res.data
//         })
//         .catch(err => {
//             return err
//         })
//     console.log(result.value)
//     return result.value
// }

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

async function uploadToSpaces(blob, filename) {
    // Add file as blob
    const pdfFile = new File([blob], filename, { type: 'application/pdf' })
        // Create new formData
    const formData = new FormData()
        // Add pdf data to array of formData
    formData.append('file', pdfFile)
    const result = await axios.post('http://165.22.106.196:8080/api/indexpdf/', formData)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
    console.log(result.fileUrl)
    return result.fileUrl
}

export {
    // data1,
    getTime,
    getValue,
    getValue1,
    getTimeqr,
    getFilename2,
    uploadToSpaces
}

// export {
//     getTime
// }
// function getTime(value) {
//     const current_datetime = new Date(value)
//     const formatted_date = current_datetime.getDate() + " / " + (current_datetime.getMonth() + 1) + " / " + current_datetime.getFullYear() + "   " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
//     return (formatted_date)
// }

// function getTimeqr(value) {
//     const current_datetime = new Date(value)
//     const formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear() + "-" + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
//     return (formatted_date)
// }

// function getValue(value) {
//     return value === 'true' ? 'o' : 'x'
// }

// function getValue1(value) {
//     if (value === 'true') {
//         return 'o'
//     } else {
//         return 'x'
//     }

// }

// function getFilename2(value) {
//     const current_datetime = new Date(value)
//     const formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear() + "-" + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
//     return (formatted_date)
// }

// module.exports = {
//     getTime,
//     getValue,
//     getValue1,
//     getTimeqr,
//     getFilename2

// }

// // export {
// //     getTime
// // }