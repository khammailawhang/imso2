import axios from 'axios';
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
    const result = await axios.post('http://localhost:9000/api/indexpdf/', formData)
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