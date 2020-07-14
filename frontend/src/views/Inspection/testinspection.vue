<template>
<div class="create">
    <v-col cols="12" xl="12" lg="10" md="12" sm="12">
        <v-row no-gutters>
            <v-row align="center" justify="space-around" no-gutters>
                <v-col>
                    <v-card-title>
                        <v-toolbar-title>
                            <h2 class="indigo--text">
                                <v-icon color="indigo">mdi-xing</v-icon>
                                {{ $t("Inspection.Create_Title") }}
                            </h2>
                        </v-toolbar-title>
                        <v-spacer />
                        <v-row>
                            <v-col>
                                {{$t("Register.Platcno")}}
                                <v-btn color="#F9A825">
                                    <Strong v-text="TRName"></Strong>
                                    <Strong v-text="platc_no"></Strong>
                                    <Strong v-text="PName"></Strong>
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-spacer />

                        <v-tooltip bottom color="indigo">
                            <template v-slot:activator="{ on }">
                                <v-btn :to="`/${$i18n.locale}/Inspection/Start`" fab small color="indigo" dark v-on="on">
                                    <v-icon>mdi-undo-variant</v-icon>
                                </v-btn>
                            </template>
                            <span>{{ $t("Inspection.Back") }}</span>
                        </v-tooltip>
                    </v-card-title>
                </v-col>

                <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="left">
                    <v-row no-gutters>

                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="left">
                            <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="center">
                                <v-col cols="12" xl="2" lg="2" md="4" sm="4">
                                    <v-card ref="form">
                                        <div class="base-image-input pt-4" :style="{ 'background-image': `url(${imageData})` }" @click="chooseImage">
                                            <span v-if="!imageData" class="placeholder">
                                                <v-icon style="font-size:90px">mdi-camera-image</v-icon>
                                            </span>
                                            <input class="file-input" ref="photo" type="file" @change="onSelect" @input="onSelectFile" />
                                        </div>
                                    </v-card>
                                </v-col>

                                <v-progress-linear rounded value="100"></v-progress-linear>
                                <v-row no-gutters>
                                    <v-col cols="12" xl="2" lg="2" md="4" sm="4">
                                        <v-checkbox v-model="handier" hide-details :label="$t('Inspection.handier')" color="indigo"></v-checkbox>
                                        <v-checkbox v-model="am" hide-details :label="$t('Inspection.am')" color="indigo"></v-checkbox>
                                        <v-checkbox v-model="side_slip" hide-details :label="$t('Inspection.side_slip')" color="indigo"></v-checkbox>

                                        <v-checkbox v-model="hose" hide-details :label="$t('Inspection.hose')" color="indigo"></v-checkbox>
                                        <v-checkbox v-model="reservoir_tank" hide-details :label="$t('Inspection.reservoir_tank')" color="indigo"></v-checkbox>
                                    </v-col>
                                    <v-col cols="12" xl="2" lg="2" md="4" sm="4">
                                        <v-checkbox v-model="tire" hide-details :label="$t('Inspection.tire')" color="indigo"></v-checkbox>
                                        <v-checkbox v-model="wheel" hide-details :label="$t('Inspection.wheel')" color="indigo"></v-checkbox>
                                        <v-checkbox v-model="bolt" hide-details :label="$t('Inspection.bolt')" color="indigo"></v-checkbox>
                                        <v-checkbox v-model="chock_absorber" hide-details :label="$t('Inspection.chock_absorber')" color="indigo"></v-checkbox>
                                        <v-checkbox v-model="spring" hide-details :label="$t('Inspection.spring')" color="indigo"></v-checkbox>
                                        <!-- <v-checkbox v-model="prime_move" hide-details :label="$t('Inspection.prime_move')" color="indigo"></v-checkbox> -->
                                    </v-col>

                                    <v-col cols="12" lg="2" md="4" sm="4">
                                        <v-checkbox v-model="air_cleaner" hide-details :label="$t('Inspection.air_cleaner')" color="indigo"></v-checkbox>
                                        <v-checkbox v-model="fan_belt" hide-details :label="$t('Inspection.fan_belt')" color="indigo"></v-checkbox>
                                        <v-checkbox v-model="radiator" hide-details :label="$t('Inspection.radiator')" color="indigo"></v-checkbox>
                                        <v-checkbox v-model="carburator" hide-details :label="$t('Inspection.carburator')" color="indigo"></v-checkbox>
                                        <v-checkbox v-model="injection_pump" hide-details :label="$t('Inspection.injection_pump')" color="indigo"></v-checkbox>

                                    </v-col>

                                    <v-col cols="12" lg="2" md="4" sm="4">

                                        <v-checkbox v-model="clutch" hide-details :label="$t('Inspection.clutch')" color="indigo"></v-checkbox>
                                        <v-checkbox v-model="gear_lever" hide-details :label="$t('Inspection.gear_lever')" color="indigo"></v-checkbox>
                                        <v-checkbox v-model="drive_shaft" hide-details :label="$t('Inspection.drive_shaft')" color="indigo"></v-checkbox>
                                        <v-checkbox v-model="universal_join" hide-details :label="$t('Inspection.universal_join')" color="indigo"></v-checkbox>
                                        <v-checkbox v-model="muffler" hide-details :label="$t('Inspection.muffler')" color="indigo"></v-checkbox>
                                    </v-col>

                                    <v-col cols="12" lg="2" md="4" sm="4">

                                        <v-checkbox v-model="batterry" hide-details :label="$t('Inspection.batterry')" color="indigo"></v-checkbox>
                                        <v-checkbox v-model="light" hide-details :label="$t('Inspection.light')" color="indigo"></v-checkbox>
                                        <v-checkbox v-model="horn" hide-details :label="$t('Inspection.horn')" color="indigo"></v-checkbox>
                                        <v-checkbox v-model="indictor_light" hide-details :label="$t('Inspection.indictor_light')" color="indigo"></v-checkbox>
                                        <v-checkbox v-model="brake_light" hide-details :label="$t('Inspection.brake_light')" color="indigo"></v-checkbox>
                                    </v-col>

                                    <v-col cols="12" lg="2" md="4" sm="4">

                                        <v-checkbox v-model="side_light" hide-details :label="$t('Inspection.side_light')" color="indigo"></v-checkbox>
                                        <v-checkbox v-model="rear_light" hide-details :label="$t('Inspection.rear_light')" color="indigo"></v-checkbox>
                                        <v-checkbox v-model="mirror" hide-details :label="$t('Inspection.mirror')" color="indigo"></v-checkbox>
                                        <v-checkbox v-model="wiper" hide-details :label="$t('Inspection.wiper')" color="indigo"></v-checkbox>
                                    </v-col><br>

                                    <v-col cols="12" hidden>
                                        <v-text-field v-model="users_id" label="User ID"></v-text-field>
                                        <v-text-field v-model="branch_id" label="Branch ID"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-col>

                            <v-card-actions>
                                <v-btn text>
                                    <h3 class="indigo--text mr-2 pt-4">ລະບົບເບກຕີນ</h3>
                                </v-btn>

                                <v-checkbox v-model="pedal" hide-details label="ຜ່ານໝາຍຕິດ" color="indigo"></v-checkbox>
                                <v-spacer></v-spacer>
                                <v-btn small @click="show = !show">
                                    <v-icon color="#00C253">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                            </v-card-actions>
                            <v-divider></v-divider>
                            <v-expand-transition>
                                <div v-show="show">

                                    <v-card-text>
                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                                            <v-row v-for="toacces in toaccess" :key="toacces.AcceptNo">
                                                <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="left">

                                                    <v-row>
                                                        <v-col cols="12" xl="2" lg="2" md="2" sm="2">ເພົ່າທີ່ 1</v-col>
                                                        <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                                            ແຮງເບຣກ ລໍ້ໍໍຊາຍ:
                                                            <Strong class="indigo--text" v-text="toacces.Brk_L_FF"></Strong> %
                                                        </v-col>
                                                        <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                                            ແຮງເບຣກ ລໍ້ຂວາ:
                                                            <Strong class="indigo--text" v-text="toacces.Brk_R_FF"></Strong> %
                                                        </v-col>
                                                        <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                                            ບໍ່ສົນມູນ:
                                                            <Strong class="indigo--text" v-text="toacces.BDiff_FF"></Strong> %
                                                        </v-col>
                                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                                                            <v-divider />
                                                        </v-col>
                                                        <v-col cols="12" xl="2" lg="2" md="2" sm="2">ເພົ່າທີ່ 2</v-col>
                                                        <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                                            ແຮງເບຣກ ລໍ້ໍໍຊາຍ:
                                                            <Strong class="indigo--text" v-text="toacces.Brk_L_RF"></Strong> %
                                                        </v-col>
                                                        <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                                            ແຮງເບຣກ ລໍ້ຂວາ:
                                                            <Strong class="indigo--text" v-text="toacces.Brk_R_RF"></Strong> %
                                                        </v-col>
                                                        <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                                            ບໍ່ສົນມູນ:
                                                            <Strong class="indigo--text" v-text="toacces.BSum__RF"></Strong> %
                                                        </v-col>
                                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                                                            <v-divider />
                                                        </v-col>
                                                        <v-col cols="12" xl="2" lg="2" md="2" sm="2">ເພົ່າທີ່ 3</v-col>
                                                        <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                                            ແຮງເບຣກ ລໍ້ໍໍຊາຍ:
                                                            <Strong class="indigo--text" v-text="toacces.Brk_L_RM"></Strong> %
                                                        </v-col>
                                                        <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                                            ແຮງເບຣກ ລໍ້ຂວາ:
                                                            <Strong class="indigo--text" v-text="toacces.Brk_R_RM"></Strong> %
                                                        </v-col>
                                                        <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                                            ບໍ່ສົນມູນ:
                                                            <Strong class="indigo--text" v-text="toacces.BDiff_RM"></Strong> %
                                                        </v-col>

                                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                                                            <v-divider />
                                                        </v-col>
                                                        <v-col cols="12" xl="2" lg="2" md="2" sm="2">ເພົ່າທີ່ 4</v-col>
                                                        <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                                            ແຮງເບຣກ ລໍ້ໍໍຊາຍ:
                                                            <Strong class="indigo--text" v-text="toacces.Brk_L_RR"></Strong> %
                                                        </v-col>
                                                        <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                                            ແຮງເບຣກ ລໍ້ຂວາ:
                                                            <Strong class="indigo--text" v-text="toacces.Brk_R_RR"></Strong> %
                                                        </v-col>
                                                        <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                                            ບໍ່ສົນມູນ:
                                                            <Strong class="indigo--text" v-text="toacces.BDiff_RR"></Strong> %
                                                        </v-col>
                                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                                                            <v-divider />
                                                        </v-col>
                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-card-text>
                                </div>
                            </v-expand-transition>

                            <v-card-actions>
                                <v-btn text>
                                    <h3 class="indigo--text mr-4  pt-4">ລະບົບເບກມື</h3>
                                </v-btn>
                                <v-checkbox v-model="prime_move" hide-details label="ຜ່ານໝາຍຕິດ" color="indigo"></v-checkbox>

                                <v-spacer></v-spacer>
                                <v-btn small @click="show1 = !show1">
                                    <v-icon color="#00C253">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>

                            </v-card-actions>
                            <v-divider></v-divider>
                            <v-expand-transition>
                                <div v-show="show1">

                                    <v-card-text>
                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                                            <v-row v-for="toacces in toaccess" :key="toacces.AcceptNo">
                                                <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="left">

                                                    <v-row>

                                                        <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                                            ປະສິດທີພາບລວາມ:
                                                            <Strong class="indigo--text" v-text="toacces.Brk_L_PB"></Strong> %
                                                        </v-col>

                                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                                                            <v-divider />
                                                        </v-col>

                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-card-text>
                                </div>
                            </v-expand-transition>

                            <v-card-actions>
                                <v-btn text>
                                    <h3 class="indigo--text mr-2  pt-4">ເບຣກສຸກເສີນ</h3>
                                </v-btn>
                                <v-checkbox v-model="prime_move" hide-details label="ຜ່ານໝາຍຕິດ" color="indigo"></v-checkbox>

                                <v-spacer></v-spacer>
                                <v-btn small @click="show2 = !show2">
                                    <v-icon color="#00C253">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>

                            </v-card-actions>
                            <v-divider></v-divider>
                            <v-expand-transition>
                                <div v-show="show2">

                                    <v-card-text>
                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                                            <v-row v-for="toacces in toaccess" :key="toacces.AcceptNo">
                                                <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="left">

                                                    <v-row>

                                                        <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                                            ປະສິດທີພາບລວາມ:
                                                            <Strong class="indigo--text" v-text="toacces.BSumP_PK"></Strong> %
                                                        </v-col>

                                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                                                            <v-divider />
                                                        </v-col>

                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-card-text>
                                </div>
                            </v-expand-transition>

                            <v-card-actions>
                                <v-btn text>
                                    <h3 class="indigo--text mr-2  pt-4">ວັດຄວາມແຮງ</h3>
                                </v-btn>
                                <v-checkbox v-model="prime_move" hide-details label="ຜ່ານໝາຍຕິດ" color="indigo"></v-checkbox>

                                <v-spacer></v-spacer>
                                <v-btn small @click="show3 = !show3">
                                    <v-icon color="#00C253">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>

                            </v-card-actions>
                            <v-divider></v-divider>
                            <v-expand-transition>
                                <div v-show="show3">

                                    <v-card-text>
                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                                            <v-row v-for="toacces in toaccess" :key="toacces.AcceptNo">
                                                <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="left">

                                                    <v-row>

                                                        <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                                            ປະສິດທີພາບລວາມ:
                                                            <Strong class="indigo--text" v-text="toacces.Speed_40"></Strong> %
                                                        </v-col>

                                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                                                            <v-divider />
                                                        </v-col>

                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-card-text>
                                </div>
                            </v-expand-transition>

                            <v-card-actions>
                                <v-btn text>
                                    <h3 class="indigo--text mr-1  pt-4">ເຄື່ອງຜ່ອນຄາຍ</h3>
                                </v-btn>
                                <v-checkbox v-model="prime_move" hide-details label="ຜ່ານໝາຍຕິດ" color="indigo"></v-checkbox>

                                <v-spacer></v-spacer>
                                <v-btn small @click="show4 = !show4">
                                    <v-icon color="#00C253">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>

                            </v-card-actions>
                            <v-divider></v-divider>
                            <v-expand-transition>
                                <div v-show="show4">

                                    <v-card-text>
                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                                            <v-row v-for="toacces in toaccess" :key="toacces.AcceptNo">
                                                <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="left">

                                                    <v-row>
                                                        <v-col cols="12" xl="2" lg="2" md="2" sm="2">ເຄື່ອງຜ່ອນຄາຍ</v-col>
                                                        <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                                            ເພົ່າທີ່ 1:
                                                            <Strong class="indigo--text" v-text="toacces.BSumP_PK"></Strong> %
                                                        </v-col>

                                                        <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                                            ເພົ່າທີ່ 2:
                                                            <Strong class="indigo--text" v-text="toacces.BSumP_PK"></Strong> %
                                                        </v-col>

                                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                                                            <v-divider />
                                                        </v-col>

                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-card-text>
                                </div>
                            </v-expand-transition>

                            <v-card-actions>
                                <v-btn text>
                                    <h3 class="indigo--text mr-3  pt-4">ນໍ້າໜັກລົງເພົາ</h3>
                                </v-btn>
                                <v-checkbox v-model="prime_move" hide-details label="ຜ່ານໝາຍຕິດ" color="indigo"></v-checkbox>

                                <v-spacer></v-spacer>
                                <v-btn small @click="show5 = !show5">
                                    <v-icon color="#00C253">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>

                            </v-card-actions>
                            <v-divider></v-divider>
                            <v-expand-transition>
                                <div v-show="show5">

                                    <v-card-text>
                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                                            <v-row v-for="toacces in toaccess" :key="toacces.AcceptNo">
                                                <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="left">

                                                    <v-row>

                                                        <v-col cols="12" xl="2" lg="2" md="2" sm="2">
                                                            ເພົ່າທີ່ 1:
                                                            <Strong class="indigo--text" v-text="toacces.BSumP_PK"></Strong> %
                                                        </v-col>

                                                        <v-col cols="12" xl="2" lg="2" md="2" sm="2">
                                                            ເພົ່າທີ່ 2:
                                                            <Strong class="indigo--text" v-text="toacces.BSumP_PK"></Strong> %
                                                        </v-col>
                                                        <v-col cols="12" xl="2" lg="2" md="2" sm="2">
                                                            ເພົ່າທີ່ 3:
                                                            <Strong class="indigo--text" v-text="toacces.BSumP_PK"></Strong> %
                                                        </v-col>
                                                        <v-col cols="12" xl="2" lg="2" md="2" sm="2">
                                                            ເພົ່າທີ່ 4:
                                                            <Strong class="indigo--text" v-text="toacces.BSumP_PK"></Strong> %
                                                        </v-col>
                                                        <v-col cols="12" xl="2" lg="2" md="2" sm="2">
                                                            ນໍ້າໜັກລວມ:
                                                            <Strong class="indigo--text" v-text="toacces.BSumP_PK"></Strong> %
                                                        </v-col>
                                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                                                            <v-divider />
                                                        </v-col>

                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-card-text>
                                </div>
                            </v-expand-transition>

                            <v-card-actions>
                                <v-btn text>
                                    <h3 class="indigo--text mr-12  pt-4">ຄວັນດໍາ.</h3>
                                </v-btn>
                                <v-checkbox v-model="prime_move" hide-details label="ຜ່ານໝາຍຕິດ" color="indigo"></v-checkbox>

                                <v-spacer></v-spacer>
                                <v-btn small @click="show6 = !show6">
                                    <v-icon color="#00C253">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>

                            </v-card-actions>
                            <v-divider></v-divider>
                            <v-expand-transition>
                                <div v-show="show6">

                                    <v-card-text>
                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                                            <v-row v-for="toacces in toaccess" :key="toacces.AcceptNo">
                                                <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="left">

                                                    <v-row>

                                                        <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                                            ຄວັນດໍາ:
                                                            <Strong class="indigo--text" v-text="toacces.Brk_L_FF"></Strong> %
                                                        </v-col>

                                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                                                            <v-divider />
                                                        </v-col>

                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-card-text>
                                </div>
                            </v-expand-transition>

                            <v-card-actions>
                                <v-btn text>
                                    <h3 class="indigo--text mr-12  pt-4">CO.....</h3>
                                </v-btn>

                                <v-checkbox v-model="co" hide-details label="ຜ່ານໝາຍຕິດ" color="indigo"></v-checkbox>
                                <v-spacer></v-spacer>
                                <v-btn small @click="show7 = !show7">
                                    <v-icon color="#00C253">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>

                            </v-card-actions>
                            <v-divider></v-divider>
                            <v-expand-transition>
                                <div v-show="show7">

                                    <v-card-text>
                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                                            <v-row v-for="toacces in toaccess" :key="toacces.AcceptNo">
                                                <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="left">

                                                    <v-row>

                                                        <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                                            CO:
                                                            <Strong class="indigo--text" v-text="toacces.Brk_L_FF"></Strong> %
                                                        </v-col>

                                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                                                            <v-divider />
                                                        </v-col>

                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-card-text>
                                </div>
                            </v-expand-transition>

                            <v-card-actions>
                                <v-btn text>
                                    <h3 class="indigo--text mr-12  pt-4">HC.....</h3>
                                </v-btn>
                                <v-checkbox v-model="hc" hide-details label="ຜ່ານໝາຍຕິດ" color="indigo"></v-checkbox>

                                <v-spacer></v-spacer>
                                <v-btn small @click="show9 = !show9">
                                    <v-icon color="#00C253">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>

                            </v-card-actions>
                            <v-divider></v-divider>
                            <v-expand-transition>
                                <div v-show="show9">

                                    <v-card-text>
                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                                            <v-row v-for="toacces in toaccess" :key="toacces.AcceptNo">
                                                <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="left">

                                                    <v-row>

                                                        <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                                            HC:
                                                            <Strong class="indigo--text" v-text="toacces.Brk_L_FF"></Strong> %
                                                        </v-col>

                                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                                                            <v-divider />
                                                        </v-col>

                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-card-text>
                                </div>
                            </v-expand-transition>

                            <v-card-actions>
                                <v-btn text>
                                    <h3 class="indigo--text mr-12  pt-4">ສຽງ.....</h3>
                                </v-btn>
                                <v-checkbox v-model="db" hide-details label="ຜ່ານໝາຍຕິດ" color="indigo"></v-checkbox>

                                <v-spacer></v-spacer>
                                <v-btn small @click="show8 = !show8">
                                    <v-icon color="#00C253">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>

                            </v-card-actions>
                            <v-divider></v-divider>
                            <v-expand-transition>
                                <div v-show="show8">

                                    <v-card-text>
                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                                            <v-row v-for="toacces in toaccess" :key="toacces.AcceptNo">
                                                <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="left">

                                                    <v-row>

                                                        <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                                            ສຽງ:
                                                            <Strong class="indigo--text" v-text="toacces.Brk_L_FF"></Strong> dBA
                                                        </v-col>

                                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                                                            <v-divider />
                                                        </v-col>

                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-card-text>
                                </div>
                            </v-expand-transition>

                            <v-card-actions>
                                <v-btn text>
                                    <h3 class="indigo--text mr-12  pt-4">ສູນລໍ້ໜ້າ</h3>
                                </v-btn>
                                <v-checkbox v-model="hc" hide-details label="ຜ່ານໝາຍຕິດ" color="indigo"></v-checkbox>

                                <v-spacer></v-spacer>
                                <v-btn small @click="show10 = !show10">
                                    <v-icon color="#00C253">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>

                            </v-card-actions>
                            <v-divider></v-divider>
                            <v-expand-transition>
                                <div v-show="show10">

                                    <v-card-text>
                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                                            <v-row v-for="toacces in toaccess" :key="toacces.AcceptNo">
                                                <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="left">

                                                    <v-row>

                                                        <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                                            ສູນລໍ້ໜ້າ:
                                                            <Strong class="indigo--text" v-text="toacces.Brk_L_FF"></Strong> m/km
                                                        </v-col>

                                                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                                                            <v-divider />
                                                        </v-col>

                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-card-text>
                                </div>
                            </v-expand-transition>

                            <v-col hidden cols="12" xl="2" lg="2" md="4" sm="4">
                                <v-text-field disabled="register_id" label="Register ID" v-model="register_id"></v-text-field>
                            </v-col>
                            <v-row>

                                <v-col cols="12" xl="12" lg="2" md="12" sm="4">
                                    <v-select color="#00C253" class="my-2" loading target="#dropdown-example-1" :items="toaccess" v-model="AcceptNo" label="ເລືອກລະຫັດດຶ່ງຄ່າວັດຈາກເຄື່ອງ" item-text="AcceptNo" required></v-select>
                                </v-col>
                                <v-col cols="12" xl="12" lg="2" md="12" sm="4">
                                    <v-select color="#00C253" class="my-2" loading target="#dropdown-example-1" :items="idcarcohc" v-model="idcarcohc" label="ເລືອກລະຫັດດຶ່ງຄ່າວັດຈາກເຄື່ອງ" item-text="idcarcohc" required></v-select>
                                </v-col>
                                <v-col cols="12" xl="12" lg="2" md="12" sm="4">
                                    <v-select color="#00C253" class="my-2" loading target="#dropdown-example-1" :items="toaccess" v-model="AcceptNo" label="ເລືອກລະຫັດດຶ່ງຄ່າວັດຈາກເຄື່ອງ" item-text="AcceptNo" required></v-select>
                                </v-col>
                                <v-col cols="12" xl="12" lg="2" md="12" sm="4">
                                    <v-select color="#00C253" class="my-2" loading target="#dropdown-example-1" :items="toaccess" v-model="AcceptNo" label="ເລືອກລະຫັດດຶ່ງຄ່າວັດຈາກເຄື່ອງ" item-text="AcceptNo" required></v-select>
                                </v-col>
                                <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                                    <v-tooltip bottom color="indigo">
                                        <template v-slot:activator="{ on }">
                                            <v-btn right color="#00C853" class="white--text" @click="save" v-on="on">
                                                <v-icon>save</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>{{ $t("Inspection.Save") }}</span>
                                    </v-tooltip>
                                </v-col>
                            </v-row>

                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-row>
    </v-col>
</div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import console from "console.log";
import AuthService from "@/services/AuthService.js";
Vue.use(VueAxios, axios);
export default {
    data: () => ({
        show: false,
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false,
        show7: false,
        show8: false,
        show9: false,
        show10: false,
        hidden: true,
        hidden1: true,
        hidden2: true,
        imageData: null,
        fee_id: "",
        register_id: "",
        model_id: "",
        handier: true,
        am: true,
        side_slip: true,
        pedal: true,
        hose: true,
        reservoir_tank: true,
        tire: true,
        wheel: true,
        bolt: true,
        chock_absorber: true,
        spring: true,
        prime_move: true,
        air_cleaner: true,
        fan_belt: true,
        radiator: true,
        carburator: true,
        injection_pump: true,
        co: true,
        hc: true,
        db: true,
        clutch: true,
        gear_lever: true,
        drive_shaft: true,
        universal_join: true,
        muffler: true,
        batterry: true,
        light: true,
        horn: true,
        indictor_light: true,
        brake_light: true,
        side_light: true,
        rear_light: true,
        mirror: true,
        wiper: true,
        photo: "",
        status: "NotPay",
        message: "",
        prime_moves: ["ແອັດຊັງ", "ກາຊວນ"],
        snackbar: false,
        snackbarText: "",
        registers: [],

        headers: [{
                text: "ຊື່ສີ",
                align: "left",
                sortable: true,
                value: "Brk_L_FF",
                width: "100px"
            },
            {
                text: "ຈັດການ",
                value: "Brk_L_FF",
                width: "60px",
                align: "right"
            }
        ],
        toaccess: [],
        AcceptNo: "",
        idcarcohc: "",
        users_id: "",
        branch_id: ""
    }),

    watch: {
        variant(val) {
            if (val.includes("filter")) {
                this.value = true;
            }
        }
    },
    async created() {
        let res = await axios.get(
            "/api/register/register_id/" + this.$route.query.register_id
        );
        
        this.register_id = res.data.registers.register_id || "";
        this.owner_name = res.data.registers.owner_name || "";
        this.phone = res.data.registers.phone || "";
        this.VName = res.data.registers.VName || "";
        this.DName = res.data.registers.DName || "";
        this.PName = res.data.registers.PName || "";
        this.UName = res.data.registers.UName || "";
        this.TRName = res.data.registers.TRName || "";
        this.platc_no = res.data.registers.platc_no || "";
        this.MName = res.data.registers.MName || "";
        this.TName = res.data.registers.TName || "";
        this.CName = res.data.registers.CName || "";
        this.engine_no = res.data.registers.engine_no || "";
        this.chassis_no = res.data.registers.chassis_no || "";
        this.initialize();
        this.getRegister();
        this.idcarcohc();

        if (this.$store.getters.getUser.inspection_create === "1") {
            this.inspection_create = this.$store.getters.getUser.inspection_create;
            this.username = this.$store.getters.getUser.username;
            this.users_id = this.$store.getters.getUser.users_id;
            this.branch_id = this.$store.getters.getUser.branch_id;
            this.secretMessage = await AuthService.getSecretContent();
        } else {
            this.$store.dispatch("logout");
            this.$router.push("../login");
        }
    },

    methods: {
        initialize() {
            this.axios.get("/api/inspection/toaccess").then(response => {
                this.toaccess = response.data.toaccess;
            });
        },
        idcarcohc() {
            this.axios.get("/api/inspection/idcarcohc").then(response => {
                this.idcarcohc = response.data.idcarcohc;
            });
        },
        chooseImage() {
            this.$refs.photo.click();
        },
        onSelectFile() {
            const input = this.$refs.photo;
            const files = input.files;
            if (files && files[0]) {
                const reader = new FileReader();
                reader.onload = e => {
                    this.imageData = e.target.result;
                };
                reader.readAsDataURL(files[0]);
                this.$emit("input", files[0]);
            }
        },
        onSelect() {
            const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
            const photo = this.$refs.photo.files[0];
            this.photo = photo;
            if (!allowedTypes.includes(photo.type)) {
                this.message = "Filetype is wrong!!";
            }
            if (photo.size > 500000) {
                this.message = "Too large, max size allowed is 500kb";
            }
        },
        async save() {
            const formData = new FormData();
            formData.append("register_id", this.register_id);
            formData.append("users_id", this.users_id);
            formData.append("branch_id", this.branch_id);
            formData.append("AcceptNo", this.AcceptNo);
            formData.append("idcarcohc", this.idcarcohc);
            formData.append("handier", this.handier);
            formData.append("am", this.am);
            formData.append("side_slip", this.side_slip);
            formData.append("pedal", this.pedal);
            formData.append("hose", this.hose);
            formData.append("reservoir_tank", this.reservoir_tank);
            formData.append("tire", this.tire);
            formData.append("wheel", this.wheel);
            formData.append("bolt", this.bolt);
            formData.append("chock_absorber", this.chock_absorber);
            formData.append("spring", this.spring);
            formData.append("prime_move", this.prime_move);
            formData.append("air_cleaner", this.air_cleaner);
            formData.append("fan_belt", this.fan_belt);
            formData.append("radiator", this.radiator);
            formData.append("carburator", this.carburator);
            formData.append("injection_pump", this.injection_pump);
            formData.append("co", this.co);
            formData.append("hc", this.hc);
            formData.append("clutch", this.clutch);
            formData.append("gear_lever", this.gear_lever);
            formData.append("drive_shaft", this.drive_shaft);
            formData.append("universal_join", this.universal_join);
            formData.append("muffler", this.muffler);
            formData.append("db", this.db);
            formData.append("batterry", this.batterry);
            formData.append("light", this.light);
            formData.append("horn", this.horn);
            formData.append("indictor_light", this.indictor_light);
            formData.append("brake_light", this.brake_light);
            formData.append("side_light", this.side_light);
            formData.append("rear_light", this.rear_light);
            formData.append("mirror", this.mirror);
            formData.append("wiper", this.wiper);
            formData.append("photo", this.photo);
            formData.append("status", this.status);
            try {
                await axios.post("/api/inspection1/create", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
                this.message = "Uploaded!!";
                this.$router.push("List");
            } catch (err) {
                console.log(err);
                this.message = err.response.data.error;
            }
        },
        getRegister() {
            this.axios.get("/api/register").then(response1 => {
                this.registers = response1.data.registers;
            });
        }
    }
};
</script>

<style scoped>
.base-image-input {
    /* display: block; */
    width: 100%;
    height: 130px;
    /* cursor: pointer; */
    background-size: cover;
    background-position: center center;
}

.placeholder {
    /* background: indigo; */
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* color: #333; */
    font-size: 18px;
    /* font-family: Helvetica; */
}

.placeholder:hover {
    background: #b3c4c7;
}

.file-input {
    display: none;
}
</style>
