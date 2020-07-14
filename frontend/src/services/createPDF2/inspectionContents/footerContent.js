export default {
    footerContent(data) {
        return [{
                margin: [0, 20],
                columns: [{
                        width: 'auto',
                        stack: [
                            { qr: 'http://178.128.23.172/la/Inspectionqr?inspection_id=data', fit: '70', alignment: 'right', relativePosition: { x: 320, y: 0 }, margin: [0, 10] }
                        ]
                    },
                    [{
                        image: data.photo,
                        fit: [100, 150],
                        alignment: 'right'
                    }]
                ],
                columnGap: 10
            },

            {
                margin: [0, 0],
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