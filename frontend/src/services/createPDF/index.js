import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from './fonts/vfs_fonts';
import console from 'console';
import axios from "axios";
import getTitle from './inspectionContents/titleContent';
import getCar from './inspectionContents/carContent.js';
import getInspection from './inspectionContents/inspectionContent';
import getFooter from './inspectionContents/footerContent';


// Import test json data;
// import data from './mocData.json';
// import data from '../../../../backend/data/inspectiondpdf.json';
// import data from './inspectionContents/carContent.js';

pdfMake.vfs = pdfFonts.pdfMake.vfs

pdfMake.fonts = {
    THSarabunNew: {
        normal: 'THSarabunNew.ttf',
        bold: 'THSarabunNew Bold.ttf',
        italics: 'THSarabunNew Italic.ttf',
        bolditalics: 'THSarabunNew BoldItalic.ttf'
    },
    LaoPhimPha: {
        normal: 'Lao_PhimPha_Regular.ttf',
        bold: 'Lao_PhimPha_Bold.ttf',
        italics: 'Lao_PhimPha_Regular.ttf',
        bolditalics: 'Lao_PhimPha_Regular.ttf'
    },
    LaoPhetsarath: {
        normal: 'Phetsarath OT.ttf',
        bold: 'Phetsarath OT.ttf',
        italics: 'Phetsarath OT.ttf',
        bolditalics: 'Phetsarath OT.ttf'
    },
    LaoThatPhon: {
        normal: 'That-Phon.ttf',
        bold: 'That-Phon.ttf',
        italics: 'That-Phon.ttf',
        bolditalics: 'That-Phon.ttf'
    },
    LaoDokkham: {
        normal: 'Lao_Dokkham.ttf',
        bold: 'Lao_Dokkham.ttf',
        italics: 'Lao_Dokkham.ttf',
        bolditalics: 'Lao_Dokkham.ttf'
    },
    LaoRajbandith: {
        normal: 'Lao_Rajbandith.ttf',
        bold: 'Lao_Rajbandith.ttf',
        italics: 'Lao_Rajbandith.ttf',
        bolditalics: 'Lao_Rajbandith.ttf'
    },
    Phetsarath: {
        normal: 'Phetsarath OT.ttf',
        bold: 'Phetsarath OT.ttf',
        italics: 'Phetsarath OT.ttf',
        bolditalics: 'Phetsarath OT.ttf'
    }
}

// Upload to Spaces in DigitalOcean
async function uploadToSpaces(blob) {

    // Add file as blob
    const pdfFile = new File([blob], await getFilename2(), { type: 'pdf' })
        // Create new formData
    const formData = new FormData()
        // Add pdf data to array of formData
    formData.append('file', pdfFile)
    axios.post('/pdf', formData, {
            baseURL: 'https://photoims.sgp1.digitaloceanspaces.com'
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

// function getFilename(value) {
//     const current_datetime = new Date(value)
//     const formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear() + "-" + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
//     return (formatted_date)
// }

async function getFilename2(value) {
    const time = new Date(value)
    const currentTime = await time.toLocaleString()
    const arrTime = await currentTime.split(' ')
    const date = await arrTime[0].split('/')
    return `InspectionReport-${date[0]}-${date[1]}-${date[2]}_${arrTime[1]}.pdf`
}

export default {
    async createPDF(data) {
        const docDefinition = {
            pageMargins: [30, 20, 30, 20], // margin: [Left, Top, Right, bottom]
            pageSize: 'A4',
            content: [
                await getTitle.titleContent(),
                await getCar.carContent(data),
                await getInspection.inspectionContent(data),
                await getFooter.footerContent(data),

            ],
            defaultStyle: {
                font: 'Phetsarath'
            }
        }
        const pdfDocGenerator = await pdfMake.createPdf(docDefinition)
            // pdfDocGenerator.download('pdfReport.pdf')

        await pdfDocGenerator.open(data)
            // Get PDF as blob for upload to server files store
        await pdfDocGenerator.getBlob(blob => {
            // console.log(blob)
            uploadToSpaces(blob)
        })
    }
}