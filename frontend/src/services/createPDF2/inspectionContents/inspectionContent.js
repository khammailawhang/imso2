export default {

    inspectionContent(data) {
        const func = require('../functions/function');
        return [
            // { text: 'ໝາຍເຫດ', fontSize: 10, alignment: 'right' },
            {
                // row 1
                margin: [0, 5],
                columns: [
                    // column 1
                    {
                        width: 70,
                        stack: [
                            { text: 'ລາຍການກວດ ', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 70, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 70, y: 0 }]
                                }]
                            },
                        ],

                    },
                    // column 2
                    {

                        width: 190,
                        stack: [
                            { text: 'ຄ່າທີກວດວັດໄດ້', fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 1, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 190, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 190, y: 0 }]
                                }]
                            },
                        ],

                    },
                    // column 3
                    {

                        width: 30,
                        stack: [
                            { text: 'ຜົນ', fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 0, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 30, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 30, y: 0 }]
                                }]
                            },
                        ],

                    },
                    // column 4
                    {

                        width: 240,
                        stack: [
                            { text: 'ມາດຕະຖານທີ່ກໍານົດ', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 240, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 240, y: 0 }]
                                }]
                            },
                        ],

                    },

                ],
                // columnGap: 2.5,
                // relativePosition: { x: 0, y: 0 }
            },

            //----------------------------------
            {
                // row 2
                margin: [0, -1],
                columns: [
                    // column 1
                    {

                        width: 70,
                        stack: [
                            { text: 'ຄັວນດຳ', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 70, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]
                                }]
                            },
                        ],

                    },
                    // column 2
                    {

                        width: 190,
                        stack: [
                            { text: data.co2access, fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: -10, y: 0 } },
                            { text: '% (OPACITY)', fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 30, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 190, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },
                    // column 3
                    {

                        width: 30,
                        stack: [
                            { text: func.getValue(data.co), fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 0, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 30, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },
                    // column 4
                    {

                        width: 240,
                        stack: [
                            { text: 'ບໍ່ເກີນ 45% (OPACITY)', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 0,
                                    closePath: true,
                                    points: [{ x: 240, y: 20 }, { x: 240, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },

                ],

            },
            //----------------------------------
            {
                // row 3
                margin: [0, 5],
                columns: [
                    // column 1
                    {

                        width: 70,
                        stack: [
                            { text: 'ກາກບາດ CO', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 70, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]
                                }]
                            },
                        ],

                    },
                    // column 2
                    {

                        width: 190,
                        stack: [
                            { text: data.coaccess, fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: -10, y: 0 } },
                            { text: '%', fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 30, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 190, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },
                    // column 3
                    {

                        width: 30,
                        stack: [
                            { text: func.getValue(data.co), fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 0, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 30, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },
                    // column 4
                    {

                        width: 240,
                        stack: [
                            { text: 'ບໍ່ເກີນ 4.5%', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 0,
                                    closePath: true,
                                    points: [{ x: 240, y: 20 }, { x: 240, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },

                ],

            },
            //-----------------------------

            {
                // row 4
                margin: [0, -1],
                columns: [
                    // column 1
                    {

                        width: 70,
                        stack: [
                            { text: 'ກາກບາດ HC', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 70, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]
                                }]
                            },
                        ],

                    },
                    // column 2
                    {

                        width: 190,
                        stack: [
                            { text: data.hcaccess, fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: -10, y: 0 } },
                            { text: '% PPM', fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 30, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 190, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },
                    // column 3
                    {

                        width: 30,
                        stack: [
                            { text: func.getValue(data.hc), fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 0, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 30, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },
                    // column 4
                    {

                        width: 240,
                        stack: [
                            { text: 'ບໍ່ເກີນ 700 PPM', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 0,
                                    closePath: true,
                                    points: [{ x: 240, y: 20 }, { x: 240, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },

                ],

            },
            //-----------------------------

            {
                // row 4
                margin: [0, 5],
                columns: [
                    // column 1
                    {

                        width: 70,
                        stack: [
                            { text: 'ສຽງ', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 70, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]
                                }]
                            },
                        ],

                    },
                    // column 2
                    {

                        width: 190,
                        stack: [
                            { text: '.. dBA', fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 190, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },
                    // column 3
                    {

                        width: 30,
                        stack: [
                            { text: func.getValue(data.db), fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 0, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 30, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },
                    // column 4
                    {

                        width: 240,
                        stack: [
                            { text: 'ບໍ່ເກີນ 70 dBA ໄລຍະ 0.5 m', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 0,
                                    closePath: true,
                                    points: [{ x: 240, y: 20 }, { x: 240, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },

                ],

            },
            //-----------------------------
            {
                // row 5
                margin: [0, -1],
                columns: [
                    // column 1
                    {

                        width: 70,
                        stack: [{
                                stack: [
                                    { text: 'ໄຟຕໍາ', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 5 } },
                                    { text: 'ດ້ານຊາຍ', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 20 } },
                                    { text: 'ດ້ານຂວາ', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 36 } },

                                ]
                            },


                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 70, y: 70 }, { x: 0, y: 70 }, { x: 0, y: 0 }, { x: 0, y: 70 }]
                                }]
                            },
                        ],

                    },
                    // column 2
                    {

                        width: 190,
                        stack: [{
                                stack: [

                                    { text: 'ມູມ .. ອ່ຽງ .. ຄວາມສະຫວ່າງ kcd', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 20 } },
                                    { text: 'ມູມ .. ອ່ຽງ .. ຄວາມສະຫວ່າງ kcd', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 40 } },

                                ]
                            },
                            // { text: 'ຄ່າທີກວດວັດໄດ້', fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 0, y: 25 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 190, y: 70 }, { x: 0, y: 70 }, { x: 0, y: 0 }, { x: 0, y: 70 }]

                                }]
                            },
                        ],

                    },
                    // column 3
                    {

                        width: 30,
                        stack: [
                            { text: func.getValue(data.batterry), fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 0, y: 25 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 30, y: 70 }, { x: 0, y: 70 }, { x: 0, y: 0 }, { x: 0, y: 70 }]

                                }]
                            },
                        ],

                    },
                    // column 4
                    {

                        width: 240,
                        stack: [{
                                stack: [

                                    { text: 'ມູມຕົກບໍ່ເກີນ -0.29 ອົງສາແລະບໍ່ຕໍ່າກວ່າ -2.29 ອົງສາ', fontSize: 9, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 5 } },
                                    { text: '(ມີມູມກົດຈາກແນວລະດັບຫຼາຍກວ່າ0.29ອົງສາແຕ່ບໍ່ເກີນ2.29ອົງສາ)', fontSize: 9, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 20 } },
                                    { text: 'ບໍ່ອ່ຽງທາງຂວາ(-ອ່ຽງຊາຍ/+ອ່ຽງຂວາ)', fontSize: 9, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 36 } },
                                    { text: 'ຄວາມສະຫວ່າງ @ ບໍ່ໜອຍກວ່າ 6.4 kcd', fontSize: 9, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 53 } },

                                ]
                            },
                            // { text: 'ມາດຕະຖານທີ່ກໍານົດ', fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 0, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 0,
                                    closePath: true,
                                    points: [{ x: 240, y: 70 }, { x: 240, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 70 }]

                                }]
                            },
                        ],

                    },

                ],

            },
            //-----------------------------
            {
                // row 6
                margin: [0, 5],
                columns: [
                    // column 1
                    {

                        width: 70,
                        stack: [{
                                stack: [
                                    { text: 'ໄຟສູງ', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 5 } },
                                    { text: 'ດ້ານຊາຍ', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 20 } },
                                    { text: 'ດ້ານຂວາ', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 36 } },

                                ]
                            },
                            // { text: 'ລາຍການກວດ', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 70, y: 60 }, { x: 0, y: 60 }, { x: 0, y: 0 }, { x: 0, y: 60 }]
                                }]
                            },
                        ],

                    },
                    // column 2
                    {

                        width: 190,
                        stack: [{
                                stack: [

                                    { text: 'ມູມ .. ອ່ຽງ .. ຄວາມສະຫວ່າງ kcd', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 20 } },
                                    { text: 'ມູມ .. ອ່ຽງ .. ຄວາມສະຫວ່າງ kcd', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 36 } },

                                ]
                            },
                            // { text: 'ຄ່າທີກວດວັດໄດ້', fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 0, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 190, y: 60 }, { x: 0, y: 60 }, { x: 0, y: 0 }, { x: 0, y: 60 }]

                                }]
                            },
                        ],

                    },
                    // column 3
                    {

                        width: 30,
                        stack: [
                            { text: func.getValue(data.indictor_light), fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 0, y: 10 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 30, y: 60 }, { x: 0, y: 60 }, { x: 0, y: 0 }, { x: 0, y: 60 }]

                                }]
                            },
                        ],

                    },
                    // column 4
                    {

                        width: 240,
                        stack: [{
                                stack: [

                                    { text: 'ມູມຕົກບໍ່ສູງກວ່າແນວຂະໜານກັບພື້ນພຽງ', fontSize: 9, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 5 } },
                                    { text: 'ບໍ່ອ່ຽງທາງຂວາ(-ອ່ຽງຊາຍ/+ອ່ຽງຂວາ)', fontSize: 9, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 20 } },
                                    { text: 'ຄວາມສະຫວ່າງ @ ບໍ່ໜອຍກວ່າ 12 kcd ລວມບໍ່ເກີນ 430 kcd', fontSize: 9, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 36 } },
                                    // { text: 'ຄວາມສະຫວ່າງ @ ບໍ່ໜອຍກວ່າ 6.4 kcd', fontSize: 9, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 53 } },

                                ]
                            },
                            // { text: 'ມາດຕະຖານທີ່ກໍານົດ', fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 0, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 0,
                                    closePath: true,
                                    points: [{ x: 240, y: 60 }, { x: 240, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 60 }]

                                }]
                            },
                        ],

                    },

                ],

            },

            //-----------------------------
            {
                // row 8
                margin: [0, -1],
                columns: [
                    // column 1
                    {

                        width: 70,
                        stack: [
                            { text: 'ສູນລໍ້ໜ້າ', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 70, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]
                                }]
                            },
                        ],

                    },
                    // column 2
                    {

                        width: 190,
                        stack: [
                            { text: '... m/km', fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 190, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },
                    // column 3
                    {

                        width: 30,
                        stack: [
                            { text: func.getValue(data.s_n), fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 0, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 30, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },
                    // column 4
                    {

                        width: 240,
                        stack: [
                            { text: 'ບໍ່ເກີນ +- 5 m/km', fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 0,
                                    closePath: true,
                                    points: [{ x: 240, y: 20 }, { x: 240, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },

                ],

            },
            //-----------------------------
            {
                // row 9
                margin: [0, 5],
                columns: [
                    // column 1
                    {

                        width: 70,
                        stack: [{
                                stack: [
                                    { text: 'ເບກຕີນ', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 5 } },

                                    { text: 'ເພົາທີ 1', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 20 } },
                                    { text: 'ເພົາທີ 2', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 36 } },
                                    { text: 'ເພົາທີ 3', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 53 } },
                                    { text: 'ເພົາທີ 4', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 66 } },
                                ]
                            },
                            // { text: 'ລາຍການກວດ', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 70, y: 85 }, { x: 0, y: 85 }, { x: 0, y: 0 }, { x: 0, y: 85 }]
                                }]
                            },
                        ],

                    },
                    // column 2
                    {

                        width: 190,
                        stack: [{
                                stack: [

                                    { text: 'ປະສິດທີພາບລວມ %', fontSize: 9, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 5 } },
                                    { text: 'ແຮງເບຣກ ລໍ້ໍໍຊາຍ       , ລໍ້ຂວາ       , ບໍ່ສົມດູນ      %', fontSize: 9, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 20 } },
                                    { text: data.LFF, fontSize: 8, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 60, y: 20 } },
                                    { text: data.RFF, fontSize: 8, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 105, y: 20 } },
                                    { text: data.RF, fontSize: 8, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 160, y: 20 } },
                                    { text: 'ແຮງເບຣກ ລໍ້ໍໍຊາຍ       , ລໍ້ຂວາ       , ບໍ່ສົມດູນ      %', fontSize: 9, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 36 } },
                                    { text: data.LRR, fontSize: 8, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 60, y: 36 } },
                                    { text: data.RRR, fontSize: 8, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 105, y: 36 } },
                                    { text: data.RR, fontSize: 8, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 160, y: 36 } },
                                    { text: 'ແຮງເບຣກ ລໍ້ໍໍຊາຍ       , ລໍ້ຂວາ       , ບໍ່ສົມດູນ      %', fontSize: 9, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 53 } },
                                    { text: data.LRM, fontSize: 8, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 60, y: 53 } },
                                    { text: data.RRM, fontSize: 8, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 105, y: 53 } },
                                    { text: data.RM, fontSize: 8, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 160, y: 53 } },
                                    { text: 'ແຮງເບຣກ ລໍ້ໍໍຊາຍ       , ລໍ້ຂວາ       , ບໍ່ສົມດູນ      %', fontSize: 9, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 66 } },
                                    { text: data.LRF, fontSize: 8, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 60, y: 66 } },
                                    { text: data.RRF, fontSize: 8, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 105, y: 66 } },
                                    { text: data.PB, fontSize: 8, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 160, y: 66 } },

                                ]
                            },
                            // { text: 'ຄ່າທີກວດວັດໄດ້', fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 0, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 190, y: 85 }, { x: 0, y: 85 }, { x: 0, y: 0 }, { x: 0, y: 85 }]

                                }]
                            },
                        ],

                    },
                    // column 3
                    {

                        width: 30,
                        stack: [
                            { text: func.getValue(data.pedal), fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 0, y: 30 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 30, y: 85 }, { x: 0, y: 85 }, { x: 0, y: 0 }, { x: 0, y: 85 }]

                                }]
                            },
                        ],

                    },
                    // column 4
                    {

                        width: 240,
                        stack: [{
                                stack: [

                                    { text: 'ບໍ່ນ້ອຍກ່ວາ 50% ຂອງນໍ້າໜັກລົດ', fontSize: 9, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 15 } },
                                    { text: 'ຜົນຕ່າງຄວາມສົນດູນລະຫວາງແຮງເບຣກລໍ້ຊາຍກັບລໍ້ຂວາຕ້ອງບໍ່ເກີນ', fontSize: 9, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 30 } },
                                    { text: '25% ຂອງແຮງເບຣກສູງສຸດຂອງເພົານັ້ນ', fontSize: 9, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 45 } },

                                ]
                            },
                            // { text: 'ມາດຕະຖານທີ່ກໍານົດ', fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 0, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 0,
                                    closePath: true,
                                    points: [{ x: 240, y: 85 }, { x: 240, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 85 }]

                                }]
                            },
                        ],

                    },

                ],

            },
            //-----------------------------

            {
                // row 10
                margin: [0, -1],
                columns: [
                    // column 1
                    {

                        width: 70,
                        stack: [
                            { text: 'ເບຣກມື', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 70, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]
                                }]
                            },
                        ],

                    },
                    // column 2
                    {

                        width: 190,
                        stack: [
                            { text: 'ປະສິດທີພາບລວມ            %', fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: -20, y: 0 } },
                            { text: data.PBSUM, fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 10, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 190, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },
                    // column 3
                    {

                        width: 30,
                        stack: [
                            { text: func.getValue(data.brk_m), fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 0, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 30, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },
                    // column 4
                    {

                        width: 240,
                        stack: [
                            { text: 'ບໍ່ນ້ອຍກວ່າ 20% ຂອງນໍ້າໜັກລົດ', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 0,
                                    closePath: true,
                                    points: [{ x: 240, y: 20 }, { x: 240, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },

                ],

            },
            //-----------------------------

            {
                // row 11
                margin: [0, 5],
                columns: [
                    // column 1
                    {

                        width: 70,
                        stack: [
                            { text: 'ເບຣກສຸກເສີນ', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 70, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]
                                }]
                            },
                        ],

                    },
                    // column 2
                    {

                        width: 190,
                        stack: [
                            { text: 'ປະສິດທີພາບລວາມ           %', fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: -20, y: 0 } },
                            { text: data.PKSUM, fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 10, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 190, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },
                    // column 3
                    {

                        width: 30,
                        stack: [
                            { text: func.getValue(data.brk_s), fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 0, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 30, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },
                    // column 4
                    {

                        width: 240,
                        stack: [
                            { text: '', fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 0, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 0,
                                    closePath: true,
                                    points: [{ x: 240, y: 20 }, { x: 240, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },

                ],

            },
            //-----------------------------
            {
                // row 12
                margin: [0, -1],
                columns: [
                    // column 1
                    {
                        width: 70,
                        stack: [{
                                stack: [

                                    { text: 'ເຄື່ອງວັດ', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 20 } },
                                    { text: 'ຄວາມແຮງ', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 40 } },

                                ]
                            },
                            // { text: 'ລາຍການກວດ', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 70, y: 65 }, { x: 0, y: 65 }, { x: 0, y: 0 }, { x: 0, y: 65 }]
                                }]
                            },
                        ],
                    },
                    // column 2
                    {

                        width: 190,
                        stack: [{
                                stack: [
                                    { text: 'ຜົນການກວດທີ່ 20 km/h ..... ຜົນທີ່ໄດ້ ... %', fontSize: 9, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 5 } },
                                    { text: 'ຜົນການກວດທີ່ 40 km/h ..... ຜົນທີ່ໄດ້ ... %', fontSize: 9, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 20 } },
                                    { text: 'ຜົນການກວດທີ່ 60 km/h ..... ຜົນທີ່ໄດ້ ... %', fontSize: 9, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 36 } },

                                ]
                            },
                            // { text: 'ຄ່າທີກວດວັດໄດ້', fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 0, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 190, y: 65 }, { x: 0, y: 65 }, { x: 0, y: 0 }, { x: 0, y: 65 }]

                                }]
                            },
                        ],

                    },
                    // column 3
                    {

                        width: 30,
                        stack: [
                            { text: func.getValue(data.cy_c), fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 0, y: 20 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 30, y: 65 }, { x: 0, y: 65 }, { x: 0, y: 0 }, { x: 0, y: 65 }]

                                }]
                            },
                        ],

                    },
                    // column 4
                    {

                        width: 240,
                        stack: [
                            { text: 'ຄ່າຄາດເຄື່ອນບໍ່ເກີນຮ້ອຍລະ 10', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 20 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 0,
                                    closePath: true,
                                    points: [{ x: 240, y: 65 }, { x: 240, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 65 }]

                                }]
                            },
                        ],

                    },

                ],

            },

            //-----------------------------

            {
                // row 13
                margin: [0, 5],
                columns: [
                    // column 1
                    {

                        width: 70,
                        stack: [
                            { text: 'ເຄື່ອງຜ່ອນຄາຍ', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 70, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]
                                }]
                            },
                        ],
                    },
                    // column 2

                    {
                        width: 190,
                        stack: [
                            { text: 'ເພົ່າທີ່ 1 = .... % , ເພົ່າທີ່ 2 = ... %', fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 190, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },
                    // column 3
                    {

                        width: 30,
                        stack: [
                            { text: func.getValue(data.re_m), fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 0, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 30, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },
                    // column 4
                    {

                        width: 240,
                        stack: [
                            { text: '', fontSize: 10, alignment: 'center', lineHeight: 0.0, relativePosition: { x: 0, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 0,
                                    closePath: true,
                                    points: [{ x: 240, y: 20 }, { x: 240, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 20 }]

                                }]
                            },
                        ],

                    },

                ],

            },
            //-----------------------------

            {
                // row 14
                margin: [0, -1],
                columns: [
                    // column 1
                    {

                        width: 70,
                        stack: [
                            { text: 'ນໍ້າໜັກລົງເພົາ', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 70, y: 20 }, { x: 0, y: 20 }, { x: 0, y: 0 }, { x: 0, y: 20 }]
                                }]
                            },
                        ],

                    },
                    // column 2
                    {

                        width: 460,
                        stack: [
                            { text: 'ເພົາ 1 = ....... kg, ເພົາ 2 = ...... kg, ເພົາ 3 = ...... kg, ເພົາ 4 = ...... kg, ລວມ = ...... kg', fontSize: 10, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 0 } },
                            {
                                margin: [0, -2],
                                canvas: [{
                                    type: 'polyline',
                                    lineWidth: 1,
                                    closePath: true,
                                    points: [{ x: 0, y: 20 }, { x: 460, y: 20 }, { x: 460, y: 0 }, { x: 460, y: 20 }]

                                }]
                            },
                        ],

                    },

                ],

            },
            //-----------------------------

            {
                // row 14
                margin: [0, -1],
                columns: [
                    // column 1
                    {
                        width: 220,
                        stack: [
                            { text: 'ສະຫຼຸບຜົນການກວດສະພາບ ແລະ ຂໍ້ບົກຜ່ອງ:', fontSize: 12, alignment: 'left', lineHeight: 0.0, relativePosition: { x: 4, y: 25 } },
                        ],
                    },
                    // column 2

                    {
                        width: 40,
                        stack: [{
                                text: func.getValue1(
                                    data.re_m &&
                                    data.co2 &&
                                    data.co &&
                                    data.hc &&
                                    data.db &&
                                    data.light &&
                                    data.s_n &&
                                    data.pedal &&
                                    data.brk_m &&
                                    data.brk_s &&
                                    data.cy_c &&
                                    data.v_w
                                ),
                                fontSize: 14,
                                alignment: 'left',
                                lineHeight: 0.0,
                                relativePosition: { x: -4, y: 25 }
                            },

                        ],

                    },

                ],

            },




































        ]
    }
}