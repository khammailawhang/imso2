<template>
<div class="" style="background: #ffffff">
    <v-app-bar app style="background: #ffffff"></v-app-bar>
    <v-col cols="12" xl="12" lg="11" md="12" sm="11" style="background: #ffffff">

        <div id="printSection">
            <v-col class="12" xl="12" lg="12" md="12" sm="12" style="font-size: 14px; font-family:Vision,Phetsarath OT; width:90%">
                <v-card-text class="py-1" align="start" justify="left">
                    <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                            <v-row>
                                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                                    <b> {{ $t("Inspection.Title_Print_One") }}</b><br /><b>{{
                        $t("Inspection.Title_Print_Two")
                      }}<br>

                                    </b>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-col class="py-1" align="start" justify="left">
                    <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <b><strong style="font-size: 18px;">ລາຍງານຜົນກວດກາສະພາດລົດ</strong></b><br />
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <span><b>ວັນທີ:</b> <b class="pl-2">{{ created_at | formatDate }}</b></span>
                        </v-col>
                    </v-row>
                    <v-row cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                        <p>
                            <img :src="photo" contain width="150px" height="100px">
                        </p>
                    </v-row>
                    <v-row>

                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ຊື່ເຈົ້າຂອງລົດ <b class="pl-2"></b> <br />(Name)</span>
                        </v-col>

                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="owner_name"></b> <br /></span>
                        </v-col>

                    </v-row>

                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ທີ່ຢູ່ <b class="pl-2"></b> <br />(Address)</span>
                        </v-col>

                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="PName"></b> <br /></span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ບ້ານ <b class="pl-2"></b><br />(Village)</span>
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="VName"></b> <br /></span>
                        </v-col>

                    </v-row>
                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ເມືອງ <b class="pl-2"></b><br />(District)</span>
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="DName"></b> <br /></span>
                        </v-col>

                    </v-row>
                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ເບີໂທລະສັບ<b class="pl-2"></b><br />(Telephone)</span>
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="phone"></b> <br /></span>
                        </v-col>

                    </v-row>
                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ທະບຽນ<b class="pl-2"></b><br />(Platc No)</span>
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="TRName"></b><b class="pl-2" v-text="platc_no"></b> <br /></span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ຍີ່ຫໍ້<b class="pl-2"></b><br />(Model)</span>
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="MName"></b> <br /></span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ປະເພດລົດ<b class="pl-2"></b><br />(Type)</span>
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="TName"></b><br /></span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ສີ<b class="pl-2"></b><br />(Color)</span>
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="CName"></b> <br /></span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ພວງມມະໄລ<br />(Steering Wheel)</span>
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="steering_wheel"></b> <br /></span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ໃຊ້ນໍ້າມັນ <b class="pl-2"></b><br />(Fuels)</span>
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="fuel"></b> <br /></span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ຈຳນວນສູບ<br />(Cylinder)</span>
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="cylinder"></b> <br /></span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ຄວາມແຮງ </span> <span> ຊຊ</span><br />(Cylinder CC) <span> (cc)</span>
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="cylinder_size_cc"></b> <br /></span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ຈຳນວນສູບ<b class="pl-2"></b><br />(Cylinder)</span>
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="cylinder"></b> <br /></span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ເລກຈັກ<b class="pl-2"></b><br />(Engine No)</span>
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="engine_no"></b> <br /></span>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ເລກຖັງ<b class="pl-2"></b><br />(Chassic No)</span>
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="chassis_no"></b> <br /></span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ລວງກ້ວາງ<b class="pl-2"></b></span> <span> ມມ</span><br />(Width) <span> (mm)</span>
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="width"></b> <br /></span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ລວງຍາວ<b class="pl-2"></b></span> <span> ມມ</span> <br />(Length)<span> (mm)</span>
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="length"></b> <br /></span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ລວງສູງ<b class="pl-2"></b></span> <span> ມມ</span> <br />(Height) <span> (mm)</span>
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="height"></b> <br /></span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ຈຳນວນບ່ອນນັ່ງ<b class="pl-2"></b></span> <span> ບ່ອນນັ່ງ</span><br />(Passenger Scats) <span> (Scats)</span>
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="passenger_scats"></b> <br /></span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ນຳ້ໜັກລົດ
                                <b class="pl-2"></b></span> <span> ກິໂລ</span><br />(Vehicle Weight) <span> (Kg)</span>
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="vehicle_weight"></b> <br /></span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ນຳ້ໜັກບັນທຸກ<b class="pl-2"></b></span> <span> ກິໂລ</span><br />(Max Loading) <span> (Kg)</span>
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="max_loading"></b> <br /></span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span>ນຳ້ໜັກລວມ<b class="pl-2"></b></span> <span> ກິໂລ</span><br />(Total Weight) <span>(Kg)</span>
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="4" xs="4">
                            <span><b class="pl-2" v-text="total_weight"></b> <br /></span>
                        </v-col>
                    </v-row>

                    <br>
                    <v-progress-linear color="grey" rounded value="0"></v-progress-linear>
                    <br>
                    <b>ກວດສອບການອອກລາຍລະອຽດຂ້າງລຸ້ນນີ້:</b>
                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">
                            <span>ຄັວນດຳ </span><small>(OPACITY)</small>

                            <b class="pl-2" v-text="co2access"></b> % (OPACITY)
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">

                            <v-btn class="mt-1 " x-small tile outlined color="black" darks v-if="co2 === 'true'">
                                Y
                            </v-btn>
                            <v-btn x-small tile outlined color="black" v-else>
                                N
                            </v-btn>
                            <b class="pl-2">ບໍ່ເກີນ 45 % (OPACITY)</b>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">
                            <span>ກາກບາດ </span><small>(CO)</small>

                            <b class="pl-2" v-text="coaccess"></b> %
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">

                            <v-btn class="mt-1 " x-small tile outlined color="black" darks v-if="co === 'true'">
                                Y
                            </v-btn>
                            <v-btn x-small tile outlined color="black" v-else>
                                N
                            </v-btn>

                            <b class="pl-2">ບໍ່ເກີນ 4.5 %</b>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">
                            <span>ກາກບາດ  </span><small>(HC)</small>

                            <b class="pl-2" v-text="hcaccess"></b> % PPM
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">

                            <v-btn class="mt-1 " x-small tile outlined color="black" darks v-if="hc === 'true'">
                                Y
                            </v-btn>
                            <v-btn x-small tile outlined color="black" v-else>
                                N
                            </v-btn>

                            <b class="pl-2">ບໍ່ເກີນ 600 PPM</b>
                        </v-col>
                    </v-row>

                     <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">
                            <span>ສຽງ  </span><small>(dBA)</small>

                            <b class="pl-2" ></b> % PPM
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">

                            <v-btn class="mt-1 " x-small tile outlined color="black" darks v-if="db === 'true'">
                                Y
                            </v-btn>
                            <v-btn x-small tile outlined color="black" v-else>
                                N
                            </v-btn>

                            <b class="pl-2">ບໍ່ເກີນ 100 dBA ໄລຍະ 0.5 m</b>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">
                            <span>ໄຟຕໍາ  </span><small>(dBA)</small>

                            <b class="pl-2" ></b> % PPM
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">

                            <v-btn class="mt-1 " x-small tile outlined color="black" darks v-if="light === 'true'">
                                Y
                            </v-btn>
                            <v-btn x-small tile outlined color="black" v-else>
                                N
                            </v-btn>

                            <b class="pl-2">  ມູມຕົກບໍ່ເກີນ -0.29 ອົງສາແລະບໍ່ຕໍ່າກວ່າ </b>
                        </v-col>
                    </v-row>
                     <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">
                            <span>ໄຟສູງ  </span><small>(dBA)</small>

                            <b class="pl-2" ></b> 
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">

                            <v-btn class="mt-1 " x-small tile outlined color="black" darks v-if="light === 'true'">
                                Y
                            </v-btn>
                            <v-btn x-small tile outlined color="black" v-else>
                                N
                            </v-btn>

                            <b class="pl-2">  ມູມຕົກບໍ່ສູງກວ່າແນວຂະໜານກັບພື້ນພຽງ </b>
                        </v-col>
                    </v-row>

                     <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">
                            <span>ສູນລໍ້ໜ້າ  </span><small>(m/km)</small>

                            <b class="pl-2" ></b> 
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">

                            <v-btn class="mt-1 " x-small tile outlined color="black" darks v-if="s_n === 'true'">
                                Y
                            </v-btn>
                            <v-btn x-small tile outlined color="black" v-else>
                                N
                            </v-btn>

                            <b class="pl-2">  ບໍ່ເກີນ +- 5 m/km </b>
                        </v-col>
                    </v-row>

                    
                     <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">
                            <span>ເບກຕີນ  </span><small></small>

                            <b class="pl-2" ></b> 
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">

                            <v-btn class="mt-1 " x-small tile outlined color="black" darks v-if="pedal === 'true'">
                                Y
                            </v-btn>
                            <v-btn x-small tile outlined color="black" v-else>
                                N
                            </v-btn>

                            <b class="pl-2"> ບໍ່ນ້ອຍກ່ວາ 50% ຂອງນໍ້າໜັກລົດ </b>
                        </v-col>
                    </v-row>

                       <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">
                            <span>ເບຣກມື  </span><small></small>

                            <b class="pl-2" ></b> 
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">

                            <v-btn class="mt-1 " x-small tile outlined color="black" darks v-if="brk_m === 'true'">
                                Y
                            </v-btn>
                            <v-btn x-small tile outlined color="black" v-else>
                                N
                            </v-btn>

                            <b class="pl-2"> ບໍ່ນ້ອຍກວ່າ 20% ຂອງນໍ້າໜັກລົດ </b>
                        </v-col>
                    </v-row>
                     <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">
                            <span>ເບຣກສຸກເສີນ  </span><small></small>

                            <b class="pl-2" ></b> 
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">

                            <v-btn class="mt-1 " x-small tile outlined color="black" darks v-if="brk_s === 'true'">
                                Y
                            </v-btn>
                            <v-btn x-small tile outlined color="black" v-else>
                                N
                            </v-btn>

                            <b class="pl-2"> ບໍ່ນ້ອຍກວ່າ 20% ຂອງນໍ້າໜັກລົດ </b>
                        </v-col>
                    </v-row>

                       <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">
                            <span>ເຄື່ອງວັດ  </span><small></small>

                            <b class="pl-2" ></b> 
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">

                            <v-btn class="mt-1 " x-small tile outlined color="black" darks v-if="cy_c === 'true'">
                                Y
                            </v-btn>
                            <v-btn x-small tile outlined color="black" v-else>
                                N
                            </v-btn>

                            <b class="pl-2">  ຄ່າຄາດເຄື່ອນບໍ່ເກີນຮ້ອຍລະ 10 </b>
                        </v-col>
                    </v-row>

                      <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">
                            <span>ເຄື່ອງຜ່ອນຄາຍ  </span><small></small>

                            <b class="pl-2" ></b> 
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">

                            <v-btn class="mt-1 " x-small tile outlined color="black" darks v-if="re_m === 'true'">
                                Y
                            </v-btn>
                            <v-btn x-small tile outlined color="black" v-else>
                                N
                            </v-btn>

                            <b class="pl-2">  ຄ່າຄາດເຄື່ອນບໍ່ເກີນຮ້ອຍລະ 10 </b>
                        </v-col>
                    </v-row>

                      <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">
                            <span>ນໍ້າໜັກລົງເພົາ  </span><small></small>

                            <b class="pl-2" ></b> 
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">

                           

                            <b class="pl-2">   ເພົາ 1 = ....... kg, ເພົາ 2 = ...... kg, ເພົາ 3 = ...... kg, ເພົາ 4 = ...... kg, ລວມ = ...... kg </b>
                        </v-col>
                    </v-row>



                          <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">
                            <span>ເຄື່ອງຜ່ອນຄາຍ  </span><small></small>

                            <b class="pl-2" ></b> 
                        </v-col>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="4">

                            <v-btn class="mt-1 " x-small tile outlined color="black" darks v-if="brk_m === 'true' &&
                                            co2 === 'true' &&
                                            co === 'true' &&
                                            hc === 'true' &&    
                                            db === 'true' && 
                                            light === 'true' && 
                                            light === 'true' && 
                                            s_n === 'true' &&
                                            pedal === 'true' &&
                                            brk_m === 'true' &&
                                            brk_s === 'true' &&
                                            cy_c === 'true' &&
                                            re_m === 'true' &&
                                            v_w === 'true' ">
                                ຜ່ານ
                            </v-btn>
                            <v-btn x-small tile outlined color="black" v-else>
                                ບໍ່ຜ່ານ
                            </v-btn>

                           
                        </v-col>
                    </v-row>

                    <v-progress-linear color="grey darken-1" rounded value="0"></v-progress-linear>

                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="5" xs="4">
                            <b>ຜູ້ກວດກາຕົວຈິງ</b><br />
                            <span>(Inspector)</span><br /><br />
                            <span> <Strong class="indigo--text">{{ username }}</Strong> </span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" xl="6" lg="6" md="6" sm="5" xs="4">
                            <b>ບ່ອນກວດສະພາບເຕັກນິກ</b><br />
                            <span>(Technical Inspection)</span><br /><br />
                            <span> <Strong class="indigo--text">...............</Strong> </span>
                        </v-col>
                    </v-row>
                </v-col>
            </v-col>
        </div>
    </v-col>
</div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueHtmlToPaper from "vue-html-to-paper";
// import AuthService from "@/services/AuthService.js";
import jsPDF from 'jspdf';
import VanillaQR from "vanillaqr";
// import html2canvas from 'html2canvas';
// import Qrcode from "v-qrcode/src/index";
// import bootstrap from "bootstrap";
// import Print from "vue-print-nb";
// import base64img from "base64-img";
// import VueSixFour from "vue-six-four";
// Vue.use(Print);

Vue.use(VueAxios);
const options = {
    "name": "_blank",
    "specs": [
        "fullscreen=yes",
        "titlebar=yes",
        "scrollbars=yes"
    ],
    "styles": [
        "https://code.jquery.com/jquery-3.3.1.js",
        "https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js",
        "https: //cdn.datatables.net/buttons/1.6.1/js/dataTables.buttons.min.js",
        "https: //cdn.datatables.net/buttons/1.6.1/js/buttons.print.min.js",

        "https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css",
        "https://cdn.datatables.net/buttons/1.6.1/css/buttons.dataTables.min.css",

        "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
        "https://unpkg.com/kidlat-css/css/kidlat.css",

    ]
};
Vue.use(VueHtmlToPaper, options);

export default {

    props: ['date'],
    components: {

 

    },

    headers() {
        return [

            {

                text: 'Date',
                value: 'published_at'
            },

        ]

    },

    data: () => ({
        inspection_id: "",
        // photo: "",
        loading: false,
        created_at: "date",

        SDvalue: "",
        no_organization: "",
        owner_name: "",
        gender: "",
        phone: "",
        village_id: "",
        district_id: "",
        province_id: "",
        address: "",
        platc_no: "",
        steering_wheel: "",
        cylinder: "",
        cylinder_size_cc: "",
        engine_no: "",
        fuel: "",
        chassis_no: "",
        width: "",
        length: "",
        height: "",
        passenger_scats: "",
        vehicle_weight: "",
        max_loading: "",
        total_weight: "",
        register_id: "",
        handier: "",
        am: "",
        side_slip: "",
        pedal: "",
        hose: "",
        reservoir_tank: "",
        total_efficiency_foot_brake: "",
        shaft_one_left_brake: "",
        shaft_one_right_brake: "",
        shaft_two_left_brake: "",
        shaft_two_right_brake: "",
        shaft_three_left_brake: "",
        shaft_three_right_brake: "",
        shaft_four_left_brake: "",
        shaft_four_right_brake: "",
        total_efficiency_hand_brake: "",
        total_efficiency_emergency_brake: "",
        tire: "",
        wheel: "",
        bolt: "",
        front_wheel_drive: "",
        chock_absorber: "",
        spring: "",
        air_cleaner: "",
        fan_belt: "",
        radiator: "",
        carburator: "",
        injection_pump: "",
        co: "",
        hc: "",
        opacity: "",
        clutch: "",
        gear_lever: "",
        drive_shaft: "",
        universal_join: "",
        force_meter_one: "",
        force_meter_two: "",
        force_meter_three: "",
        muffler: "",
        db: "",
        batterry: "",
        light: "",
        horn: "",
        indictor_light: "",
        brake_light: "",
        side_light: "",
        rear_light: "",
        low_beam_left_corner: "",
        low_beam_left_inclined: "",
        low_beam_left_light: "",
        low_beam_right_corner: "",
        low_beam_right_inclined: "",
        low_beam_right_light: "",
        height_beam_left_corner: "",
        height_beam_left_inclined: "",
        height_beam_left_light: "",
        height_beam_right_corner: "",
        height_beam_right_inclined: "",
        height_beam_right_light: "",
        mirror: "",
        wiper: "",

        shaft_one_relaxation_machine: "",
        shaft_two_relaxation_machine: "",
        shaft_one_lose_weight: "",
        shaft_two_lose_weight: "",
        shaft_three_lose_weight: "",
        shaft_four_lose_weight: "",

        qrcode: "",
        status: "",
        registers: [],
        standards: [],
        username: "",
        name: "",

        value: '',
        QRvalue: '',
        size: 150,
        base64: '',
        file: '',
        qrUrl: 'http://localhost:8084/la/Inspectionqr?inspection_id='
    }),
    // computed: {
    //     getphoto() {
    //         return this.photo !== null ? this.photo : this.defaultImage
    //     },

    // },
    async created() {

        let res = await axios.get(
            "/api/inspection/inspection_id/" + this.$route.query.inspection_id);
        this.inspection_id = res.data.inspections.inspection_id || "";
        this.SDtitle = res.data.inspections.SDtitle || "";
        this.SDvalue = res.data.inspections.SDvalue || "";
        this.village_id = res.data.inspections.village_id || "";
        this.owner_name = res.data.inspections.owner_name || "";
        this.gender = res.data.inspections.gender || "";
        this.phone = res.data.inspections.phone || "";

        this.address = res.data.inspections.address || "";
        this.VName = res.data.inspections.VName || "";
        this.DName = res.data.inspections.DName || "";
        this.MName = res.data.inspections.MName || "";
        this.TName = res.data.inspections.TName || "";
        this.CName = res.data.inspections.CName || "";
        this.TRName = res.data.inspections.TRName || "";
        this.BName = res.data.inspections.Name || "";
        this.cylinder = res.data.inspections.cylinder || "";
        this.cylinder_size_cc = res.data.inspections.cylinder_size_cc || "";
        this.platc_no = res.data.inspections.platc_no || "";
        this.steering_wheel = res.data.inspections.steering_wheel || "";
        this.engine_no = res.data.inspections.engine_no || "";
        this.fuel = res.data.inspections.fuel || "";
        this.chassis_no = res.data.inspections.chassis_no || "";
        this.width = res.data.inspections.width || "";
        this.length = res.data.inspections.length || "";
        this.height = res.data.inspections.height || "";
        this.passenger_scats = res.data.inspections.passenger_scats || "";
        this.vehicle_weight = res.data.inspections.vehicle_weight || "";
        this.max_loading = res.data.inspections.max_loading || "";
        this.total_weight = res.data.inspections.total_weight || "";
        this.register_id = res.data.inspections.register_id || "";
        this.platc_no = res.data.inspections.platc_no || "";
        this.steering_wheel = res.data.inspections.steering_wheel || "";
        this.handier = res.data.inspections.handier || "";
        this.am = res.data.inspections.am || "";
        this.side_slip = res.data.inspections.side_slip || "";
        this.pedal = res.data.inspections.pedal || "";
        this.hose = res.data.inspections.hose || "";
        this.reservoir_tank = res.data.inspections.reservoir_tank;
        this.total_efficiency_foot_brake =
            res.data.inspections.total_efficiency_foot_brake || "";
        this.shaft_one_left_brake = res.data.inspections.shaft_one_left_brake || "";
        this.shaft_one_right_brake =
            res.data.inspections.shaft_one_right_brake || "";
        this.shaft_two_left_brake = res.data.inspections.shaft_two_left_brake || "";
        this.shaft_two_right_brake =
            res.data.inspections.shaft_two_right_brake || "";
        this.shaft_three_left_brake =
            res.data.inspections.shaft_three_left_brake || "";
        this.shaft_three_right_brake =
            res.data.inspections.shaft_three_right_brake || "";
        this.shaft_four_left_brake =
            res.data.inspections.shaft_four_left_brake || "";
        this.shaft_four_right_brake =
            res.data.inspections.shaft_four_right_brake || "";
        this.total_efficiency_hand_brake =
            res.data.inspections.total_efficiency_hand_brake || "";
        this.total_efficiency_emergency_brake =
            res.data.inspections.total_efficiency_emergency_brake;
        this.tire = res.data.inspections.tire || "";
        this.wheel = res.data.inspections.wheel || "";
        this.bolt = res.data.inspections.wheel || "";
        this.front_wheel_drive = res.data.inspections.bolt || "";
        this.chock_absorber = res.data.inspections.chock_absorber || "";
        this.spring = res.data.inspections.spring || "";

        this.air_cleaner = res.data.inspections.air_cleaner || "";
        this.fan_belt = res.data.inspections.fan_belt || "";
        this.radiator = res.data.inspections.radiator || "";
        this.carburator = res.data.inspections.carburator || "";
        this.injection_pump = res.data.inspections.injection_pump || "";
        this.co = res.data.inspections.co || "";
        this.hc = res.data.inspections.hc || "";
        this.opacity = res.data.inspections.opacity || "";
        this.clutch = res.data.inspections.clutch || "";
        this.gear_lever = res.data.inspections.gear_lever || "";
        this.drive_shaft = res.data.inspections.drive_shaft || "";
        this.universal_join = res.data.inspections.universal_join || "";
        this.force_meter_one = res.data.inspections.force_meter_one || "";
        this.force_meter_two = res.data.inspections.force_meter_two || "";
        this.force_meter_three = res.data.inspections.force_meter_three || "";
        this.muffler = res.data.inspections.muffler || "";
        this.db = res.data.inspections.db || "";
        this.batterry = res.data.inspections.batterry || "";
        this.light = res.data.inspections.light || "";
        this.horn = res.data.inspections.horn || "";
        this.indictor_light = res.data.inspections.indictor_light || "";
        this.brake_light = res.data.inspections.brake_light || "";
        this.side_light = res.data.inspections.side_light || "";
        this.rear_light = res.data.inspections.rear_light || "";
        this.low_beam_left_corner = res.data.inspections.low_beam_left_corner || "";
        this.low_beam_left_inclined =
            res.data.inspections.low_beam_left_inclined || "";
        this.low_beam_left_light = res.data.inspections.low_beam_left_light || "";
        this.low_beam_right_corner =
            res.data.inspections.low_beam_right_corner || "";
        this.low_beam_right_inclined =
            res.data.inspections.low_beam_right_inclined || "";
        this.low_beam_right_light = res.data.inspections.low_beam_right_light || "";
        this.height_beam_left_corner =
            res.data.inspections.height_beam_left_corner || "";
        this.height_beam_left_inclined =
            res.data.inspections.height_beam_left_inclined || "";
        this.height_beam_left_light =
            res.data.inspections.height_beam_left_light || "";
        this.height_beam_right_corner =
            res.data.inspections.height_beam_right_corner || "";
        this.height_beam_right_inclined =
            res.data.inspections.height_beam_right_inclined || "";
        this.height_beam_right_light =
            res.data.inspections.height_beam_right_light || "";
        this.mirror = res.data.inspections.mirror || "";
        this.wiper = res.data.inspections.wiper || "";
        this.shaft_one_relaxation_machine =
            res.data.inspections.shaft_one_relaxation_machine || "";
        this.shaft_two_relaxation_machine =
            res.data.inspections.shaft_two_relaxation_machine || "";
        this.shaft_one_lose_weight =
            res.data.inspections.shaft_one_lose_weight || "";
        this.shaft_two_lose_weight =
            res.data.inspections.shaft_two_lose_weight || "";
        this.shaft_three_lose_weight =
            res.data.inspections.shaft_three_lose_weight || "";
        this.shaft_four_lose_weight =
            res.data.inspections.shaft_four_lose_weight || "";
        this.photo = res.data.inspections.photo || "";

        this.qrcode = res.data.inspections.qrcode || "";
        this.status = res.data.inspections.status || "";
        this.created_at = res.data.inspections.created_at || "";

        this.PName = res.data.inspections.PName || "";
        this.co2access = res.data.inspections.co2access || "";
        this.coaccess = res.data.inspections.coaccess || "";
        this.hcaccess = res.data.inspections.hcaccess || "";

        this.LFF = res.data.inspections.LFF || "";
        this.RFF = res.data.inspections.RFF || "";
        this.SFF = res.data.inspections.SFF || "";
        this.RF = res.data.inspections.RF || "";

        this.LRM = res.data.inspections.LRM || "";
        this.RRM = res.data.inspections.RRM || "";
        this.SRM = res.data.inspections.SRM || "";
        this.RM = res.data.inspections.RM || "";

        this.LRR = res.data.inspections.LRR || "";
        this.RRR = res.data.inspections.RRR || "";
        this.SRR = res.data.inspections.SRR || "";
        this.RF = res.data.inspections.RR || "";

        this.LRF = res.data.inspections.LRF || "";
        this.RRF = res.data.inspections.RRF || "";
        this.SRF = res.data.inspections.SRF || "";
        this.PB = res.data.inspections.PB || "";
        //ດຶ່ງຂໍ້ມູນຈາກ access
        this.BSUM = res.data.inspections.BSUM || "";
        //ເບຣກມື
        this.PBSUM = res.data.inspections.PBSUM || "";

        // ເບຣກສຸກເສີນ
        this.PKSUM = res.data.inspections.PKSUM || "";

        if (!this.$store.getters.isLoggedIn) {
            this.$router.push("login");
        }
        this.username = this.$store.getters.getUser.username;
        this.branch_name = this.$store.getters.getUser.branch_name;
        this.branch_id = this.$store.getters.getUser.branch_id;
        // this.userId = this.$store.getters.getUser.id;

        // if (!this.$store.getters.isLoggedIn) {
        //     this.$router.push("login");
        // }
        this.username = this.$store.getters.getUser.username;
        this.branch_name = this.$store.getters.getUser.branch_name;
        this.branch_id = this.$store.getters.getUser.branch_id;
        // this.userId = this.$store.getters.getUser.id;
        // this.secretMessage = await AuthService.getSecretContent();
    },
    mounted() {
        this.getDatacar();
        this.getStandard();
        // this.getFileInfo();
        this.generatePDFwithQRcode();
    },

    methods: {

        generatePDFwithQRcode() {
            var qr = new VanillaQR({ // create QRcode
                url: this.qrUrl + this.inspection_id + "/no_id/" + this.engine_no + "/Date/" + this.created_at
            })
            const imageElement = qr.toImage("jpg") // convert QRcode to image
            this.QRvalue = imageElement.src
            const doc = new jsPDF('p', 'pt', 'a4')
            const width = doc.internal.pageSize.getWidth()
            const elementHTML = document.getElementById('content')
            const specialElementHandlers = {
                '#elementH': function () {
                    return "";
                }
            }
            doc.fromHTML(elementHTML, 5, 5, {
                'width': width,
                'elementHandlers': specialElementHandlers
            })
            // doc.addImage(imageElement.src, 'JPEG', (width / 1) - 50, 250, 100, 100) // import รูปเข้าไปใน pdf
            // doc.save('test.pdf')
        },
        // generatePDFwithHtml2Canvas() {
        //     html2canvas(document.getElementById('content')).then(canvas => {
        //         const img = canvas.toDataURL('image/jpeg')
        //         const doc = new jsPDF('p', 'pt', 'a4')
        //         // const width = doc.internal.pageSize.getWidth()
        //         // const height = doc.internal.pageSize.getHeight()
        //         doc.addImage(img, 'JPEG', 0, 0)
        //         // doc.save('test-test.pdf')
        //     })
        // },
        // generateQRcode() {
        //     var qr = new VanillaQR({ // create QRcode
        //         url: this.qrUrl

        //     })

        //     const imageElement = qr.toImage("jpg") // convert QRcode to image
        //     this.QRvalue = imageElement.src
        // },
        // getFileInfo() {
        //     return "http://localhost:8084/la/InspectionPrint?inspection_id=" + this.inspection_id + "/no_id/" + this.engine_no + "/Date/" + this.created_at;
        // },

        inspectionListTo(branch_id) {
            this.$router.push("inspectionList?branch_id=" + branch_id);
        },
        getAllData() {
            axios.get("/api/inspection").then(response => {
                this.inspections = response.data.inspections;
            });
        },

        printSection() {
            this.$htmlToPaper("printSection");
        },
        print() {
            this.$htmlToPaper('printMe');
        },

        getDatacar() {
            this.axios.get("/api/cardata").then(response => {
                this.cardatas = response.data.cardatas;
            });
        },
        mounted() {
            this.loading = 1;

        },
        getStandard() {
            this.axios.get("/api/standardsetting").then(response => {
                this.standards = response.data.standards;
            });
        }
    }
};
</script>

<style>

</style>
