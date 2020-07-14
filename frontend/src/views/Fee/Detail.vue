<template>
<div>
       <v-col  cols="12" xl="12" lg="10" md="12" sm="11" >
    <v-row align="start" justify="center">
        <v-row align="12" justify="center" no-gutters>
            <v-card-title>
                <v-toolbar-title cols="12" xl="12" lg="12" md="12" sm="12">
                    <h5 class="indigo--text">
                        <v-icon color="indigo">mdi-xing</v-icon>
                        {{$t('Fee.Detail')}}
                    </h5>
                </v-toolbar-title>
            </v-card-title>
            <v-spacer />
            <v-card-title>
                
                <v-row>
                    <v-col cols="12">
                        <v-tooltip bottom color="indigo">
                            <template v-slot:activator="{ on }">
                                <v-btn :to="`/${$i18n.locale}/Fee/List`" fab small color="indigo" dark v-on="on">
                                    <v-icon>mdi-undo-variant</v-icon>
                                </v-btn>
                            </template>
                            <span>{{ $t("Inspection.History") }}</span>
                        </v-tooltip>
                    </v-col>
                </v-row>
            </v-card-title>
        </v-row>
        <v-col cols="12" xl="12" lg="12" md="12" sm="12">

        </v-col>
        <v-col cols="12" xl="4" lg="4" md="4" sm="12">
            <v-row>

               <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("Register.OwnerName")
            }}
                </v-col>
               <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="owner_name"></Strong>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("Register.Gender")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="gender"></Strong>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("Register.Phone")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="phone"></Strong>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("Village.Name")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="VName"></Strong>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("District.Name")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="DName"></Strong>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("Province.Name")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="PName"></Strong>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("TR.Name")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="TRName"></Strong>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("Register.Platcno")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="platc_no"></Strong>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" xl="4" lg="4" md="4" sm="12">
            <v-row>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("Model.Name")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="MName"></Strong>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("Type.Name")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="TName"></Strong>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("Color.Name")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="CName"></Strong>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("Register.steering_wheel")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="steering_wheel"></Strong>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("Register.fuel")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="fuel"></Strong>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("Register.cylinder")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="cylinder"></Strong>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("Register.cylinder_size_cc")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="cylinder_size_cc"></Strong>
                </v-col>
                <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2">
                    <span class="text-left">{{$t('Register.cc')}}</span>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("Register.engine_no")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="engine_no"></Strong>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" xl="4" lg="4" md="4" sm="12">
            <v-row>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("Register.chassis_no")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="chassis_no"></Strong>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("Register.width")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="width"></Strong>
                </v-col>
                <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2">
                    <span class="text-left">{{$t('Register.mm')}}</span>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("Register.length")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="length"></Strong>
                </v-col>
                <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2">
                    <span class="text-left">{{$t('Register.mm')}}</span>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("Register.height")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="height"></Strong>
                </v-col>
                <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2">
                    <span class="text-left">{{$t('Register.mm')}}</span>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("Register.passenger_scats")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="passenger_scats"></Strong>
                </v-col>
                <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2">
                    <span class="text-left">{{$t('Register.scats')}}</span>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("Register.vehicle_weight")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="vehicle_weight"></Strong>
                </v-col>
                <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2">
                    <span class="text-left">{{$t('Register.kg')}}</span>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("Register.max_loading")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="max_loading"></Strong>
                </v-col>
                <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2">
                    <span class="text-left">{{$t('Register.kg')}}</span>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                    {{
            $t("Register.total_weight")
            }}
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                    <Strong class="indigo--text" v-text="total_weight"></Strong>
                </v-col>
                <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2">
                    <span class="text-left">{{$t('Register.kg')}}</span>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <v-divider />
                </v-col>
            </v-row>
        </v-col>
        <!-- <v-col cols="12" xl="12" lg="12" md="12" sm="12"><h3 class="indigo--text"><v-icon class="pb-1 indigo--text" small>mdi-pencil-outline</v-icon> Inspection Vehicle Information</h3></v-col>
      <v-col cols="12" xl="3" lg="3" md="3" sm="12">
        <v-row>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.handier")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="handier==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.am")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="handier==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
           <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.side_slip")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="side_sip==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
           <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.pedal")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="pedal==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
           <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.hose")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="hose==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
           <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.reservoir_tank")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="reservoir_tank==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.tire")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="tire==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.wheel")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="wheel==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
        </v-row>
      </v-col>
      <v-col cols="12" xl="3" lg="3" md="3" sm="12">
        <v-row>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.bolt")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="bolt==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.chock_absorber")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="chock_absorber==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
           <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.spring")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="spring==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
           <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.prime_move")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="prime_move==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
           <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.air_cleaner")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="air_cleaner==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
           <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.fan_belt")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="fan_belt==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.radiator")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="radiator==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.carburator")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="carburator==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
        </v-row>
      </v-col>
      <v-col cols="12" xl="3" lg="3" md="3" sm="12">
        <v-row>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.injection_pump")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="injection_pump==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.co")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="co==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
           <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.hc")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="hc==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
           <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.clutch")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="clutch==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
           <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.gear_lever")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="gear_lever==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
           <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.drive_shaft")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="drive_shaft==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.universal_join")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="universal_join==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.muffler")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="muffler==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.db")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="db==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
        </v-row>
      </v-col>-->
        <!-- <v-col cols="12" xl="3" lg="3" md="3" sm="12">
        <v-row>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.batterry")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="batterry==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
           <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.light")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="light==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
           <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.horn")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="horn==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
           <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.indictor_light")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="indictor_light==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.brake_light")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="brake_light==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.side_light")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="side_light==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.rear_light")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="rear_light==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.mirror")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="mirror==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.wiper")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <Strong class="indigo--text" v-if="wiper==='1'">{{$t('Fee.Pass')}}</Strong>
            <Strong class="indigo--text" v-else>{{$t('Fee.Fail')}}</Strong>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">{{
            $t("Inspection.photo")
          }}</v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
            <v-img src="https://picsum.photos/510/300?random" width="400px" height="100px"></v-img>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12"
            ><v-divider
          /></v-col>
        </v-row>
      </v-col>-->
    </v-row>
       </v-col>
</div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
    data: () => ({
        villages: [],
        districts: [],
        provinces: [],
        genders: ["ນາງ", "ທ້າວ", "ອື່ນໆ"],
        steeringwheel: ["ຂວາ", "ຊ້າຍ", "ອື່ນໆ"],
        fuels: ["ແອັດຊັງ", "ກາຊວນ"],
        snackbar: false,
        snackbarText: "",
        owner_name: "",
        gender: "",
        phone: "",
        tr_id: "",
        village_id: "",
        model_id: "",
        type_id: "",
        color_id: "",
        platc_no: "",
        steering_wheel: "",
        fuel: "",
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
        models: [],
        types: [],
        colors: [],
        trs: [],
        owners: [],
        province_id: [],
        district_id: [],
        getall: [],
        getalldata: [],
        fees: []
    }),

    watch: {
        variant(val) {
            if (val.includes("filter")) {
                this.value = true;
            }
        },
        province_id() {
            this.getProvince();
        },
        district_id() {
            this.getDistrict();
        }
    },
    async created() {
        let res = await axios.get("/api/fee/fee_id/" + this.$route.query.fee_id);
        this.owner_name = res.data.fees.owner_name || "";
        this.gender = res.data.fees.gender || "";
        this.phone = res.data.fees.phone || "";
        this.PName = res.data.fees.PName || "";
        this.DName = res.data.fees.DName || "";
        this.VName = res.data.fees.VName || "";
        this.TRName = res.data.fees.TRName || "";
        this.MName = res.data.fees.MName || "";
        this.TName = res.data.fees.TName || "";
        this.CName = res.data.fees.CName || "";
        this.province_id = res.data.fees.province_id || "";
        this.district_id = res.data.fees.district_id || "";
        this.village_id = res.data.fees.village_id || "";
        this.tr_id = res.data.fees.tr_id || "";
        this.platc_no = res.data.fees.platc_no || "";
        this.model_id = res.data.fees.model_id || "";
        this.type_id = res.data.fees.type_id || "";
        this.color_id = res.data.fees.color_id || "";
        this.fuel = res.data.fees.fuel || "";
        this.steering_wheel = res.data.fees.steering_wheel || "";
        this.cylinder = res.data.fees.cylinder || "";
        this.cylinder_size_cc = res.data.fees.cylinder_size_cc || "";
        this.engine_no = res.data.fees.engine_no || "";
        this.chassis_no = res.data.fees.chassis_no || "";
        this.width = res.data.fees.width || "";
        this.length = res.data.fees.length || "";
        this.height = res.data.fees.height || "";
        this.passenger_scats = res.data.fees.passenger_scats || "";
        this.vehicle_weight = res.data.fees.vehicle_weight || "";
        this.max_loading = res.data.fees.max_loading || "";
        this.total_weight = res.data.fees.total_weight || "";
        this.register_id = res.data.fees.register_id || "";

        this.handier = res.data.fees.handier || "0";
        this.am = res.data.fees.am || "0";
        this.side_slip = res.data.fees.side_slip || "0";
        this.pedal = res.data.fees.pedal || "0";
        this.hose = res.data.fees.hose || "0";
        this.reservoir_tank = res.data.fees.reservoir_tank || "0";
        this.tire = res.data.fees.tire || "0";
        this.wheel = res.data.fees.wheel || "0";
        this.bolt = res.data.fees.wheel || "0";
        this.chock_absorber = res.data.fees.chock_absorber || "0";
        this.spring = res.data.fees.spring || "0";
        this.prime_move = res.data.fees.prime_move || "0";
        this.air_cleaner = res.data.fees.air_cleaner || "0";
        this.fan_belt = res.data.fees.fan_belt || "0";
        this.radiator = res.data.fees.radiator || "0";
        this.carburator = res.data.fees.carburator || "0";
        this.injection_pump = res.data.fees.injection_pump || "0";
        this.co = res.data.fees.co || "0";
        this.hc = res.data.fees.hc || "0";
        this.clutch = res.data.fees.clutch || "0";
        this.gear_lever = res.data.fees.gear_lever || "0";
        this.drive_shaft = res.data.fees.drive_shaft || "0";
        this.universal_join = res.data.fees.universal_join || "0";
        this.muffler = res.data.fees.muffler || "0";
        this.db = res.data.fees.db || "0";
        this.batterry = res.data.fees.batterry || "0";
        this.light = res.data.fees.light || "0";
        this.horn = res.data.fees.horn || "0";
        this.indictor_light = res.data.fees.indictor_light || "0";
        this.brake_light = res.data.fees.brake_light || "0";
        this.side_light = res.data.fees.side_light || "0";
        this.rear_light = res.data.fees.rear_light || "0";
        this.mirror = res.data.fees.mirror || "0";
        this.wiper = res.data.fees.wiper || "0";
        this.getRegister();

        this.getVillage();
        this.getColor();
        this.getOwner();
        this.getDistrict();
        this.getProvince();
        this.getAllData();
        this.getTypeRegister();
        this.getModel();
        this.getType();
    },
    methods: {
        async update() {
            let res = await this.axios.put("/api/register/update", {
                register_id: this.$route.query.register_id,
                owner_name: this.owner_name,
                gender: this.gender,
                phone: this.phone,
                province_id: this.province_id,
                district_id: this.district_id,
                village_id: this.village_id,
                tr_id: this.tr_id,
                model_id: this.model_id,
                type_id: this.type_id,
                color_id: this.color_id,
                platc_no: this.platc_no,
                steering_wheel: this.steering_wheel,
                fuel: this.fuel,
                cylinder: this.cylinder,
                cylinder_size_cc: this.cylinder_size_cc,
                engine_no: this.engine_no,
                chassis_no: this.chassis_no,
                width: this.width,
                length: this.length,
                height: this.height,
                passenger_scats: this.passenger_scats,
                vehicle_weight: this.vehicle_weight,
                max_loading: this.max_loading,
                total_weight: this.total_weight
            });

            if (res) {
                this.$router.replace("../Register");
            }
        },

        getVillage() {
            this.axios.get("/api/village").then(response1 => {
                this.villages = response1.data.villages;
            });
        },
        async Rreset() {
            (this.form.full_name = ""),
            (this.form.model_id = ""),
            (this.form.type_id = ""),
            (this.form.color_id = ""),
            (this.form.owner_id = ""),
            (this.form.platc_no = ""),
            (this.form.steering_wheel = ""),
            (this.form.fuel = ""),
            (this.form.cylinder = ""),
            (this.form.cylinder_size_cc = ""),
            (this.form.engine_no = ""),
            (this.form.chassis_no = ""),
            (this.form.width = ""),
            (this.form.length = ""),
            (this.form.height = ""),
            (this.form.passenger_scats = ""),
            (this.form.vehicle_weight = ""),
            (this.form.max_loading = ""),
            (this.form.total_weight = ""),
            (this.form.status = false);
        },
        getRegister() {
            this.axios.get("/api/register").then(response1 => {
                this.registers = response1.data.registers;
            });
        },
        getTypeRegister() {
            this.axios.get("/api/type_register").then(response => {
                this.trs = response.data.trs;
            });
        },
        getColor() {
            this.axios.get("/api/color").then(response => {
                this.colors = response.data.colors;
            });
        },
        getOwner() {
            this.axios.get("/api/owner").then(response => {
                this.owners = response.data.owners;
            });
        },
        async getAllData() {
            this.axios.get("/api/province").then(response => {
                this.provinces = response.data.provinces;
            });
        },
        async getDistrict() {
            let res = await this.axios.get("/api/district/all", {
                params: {
                    district_id: this.district_id
                }
            });
            this.getall = res.data.getall;
        },
        async getProvince() {
            let res = await this.axios.get("/api/district/getAll", {
                params: {
                    province_id: this.province_id
                }
            });
            this.getalldata = res.data.getalldata;
        },
        getType() {
            this.axios.get("/api/type").then(response1 => {
                this.types = response1.data.types;
            });
        },
        getModel() {
            this.axios.get("/api/model").then(response => {
                this.models = response.data.models;
            });
        }
    }
};
</script>

<style scoped>
.bottom-gradient {
    background-image: linear-gradient(to top,
            rgba(0, 0, 0, 0.4) 0%,
            transparent 72px);
}

.repeating-gradient {
    background-image: repeating-linear-gradient(-45deg,
            rgba(255, 0, 0, 0.25),
            rgba(255, 0, 0, 0.25) 5px,
            rgba(0, 0, 255, 0.25) 5px,
            rgba(0, 0, 255, 0.25) 10px);
}
</style>
