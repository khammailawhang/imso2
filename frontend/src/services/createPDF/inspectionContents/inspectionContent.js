export default {

    inspectionContent(data) {
        const func = require('../functions/function');
        return [

            { text: 'ໝາຍເຫດ', fontSize: 10, alignment: 'right' },
            {
                // row 1
                margin: [0, 5],
                columns: [
                    // column 1
                    {
                        width: 125,
                        stack: [
                            { text: '1. ລະບົບສົ່ງທິດ:', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
                            { text: '(Streering Device)', fontSize: 8, margin: [0, 10] }
                        ]
                    },
                    // column 2
                    {

                        width: 95,
                        columns: [

                            [

                                { text: func.getValue(data.handier), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },

                                {
                                    stack: [
                                        { text: 'ພວງມະໄລ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Handier)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ],

                        ],

                    },

                    // column 3
                    {
                        width: 78,
                        columns: [
                            [
                                { text: func.getValue(data.am), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ຄັນສົ່ງ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Am/Rod)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // column 4
                    {
                        width: 78,
                        columns: [
                            [
                                { text: func.getValue(data.side_slip), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ຕັ້ງລໍ້', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Side Slip)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // ໝາຍເຫດ
                    [
                        { text: func.getValue1(data.handier && data.am && data.side_slip), fontSize: 10, alignment: 'right', relativePosition: { x: -17, y: 2.5 } }, // O = -15, X = -17
                        {
                            margin: [0, 5, 4.5, 0],
                            alignment: 'right',
                            canvas: [{
                                type: 'polyline',
                                lineWidth: 1,
                                closePath: true,
                                alignment: 'right',
                                points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                            }]
                        }
                    ]
                ],
                columnGap: 2.5,
                relativePosition: { x: 0, y: 0 }
            }, {
                // row 2
                margin: [0, 17.5],
                columns: [
                    // column 1
                    {
                        width: 125,
                        stack: [
                            { text: '2. ລະບົບຫ້າມ:', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
                            { text: '(Braking Device)', fontSize: 8, margin: [0, 10] }
                        ]
                    },
                    // column 2
                    {
                        width: 95,
                        columns: [
                            [
                                { text: func.getValue(data.pedal), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ຜາງຕີນ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Pedal)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // column 2.5
                    {
                        width: 78,
                        columns: [
                            [
                                { text: func.getValue(data.hose), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ທໍ່ນໍ້າມັນເບກ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Hose/Pipe)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // column 4
                    {
                        width: 78,
                        columns: [
                            [
                                { text: func.getValue(data.reservoir_tank), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ເຕົ້ານໍ້າມັນເບກ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Reservoir Tank)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // ໝາຍເຫດ
                    [
                        { text: func.getValue1(data.pedal && data.hose && data.reservoir_tank), fontSize: 10, alignment: 'right', relativePosition: { x: -17, y: 2.5 } }, // O = -15, X = -17

                        {
                            margin: [0, 5, 4.5, 0],
                            alignment: 'right',
                            canvas: [{
                                type: 'polyline',
                                lineWidth: 1,
                                closePath: true,
                                alignment: 'right',
                                points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                            }]
                        }
                    ]
                ],
                columnGap: 2.5,
                relativePosition: { x: 0, y: 0 }
            }, {
                // row 2.5
                margin: [0, 5],
                columns: [
                    // column 1
                    {
                        width: 125,
                        stack: [
                            { text: '3. ລະບົບຊັດທ່ຽງ (ສູນລໍ້):', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
                            { text: '(Punning Device)', fontSize: 8, margin: [0, 10] }
                        ]
                    },
                    // column 2
                    {
                        width: 95,
                        columns: [
                            [
                                { text: func.getValue(data.tire), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ລົມຢາງຕີນລົດ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Tire)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // column 2.5
                    {
                        width: 78,
                        columns: [
                            [
                                { text: func.getValue(data.wheel), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ຕີນລົດ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Wheel)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // column 4
                    {
                        width: 78,
                        columns: [
                            [
                                { text: func.getValue(data.bolt), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ນ໋ອດລໍ້', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Bolt/Nut)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // ໝາຍເຫດ
                    [
                        { text: func.getValue1(data.tire && data.wheel && data.bolt), fontSize: 10, alignment: 'right', relativePosition: { x: -17, y: 2.5 } }, // O = -15, X = -17

                        {
                            margin: [0, 5, 4.5, 0],
                            alignment: 'right',
                            canvas: [{
                                type: 'polyline',
                                lineWidth: 1,
                                closePath: true,
                                alignment: 'right',
                                points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                            }]
                        }
                    ]
                ],
                columnGap: 2.5,
                relativePosition: { x: 0, y: 0 }
            }, {
                // row 4
                margin: [0, 17.5],
                columns: [
                    // column 1
                    {
                        width: 125,
                        stack: [
                            { text: '4. ລະບົບສັ່ນສະເທືອນ:', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
                            { text: '(Chock Absorber)', fontSize: 8, margin: [0, 10] }
                        ]
                    },
                    // column 2
                    {
                        width: 95,
                        columns: [
                            [
                                { text: func.getValue(data.chock_absorber), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ຊົກອັບ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Chock Absorber)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // column 2.5
                    {
                        width: 78,
                        columns: [
                            [
                                { text: func.getValue(data.spring), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ໄສ້ເສືອ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Spring)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // ໝາຍເຫດ
                    [
                        { text: func.getValue1(data.chock_absorber && data.spring), fontSize: 10, alignment: 'right', relativePosition: { x: -17, y: 2.5 } }, // O = -15, X = -17

                        {
                            margin: [0, 5, 4.5, 0],
                            alignment: 'right',
                            canvas: [{
                                type: 'polyline',
                                lineWidth: 1,
                                closePath: true,
                                alignment: 'right',
                                points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                            }]
                        }
                    ]
                ],
                columnGap: 2.5,
                relativePosition: { x: 0, y: 0 }
            }, {
                // row 5
                margin: [0, 5],
                columns: [
                    // column 1
                    {
                        width: 125,
                        stack: [
                            { text: '5. ລະບົບເຄື່ອງຈັກ:', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
                            { text: '(Prime Move)', fontSize: 8, margin: [0, 10] }
                        ]
                    },
                    // column 2
                    {
                        width: 95,
                        columns: [
                            [
                                { text: func.getValue(data.air_cleaner), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ໝໍ້ກອງອາກາດ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Air cleaner)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // column 2.5
                    {
                        width: 60,
                        columns: [
                            [
                                { text: func.getValue(data.fan_belt), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ສາຍພານ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Fan Belt)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // column 4
                    {
                        width: 60,
                        columns: [
                            [
                                { text: func.getValue(data.radiator), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ໝໍ້ນໍ້າ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Radiator)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // column 5
                    {
                        width: 68,
                        columns: [
                            [
                                { text: func.getValue(data.carburator), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ຄາບິວ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Carburator)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // column 6
                    {
                        width: 65,
                        columns: [
                            [
                                { text: func.getValue(data.injection_pump), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ປໍ້າຊີດ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Injection Pump)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // ໝາຍເຫດ
                    [
                        { text: func.getValue1(data.air_cleaner && data.fan_belt && data.radiator && data.carburator && data.injection_pump), fontSize: 10, alignment: 'right', relativePosition: { x: -17, y: 2.5 } }, // O = -15, X = -17

                        {
                            margin: [0, 5, 4.5, 0],
                            alignment: 'right',
                            canvas: [{
                                type: 'polyline',
                                lineWidth: 1,
                                closePath: true,
                                alignment: 'right',
                                points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                            }]
                        }
                    ]
                ],
                columnGap: 2.5,
                relativePosition: { x: 0, y: 0 }
            }, {
                // row 6
                margin: [0, 17.5],
                columns: [
                    // column 1
                    {
                        width: 125,
                        stack: [
                            { text: '6. ການກະຈາຍຂອງອາຍເສັຍ, ຄັວນດຳ:', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
                            { text: '(Emission Limit)', fontSize: 8, margin: [0, 10] }
                        ]
                    },
                    // column 2
                    {
                        width: 95,
                        columns: [
                            [
                                { text: func.getValue(data.co), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'Carbon Monoxide', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(CO)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // column 2.5
                    {
                        width: 78,
                        columns: [
                            [
                                { text: func.getValue(data.hc), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'Hydrocabons', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(HC)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // ໝາຍເຫດ
                    [
                        { text: func.getValue1(data.co && data.hc), fontSize: 10, alignment: 'right', relativePosition: { x: -17, y: 2.5 } }, // O = -15, X = -17

                        {
                            margin: [0, 5, 4.5, 0],
                            alignment: 'right',
                            canvas: [{
                                type: 'polyline',
                                lineWidth: 1,
                                closePath: true,
                                alignment: 'right',
                                points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                            }]
                        }
                    ]
                ],
                columnGap: 2.5,
                relativePosition: { x: 0, y: 0 }
            }, {
                // row 7
                margin: [0, 5],
                columns: [
                    // column 1
                    {
                        width: 125,
                        stack: [
                            { text: '7. ລະບົບກົນໄກປ່ຽນຄວາມແຮງ:', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
                            { text: '(Power Transmission)', fontSize: 8, margin: [0, 10] }
                        ]
                    },
                    // column 2
                    {
                        width: 95,
                        columns: [
                            [
                                { text: func.getValue(data.clutch), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ຈານຄາດ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Clutch)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // column 2.5
                    {
                        width: 78,
                        columns: [
                            [
                                { text: func.getValue(data.gear_lever), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ເກັຍ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Gear Lever)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // column 4
                    {
                        width: 78,
                        columns: [
                            [
                                { text: func.getValue(data.drive_shaft), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ກາກດັ່ງ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Drive Shaft)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // column 5
                    {
                        width: 68,
                        columns: [
                            [
                                { text: func.getValue(data.universal_join), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ກາກບາດ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Universal Join)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // ໝາຍເຫດ
                    [
                        { text: func.getValue1(data.clutch && data.gear_lever && data.drive_shaft && data.universal_join), fontSize: 10, alignment: 'right', relativePosition: { x: -17, y: 2.5 } }, // O = -15, X = -17

                        {
                            margin: [0, 5, 4.5, 0],
                            alignment: 'right',
                            canvas: [{
                                type: 'polyline',
                                lineWidth: 1,
                                closePath: true,
                                alignment: 'right',
                                points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                            }]
                        }
                    ]
                ],
                columnGap: 2.5,
                relativePosition: { x: 0, y: 0 }
            }, {
                // row 8
                margin: [0, 17.5],
                columns: [
                    // column 1
                    {
                        width: 125,
                        stack: [
                            { text: '8. ລະບົບເກັບສຽງ:', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
                            { text: '(Exhausting Device)', fontSize: 8, margin: [0, 10] }
                        ]
                    },
                    // column 2
                    {
                        width: 95,
                        columns: [
                            [
                                { text: func.getValue(data.muffler), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ທໍ່ອາຍເສັຍ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Muffler)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // column 2.5
                    {
                        width: 78,
                        columns: [
                            [
                                { text: func.getValue(data.db), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ລະດັບສຽງ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(db)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // ໝາຍເຫດ
                    [
                        { text: func.getValue1(data.muffler && data.db), fontSize: 10, alignment: 'right', relativePosition: { x: -17, y: 2.5 } }, // O = -15, X = -17

                        {
                            margin: [0, 5, 4.5, 0],
                            alignment: 'right',
                            canvas: [{
                                type: 'polyline',
                                lineWidth: 1,
                                closePath: true,
                                alignment: 'right',
                                points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                            }]
                        }
                    ]
                ],
                columnGap: 2.5,
                relativePosition: { x: 0, y: 0 }
            }, {
                // row 9
                margin: [0, 5],
                columns: [
                    // column 1
                    {
                        width: 125,
                        stack: [
                            { text: '9. ລະບົບໄຟ:', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
                            { text: '(Electronic Device)', fontSize: 8, margin: [0, 10] }
                        ]
                    },
                    // column 2
                    {
                        width: 95,
                        columns: [
                            [
                                { text: func.getValue(data.batterry), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ໝໍ້ໄຟ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Batterry)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // column 2.5
                    {
                        width: 78,
                        columns: [
                            [
                                { text: func.getValue(data.light), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ໄຟຕາ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Light)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // column 4
                    {
                        width: 78,
                        columns: [
                            [
                                { text: func.getValue(data.horn), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ແກ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Horn)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // column 5
                    {
                        width: 78,
                        columns: [
                            [
                                { text: func.getValue(data.indictor_light), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ໄຟລ້ຽວ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Indictor Light)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },

                ],
                columnGap: 2.5,
                relativePosition: { x: 0, y: 0 }
            }, {
                // row 9 -- continue
                margin: [0, 17.5],
                columns: [
                    // column 1
                    {
                        width: 125,
                        stack: [
                            { text: '', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
                            { text: '', fontSize: 8, margin: [0, 10] }
                        ]
                    },
                    // column 2
                    {
                        width: 95,
                        columns: [
                            [
                                { text: func.getValue(data.brake_light), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ໄຟແບກ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Brake Light)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // column 2.5
                    {
                        width: 78,
                        columns: [
                            [
                                { text: func.getValue(data.side_light), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ໄຟຕາລີ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Side light)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // column 5
                    {
                        width: 78,
                        columns: [
                            [
                                { text: func.getValue(data.rear_light), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ໄຟຖວຍ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Rear light)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },

                    // 
                    // ໝາຍເຫດ
                    [
                        { text: func.getValue1(data.batterry && data.light && data.horn && data.indictor_light && data.brake_light && data.side_light && data.rear_light), fontSize: 10, alignment: 'right', relativePosition: { x: -17, y: 2.5 } }, // O = -15, X = -17

                        {
                            margin: [0, 5, 4.5, 0],
                            alignment: 'right',
                            canvas: [{
                                type: 'polyline',
                                lineWidth: 1,
                                closePath: true,
                                alignment: 'right',
                                points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                            }]
                        }
                    ]
                ],
                columnGap: 2.5,
                relativePosition: { x: 0, y: 0 }
            },
            {
                // row 10
                margin: [0, 5],
                columns: [
                    // column 1
                    {
                        width: 125,
                        stack: [
                            { text: '10. ລະບົບກວດກາຄວາມຟອດໄພ:', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
                            { text: '(Safety)', fontSize: 8, margin: [0, 10] }
                        ]
                    },
                    // column 2
                    {
                        width: 95,
                        columns: [
                            [
                                { text: func.getValue(data.mirror), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ແວ່ນສ່ອງຫລັງ,ຂ້າງ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Mirror)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // column 2.5
                    {
                        width: 78,
                        columns: [
                            [
                                { text: func.getValue(data.wiper), fontSize: 10, relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ຝອຍປັດນໍ້າຝົນ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Wiper)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // ໝາຍເຫດ
                    [
                        { text: func.getValue1(data.mirror && data.wiper), fontSize: 10, alignment: 'right', relativePosition: { x: -17, y: 2.5 } }, // O = -15, X = -17

                        // { text: 'x', fontSize: 10, alignment: 'right', relativePosition: { x: -17, y: 2.5 } }, // O = -15, X = -17


                        {
                            margin: [0, 5, 4.5, 0],
                            alignment: 'right',
                            canvas: [{
                                type: 'polyline',
                                lineWidth: 1,
                                closePath: true,
                                alignment: 'right',
                                points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                            }]
                        }
                    ]
                ],
                columnGap: 2.5,
                relativePosition: { x: 0, y: 0 }
            },
            {
                // row 11 ໝາຍເຫດ
                margin: [0, 25],
                columns: [
                    // column 1
                    {
                        width: 125,
                        stack: [
                            { text: 'ໝາຍເຫດ', fontSize: 12 }
                        ]
                    },
                    // column 2
                    {
                        width: 95,
                        columns: [
                            [
                                // {
                                //     text: func.getValue1(
                                //         data.mirror &&
                                //         data.wiper &&
                                //         data.batterry &&
                                //         data.light &&
                                //         data.horn &&
                                //         data.indictor_light &&
                                //         data.brake_light &&
                                //         data.side_light &&
                                //         data.rear_light &&
                                //         data.muffler &&
                                //         data.db &&
                                //         data.co &&
                                //         data.hc &&
                                //         data.clutch &&
                                //         data.gear_lever &&
                                //         data.drive_shaft &&
                                //         data.universal_join &&
                                //         data.handier &&
                                //         data.am &&
                                //         data.side_slip &&
                                //         data.pedal &&
                                //         data.hose &&
                                //         data.reservoir_tank &&
                                //         data.tire &&
                                //         data.wheel &&
                                //         data.bolt &&
                                //         data.chock_absorber &&
                                //         data.spring &&
                                //         data.air_cleaner &&
                                //         data.fan_belt &&
                                //         data.radiator &&
                                //         data.carburator &&
                                //         data.injection_pump),
                                //     fontSize: 10,
                                //     color: 'green',
                                //     relativePosition: { x: 6.5, y: 2.5 }
                                // }, 

                                { text: 'o', fontSize: 10, color: 'green', relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ເຄື່ອງໝາຍຜ່ານ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Pass)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }],
                                        lineColor: 'green'
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    },
                    // column 2.5
                    {
                        width: 78,
                        columns: [
                            [
                                { text: 'x', fontSize: 10, color: 'red', relativePosition: { x: 6.5, y: 2.5 } },
                                {
                                    stack: [
                                        { text: 'ບໍ່ຜ່ານ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                                        { text: '(Failed)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                                    ]
                                },
                                {
                                    margin: [0, 5],
                                    canvas: [{
                                        type: 'polyline',
                                        lineWidth: 1,
                                        closePath: true,
                                        points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }],
                                        lineColor: 'red'
                                    }]
                                }
                            ]
                        ],
                        columnGap: -5
                    }
                ],
                columnGap: 2.5
            }
        ]
    }
}