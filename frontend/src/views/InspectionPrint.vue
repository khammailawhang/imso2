<template>
  <div>
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
                <span>{{$t("print.titel")}}</span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="pt-6">
            <v-card flat color="white">
              <v-card-title>
                {{$t('print.titel')}}
                <v-spacer />
                <v-btn
                  class="indigo--text mr-4"
                  small
                  fab
                  depressed
                  dark
                  color="yellow"
                  bottom
                  @click="printSection"
                >
                  <v-icon color="#3d5afe">mdi-printer</v-icon>
                </v-btn>

                <v-tooltip bottom color="#3d5afe">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      depressed
                      @click="inspectionListTo(branch_id)"
                      small
                      fab
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
              <v-card-text id="printSection">
                <table
                  align="center"
                  justify="center"
                  style="font-size: 14px; font-family:Vision,Phetsarath OT; width:90%"
                >
                  <tr>
                    <td colspan="12" align="center" style="font-size: 16px;">
                      <b>{{ $t("Inspection.Title_Print_One") }}</b>
                      <br />
                      <b>
                        {{
                        $t("Inspection.Title_Print_Two")
                        }}
                        <br />--- 000 ---
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="5" align="left">
                      <b>
                        <span style="font-size: 16px;">
                          ກະຊວງ ຄົມມະນາຄົມ ຂົນສົ່ງ ໄປສະນີ ແລະ ກໍ່ສ້າງ
                          <br />MINISTRY
                          OF C.T.P.C
                          <br />ພະແນກ ຄຂປກ ປະຈຳແຂວງ
                          <b v-text="PName"></b>
                          <br />DEPARTMENT OF CTPC
                        </span>
                      </b>
                    </td>
                    <td colspan="5" align="right">
                      <span>
                        ເລກທີ
                        <b class="pl-1">...........</b>
                        <span class="pl-2">/ຄ ຂ ປ ກ.</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="10 " align="center">
                      <b>
                        <strong style="font-size: 18px;">ລາຍການກວດກາເທັກນິກ ພາຫະນະ</strong>
                      </b>
                      <br />
                      <b style="font-size: 16px;">MONITOR VEHICLE TECHNICAL INSPECTION RECORD</b>
                      <br />
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="1">
                      <span>
                        ຊື່ເຈົ້າຂອງລົດ
                        <b class="pl-2" v-text="owner_name"></b>
                        <br />(Name)
                      </span>
                    </td>
                    <td colspan="2">
                      <span>
                        ທີ່ຢູ່
                        <b class="pl-2" v-text="PName">ວຽງຈັນ</b>
                        <br />(Address)
                      </span>
                    </td>
                    <td colspan="2">
                      <span>
                        ບ້ານ
                        <b class="pl-2" v-text="VName"></b>
                        <br />(Village)
                      </span>
                    </td>
                    <td colspan="2">
                      <span>
                        ເມືອງ
                        <b class="pl-2" v-text="DName"></b>
                        <br />(District)
                      </span>
                    </td>
                    <td colspan="3">
                      <span>
                        ເບີໂທລະສັບ
                        <b class="pl-2" v-text="phone"></b>
                        <br />(Telephone)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="1">
                      <span>
                        ທະບຽນ
                        <b class="pl-2" v-text="TRName"></b>
                        <b class="pl-2" v-text="platc_no"></b>
                        <br />(Platc No)
                      </span>
                    </td>
                    <td colspan="2">
                      <span>
                        ຍີ່ຫໍ້
                        <b class="pl-2" v-text="MName"></b>
                        <br />(Model)
                      </span>
                    </td>
                    <td colspan="2">
                      <span>
                        ປະເພດລົດ
                        <b class="pl-2" v-text="TName"></b>
                        <br />(Type)
                      </span>
                    </td>
                    <td colspan="2">
                      <span>
                        ສີ
                        <b class="pl-2" v-text="CName"></b>
                        <br />(Color)
                      </span>
                    </td>
                    <td colspan="3">
                      <span>
                        ພວງມມະໄລ
                        <b class="pl-2" v-text="steering_wheel"></b>
                        <br />(Steering Wheel)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="1">
                      <span>
                        ໃຊ້ນໍ້າມັນ
                        <b class="pl-2" v-text="fuel"></b>
                        <br />(Fuels)
                      </span>
                    </td>
                    <td colspan="2">
                      <span>
                        ຈຳນວນສູບ
                        <b class="pl-2" v-text="cylinder"></b>
                        <br />(Cylinder)
                      </span>
                    </td>
                    <td colspan="2">
                      <v-row no-gutters>
                        <v-col cols="10">
                          <span>
                            ຄວາມແຮງ
                            <b class="pl-3" v-text="cylinder_size_cc"></b>
                          </span>
                          <span>ຊຊ</span>
                          <br />(Cylinder CC)
                          <span>(cc)</span>
                        </v-col>
                      </v-row>
                    </td>
                    <td colspan="2">
                      <span>
                        ເລກຈັກ
                        <b class="pl-2" v-text="engine_no"></b>
                        <br />(Engine No)
                      </span>
                    </td>
                    <td colspan="3">
                      <span>
                        ເລກຖັງ
                        <b class="pl-2" v-text="chassis_no"></b>
                        <br />(Chassic No)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="1">
                      <v-row no-gutters>
                        <v-col cols="10">
                          <span>
                            ລວງກ້ວາງ
                            <b class="pl-2" v-text="width"></b>
                          </span>
                          <span>ມມ</span>
                          <br />(Width)
                          <span>(mm)</span>
                        </v-col>
                      </v-row>
                    </td>
                    <td colspan="2">
                      <v-row no-gutters>
                        <v-col cols="10">
                          <span>
                            ລວງຍາວ
                            <b class="pl-2" v-text="length"></b>
                          </span>
                          <span>ມມ</span>
                          <br />(Length)
                          <span>(mm)</span>
                        </v-col>
                      </v-row>
                    </td>
                    <td colspan="2">
                      <v-row no-gutters>
                        <v-col cols="10">
                          <span>
                            ລວງສູງ
                            <b class="pl-2" v-text="height"></b>
                          </span>
                          <span>ມມ</span>
                          <br />(Height)
                          <span>(mm)</span>
                        </v-col>
                      </v-row>
                    </td>
                    <td colspan="5">
                      <v-row no-gutters>
                        <v-col cols="6">
                          <span>
                            ຈຳນວນບ່ອນນັ່ງ
                            <b class="pl-2" v-text="passenger_scats"></b>
                          </span>
                          <span>ບ່ອນນັ່ງ</span>
                          <br />(Passenger Scats)
                          <span>(Scats)</span>
                        </v-col>
                      </v-row>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="1">
                      <v-row no-gutters>
                        <v-col cols="10">
                          <span>
                            ນຳ້ໜັກລົດ
                            <b class="pl-2" v-text="vehicle_weight"></b>
                          </span>
                          <span>ກິໂລ</span>
                          <br />(Vehicle Weight)
                          <span>(Kg)</span>
                        </v-col>
                      </v-row>
                    </td>
                    <td colspan="2">
                      <v-row no-gutters>
                        <v-col cols="10">
                          <span>
                            ນຳ້ໜັກບັນທຸກ
                            <b class="pl-2" v-text="max_loading"></b>
                          </span>
                          <span>ກິໂລ</span>
                          <br />(Max Loading)
                          <span>(Kg)</span>
                        </v-col>
                      </v-row>
                    </td>
                    <td colspan="2">
                      <v-row no-gutters>
                        <v-col cols="10">
                          <span>
                            ນຳ້ໜັກລວມ
                            <b class="pl-2" v-text="total_weight"></b>
                          </span>
                          <span>ກິໂລ</span>
                          <br />(Total Weight)
                          <span>(Kg)</span>
                        </v-col>
                      </v-row>
                    </td>
                    <td align="right" colspan="6"></td>
                  </tr>
                  <tr>
                    <td align="right" colspan="12">
                      <strong>ໝາຍເຫດ</strong>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" colspan="1">
                      <b>1. ລະບົບສົ່ງທິດ:</b>
                      <br />
                      <small>(Streering Device)</small>
                    </td>
                    <td align="left" colspan="2">
                      <v-row no-gutters>
                        <v-col cols="3">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="handier === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" v-else>X</v-btn>
                        </v-col>
                        <v-col cols="6" align="left">
                          <span>ພວງມະໄລ</span>
                          <br />
                          <small>(Handier)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td align="left" colspan="3">
                      <v-row no-gutters>
                        <v-col cols="2">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="am === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col cols="6" align="left">
                          <span>ຄັນສົ່ງ</span>
                          <br />
                          <small>(Am/Rod)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td align="left" colspan="2">
                      <v-row no-gutters>
                        <v-col cols="2">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="side_slip === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col cols="6" align="left">
                          <span>ຕັ້ງລໍ້</span>
                          <br />
                          <small>(Side Slip)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td align="right" colspan="2">
                      <v-btn
                        class="ma-1"
                        x-small
                        tile
                        outlined
                        color="black"
                        dark
                        v-if="
                          handier === 'true' &&
                            am === 'true' &&
                            side_slip === 'true'
                        "
                      >O</v-btn>
                      <v-btn class="ma-1" x-small tile outlined color="black" dark v-else>X</v-btn>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" colspan="1">
                      <b>2. ລະບົບຫ້າມ:</b>
                      <br />
                      <small>(Braking Device)</small>
                    </td>
                    <td align="left" colspan="2">
                      <v-row no-gutters>
                        <v-col cols="3">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="pedal === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col cols="6" align="left">
                          <span>ຜາງຕີນ</span>
                          <br />
                          <small>(Pedal)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td align="left" colspan="3">
                      <v-row no-gutters>
                        <v-col cols="2">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="hose === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col cols="6" align="left">
                          <span>ທໍ່ນໍ້າມັນເບກ</span>
                          <br />
                          <small>(Hose/Pipe)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td align="left" colspan="2">
                      <v-row no-gutters>
                        <v-col cols="2">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="reservoir_tank === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col cols="6" align="left">
                          <span>ເຕົ້ານໍ້າມັນເບກ</span>
                          <br />
                          <small>(Reservoir Tank)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td align="right" colspan="2">
                      <v-btn
                        class="ma-1"
                        x-small
                        tile
                        outlined
                        color="black"
                        dark
                        v-if="
                          pedal === 'true' &&
                            hose === 'true' &&
                            reservoir_tank === 'true'
                        "
                      >O</v-btn>
                      <v-btn class="ma-1" x-small tile outlined color="black" dark v-else>X</v-btn>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" colspan="1">
                      <b>3. ລະບົບຊັດທ່ຽງ (ສູນລໍ້):</b>
                      <br />
                      <small>(Punning Device)</small>
                    </td>
                    <td align="left" colspan="2">
                      <v-row no-gutters>
                        <v-col cols="3">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="tire === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col cols="6" align="left">
                          <span>ລົມຢາງຕີນລົດ</span>
                          <br />
                          <small>(Tire)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td align="left" colspan="3">
                      <v-row no-gutters>
                        <v-col cols="2">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="wheel === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col cols="6" align="left">
                          <span>ຕີນລົດ</span>
                          <br />
                          <small>(Wheel)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td align="left" colspan="2">
                      <v-row no-gutters>
                        <v-col cols="2">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="bolt === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col cols="6" align="left">
                          <span>ນ໋ອດລໍ້</span>
                          <br />
                          <small>(Bolt/Nut)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td align="right" colspan="2">
                      <v-btn
                        class="ma-1"
                        x-small
                        tile
                        outlined
                        color="black"
                        dark
                        v-if="
                          tire === 'true' && wheel === 'true' && bolt === 'true'
                        "
                      >O</v-btn>
                      <v-btn class="ma-1" x-small tile outlined color="black" dark v-else>X</v-btn>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" colspan="1">
                      <b>4. ລະບົບສັ່ນສະເທືອນ:</b>
                      <br />
                      <small>(Chock Absorber)</small>
                    </td>
                    <td align="left" colspan="2">
                      <v-row no-gutters>
                        <v-col cols="3">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="chock_absorber === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col cols="6" align="left">
                          <span>ຊົກອັບ</span>
                          <br />
                          <small>(Chock Absorber)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td align="left" colspan="3">
                      <v-row no-gutters>
                        <v-col cols="2">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="spring === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col cols="6" align="left">
                          <span>ໄສ້ເສືອ</span>
                          <br />
                          <small>(Spring)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td align="right" colspan="4">
                      <v-btn
                        class="ma-1"
                        x-small
                        tile
                        outlined
                        color="black"
                        dark
                        v-if="chock_absorber === 'true' && spring === 'true'"
                      >O</v-btn>
                      <v-btn class="ma-1" x-small tile outlined color="black" dark v-else>X</v-btn>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="1">
                      <b>5. ລະບົບເຄື່ອງຈັກ:</b>
                      <br />
                      <small>(Prime Move)</small>
                    </td>

                    <td colspan="2">
                      <v-row no-gutters>
                        <v-col cols="3">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="air_cleaner === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col align="left">
                          <span>ໝໍ້ກອງອາກາດ</span>
                          <br />
                          <small>(Air cleaner)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td colspan="2">
                      <v-row no-gutters>
                        <v-col cols="3">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="fan_belt === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col align="left">
                          <span>ສາຍພານ</span>
                          <br />
                          <small>(Fan Belt)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td colspan="1">
                      <v-row no-gutters>
                        <v-col cols="5" align="left">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="radiator === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col style="font-size: 11px;" align="left">
                          <span>ໝໍ້ນໍ້າ</span>
                          <br />
                          <small>(Radiator)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td colspan="1">
                      <v-row no-gutters>
                        <v-col cols="4">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="carburator === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col align="center" style="font-size: 11px;" class="mt-1">
                          <span>ຄາບິວ</span>
                          <br />
                          <small>(Carburator)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td colspan="1">
                      <v-row no-gutters>
                        <v-col cols="4">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="injection_pump === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col align="left">
                          <span>ປໍ້າຊີດ</span>
                          <br />
                          <small>(Injection Pump)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td colspan="2" align="right">
                      <v-btn
                        class="ma-1"
                        x-small
                        tile
                        outlined
                        color="black"
                        dark
                        v-if="

                            air_cleaner === 'true' &&
                            fan_belt === 'true' &&
                            radiator === 'true' &&
                            carburator === 'true' &&
                            injection_pump === 'true'
                        "
                      >O</v-btn>
                      <v-btn class="ma-1" x-small tile outlined color="black" dark v-else>X</v-btn>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" colspan="1">
                      <b>6. ການກະຈາຍຂອງອາຍເສັຍ, ຄັວນດຳ:</b>
                      <br />
                      <small>(Emission Limit)</small>
                    </td>
                    <td align="left" colspan="2">
                      <v-row no-gutters>
                        <v-col cols="3">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="co === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col cols="6" align="left">
                          <span>(CO) Carbon Monoxide</span>
                          <br />
                        </v-col>
                      </v-row>
                    </td>
                    <td align="left" colspan="3">
                      <v-row no-gutters>
                        <v-col cols="2">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="hc === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col cols="6" align="left">
                          <span>(HC) Hydrocabons</span>
                          <br />
                        </v-col>
                      </v-row>
                    </td>
                    <td align="right" colspan="4">
                      <v-btn
                        class="ma-1"
                        x-small
                        tile
                        outlined
                        color="black"
                        dark
                        v-if="co && hc === 'true'"
                      >O</v-btn>
                      <v-btn class="ma-1" x-small tile outlined color="black" dark v-else>X</v-btn>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="1">
                      <b>7. ລະບົບກົນໄກປ່ຽນຄວາມແຮງ:</b>
                      <br />
                      <small>(Power Transmission)</small>
                    </td>
                    <td colspan="2">
                      <v-row no-gutters>
                        <v-col cols="3">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="clutch === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col cols="6" align="left">
                          <span>ຈານຄາດ</span>
                          <br />
                          <small>(Clutch)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td colspan="2">
                      <v-row no-gutters>
                        <v-col cols="3">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="gear_lever === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col cols="6" align="left">
                          <span>ເກັຍ</span>
                          <br />
                          <small>Gear Lever</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td colspan="2">
                      <v-row no-gutters>
                        <v-col cols="3">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="gear_lever === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col cols="6" align="left">
                          <span>ກາກດັ່ງ</span>
                          <br />
                          <small>(Drive Shaft)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td colspan="2">
                      <v-row no-gutters>
                        <v-col cols="4">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="universal_join === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col gn="left">
                          <span>ກາກບາດ</span>
                          <br />
                          <small>(Universal Join)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td align="right" colspan="1">
                      <v-btn
                        class="ma-1"
                        x-small
                        tile
                        outlined
                        color="black"
                        dark
                        v-if="
                          clutch === 'true' &&
                            gear_lever === 'true' &&
                            drive_shaft === 'true' &&
                            universal_join === 'true'
                        "
                      >O</v-btn>
                      <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="1">
                      <b>8. ລະບົບເກັບສຽງ:</b>
                      <br />
                      <small>(Exhausting Device)</small>
                    </td>
                    <td align="left" colspan="2">
                      <v-row no-gutters>
                        <v-col cols="3">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="muffler === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col cols="6" align="left">
                          <span>ທໍ່ອາຍເສັຍ</span>
                          <br />
                          <small>(Muffler)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td colspan="3">
                      <v-row no-gutters>
                        <v-col cols="2">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="db === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col align="left">
                          <span>ລະດັບສຽງ</span>
                          <br />
                          <small>(db)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td align="right" colspan="4">
                      <v-btn
                        class="ma-1"
                        x-small
                        tile
                        outlined
                        color="black"
                        dark
                        v-if="muffler === 'true' && db === 'true'"
                      >O</v-btn>
                      <v-btn class="ma-1" x-small tile outlined color="black" dark v-else>X</v-btn>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="1">
                      <b>9. ລະບົບໄຟ:</b>
                      <br />
                      <small>(Electronic Device)</small>
                    </td>
                    <td>
                      <v-row no-gutters>
                        <v-col cols="3">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="batterry === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col style="font-size: 11px;" align="center">
                          <span>ໝໍ້ໄຟ</span>
                          <br />
                          <small>(Batterry)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td>
                      <v-row no-gutters>
                        <v-col cols="5">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="batterry === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col style="font-size: 11px;" align="left">
                          <span>ໄຟຕາ</span>
                          <br />
                          <small>(Light)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td>
                      <v-row no-gutters>
                        <v-col cols="5">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="horn === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col style="font-size: 11px;" align="center">
                          <span>ແກ</span>
                          <br />
                          <small>(Horn)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td>
                      <v-row no-gutters>
                        <v-col cols="1">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="indictor_light === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col style="font-size: 11px;" align="center">
                          <span>ໄຟລ້ຽວ</span>
                          <br />
                          <small>(Indictor Light)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td>
                      <v-row no-gutters>
                        <v-col cols="4">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="brake_light === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col style="font-size: 11px;" class="mt-1" align="center">
                          <span>ໄຟແບກ</span>
                          <br />
                          <small>(Brake Light)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td>
                      <v-row no-gutters>
                        <v-col cols="4">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="side_light === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col style="font-size: 11px;" align="center">
                          <span>ໄຟຕາລີ</span>
                          <br />
                          <small>(Side light)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td>
                      <v-row no-gutters>
                        <v-col cols="4">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="rear_light === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col style="font-size: 11px;" gn="left">
                          <span>ໄຟຖອຍ</span>
                          <br />
                          <small>(Rear Light)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td colspan="3" align="right">
                      <v-btn
                        class="ma-1"
                        x-small
                        tile
                        outlined
                        color="black"
                        dark
                        v-if="
                            batterry === 'true' &&
                            light === 'true' &&
                            horn === 'true' &&
                            indictor_light === 'true' &&
                            brake_light === 'true' &&
                            side_light === 'true' &&
                            rear_light === 'true'
                        "
                      >O</v-btn>
                      <v-btn class="ma-1" x-small tile outlined color="black" dark v-else>X</v-btn>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" colspan="1">
                      <b>10. ລະບົບກວດກາຄວາມຟອດໄພ:</b>
                      <br />
                      <small>(Safety)</small>
                    </td>
                    <td align="left" colspan="2">
                      <v-row no-gutters>
                        <v-col cols="3">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="mirror === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col align="left">
                          <span>ແວ່ນສ່ອງຫລັງ,ຂ້າງ</span>
                          <br />
                          <small>(Mirror)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td colspan="3">
                      <v-row no-gutters>
                        <v-col cols="2">
                          <v-btn
                            class="mt-1"
                            x-small
                            tile
                            outlined
                            color="black"
                            darks
                            v-if="wiper === 'true'"
                          >O</v-btn>
                          <v-btn x-small tile outlined color="black" dark v-else>X</v-btn>
                        </v-col>
                        <v-col cols="6" align="left">
                          <span>ຝອຍປັດນໍ້າຝົນ</span>
                          <br />
                          <small>(Wiper)</small>
                        </v-col>
                      </v-row>
                    </td>
                    <td align="right" colspan="4">
                      <v-btn
                        class="ma-1"
                        x-small
                        tile
                        outlined
                        color="black"
                        dark
                        v-if="mirror === 'true' && wiper === 'true'"
                      >O</v-btn>
                      <v-btn class="ma-1" x-small tile outlined color="black" dark v-else>X</v-btn>
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td align="left" colspan="1">
                      <b>ໝາຍເຫດ:</b>
                    </td>
                    <td align="left" colspan="3">
                      <v-row no-gutters>
                        <v-col cols="5" align="left">
                          <span>ເຄື່ອງໝາຍຜ່ານ</span>
                          <br />
                          <small>(Pass)</small>
                        </v-col>
                        <v-col cols="7" align="left">
                          <v-btn
                            class="mt-1 white--text"
                            depressed
                            small
                            tile
                            color="#00E676"
                            darks
                          >O</v-btn>
                        </v-col>
                      </v-row>
                    </td>
                    <td align="left" colspan="2">
                      <v-row no-gutters>
                        <v-col cols="5" align="left">
                          <span>ບໍ່ຜ່ານ</span>
                          <br />
                          <small>(Failed)</small>
                        </v-col>
                        <v-col cols="7" align="left">
                          <v-btn class="white--text mt-1" depressed small tile color="red" darks>X</v-btn>
                        </v-col>
                      </v-row>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="5">
                      - ຖ້າລະບົບໃດໜຶ່ງບໍ່ຜ່ານ ແມ່ນເອົາໄປສ້ອມແປງຄືນແລ້ວເອົາມາກວດໃໝ່.
                      <br />- if some system failed, it must be to repaired then inspect that system again.
                    </td>

                    <td align="right" colspan="2">
                      <p>
                        <img :src="photo" contain width="150px" height="130px" />
                        <!-- <img :src="getFileInfo(inspection_id)" > -->
                        <!-- <img :src="getFileInfo()" :alt="inspection_id"> -->
                      </p>
                    </td>

                    <td align="right" colspan="2">
                      <div class="subheading font-weight-regular">
                        <!-- <img v-bind:src="file64.getFileInfo()" alt=""> -->
                        <img
                          :content="generatePDFwithQRcode()"
                          :src="QRvalue"
                          contain
                          width="150px"
                          height="150px"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td align="right" colspan="12">
                      <span>
                        <b>ວັນທີ:</b>
                        <b class="pl-2">{{ created_at | formatDate }}</b>
                      </span>
                    </td>
                    <br />
                  </tr>
                  <tr>
                    <td align="center" colspan="2">
                      <b>ຜູ້ກວດກາຕົວຈິງ</b>
                      <br />
                      <span>(Inspector)</span>
                      <br />
                      <br />
                      <span>
                        <Strong class="indigo--text">{{ nameu }}</Strong>
                      </span>
                    </td>
                    <td align="center" colspan="3">
                      <b>ບ່ອນກວດສະພາບເຕັກນິກ</b>
                      <br />
                      <span>(Technical Inspection)</span>
                      <br />
                      <br />
                      <span>
                        <Strong class="indigo--text">{{ branchname }}</Strong>
                      </span>
                    </td>
                    <td align="center" colspan="5">
                      <b>ຫົວໜ້າກອງຄຸ້ມຄອງພາຫະນະ</b>
                      <br />
                      <span>(Chief of vehicle management division)</span>
                      <br />
                      <br />
                      <strong>ທ່ານ ...............</strong>
                    </td>
                  </tr>
                </table>
              </v-card-text>
            </v-card>
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
import VueHtmlToPaper from "vue-html-to-paper";
import AuthService from "@/services/AuthService.js";
import jsPDF from "jspdf";
import VanillaQR from "vanillaqr";

Vue.use(VueAxios);
const options = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
  styles: [
    "https://code.jquery.com/jquery-3.3.1.js",
    "https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js",
    "https: //cdn.datatables.net/buttons/1.6.1/js/dataTables.buttons.min.js",
    "https: //cdn.datatables.net/buttons/1.6.1/js/buttons.print.min.js",

    "https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css",
    "https://cdn.datatables.net/buttons/1.6.1/css/buttons.dataTables.min.css",

    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    "https://unpkg.com/kidlat-css/css/kidlat.css"
  ]
};
Vue.use(VueHtmlToPaper, options);

export default {
  props: ["date"],
  components: {
    // Qrcode
  },

  headers() {
    return [
      {
        text: "Date",
        value: "published_at"
      }
    ];
  },

  data: () => ({
    inspection_id: "",

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
    printed:"printed",
    registers: [],
    standards: [],
    username: "",
    nameu: "",
    branchname: "",
    name: "",

    value: "",
    QRvalue: "",
    size: 150,
    base64: "",
    file: "",
    qrUrl: "http://178.128.23.172/la/Inspectionqr?inspection_id="
  }),
  // computed: {
  //     getphoto() {
  //         return this.photo !== null ? this.photo : this.defaultImage
  //     },

  // },
  async created() {
    let res = await axios.get(
      "/api/inspection/inspection_id/" + this.$route.query.inspection_id
    );
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
    this.branchname = res.data.inspections.branchname || "";
    this.nameu = res.data.inspections.nameu || "";

    this.PName = res.data.inspections.PName || "";

    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("login");
    }
    this.username = this.$store.getters.getUser.username;

    this.branch_name = this.$store.getters.getUser.branch_name;
    this.branch_id = this.$store.getters.getUser.branch_id;
    // this.userId = this.$store.getters.getUser.id;
    this.secretMessage = await AuthService.getSecretContent();
  },
  mounted() {
    this.getDatacar();
    this.getStandard();
    // this.getFileInfo();
    this.generatePDFwithQRcode();
  },

  methods: {
    generatePDFwithQRcode() {
      var qr = new VanillaQR({
        // create QRcode
        url: this.qrUrl + this.inspection_id
      });
      const imageElement = qr.toImage("jpg"); // convert QRcode to image
      this.QRvalue = imageElement.src;
      const doc = new jsPDF("p", "pt", "a4");
      const width = doc.internal.pageSize.getWidth();
      const elementHTML = document.getElementById("content");
      const specialElementHandlers = {
        "#elementH": function() {
          return "";
        }
      };
      doc.fromHTML(elementHTML, 5, 5, {
        width: width,
        elementHandlers: specialElementHandlers
      });
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
       this.axios.put("/api/inspection/printed",{
        inspection_id: this.$route.query.inspection_id,
        printed : this.printed
      })
    },
    print() {
      this.$htmlToPaper("printMe");
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
