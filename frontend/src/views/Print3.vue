<template>
 <div>
     <v-row>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12">
            <v-app-bar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            color="white"
            flat
            dark
            >
            <v-icon color="indigo">mdi-xing</v-icon>
            <v-toolbar-title style="width: 380px" class="ml-0 pl-4">
                <h5 class="indigo--text">{{$t('Inspection.Print')}}</h5>
            </v-toolbar-title>
            <v-text-field
                rounded
                flat
                dense
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                v-model="qrcode_url"
                :label="$t('Inspection.URL')"
                outlined
                class="grey--text hidden-sm-and-down"
            />
            <v-spacer />
            <v-btn class="mx-10" fab dark color="teal" @click="print"
            ><v-icon>mdi-printer-wireless</v-icon></v-btn
          >
          <v-btn href="../Print3">Print</v-btn>
            </v-app-bar>
        </v-col>
      </v-row>
      <div ref="printMe">
    <table class="report-container" style="font-family:'Phetsarath OT'">
      <tbody class="report-content">
        <tr>
          <td class="report-content-cell">
            
      <v-row no-gutters id="print">
        <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="center">
          <span style="font-size:12px"
            >{{ $t("Inspection.Title_Print_One") }}<br />{{
              $t("Inspection.Title_Print_Two")
            }}
            <br />--- 000 ---</span
          >
        </v-col>

        <!-- Title -->
        <v-col cols="12" xl="6" lg="6" md="6" sm="6" align="left">
          <span
            >ກະຊວງ ຄົມມະນາຄົມ ຂົນສົ່ງ ໄປສະນີ ແລະ ກໍ່ສ້າງ<br />MINISTRY OF
            C.T.P.C<br />ພະແນກ ຄຂປກ ປະຈຳແຂວງ <span v-text="PName"></span
            ><br />DEPARTMENT OF CTPC</span
          >
        </v-col>
        <v-col cols="12" xl="6" lg="6" md="6" sm="6" align="right">
          <span>ເລກທີ <span>19653</span> ຄຂປກ.</span>
        </v-col>
        <v-col
          cols="12"
          xl="12"
          lg="12"
          md="12"
          sm="12"
          align="center"
          class="pb-2"
        >
          <strong style="font-size:14px">{{
            $t("Inspection.List_vehicle")
          }}</strong>
        </v-col>
        <!-- Section one -->
        <v-col cols="12" xl="2" lg="3" md="3" sm="3"
          ><span class="ma-2">{{ $t("Register.OwnerName") }}</span
          ><span class="font-weight-medium" v-text="gender"></span>
          <span
            class="font-weight-medium"
            align="center"
            v-text="owner_name"
          ></span
        ></v-col>
        <v-col cols="12" xl="2" lg="2" md="3" sm="3"
          ><span class="ma-2">{{ $t("Village.Name") }}</span
          ><span class="font-weight-medium" v-text="VName"> </span
        ></v-col>
        <v-col cols="12" xl="2" lg="2" md="3" sm="3"
          ><span class="ma-2">{{ $t("District.Name") }}</span
          ><span class="font-weight-medium" v-text="DName"> </span
        ></v-col>
        <v-col cols="12" xl="2" lg="2" md="3" sm="3"
          ><span class="ma-2">{{ $t("Province.Name") }}</span
          ><span class="font-weight-medium" v-text="PName"> </span
        ></v-col>
        <v-col cols="12" xl="2" lg="2" md="3" sm="3"
          ><span class="ma-2">{{ $t("Register.Phone") }}</span
          ><span class="font-weight-medium" v-text="phone"> </span
        ></v-col>
        <v-col cols="12" xl="2" lg="2" md="3" sm="3"
          ><span class="ma-2">{{ $t("Register.Platcno") }}</span
          ><span class="font-weight-medium" v-text="platc_no"> </span
        ></v-col>
        <v-col cols="12" xl="2" lg="2" md="3" sm="3"
          ><span class="ma-2">{{ $t("Model.Name") }}</span
          ><span class="font-weight-medium" v-text="MName"> </span
        ></v-col>
        <v-col cols="12" xl="2" lg="2" md="3" sm="3"
          ><span class="ma-2">{{ $t("Type.Name") }}</span
          ><span class="font-weight-medium" v-text="TName"> </span
        ></v-col>
        <v-col cols="12" xl="2" lg="2" md="3" sm="3"
          ><span class="ma-2">{{ $t("Color.Name") }}</span
          ><span class="font-weight-medium" v-text="CName"> </span
        ></v-col>
        <v-col cols="12" xl="2" lg="2" md="3" sm="3"
          ><span class="ma-2">{{ $t("Register.steering_wheel") }}</span
          ><span class="font-weight-medium" v-text="steering_wheel"></span
        ></v-col>
        <v-col cols="12" xl="2" lg="2" md="3" sm="3"
          ><span class="ma-2">{{ $t("Register.fuel") }}</span
          ><span class="font-weight-medium" v-text="fuel"></span
        ></v-col>
        <v-col cols="12" xl="2" lg="2" md="3" sm="3"
          ><span class="ma-2">{{ $t("Register.cylinder") }}</span
          ><span class="font-weight-medium" v-text="cylinder"></span
        ></v-col>
        <v-col cols="12" xl="1" lg="1" md="2" sm="2"
          ><span class="ma-2">{{ $t("Register.cylinder_size_cc") }}</span
          ><span class="font-weight-medium" v-text="cylinder_size_cc"></span
        ></v-col>
        <v-col cols="12" xl="1" lg="1" md="1" sm="1"
          ><span class="ma-2">{{ $t("Register.cc") }}</span></v-col
        >
        <v-col cols="12" xl="2" lg="2" md="3" sm="3"
          ><span class="ma-2">{{ $t("Register.engine_no") }}</span
          ><span class="font-weight-medium" v-text="engine_no"></span
        ></v-col>
        <v-col cols="12" xl="2" lg="2" md="3" sm="3"
          ><span class="ma-2">{{ $t("Register.chassis_no") }}</span
          ><span class="font-weight-medium" v-text="chassis_no"></span>
        </v-col>
        <v-col cols="12" xl="2" lg="1" md="2" sm="2"
          ><span class="ma-2">{{ $t("Register.width") }}</span
          ><span v-text="width"></span
        ></v-col>
        <v-col cols="12" xl="2" lg="1" md="1" sm="1" align="right"
          ><span class="ma-2">{{ $t("Register.mm") }}</span></v-col
        >
        <v-col cols="12" xl="2" lg="1" md="2" sm="2" align="left"
          ><span class="ma-2">{{ $t("Register.length") }}</span
          ><span class="font-weight-medium" v-text="length"></span
        ></v-col>
        <v-col cols="12" xl="2" lg="1" md="1" sm="1" align="right"
          ><span class="ma-2">{{ $t("Register.mm") }}</span></v-col
        >
        <v-col cols="12" xl="2" lg="1" md="2" sm="2" align="left"
          ><span class="ma-2">{{ $t("Register.height") }}</span
          ><span class="font-weight-medium" v-text="height"></span
        ></v-col>
        <v-col cols="12" xl="2" lg="1" md="1" sm="1" align="right"
          ><span class="ma-2">{{ $t("Register.mm") }}</span></v-col
        >
        <v-col cols="12" xl="2" lg="2" md="3" sm="3" align="left"
          ><span class="ma-2">{{ $t("Register.passenger_scats") }}</span
          ><span class="font-weight-medium" v-text="passenger_scats"></span
        ></v-col>
        <v-col cols="12" xl="2" lg="2" md="3" sm="3" align="left"
          ><span>{{ $t("Register.scats") }}</span></v-col
        >
        <v-col cols="12" xl="2" lg="1" md="2" sm="2" align="left"
          ><span class="ma-2">{{ $t("Register.vehicle_weight") }}</span
          ><span class="font-weight-medium" v-text="vehicle_weight"></span
        ></v-col>
        <v-col cols="12" xl="2" lg="1" md="1" sm="1" align="right"
          ><span>{{ $t("Register.kg") }}</span></v-col
        >
        <v-col cols="12" xl="3" lg="2" md="2" sm="2" align="left"
          ><span class="ma-2">{{ $t("Register.max_loading") }}</span
          ><span class="font-weight-medium" v-text="max_loading"></span
        ></v-col>
        <v-col cols="12" xl="3" lg="2" md="2" sm="2" align="right"
          ><span>{{ $t("Register.kg") }}</span></v-col
        >
        <v-col cols="12" xl="2" lg="2" md="2" sm="2" align="left"
          ><span class="ma-2">{{ $t("Register.total_weight") }}</span
          ><span class="font-weight-medium" v-text="total_weight"></span
        ></v-col>
        <v-col cols="12" xl="1" lg="1" md="1" sm="1" align="left"
          ><span>{{ $t("Register.kg") }}</span></v-col
        >

        <!-- Section Two -->

        <v-col cols="12" xl="12" lg="12" md="12" sm="12">
          <v-row no-gutters>
            <v-col cols="12" align="right"><b>ໝາຍເຫດ</b></v-col>
            <v-col cols="2">
              <v-row no-gutters
                ><v-col cols="12"
                  ><b>1. ລະບົບສົ່ງທິດ: </b><br /><small
                    >(Streering Device)</small
                  ></v-col
                ></v-row
              >
            </v-col>
            <v-col cols="3" align="left">
              <v-row no-gutters>
                <v-col cols="12" xl="2" lg="2" md="2" sm="2" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="handier === '1'"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col
                  class="mb-0"
                  cols="12"
                  xl="10"
                  lg="10"
                  md="10"
                  sm="10"
                  align="left"
                >
                  <span> {{ $t("Register.steering_wheel") }}</span>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="3" align="left">
              <v-row no-gutters>
                <v-col cols="2" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="am === '1'"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="10" align="left">
                  <span> ຄັນສົ່ງ </span><br />
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="3" align="left">
              <v-row no-gutters>
                <v-col cols="2" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="side_slip === '1'"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="10" align="left">
                  <span> ຕັ້ງລໍ້ </span>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="1" align="right">
              <v-btn
                class="ma-0"
                x-small
                tile
                outlined
                color="black"
                dark
                v-if="handier && am && side_slip === '1'"
                ><v-icon small>mdi-opera</v-icon></v-btn
              >
              <v-btn
                class="ma-0"
                x-small
                tile
                outlined
                color="black"
                dark
                v-else
                ><v-icon small>mdi-window-close</v-icon></v-btn
              >
            </v-col>

            <v-col cols="2">
              <v-row no-gutters
                ><v-col cols="12"
                  ><b>2. ລະບົບຫ້າມ: </b><br /><small
                    >(Braking Device)</small
                  ></v-col
                ></v-row
              >
            </v-col>
            <v-col cols="3" align="left">
              <v-row no-gutters>
                <v-col cols="2" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="pedal"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="10" align="left">
                  <span> ຜາງຕີນ </span><br /><small>(Pedal)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="3" align="left">
              <v-row no-gutters>
                <v-col cols="2" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="hose"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="10" align="left">
                  <span> ທໍ່ນໍ້າມັນເບກ </span><br /><small>(Hose/Pipe)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="3" align="left">
              <v-row no-gutters>
                <v-col cols="2" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="reservoir_tank"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="10" align="left">
                  <span> ເຕົ້ານໍ້າມັນເບກ </span><br /><small
                    >(Reservoir Tank)</small
                  >
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="1" align="right">
              <v-btn
                class="ma-0"
                x-small
                tile
                outlined
                color="black"
                dark
                v-if="pedal && hose && reservoir_tank"
                ><v-icon small>mdi-opera</v-icon></v-btn
              >
              <v-btn
                class="ma-0"
                x-small
                tile
                outlined
                color="black"
                dark
                v-else
                ><v-icon small>mdi-window-close</v-icon></v-btn
              >
            </v-col>

            <v-col cols="3">
              <v-row no-gutters
                ><v-col cols="12"
                  ><b>3. ລະບົບຊັດທ່ຽງ (ສູນລໍ້): </b><br /><small
                    >(Punning Device)</small
                  ></v-col
                ></v-row
              >
            </v-col>
            <v-col cols="3" align="left">
              <v-row no-gutters>
                <v-col cols="2" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="tire"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="10" align="left">
                  <span> ລົມຢາງຕີນລົດ </span><br /><small>(Tire)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="3" align="left">
              <v-row no-gutters>
                <v-col cols="2" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="wheel"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="10" align="left">
                  <span> ຕີນລົດ </span><br /><small>(Wheel)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="2" align="left">
              <v-row no-gutters>
                <v-col cols="3" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="bolt"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="9" align="left">
                  <span> ນ໋ອດລໍ້ </span><br /><small>(Bolt/Nut)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="1" align="right">
              <v-btn
                class="ma-0"
                x-small
                tile
                outlined
                color="black"
                dark
                v-if="tire && wheel && bolt"
                ><v-icon small>mdi-opera</v-icon></v-btn
              >
              <v-btn
                class="ma-0"
                x-small
                tile
                outlined
                color="black"
                dark
                v-else
                ><v-icon small>mdi-window-close</v-icon></v-btn
              >
            </v-col>

            <v-col cols="3">
              <v-row no-gutters
                ><v-col cols="12"
                  ><b>4. ລະບົບສັ່ນສະເທືອນ: </b><br /><small
                    >(Chock Absorber)</small
                  ></v-col
                ></v-row
              >
            </v-col>
            <v-col cols="3" align="left">
              <v-row no-gutters>
                <v-col cols="2" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="chock_absorber"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="10" align="left">
                  <span> ຊົກອັບ </span><br /><small>(Chock Absorber)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="3" align="left">
              <v-row no-gutters>
                <v-col cols="2" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="spring"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="10" align="left">
                  <span> ໄສ້ເສືອ </span><br /><small>(Spring)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="2"></v-col>
            <v-col cols="1" align="right">
              <v-btn
                class="ma-0"
                x-small
                tile
                outlined
                color="black"
                dark
                v-if="chock_absorber && spring"
                ><v-icon small>mdi-opera</v-icon></v-btn
              >
              <v-btn
                class="ma-0"
                x-small
                tile
                outlined
                color="black"
                dark
                v-else
                ><v-icon small>mdi-window-close</v-icon></v-btn
              >
            </v-col>

            <v-col cols="2">
              <v-row no-gutters
                ><v-col cols="12"
                  ><b>5. ລະບົບເຄື່ອງຈັກ: </b><br /><small
                    >(Prime Move)</small
                  ></v-col
                ></v-row
              >
            </v-col>
            <v-col cols="2" align="left">
              <v-row no-gutters>
                <v-col cols="3" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="fuel"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="9" align="left">
                  <span> ກາຊວນ </span><small>(Diesel)</small>
                </v-col>

                <v-col cols="3" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="fuel"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="9" align="left">
                  <span> ແອັດຊັງ </span><small>(Gasoline)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="2" align="left">
              <v-row no-gutters>
                <v-col cols="3" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="air_cleaner"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="9" align="left">
                  <span> ໝໍ້ກອງອາກາດ </span><br /><small>(Air Cleaner)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="2" align="left">
              <v-row no-gutters>
                <v-col cols="3" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="fan_belt"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="9" align="left">
                  <span> ສາຍພານ </span><br /><small>(Fan Belt)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="1" align="left">
              <v-row no-gutters>
                <v-col cols="6" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="radiator"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="6" align="left">
                  <span> ໝໍ້ນໍ້າ </span><br /><small>(Radiator)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="1" align="left">
              <v-row no-gutters>
                <v-col cols="6" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="carburator"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="6" align="left">
                  <span> ຄາບິວ </span><br /><small>(Carburator)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="1" align="left">
              <v-row no-gutters>
                <v-col cols="6" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="injection_pump"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="6" align="left">
                  <span> ປໍ້າຊີດ </span><br /><small>(Injection Pump)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="1" align="right">
              <v-btn
                class="ma-0"
                x-small
                tile
                outlined
                color="black"
                dark
                v-if="
                  fuel &&
                    air_cleaner &&
                    fan_belt &&
                    radiator &&
                    carburator &&
                    injection_pump
                "
                ><v-icon small>mdi-opera</v-icon></v-btn
              >
              <v-btn
                class="ma-0"
                x-small
                tile
                outlined
                color="black"
                dark
                v-else
                ><v-icon small>mdi-window-close</v-icon></v-btn
              >
            </v-col>

            <v-col cols="4">
              <v-row no-gutters
                ><v-col cols="12"
                  ><b>6. ກຳນົດການກະຈາຍຂອງອາຍເສັຍ, ຄັວນດຳ: </b><br /><small
                    >(Emission Limit)</small
                  ></v-col
                ></v-row
              >
            </v-col>
            <v-col cols="3" align="left">
              <v-row no-gutters>
                <v-col cols="2" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="co"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="10" align="left">
                  <small> (CO) Carbon Monoxide </small>
                </v-col>

                <v-col cols="2" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="hc"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="10" align="left">
                  <small> (HC) Hydrocabons </small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="4"></v-col>
            <v-col cols="1" align="right">
              <v-btn
                class="ma-0"
                x-small
                tile
                outlined
                color="black"
                dark
                v-if="co && hc"
                ><v-icon small>mdi-opera</v-icon></v-btn
              >
              <v-btn
                class="ma-0"
                x-small
                tile
                outlined
                color="black"
                dark
                v-else
                ><v-icon small>mdi-window-close</v-icon></v-btn
              >
            </v-col>

            <v-col cols="3">
              <v-row no-gutters
                ><v-col cols="12"
                  ><b>7. ລະບົບກົນໄກປ່ຽນຄວາມແຮງ: </b><br /><small
                    >(Power Transmission)</small
                  ></v-col
                ></v-row
              >
            </v-col>
            <v-col cols="2" align="left">
              <v-row no-gutters>
                <v-col cols="3" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="clutch"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="9" align="left">
                  <span> ຈານຄາດ </span><br /><small>(Clutch)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="2" align="left">
              <v-row no-gutters>
                <v-col cols="3" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="gear_lever"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="9" align="left">
                  <span> ເກັຍ </span><br /><small>Gear Lever</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="2" align="left">
              <v-row no-gutters>
                <v-col cols="3" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="drive_shaft"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="9" align="left">
                  <span> ກາກດັ່ງ </span><br /><small>(Drive Shaft)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="2" align="left">
              <v-row no-gutters>
                <v-col cols="3" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="universal_join"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="9" align="left">
                  <span> ກາກບາດ </span><br /><small>(Universal Join)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="1" align="right">
              <v-btn
                class="ma-0"
                x-small
                tile
                outlined
                color="black"
                dark
                v-if="clutch && gear_lever && drive_shaft && universal_join"
                ><v-icon small>mdi-opera</v-icon></v-btn
              >
              <v-btn
                class="ma-0"
                x-small
                tile
                outlined
                color="black"
                dark
                v-else
                ><v-icon small>mdi-window-close</v-icon></v-btn
              >
            </v-col>

            <v-col cols="3">
              <v-row no-gutters
                ><v-col cols="12"
                  ><b>8. ລະບົບເກັບສຽງ: </b><br /><small
                    >(Exhausting Device)</small
                  ></v-col
                ></v-row
              >
            </v-col>
            <v-col cols="3" align="left">
              <v-row no-gutters>
                <v-col cols="2" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="muffler"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="10" align="left">
                  <span> ທໍ່ອາຍເສັຍ </span><br /><small>(Muffler)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="3" align="left">
              <v-row no-gutters>
                <v-col cols="2" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="db"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="10" align="left">
                  <span> ລະດັບສຽງ </span><br /><small>(db)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="2"></v-col>
            <v-col cols="1" align="right">
              <v-btn
                class="ma-0"
                x-small
                tile
                outlined
                color="black"
                dark
                v-if="muffler && db"
                ><v-icon small>mdi-opera</v-icon></v-btn
              >
              <v-btn
                class="ma-0"
                x-small
                tile
                outlined
                color="black"
                dark
                v-else
                ><v-icon small>mdi-window-close</v-icon></v-btn
              >
            </v-col>

            <v-col cols="2">
              <v-row no-gutters
                ><v-col cols="12"
                  ><b>9. ລະບົບໄຟ: </b><br /><small
                    >(Electronic Device)</small
                  ></v-col
                ></v-row
              >
            </v-col>
            <v-col cols="1" align="left">
              <v-row no-gutters>
                <v-col cols="6" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="batterry"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="6" align="left">
                  <span> ໝໍ້ໄຟ </span><br /><small>(Batterry)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="1" align="left">
              <v-row no-gutters>
                <v-col cols="6" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="light"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="6" align="left">
                  <span> ໄຟຕາ </span><br /><small>(Light)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="1" align="left">
              <v-row no-gutters>
                <v-col cols="6" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="horn"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="6" align="left">
                  <span> ແກ </span><br /><small>(Horn)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="2" align="left">
              <v-row no-gutters>
                <v-col cols="3" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="indictor_light"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="9" align="left">
                  <span> ໄຟລ້ຽວ </span><br /><small>(Indictor Light)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="1" align="left">
              <v-row no-gutters>
                <v-col cols="6" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="brake_light"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="6" align="left">
                  <span> ໄຟແບກ </span><br /><small>(Brake Light)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="1" align="left">
              <v-row no-gutters>
                <v-col cols="6" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="side_light"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="6" align="left">
                  <span> ໄຟຕາລີ </span><br /><small>(Side Light)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="2" align="left">
              <v-row no-gutters>
                <v-col cols="3" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="rear_light"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="9" align="left">
                  <span> ໄຟຖອຍ </span><br /><small>(Rear Light)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="1" align="right">
              <v-btn
                class="ma-0"
                x-small
                tile
                outlined
                color="black"
                dark
                v-if="
                  batterry &&
                    light &&
                    horn &&
                    indictor_light &&
                    brake_light &&
                    side_light &&
                    rear_light
                "
                ><v-icon small>mdi-opera</v-icon></v-btn
              >
              <v-btn
                class="ma-0"
                x-small
                tile
                outlined
                color="black"
                dark
                v-else
                ><v-icon small>mdi-window-close</v-icon></v-btn
              >
            </v-col>

            <v-col cols="3">
              <v-row no-gutters
                ><v-col cols="12"
                  ><b>10. ລະບົບກວດກາຄວາມຟອດໄພ: </b><br /><small
                    >(Safety)</small
                  ></v-col
                ></v-row
              >
            </v-col>
            <v-col cols="3" align="left">
              <v-row no-gutters>
                <v-col cols="2" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="mirror"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="10" align="left">
                  <span> ແວ່ນສ່ອງຫລັງ, ແວ່ນຂ້າງ </span><br /><small
                    >(Mirror)</small
                  >
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="3" align="left">
              <v-row no-gutters>
                <v-col cols="2" align="left">
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-if="wiper"
                    ><v-icon small>mdi-opera</v-icon></v-btn
                  >
                  <v-btn
                    class="ma-0"
                    x-small
                    tile
                    outlined
                    color="black"
                    dark
                    v-else
                    ><v-icon small>mdi-window-close</v-icon></v-btn
                  >
                </v-col>
                <v-col class="mb-0" cols="10" align="left">
                  <span> ຝອຍປັດນໍ້າຝົນ </span><br /><small>(Wiper)</small>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="2"></v-col>
            <v-col cols="1" align="right">
              <v-btn
                class="ma-0"
                x-small
                tile
                outlined
                color="black"
                dark
                v-if="mirror && wiper"
                ><v-icon small>mdi-opera</v-icon></v-btn
              >
              <v-btn
                class="ma-0"
                x-small
                tile
                outlined
                color="black"
                dark
                v-else
                ><v-icon small>mdi-window-close</v-icon></v-btn
              >
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12">
          <v-row no-gutters>
            <v-col cols="12" md="3">
              <b>ໝາຍເຫດ:</b>
            </v-col>
            <v-col cols="12" md="3">
              <b>ເຄື່ອງໝາຍຜ່ານ:</b>
              <v-btn class="ma-0" x-small tile outlined color="black" dark
                ><v-icon small>mdi-opera</v-icon></v-btn
              >
              <br /><span>(Pass)</span>
            </v-col>
            <v-col cols="12" md="3">
              <b>ບໍ່ຜ່ານ:</b>
              <v-btn class="ma-0" x-small tile outlined color="black" dark
                ><v-icon small>mdi-window-close</v-icon></v-btn
              >
              <br /><span>(Failed)</span>
            </v-col>
            <v-col cols="12" md="3"></v-col>
            <v-col cols="12" md="3"></v-col>
            <v-col cols="12" md="9">
              <p>
                - ຖ້າລະບົບໃດໜຶ່ງບໍ່ຜ່ານ ແມ່ນເອົາໄປສ້ອມແປງຄີນແລ້ວ ເອົາມາກວດໃໝ່.
              </p>
              <p>
                - if some system failed, it must be to repaired then inspect
                that system again.
              </p>
            </v-col>

            <v-col cols="12">
              <v-row no-gutters>
                <v-col cols="9"></v-col>
                <v-col cols="3" align="left"
                  ><b>ວັນທີ:</b> <span v-text="created_at"></span> <br /><b
                    >Date</b
                  ></v-col
                >
                <v-col cols="4" align="center">
                  <h3>ຜູ້ກວດກາຕົວຈິງ</h3>
                  <span>(Inspector)</span><br />
                  <strong>{{ username }}</strong>
                </v-col>
                <v-col cols="4" align="center">
                  <h3>ບ່ອນກວດກາສະພາບເທັກນິກ</h3>
                  (Technical Inspection)
                </v-col>
                <v-col cols="4" align="center">
                  <h4>ຫົວໜ້າກອງຄຸ້ມຄອງພາຫະນະ</h4>
                  <h4>(Chief of vehicle management division)</h4>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" xl="6" lg="6" md="6" sm="6" align="left">
              <v-img
                :src="`https://picsum.photos/500/300`"
                :lazy-src="`https://picsum.photos/10/6`"
                width="200px"
                height="200px"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
            <v-col cols="12" xl="6" lg="6" md="6" sm="6" align="right">
              <qrcode
                :background="background"
                :size="size"
                :value="qrcode_url"
              ></qrcode>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
 </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Print from "vue-print-nb";
import AuthService from "@/services/AuthService.js";
import Qrcode from "v-qrcode/src/index";
Vue.use(Print);
Vue.use(VueAxios, axios);

import VueHtmlToPaper from "vue-html-to-paper";

const options = {
 name: "_blank",
  specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
  styles: [
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    "https://unpkg.com/kidlat-css/css/kidlat.css",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
    "https://code.jquery.com/jquery-3.4.1.slim.min.js",
    "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
    "https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css",
    "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css",
    "https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js",
    "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"
  ]
};

Vue.use(VueHtmlToPaper, options);
Vue.use(VueHtmlToPaper);

import { Printd } from "printd";
export default {
components: {
    Qrcode
  },
  data: () => ({
    qrcode_url: "",
    size: 200,
    background: "white",
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
    fuel: "",
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
    photo: "",
    qrcode: "",
    status: "",
    created_at: "",
    registers: [],
    standards: [],
    username: ""
  }),
  async created() {
    let res = await axios.get(
      "/api/inspection/inspection_id/" + this.$route.query.inspection_id
    );
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
    this.cylinder = res.data.inspections.cylinder || "";
    this.cylinder_size_cc = res.data.inspections.cylinder_size_cc || "";
    this.platc_no = res.data.inspections.platc_no || "";
    this.steering_wheel = res.data.inspections.steering_wheel || "";
    this.engine_no = res.data.inspections.engine_no || "";
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
    this.fuel = res.data.inspections.fuel || "";
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

    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/");
    }
    this.username = this.$store.getters.getUser.username;
    this.userId = this.$store.getters.getUser.id;
    this.secretMessage = await AuthService.getSecretContent();
  },
  mounted() {
    this.getDatacar();
    this.getStandard();
    this.print();
  },
  methods: {
    print() {
      const p = new Printd();
      p.print(
        this.$refs.printMe,
        `@media print {
                    @page {size: A4 landscape;}
                }`
      );
    },
    getAllData() {
      axios.get("/api/inspection").then(response => {
        this.inspections = response.data.inspections;
      });
    },
    getDatacar() {
      this.axios.get("/api/cardata").then(response => {
        this.cardatas = response.data.cardatas;
      });
    },
    getStandard() {
      this.axios.get("/api/standardsetting").then(response => {
        this.standards = response.data.standards;
      });
    }
  }
};
</script>
<style scoped>
@media print {
  @page {
    size: landscape;
  }
  .borderless td,
  .borderless th {
    border: none;
  }
  .borderless table {
    border-top-style: none;
    border-left-style: none;
    border-right-style: none;
    border-bottom-style: none;
  }
  table.borderless td,
  table.borderless th {
    border: none !important;
  }
}
</style>
