<template>
  <div class="create">
    <v-content>
      <v-container>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" align="left">
            <v-card dense flat color="white">
              <v-card-text>
                <strong>{{$t("Navbar.Dashboard")}}</strong>
                <v-icon small class="ma-2">mdi-chevron-right</v-icon>
                <strong>{{$t("Navbar.Inspection")}}</strong>
                <v-icon small class="ma-2">mdi-chevron-right</v-icon>
                <span>{{$t("Inspection.Create_Title")}}</span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="pt-4">
            <ValidationObserver ref="observer">
              <v-card flat color="white">
                <v-card-title>
                  {{ $t("Inspection.Create_Title") }}
                  <v-spacer />
                  <v-tooltip bottom color="#3d5afe">
                    <template v-slot:activator="{ on }">
                      <v-btn
                        :to="`/${$i18n.locale}/InspectionStart`"
                        fab
                        small
                        depressed
                        color="#3d5afe"
                        dark
                        v-on="on"
                      >
                        <v-icon small>mdi-undo-variant</v-icon>
                      </v-btn>
                    </template>
                    <span>{{ $t("Inspection.Back") }}</span>
                  </v-tooltip>
                </v-card-title>
                <v-card-subtitle>
                  <ValidationProvider
                    rules="required"
                    v-slot="{ errors }"
                    :v-model="tr_id"
                    :bails="false"
                  >
                    <v-col cols="12" align="center">
                      <v-card ref="form" flat outlined width="250px" height="160px">
                        <div
                          class="base-image-input pt-1"
                          :style="{ 'background-image': `url(${imageData})` }"
                          @click="chooseImage"
                        >
                          <span v-if="!imageData" prepend-icon="mdi-camera" class="placeholder">
                            <v-icon color="#3d5afe" style="font-size:130px">mdi-camera</v-icon>
                          </span>
                          <input
                            accept="image/png, image/jpeg, image/bmp"
                            class="file-input"
                            ref="photo"
                            type="file"
                            @input="onSelectFile"
                          />
                          <input type="text" v-model="photo" hidden />
                        </div>
                      </v-card>
                    </v-col>
                    <v-col cols="12" style="color:red">
                      <li v-for="(error, index) in errors" :key="index">
                        <span class="li">ເລືອນຮູບກ່ອນ</span>
                      </li>
                    </v-col>
                  </ValidationProvider>
                </v-card-subtitle>
                <v-card-text>
                  <v-row no-gutters>
                    <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="left">
                      <ValidationObserver ref="observer">
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="center">
                          <!-- <v-progress-linear rounded value="100"></v-progress-linear> -->
                          <v-row no-gutters>
                            <v-col cols="12" xl="2" lg="2" md="4" sm="4">
                              <v-checkbox
                                vulue="true"
                                v-model="handier"
                                hide-details
                                :label="$t('Inspection.handier')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="am"
                                hide-details
                                :label="$t('Inspection.am')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="side_slip"
                                hide-details
                                :label="$t('Inspection.side_slip')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="hose"
                                hide-details
                                :label="$t('Inspection.hose')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="reservoir_tank"
                                hide-details
                                :label="$t('Inspection.reservoir_tank')"
                                color="#3d5afe"
                              ></v-checkbox>
                            </v-col>
                            <v-col cols="12" xl="2" lg="2" md="4" sm="4">
                              <v-checkbox
                                vulue="true"
                                v-model="tire"
                                hide-details
                                :label="$t('Inspection.tire')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="wheel"
                                hide-details
                                :label="$t('Inspection.wheel')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="bolt"
                                hide-details
                                :label="$t('Inspection.bolt')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="chock_absorber"
                                hide-details
                                :label="$t('Inspection.chock_absorber')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="spring"
                                hide-details
                                :label="$t('Inspection.spring')"
                                color="#3d5afe"
                              ></v-checkbox>
                            </v-col>

                            <v-col cols="12" lg="2" md="4" sm="4">
                              <v-checkbox
                                vulue="true"
                                v-model="air_cleaner"
                                hide-details
                                :label="$t('Inspection.air_cleaner')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="fan_belt"
                                hide-details
                                :label="$t('Inspection.fan_belt')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="radiator"
                                hide-details
                                :label="$t('Inspection.radiator')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="carburator"
                                hide-details
                                :label="$t('Inspection.carburator')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="injection_pump"
                                hide-details
                                :label="$t('Inspection.injection_pump')"
                                color="#3d5afe"
                              ></v-checkbox>
                            </v-col>

                            <v-col cols="12" lg="2" md="4" sm="4">
                              <v-checkbox
                                vulue="true"
                                v-model="clutch"
                                hide-details
                                :label="$t('Inspection.clutch')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="gear_lever"
                                hide-details
                                :label="$t('Inspection.gear_lever')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="drive_shaft"
                                hide-details
                                :label="$t('Inspection.drive_shaft')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="universal_join"
                                hide-details
                                :label="$t('Inspection.universal_join')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="muffler"
                                hide-details
                                :label="$t('Inspection.muffler')"
                                color="#3d5afe"
                              ></v-checkbox>
                            </v-col>

                            <v-col cols="12" lg="2" md="4" sm="4">
                              <v-checkbox
                                vulue="true"
                                v-model="batterry"
                                hide-details
                                :label="$t('Inspection.batterry')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="light"
                                hide-details
                                :label="$t('Inspection.light')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="horn"
                                hide-details
                                :label="$t('Inspection.horn')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="indictor_light"
                                hide-details
                                :label="$t('Inspection.indictor_light')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="brake_light"
                                hide-details
                                :label="$t('Inspection.brake_light')"
                                color="#3d5afe"
                              ></v-checkbox>
                            </v-col>

                            <v-col cols="12" lg="2" md="4" sm="4">
                              <v-checkbox
                                vulue="true"
                                v-model="side_light"
                                hide-details
                                :label="$t('Inspection.side_light')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="rear_light"
                                hide-details
                                :label="$t('Inspection.rear_light')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="mirror"
                                hide-details
                                :label="$t('Inspection.mirror')"
                                color="#3d5afe"
                              ></v-checkbox>
                              <v-checkbox
                                vulue="true"
                                v-model="wiper"
                                hide-details
                                :label="$t('Inspection.wiper')"
                                color="#3d5afe"
                              ></v-checkbox>
                            </v-col>
                            <br />

                            <!-- <v-col cols="12" hidden>
                                        <v-text-field v-model="users_id" label="User ID"></v-text-field>
                                        <v-text-field v-model="branch_id" label="Branch ID"></v-text-field>
                            </v-col>-->
                          </v-row>
                        </v-col>

                        <v-card-actions class="mr-12">
                          <h3 class="indigo--text mr-2 pt-4">ລະບົບເບກຕີນ</h3>
                          <v-col>
                            <v-checkbox
                              vulue="true"
                              v-model="pedal"
                              hide-details
                              label
                              color="#3d5afe"
                            ></v-checkbox>
                          </v-col>

                          <v-spacer></v-spacer>
                          <v-btn depressed color="#3d5afe" outlined small @click="show = !show">
                            <v-icon
                              color="#3d5afe"
                            >{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
                                        <Strong class="indigo--text" v-text="toacces.Brk_L_FF"></Strong>%
                                      </v-col>
                                      <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                        ແຮງເບຣກ ລໍ້ຂວາ:
                                        <Strong class="indigo--text" v-text="toacces.Brk_R_FF"></Strong>%
                                      </v-col>
                                      <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                        ບໍ່ສົນມູນ:
                                        <Strong class="indigo--text" v-text="toacces.BDiff_FF"></Strong>%
                                      </v-col>
                                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                                        <v-divider />
                                      </v-col>
                                      <v-col cols="12" xl="2" lg="2" md="2" sm="2">ເພົ່າທີ່ 2</v-col>
                                      <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                        ແຮງເບຣກ ລໍ້ໍໍຊາຍ:
                                        <Strong class="indigo--text" v-text="toacces.Brk_L_RF"></Strong>%
                                      </v-col>
                                      <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                        ແຮງເບຣກ ລໍ້ຂວາ:
                                        <Strong class="indigo--text" v-text="toacces.Brk_R_RF"></Strong>%
                                      </v-col>
                                      <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                        ບໍ່ສົນມູນ:
                                        <Strong class="indigo--text" v-text="toacces.BSum__RF"></Strong>%
                                      </v-col>
                                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                                        <v-divider />
                                      </v-col>
                                      <v-col cols="12" xl="2" lg="2" md="2" sm="2">ເພົ່າທີ່ 3</v-col>
                                      <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                        ແຮງເບຣກ ລໍ້ໍໍຊາຍ:
                                        <Strong class="indigo--text" v-text="toacces.Brk_L_RM"></Strong>%
                                      </v-col>
                                      <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                        ແຮງເບຣກ ລໍ້ຂວາ:
                                        <Strong class="indigo--text" v-text="toacces.Brk_R_RM"></Strong>%
                                      </v-col>
                                      <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                        ບໍ່ສົນມູນ:
                                        <Strong class="indigo--text" v-text="toacces.BDiff_RM"></Strong>%
                                      </v-col>

                                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                                        <v-divider />
                                      </v-col>
                                      <v-col cols="12" xl="2" lg="2" md="2" sm="2">ເພົ່າທີ່ 4</v-col>
                                      <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                        ແຮງເບຣກ ລໍ້ໍໍຊາຍ:
                                        <Strong class="indigo--text" v-text="toacces.Brk_L_RR"></Strong>%
                                      </v-col>
                                      <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                        ແຮງເບຣກ ລໍ້ຂວາ:
                                        <Strong class="indigo--text" v-text="toacces.Brk_R_RR"></Strong>%
                                      </v-col>
                                      <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                        ບໍ່ສົນມູນ:
                                        <Strong class="indigo--text" v-text="toacces.BDiff_RR"></Strong>%
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

                        <v-card-actions class="mr-12">
                          <h3 class="indigo--text mr-4 pt-4">ລະບົບເບກມື</h3>
                          <v-col>
                            <v-checkbox
                              vulue="true"
                              v-model="brk_m"
                              hide-details
                              label
                              color="#3d5afe"
                            ></v-checkbox>
                          </v-col>

                          <v-spacer></v-spacer>
                          <v-btn depressed color="#3d5afe" outlined small @click="show1 = !show1">
                            <v-icon
                              color="#3d5afe"
                            >{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
                                        <Strong class="indigo--text" v-text="toacces.Brk_L_PB"></Strong>%
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

                        <v-card-actions class="mr-12">
                          <h3 class="indigo--text mr-2 pt-4">ເບຣກສຸກເສີນ</h3>
                          <v-col>
                            <v-checkbox
                              vulue="true"
                              v-model="brk_s"
                              hide-details
                              label
                              color="#3d5afe"
                            ></v-checkbox>
                          </v-col>

                          <v-spacer></v-spacer>
                          <v-btn small depressed color="#3d5afe" outlined @click="show2 = !show2">
                            <v-icon
                              color="#3d5afe"
                            >{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
                                        <Strong class="indigo--text" v-text="toacces.BSumP_PK"></Strong>%
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

                        <v-card-actions class="mr-12">
                          <h3 class="indigo--text mr-2 pt-4">ວັດຄວາມແຮງ</h3>
                          <v-col>
                            <v-checkbox
                              vulue="true"
                              v-model="cy_c"
                              hide-details
                              label
                              color="#3d5afe"
                            ></v-checkbox>
                          </v-col>

                          <v-spacer></v-spacer>
                          <v-btn small color="#3d5afe" outlined @click="show3 = !show3">
                            <v-icon
                              color="#3d5afe"
                            >{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
                                        <Strong class="indigo--text" v-text="toacces.Speed_40"></Strong>%
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

                        <v-card-actions class="mr-12">
                          <h3 class="indigo--text mr-1 pt-4">ເຄື່ອງຜ່ອນຄາຍ</h3>
                          <v-col>
                            <v-checkbox
                              vulue="true"
                              v-model="re_m"
                              hide-details
                              label
                              color="#3d5afe"
                            ></v-checkbox>
                          </v-col>

                          <v-spacer></v-spacer>
                          <v-btn small color="#3d5afe" outlined @click="show4 = !show4">
                            <v-icon
                              color="#3d5afe"
                            >{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                          </v-btn>
                          <!-- ຍັງບໍ່ເຫັນ field ຄ່າວັດໃນ Accecc ເປັນຕາຕະລາສາງໃດ ແລະ field ໃດ ທີ່ຈະດຶ່ງສະແດງໃບບິນທີສອງ -->
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
                                        <Strong class="indigo--text"></Strong>%
                                      </v-col>

                                      <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                        ເພົ່າທີ່ 2:
                                        <Strong class="indigo--text"></Strong>%
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

                        <v-card-actions class="mr-12">
                          <h3 class="indigo--text mr-3 pt-4">ນໍ້າໜັກລົງເພົາ</h3>

                          <v-col>
                            <v-checkbox
                              vulue="true"
                              v-model="v_w"
                              hide-details
                              label
                              color="#3d5afe"
                            ></v-checkbox>
                          </v-col>

                          <v-spacer></v-spacer>
                          <v-btn small color="#3d5afe" outlined @click="show5 = !show5">
                            <v-icon
                              color="#3d5afe"
                            >{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                          </v-btn>
                          <!-- ຍັງບໍ່ເຫັນ field ຄ່າວັດໃນ Accecc ເປັນຕາຕະລາສາງໃດ ແລະ field ໃດ ທີ່ຈະດຶ່ງສະແດງໃບບິນທີສອງ -->
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
                                        <Strong class="indigo--text"></Strong>%
                                      </v-col>

                                      <v-col cols="12" xl="2" lg="2" md="2" sm="2">
                                        ເພົ່າທີ່ 2:
                                        <Strong class="indigo--text"></Strong>%
                                      </v-col>
                                      <v-col cols="12" xl="2" lg="2" md="2" sm="2">
                                        ເພົ່າທີ່ 3:
                                        <Strong class="indigo--text"></Strong>%
                                      </v-col>
                                      <v-col cols="12" xl="2" lg="2" md="2" sm="2">
                                        ເພົ່າທີ່ 4:
                                        <Strong class="indigo--text"></Strong>%
                                      </v-col>
                                      <v-col cols="12" xl="2" lg="2" md="2" sm="2">
                                        ນໍ້າໜັກລວມ:
                                        <Strong class="indigo--text"></Strong>%
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

                        <v-card-actions class="mr-12">
                          <h3 class="indigo--text mr-12 pt-4">ຄວັນດໍາ.</h3>
                          <v-col>
                            <v-checkbox
                              vulue="true"
                              v-model="co2"
                              hide-details
                              label
                              color="#3d5afe"
                            ></v-checkbox>
                          </v-col>

                          <v-spacer></v-spacer>
                          <v-btn small color="#3d5afe" outlined @click="show6 = !show6">
                            <v-icon
                              color="#3d5afe"
                            >{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                          </v-btn>
                        </v-card-actions>
                        <v-divider></v-divider>
                        <v-expand-transition>
                          <div v-show="show6">
                            <v-card-text>
                              <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                                <v-row v-for="carcohc in idcarcohcc" :key="carcohc.idcarcohc">
                                  <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="left">
                                    <v-row>
                                      <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                        ຄວັນດໍາ:
                                        <Strong class="indigo--text" v-text="idcarcohc.TstL_CO2"></Strong>%
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

                        <v-card-actions class="mr-12">
                          <h3 class="indigo--text mr-12 pt-4">CO.....</h3>

                          <v-col>
                            <v-checkbox
                              vulue="true"
                              v-model="co"
                              hide-details
                              label
                              color="#3d5afe"
                            ></v-checkbox>
                          </v-col>
                          <v-spacer></v-spacer>
                          <v-btn small color="#3d5afe" outlined @click="show7 = !show7">
                            <v-icon
                              color="#3d5afe"
                            >{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                          </v-btn>
                        </v-card-actions>
                        <v-divider></v-divider>
                        <v-expand-transition>
                          <div v-show="show7">
                            <v-card-text>
                              <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                                <v-row v-for="carcohc in idcarcohcc" :key="carcohc.idcarcohc">
                                  <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="left">
                                    <v-row>
                                      <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                        CO:
                                        <Strong class="indigo--text" v-text="idcarcohc.TstL__CO"></Strong>%
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

                        <v-card-actions class="mr-12">
                          <h3 class="indigo--text mr-12 pt-4">HC.....</h3>
                          <v-col>
                            <v-checkbox
                              vulue="true"
                              v-model="hc"
                              hide-details
                              label
                              color="#3d5afe"
                            ></v-checkbox>
                          </v-col>

                          <v-spacer></v-spacer>
                          <v-btn small color="#3d5afe" outlined @click="show9 = !show9">
                            <v-icon
                              color="#3d5afe"
                            >{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                          </v-btn>
                        </v-card-actions>
                        <v-divider></v-divider>
                        <v-expand-transition>
                          <div v-show="show9">
                            <v-card-text>
                              <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                                <v-row v-for="carcohc in idcarcohcc" :key="carcohc.idcarcohc">
                                  <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="left">
                                    <v-row>
                                      <v-col cols="12" xl="4" lg="3" md="3" sm="3">
                                        HC:
                                        <Strong class="indigo--text" v-text="idcarcohc.TstL__HC"></Strong>%
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

                        <v-card-actions class="mr-12">
                          <h3 class="indigo--text mr-12 pt-4">ສຽງ.....</h3>
                          <v-col>
                            <v-checkbox
                              vulue="true"
                              v-model="db"
                              hide-details
                              label
                              color="#3d5afe"
                            ></v-checkbox>
                          </v-col>

                          <v-spacer></v-spacer>
                          <v-btn small color="#3d5afe" outlined @click="show8 = !show8">
                            <v-icon
                              color="#3d5afe"
                            >{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                          </v-btn>
                          <!-- ຍັງບໍ່ເຫັນ field ຄ່າວັດໃນ Accecc ເປັນຕາຕະລາສາງໃດ ແລະ field ໃດ ທີ່ຈະດຶ່ງສະແດງໃບບິນທີສອງ -->
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
                                        <Strong class="indigo--text"></Strong>dBA
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

                        <v-card-actions class="mr-12">
                          <h3 class="indigo--text mr-12 pt-4">ສູນລໍ້ໜ້າ</h3>
                          <v-col>
                            <v-checkbox
                              vulue="true"
                              v-model="s_n"
                              hide-details
                              label
                              color="#3d5afe"
                            ></v-checkbox>
                          </v-col>
                          <v-spacer></v-spacer>
                          <v-btn small color="#3d5afe" outlined @click="show10 = !show10">
                            <v-icon
                              color="#3d5afe"
                            >{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                          </v-btn>
                          <!-- ຍັງບໍ່ເຫັນ field ຄ່າວັດໃນ Accecc ເປັນຕາຕະລາສາງໃດ ແລະ field ໃດ ທີ່ຈະດຶ່ງສະແດງໃບບິນທີສອງ -->
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
                                        <Strong class="indigo--text"></Strong>m/km
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
                          <v-text-field
                            disabled="register_id"
                            label="Register ID"
                            v-model="register_id"
                          ></v-text-field>
                        </v-col>

                        <v-row>
                          <v-col cols="12" xl="12" lg="2" md="3" sm="4">
                            <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                              <v-menu
                                v-model="menu2"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="290px"
                              >
                                <template v-slot:activator="{ on }">
                                  <v-text-field
                                    v-model="expired_date"
                                    :items="expired_at"
                                    color="#3d5afe"
                                    loading
                                    hide-details="auto"
                                    class="li my-2 pt-2"
                                    label="ເລືອກວັນທີໝົດອາຍຸກວດກາເຕັກນິກ"
                                    prepend-icon="event"
                                    readonly
                                    v-on="on"
                                  ></v-text-field>
                                </template>
                                <v-date-picker
                                  color="#3d5afe"
                                  v-model="expired_date"
                                  @input="menu2 = false"
                                ></v-date-picker>
                              </v-menu>
                              <ul style="color:red" class="overline text-left">
                                <li v-for="(error, expired_date) in errors" :key="expired_date">
                                  <span class="li">{{$t("Register.date")}}</span>
                                </li>
                              </ul>
                            </ValidationProvider>
                          </v-col>
                          <v-col cols="12" xl="12" lg="2" md="12" sm="4">
                            <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                              <v-select
                                color="#3d5afe"
                                class="my-2 pt-4"
                                loading
                                hide-details="auto"
                                value="idAcceptNo"
                                :items="toaccess"
                                v-model="idAcceptNo"
                                label="ເລືອກລະຫັດດື່ງຄ່າວັດຈາກເຄື່ອງ"
                                item-text="idAcceptNo"
                                dense
                              ></v-select>

                              <ul style="color:red" class="overline text-left">
                                <li v-for="(error, toaccess) in errors" :key="toaccess">
                                  <span class="li">{{$t("Register.validated")}}</span>
                                </li>
                              </ul>
                            </ValidationProvider>
                          </v-col>
                          <v-col cols="12" xl="12" lg="2" md="12" sm="4">
                            <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                              <v-select
                                color="#3d5afe"
                                class="my-2 pt-4"
                                loading
                                hide-details="auto"
                                value="carcohc"
                                :items="idcarcohcc"
                                v-model="carcohc"
                                label="ເລືອກລະຫັດດຶ່ງຄ່າວັດຈາກເຄື່ອງ"
                                item-text="idcarcohc"
                                dense
                              ></v-select>

                              <ul style="color:red" class="overline text-left">
                                <li v-for="(error, carcohc) in errors" :key="carcohc">
                                  <span class="li">{{$t("Register.validated")}}</span>
                                </li>
                              </ul>
                            </ValidationProvider>
                          </v-col>

                          <v-col
                            cols="12"
                            xl="12"
                            lg="6"
                            md="12"
                            sm
                            class="pt-11"
                          >ລະຫັດໝາຍເຖິງລົດຄັນເຂົ້າກວດເຕັກນິກປະຈຸບັນ</v-col>
                          <v-col
                            align="right"
                            justify="right"
                            cols="12"
                            xl="12"
                            lg="12"
                            md="12"
                            sm="12"
                          >
                            <v-tooltip bottom color="#00E676">
                              <template v-slot:activator="{ on }">
                                <v-btn
                                  large
                                  class="mr-12"
                                  depressed
                                  @click="inspectionListTo(branch_id)"
                                  color="#00E676"
                                  dark
                                  v-on="on"
                                >
                                  <v-icon large>save</v-icon>
                                </v-btn>
                              </template>
                              <span>{{ $t("Inspection.save") }}</span>
                            </v-tooltip>
                          </v-col>
                          <v-col></v-col>
                        </v-row>
                      </ValidationObserver>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </ValidationObserver>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import console from "console";

import { ValidationProvider } from "vee-validate/dist/vee-validate.full";
import { ValidationObserver } from "vee-validate/dist/vee-validate.full";

import AuthService from "@/services/AuthService.js";

Vue.use(VueAxios, axios);
export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    expired_at: new Date().toISOString().substr(0, 10),
    // menu2: false,

    //ຂະໝາດຮູບ

    rules: [
      value =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!"
    ],
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
    inspection_id: "",
    // imageData: null,
    fee_id: "",
    register_id: "",
    model_id: "",
    //true in table
    hidden: "true",
    hidden1: "true",
    hidden2: "true",

    brk_m: "true",
    brk_s: "true",
    cy_c: "true",
    re_m: "true",
    v_w: "true",
    s_n: "true",
    handier: "true",
    am: "true",
    side_slip: "true",
    pedal: "true",

    reservoir_tank: "true",
    hose: "true",
    tire: "true",
    wheel: "true",
    bolt: "true",
    chock_absorber: "true",
    spring: "true",
    air_cleaner: "true",
    fan_belt: "true",
    radiator: "true",

    carburator: "true",
    injection_pump: "true",
    co2: "true",
    co: "true",
    hc: "true",
    db: "true",
    clutch: "true",
    gear_lever: "true",
    drive_shaft: "true",
    universal_join: "true",

    muffler: "true",
    batterry: "true",
    light: "true",
    horn: "true",
    indictor_light: "true",
    brake_light: "true",
    side_light: "true",
    rear_light: "true",
    mirror: "true",
    wiper: "true",
    qr: "",
    photo: [],

    status: "NotPay",
    message: "",
    prime_moves: ["ແອັດຊັງ", "ກາຊວນ"],
    snackbar: false,
    snackbarText: "",
    registers: [],
    headers: [
      {
        text: "ຊື່ສີ",
        align: "left",
        sortable: 1,
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
    expired_att: [],
    expired_date: "",
    created_at: [],
    toaccess: [],
    AcceptNo: "",
    idcarcohcc: "",
    carcohc: "",
    users_id: "",
    branch_id: ""
  }),

  watch: {
    variant(val) {
      if (val.includes("filter")) {
        this.value = 1;
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
    this.idcarcohc();
    // this.inspectionListTo();

    if (this.$store.getters.getUser.inspection_create) {
      this.users_id = this.$store.getters.getUser.users_id;
      this.username = this.$store.getters.getUser.username;
      this.branch_name = this.$store.getters.getUser.branch_name;
      this.branch_id = this.$store.getters.getUser.branch_id;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("./login");
    }
  },

  methods: {
    async inspectionListTo(branch_id) {
      const isValid = await this.$refs.observer.validate(
        this.idAcceptNo != false &&
          this.carcohc != false &&
          this.expired_date != false &&
          this.axios.post("/api/inspection/create", {
            register_id: this.register_id,
            users_id: this.users_id,
            branch_id: this.branch_id,
            inspection_id: this.inspection_id,

            idAcceptNo: this.idAcceptNo,
            carcohc: this.carcohc,

            brk_m: this.brk_m,
            brk_s: this.brk_s,
            cy_c: this.cy_c,
            re_m: this.re_m,
            v_w: this.v_w,
            s_n: this.s_n,
            handier: this.handier,
            am: this.am,
            side_slip: this.side_slip,
            pedal: this.pedal,

            hose: this.hose,
            reservoir_tank: this.reservoir_tank,
            tire: this.tire,
            wheel: this.wheel,
            bolt: this.bolt,
            chock_absorber: this.chock_absorber,
            spring: this.spring,
            air_cleaner: this.air_cleaner,
            fan_belt: this.fan_belt,
            radiator: this.radiator,

            carburator: this.carburator,
            injection_pump: this.injection_pump,
            co2: this.co2,
            co: this.co,
            hc: this.hc,
            db: this.db,
            clutch: this.clutch,
            gear_lever: this.gear_lever,
            drive_shaft: this.drive_shaft,
            universal_join: this.universal_join,

            muffler: this.muffler,
            batterry: this.batterry,
            light: this.light,
            horn: this.horn,
            indictor_light: this.indictor_light,
            brake_light: this.brake_light,
            side_light: this.side_light,
            rear_light: this.rear_light,
            mirror: this.mirror,
            wiper: this.wiper,

            photo: this.photo,
            qr: this.qr,
            status: this.status,
            // created_at: this.created_at,
            expired_date: this.expired_date
          })
      );
      if (!isValid) {
        // console.log("is not valid");
        // alert("Please Save");
      } else {
        console.log("is valid");
        // console.log(this.name);
        // reset fields
        // this.name = "";
        this.$router.push("inspectionList?branch_id=" + branch_id);

        // reset validation
        // You should call it on the next frame
        // requestAnimationFrame(() => {
        //     this.$refs.observer.reset();
        // });
      }
    },

    initialize() {
      this.axios.get("/api/inspection/toaccess").then(response => {
        this.toaccess = response.data.toaccess;
      });
    },
    idcarcohc() {
      this.axios.get("/api/inspection/idcarcohcc").then(response => {
        this.idcarcohcc = response.data.idcarcohcc;
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
          let img = new Image();
          img.onload = () => {
            this.photo = reader.result;
          };
          img.src = e.target.result;
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
    }

    // onSelect() {
    //     const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    //     const photo = this.$refs.photo.files[0];
    //     this.photo = photo;
    //     if (!allowedTypes.includes(photo.type)) {
    //         this.message = "Filetype is wrong!!";
    //     }
    //     if (photo.size > 500000) {
    //         this.message = "Too large, max size allowed is 500kb";
    //     }
    // },
    // inspection_id() {

    // },
    // async save() {
    // let res = await this.axios.post("/api/inspection/create", {
    //     register_id: this.register_id,
    //     users_id: this.users_id,
    //     branch_id: this.branch_id,
    //     inspection_id: this.inspection_id,
    //     idAcceptNo: this.idAcceptNo,
    //     idcarcohc: this.idcarcohc,

    //     brk_m: this.brk_m,
    //     brk_s: this.brk_s,
    //     cy_c: this.cy_c,
    //     re_m: this.re_m,
    //     v_w: this.v_w,
    //     s_n: this.s_n,
    //     handier: this.handier,
    //     am: this.am,
    //     side_slip: this.side_slip,
    //     pedal: this.pedal,

    //     hose: this.hose,
    //     reservoir_tank: this.reservoir_tank,
    //     tire: this.tire,
    //     wheel: this.wheel,
    //     bolt: this.bolt,
    //     chock_absorber: this.chock_absorber,
    //     spring: this.spring,
    //     air_cleaner: this.air_cleaner,
    //     fan_belt: this.fan_belt,
    //     radiator: this.radiator,

    //     carburator: this.carburator,
    //     injection_pump: this.injection_pump,
    //     co2: this.co2,
    //     co: this.co,
    //     hc: this.hc,
    //     db: this.db,
    //     clutch: this.clutch,
    //     gear_lever: this.gear_lever,
    //     drive_shaft: this.drive_shaft,
    //     universal_join: this.universal_join,

    //     muffler: this.muffler,
    //     batterry: this.batterry,
    //     light: this.light,
    //     horn: this.horn,
    //     indictor_light: this.indictor_light,
    //     brake_light: this.brake_light,
    //     side_light: this.side_light,
    //     rear_light: this.rear_light,
    //     mirror: this.mirror,
    //     wiper: this.wiper,

    //     photo: this.photo,
    //     qr: this.qr,
    //     status: this.status,
    //     created_at: this.created_at
    // });
    // if (res) {
    //     this.msg = res.data.msg;
    //     this.$router.replace("InspectionList");
    // } else {
    //     this.msg = false
    // }
    // },
    // async save() {
    //     const formData = new FormData();
    //     formData.append("register_id", this.register_id);
    //     formData.append("users_id", this.users_id);
    //     formData.append("branch_id", this.branch_id);
    //     formData.append("idAcceptNo", this.idAcceptNo);
    //     formData.append("idcarcohc", this.idcarcohc);
    //     formData.append("brk_m", this.brk_m);
    //     formData.append("brk_s", this.brk_s);
    //     formData.append("cy_c", this.cy_c);
    //     formData.append("re_m", this.re_m);
    //     formData.append("v_w", this.v_w);
    //     formData.append("s_n", this.s_n);
    //     formData.append("handier", this.handier);
    //     formData.append("am", this.am);
    //     formData.append("side_slip", this.side_slip);
    //     formData.append("pedal", this.pedal);
    //     formData.append("hose", this.hose);
    //     formData.append("reservoir_tank", this.reservoir_tank);
    //     formData.append("tire", this.tire);
    //     formData.append("wheel", this.wheel);
    //     formData.append("bolt", this.bolt);
    //     formData.append("chock_absorber", this.chock_absorber);
    //     formData.append("spring", this.spring);
    //     formData.append("prime_move", this.prime_move);
    //     formData.append("air_cleaner", this.air_cleaner);
    //     formData.append("fan_belt", this.fan_belt);
    //     formData.append("radiator", this.radiator);
    //     formData.append("carburator", this.carburator);
    //     formData.append("injection_pump", this.injection_pump);
    //     formData.append("co2", this.co2);
    //     formData.append("co", this.co);
    //     formData.append("hc", this.hc);
    //     formData.append("gear_lever", this.gear_lever);
    //     formData.append("clutch", this.clutch);
    //     formData.append("drive_shaft", this.drive_shaft);
    //     formData.append("universal_join", this.universal_join);
    //     formData.append("muffler", this.muffler);
    //     formData.append("db", this.db);
    //     formData.append("batterry", this.batterry);
    //     formData.append("light", this.light);
    //     formData.append("horn", this.horn);
    //     formData.append("indictor_light", this.indictor_light);
    //     formData.append("brake_light", this.brake_light);
    //     formData.append("side_light", this.side_light);
    //     formData.append("rear_light", this.rear_light);
    //     formData.append("mirror", this.mirror);
    //     formData.append("wiper", this.wiper);
    //     formData.append("photo", this.photo);
    //     formData.append("status", this.status);

    //     try {
    //         await axios.post("/api/inspection1/create", formData, {

    //         });
    //         this.message = "Uploaded!!";
    //         this.$router.push("List");
    //     } catch (err) {
    //         console.log(err);
    //         this.message = err.response.data.error;
    //     }
    // },
  }
};
</script>

<style scoped>
.font {
  font-family: "Vision", "Noto Sans Lao", "Phetsarath OT", "Saysettha OT",
    Roboto, Tahoma, Geneva, Verdana, sans-serif;
  font-size: 12px;
}

.base-image-input {
  /* display: block; */
  width: 100%;
  height: 160px;
  /* cursor: pointer; */
  background-size: cover;
  background-position: center center;
}

.placeholder {
  /* background: indigo; */
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* color: #333; */
  font-size: 18px;
  /* font-family: Helvetica; */
}

/* .placeholder:hover {
    background: #b3c4c7;
} */

.file-input {
  display: none;
}
</style>
