export default {

    footerContent(data, filename) {
        const func = require('../functions/function');

        return [{
                margin: [0, -10],
                columns: [{
                        width: 'auto',
                        stack: [
                            { text: '- ຖ້າລະບົບໃດໜຶ່ງບໍ່ຜ່ານ ແມ່ນເອົາໄປສ້ອມແປງຄືນແລ້ວເອົາມາກວດໃໝ່.\n- If some system failed, it must be to repaired then inspect that system again', fontSize: 7.5, lineHeight: 1 },
                            { qr: 'https://photoims.sgp1.digitaloceanspaces.com/pdf/' + filename, fit: '100', alignment: 'center', margin: [0, 10] }
                        ]
                    },
                    [{
                        image: data.photo,
                        fit: [200, 250],
                        alignment: 'center'
                    }]
                ],
                columnGap: 10
            },
            {
                columns: [
                    '',
                    '',
                    {
                        margin: [0, 20],
                        stack: [
                            { text: 'ວັນທີ:', relativePosition: { x: -80, y: 0 } },
                            { text: func.getTime(data.created_at) }
                        ],

                        fontSize: 10,
                        alignment: 'center'
                    }
                ]
            },
            {
                margin: [0, -5],
                columns: [{
                        width: '*',
                        stack: [
                            { text: 'ຜູ້ກວດກາຕົວຈິງ\n(Inspector)' },
                            { text: data.nameu }
                        ],
                        // text: 'ຜູ້ກວດກາຕົວຈິງ\n(Inspector)\n\n...xxxx...',
                        fontSize: 10,
                        alignment: 'center'
                    },
                    {
                        width: '*',
                        stack: [
                            { text: 'ບ່ອນກວດສະພາບເຕັກນິກ\n(Technical Inspection)' },
                            { text: data.branchname }
                        ],
                        // text: 'ບ່ອນກວດສະພາບເຕັກນິກ\n(Technical Inspection)\n\n...xxxx...',
                        fontSize: 10,
                        alignment: 'center'
                    },
                    {
                        width: '*',
                        text: 'ຫົວໜ້າກອງຄຸ້ມຄອງພາຫະນະ\n(Chief of vehicle management division)\n\nທ່ານ .................................',
                        fontSize: 10,
                        alignment: 'center'
                    }
                ]
            }
        ]
    }
}