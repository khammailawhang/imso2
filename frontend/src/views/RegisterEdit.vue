<template>
  <div class="edit">
    <v-content>
      <v-container>
        <ValidationObserver ref="observer">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" align="left">
              <v-card dense flat color="white">
                <v-card-title>
                  <span style="font-size:14px">{{$t("Navbar.Dashboard")}}</span>
                  <v-icon small class="ma-2">mdi-chevron-right</v-icon>
                  <span style="font-size:14px">{{$t("Navbar.Register")}}</span>
                  <v-icon small class="ma-2">mdi-chevron-right</v-icon>
                  <strong style="font-size:14px">{{$t("Register.Create_Title")}}</strong>
                  <v-spacer />
                  <v-tooltip bottom color="#3d5afe">
                    <template v-slot:activator="{ on }">
                      <v-btn
                        depressed
                        :to="`/${$i18n.locale}/Register`"
                        small
                        class="text-capitalize"
                        color="#3d5afe"
                        dark
                        v-on="on"
                      >
                        <v-icon small class="mr-2">mdi-keyboard-backspace</v-icon>
                        {{ $t("Fee.Back") }}
                      </v-btn>
                    </template>
                    <span>{{ $t("Fee.Back") }}</span>
                  </v-tooltip>
                </v-card-title>
              </v-card>
            </v-col>
            <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="pt-6">
              <v-card flat color="white">
                <v-card-title>
                  <span style="font-size:18px">{{$t('Register.Create_Title2')}}</span>
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <ValidationProvider
                        rules="required"
                        v-slot="{ errors }"
                        :v-model="tr_id"
                        :bails="false"
                      >
                        <v-autocomplete
                          color="#3d5afe"
                          required
                          flat
                          solo
                          background-color="#ebedfc"
                          hide-details="auto"
                          :items="trs"
                          v-model="tr_id"
                          item-text="name"
                          item-value="tr_id"
                          small
                          dense
                        >
                          <template slot="label">
                            <span style="font-size:14px">{{ $t('TR.Name') }}</span>
                            <span class="red--text pl-2">*</span>
                          </template>
                        </v-autocomplete>
                        <span style="color:red" class="overline text-left">
                          <span v-for="(error, tr_id) in errors" :key="tr_id">
                            <p class="li">{{$t("Register.validated")}}</p>
                          </span>
                        </span>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <ValidationProvider
                        rules="required"
                        v-slot="{ errors }"
                        :v-model="platc_no"
                        :bails="false"
                      >
                        <v-text-field
                          required
                          solo
                          flat
                          background-color="#FFD180"
                          class="white--text"
                          color="white"
                          small
                          dense
                          v-model="platc_no"
                          :rules="rules"
                          counter
                          maxlength="4"
                          type
                        >
                          <template slot="label">
                            <span style="font-size:14px">{{ $t('Register.Platcno') }}</span>
                            <span class="red--text pl-2">*</span>
                          </template>
                        </v-text-field>

                        <span style="color:red" class="overline text-left">
                          <span v-for="(error, platc_no) in errors" :key="platc_no">
                            <span class="li">{{$t("Register.validate")}}</span>
                          </span>
                        </span>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <ValidationProvider
                        rules="required"
                        v-slot="{ errors }"
                        :v-model="model_id"
                        :bails="false"
                      >
                        <v-autocomplete
                          color="#3d5afe"
                          :label="$t('Model.Name')"
                          :items="models"
                          v-model="model_id"
                          item-text="name"
                          item-value="model_id"
                          required
                          small
                          dense
                          flat
                          solo
                          background-color="#ebedfc"
                        >
                          <template slot="label">
                            <span style="font-size:14px">{{ $t('Model.Name') }}</span>
                            <span class="red--text pl-2">*</span>
                          </template>
                        </v-autocomplete>

                        <span style="color:red" class="overline text-left">
                          <span v-for="(error, model_id) in errors" :key="model_id">
                            <span style="font-size:14px" class="li">{{$t("Register.validated")}}</span>
                          </span>
                        </span>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <ValidationProvider
                        rules="required"
                        v-slot="{ errors }"
                        :v-model="type_id"
                        :bails="false"
                      >
                        <v-autocomplete
                          color="#3d5afe"
                          :items="types"
                          v-model="type_id"
                          item-text="name"
                          item-value="type_id"
                          required
                          small
                          dense
                          flat
                          solo
                          background-color="#ebedfc"
                        >
                          <template slot="label">
                            <span style="font-size:14px">{{ $t('Type.Name') }}</span>
                            <span class="red--text pl-2">*</span>
                          </template>
                        </v-autocomplete>

                        <span style="color:red" class="overline text-left">
                          <span v-for="(error, type_id) in errors" :key="type_id">
                            <span class="li">{{$t("Register.validated")}}</span>
                          </span>
                        </span>
                      </ValidationProvider>
                    </v-col>

                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <ValidationProvider
                        rules="required"
                        v-slot="{ errors }"
                        :v-model="color_id"
                        :bails="false"
                      >
                        <v-autocomplete
                          color="#3d5afe"
                          :items="colors"
                          v-model="color_id"
                          item-text="name"
                          item-value="color_id"
                          required
                          small
                          dense
                          flat
                          solo
                          background-color="#ebedfc"
                        >
                          <template slot="label">
                            <span style="font-size:14px">{{ $t('Color.Name') }}</span>
                            <span class="red--text pl-2">*</span>
                          </template>
                        </v-autocomplete>

                        <span style="color:red" class="overline text-left">
                          <span v-for="(error, color_id) in errors" :key="color_id">
                            <span class="li">{{$t("Register.validated")}}</span>
                          </span>
                        </span>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <ValidationProvider
                        rules="required"
                        v-slot="{ errors }"
                        :v-model="steering_wheel"
                        :bails="false"
                      >
                        <v-autocomplete
                          color="#3d5afe"
                          :items="steeringwheel"
                          v-model="steering_wheel"
                          item-text="name"
                          required
                          small
                          dense
                          flat
                          solo
                          background-color="#ebedfc"
                        >
                          <template slot="label">
                            <span style="font-size:14px">{{ $t('Register.steering_wheel') }}</span>
                            <span class="red--text pl-2">*</span>
                          </template>
                        </v-autocomplete>

                        <span style="color:red" class="overline text-left">
                          <span v-for="(error, steering_wheel) in errors" :key="steering_wheel">
                            <span class="li">{{$t("Register.validate")}}</span>
                          </span>
                        </span>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <ValidationProvider
                        rules="required"
                        v-slot="{ errors }"
                        :v-model="fuel"
                        :bails="false"
                      >
                        <v-autocomplete
                          color="#3d5afe"
                          :items="fuels"
                          v-model="fuel"
                          item-text="name"
                          required
                          small
                          dense
                          flat
                          solo
                          background-color="#ebedfc"
                        >
                          <template slot="label">
                            <span style="font-size:14px">{{ $t('Register.fuel') }}</span>
                            <span class="red--text pl-2">*</span>
                          </template>
                        </v-autocomplete>

                        <span style="color:red" class="overline text-left">
                          <span v-for="(error, fuel) in errors" :key="fuel">
                            <span class="li">{{$t("Register.validated")}}</span>
                          </span>
                        </span>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <ValidationProvider
                        rules="required"
                        v-slot="{ errors }"
                        :v-model="cylinder_size_cc"
                        :bails="false"
                      >
                        <v-btn-toggle>
                          <v-text-field
                            color="#3d5afe"
                            v-model="cylinder_size_cc"
                            type="number"
                            autocomplete="off"
                            required
                            small
                            dense
                            flat
                            solo
                            background-color="#ebedfc"
                          >
                            <template slot="label">
                              <span style="font-size:14px">{{ $t('Register.cylinder_size_cc') }}</span>
                              <span class="red--text pl-2">*</span>
                            </template>
                          </v-text-field>
                          <v-avatar
                            tile
                            style="font-size:14px"
                            color="white"
                          >{{ $t("Register.cc") }}</v-avatar>
                        </v-btn-toggle>
                        <span style="color:red" class="overline text-left">
                          <span v-for="(error, cylinder_size_cc) in errors" :key="cylinder_size_cc">
                            <span class="li">{{$t("Register.validate")}}</span>
                          </span>
                        </span>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <ValidationProvider
                            rules="required"
                            v-slot="{ errors }"
                            :v-model="cylinder"
                            :bails="false"
                          >
                            <v-text-field
                              color="#3d5afe"
                              v-model="cylinder"
                              item-text="cylinder"
                              item-value="register_id"
                              required
                              small
                              dense
                              flat
                              solo
                              background-color="#ebedfc"
                            >
                              <template slot="label">
                                <span style="font-size:14px">{{ $t('Register.cylinder') }}</span>
                                <span class="red--text pl-2">*</span>
                              </template>
                            </v-text-field>

                            <span style="color:red" class="overline text-left">
                              <span v-for="(error, cylinder) in errors" :key="cylinder">
                                <span class="li">{{$t("Register.validate")}}</span>
                              </span>
                            </span>
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                    </v-col>

                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <ValidationProvider
                            rules="required"
                            v-slot="{ errors }"
                            :v-model="price"
                            :bails="false"
                          >
                            <v-autocomplete
                              color="#3d5afe"
                              :items="prices"
                              item-text="price"
                              dense
                              flat
                              solo
                              background-color="#ebedfc"
                              v-model="gender"
                            >
                              <template slot="label">
                                <span style="font-size:14px">{{ $t('Register.p') }}</span>
                                <span class="red--text pl-2">*</span>
                              </template>
                            </v-autocomplete>

                            <span style="color:red" class="overline text-left">
                              <span v-for="(error, price) in errors" :key="price">
                                <span class="li">{{$t("Register.validate")}}</span>
                              </span>
                            </span>
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <ValidationProvider
                            rules="required"
                            v-slot="{ errors }"
                            :v-model="engine_no"
                            :bails="false"
                          >
                            <v-text-field
                              color="#3d5afe"
                              v-model="engine_no"
                              type="text"
                              autocomplete="off"
                              small
                              dense
                              flat
                              solo
                              background-color="#ebedfc"
                            >
                              <template slot="label">
                                <span style="font-size:14px">{{ $t('Register.engine_no') }}</span>
                                <span class="red--text pl-2">*</span>
                              </template>
                            </v-text-field>

                            <span style="color:red" class="overline text-left">
                              <span v-for="(error, engine_no) in errors" :key="engine_no">
                                <span class="li">{{$t("Register.validate")}}</span>
                              </span>
                            </span>
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <ValidationProvider
                            rules="required"
                            v-slot="{ errors }"
                            :v-model="chassis_no"
                            :bails="false"
                          >
                            <v-text-field
                              color="#3d5afe"
                              v-model="chassis_no"
                              type="text"
                              autocomplete="off"
                              small
                              dense
                              flat
                              solo
                              background-color="#ebedfc"
                            >
                              <template slot="label">
                                <span style="font-size:14px">{{ $t('Register.chassis_no') }}</span>
                                <span class="red--text pl-2">*</span>
                              </template>
                            </v-text-field>

                            <span style="color:red" class="overline text-left">
                              <span v-for="(error, chassis_no) in errors" :key="chassis_no">
                                <span class="li">{{$t("Register.validate")}}</span>
                              </span>
                            </span>
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <v-btn-toggle>
                            <v-text-field
                              color="#3d5afe"
                              v-model="width"
                              type="number"
                              autocomplete="off"
                              small
                              dense
                              flat
                              solo
                              background-color="#ebedfc"
                            >
                              <template slot="label">
                                <span style="font-size:14px">{{ $t('Register.width') }}</span>
                              </template>
                            </v-text-field>
                            <v-avatar
                              style="font-size:14px"
                              tile
                              color="white"
                            >{{ $t("Register.mm") }}</v-avatar>
                          </v-btn-toggle>
                        </v-col>
                      </v-row>
                    </v-col>

                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <v-btn-toggle>
                            <v-text-field
                              color="#3d5afe"
                              v-model="length"
                              type="number"
                              autocomplete="off"
                              small
                              dense
                              flat
                              solo
                              background-color="#ebedfc"
                            >
                              <template slot="label">
                                <span style="font-size:14px">{{ $t('Register.length') }}</span>
                              </template>
                            </v-text-field>
                            <v-avatar
                              style="font-size:14px"
                              tile
                              color="white"
                            >{{ $t("Register.mm") }}</v-avatar>
                          </v-btn-toggle>
                        </v-col>
                      </v-row>
                    </v-col>

                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <v-btn-toggle>
                            <v-text-field
                              color="#3d5afe"
                              v-model="height"
                              type="number"
                              autocomplete="off"
                              small
                              dense
                              flat
                              solo
                              background-color="#ebedfc"
                            >
                              <template slot="label">
                                <span style="font-size:14px">{{ $t('Register.height') }}</span>
                              </template>
                            </v-text-field>
                            <v-avatar
                              style="font-size:14px"
                              tile
                              color="white"
                            >{{ $t("Register.mm") }}</v-avatar>
                          </v-btn-toggle>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <v-btn-toggle>
                            <v-text-field
                              color="#3d5afe"
                              v-model="passenger_scats"
                              type="number"
                              autocomplete="off"
                              small
                              dense
                              flat
                              solo
                              background-color="#ebedfc"
                            >
                              <template slot="label">
                                <span style="font-size:14px">{{ $t('Register.passenger_scats') }}</span>
                              </template>
                            </v-text-field>
                            <v-avatar
                              tile
                              style="font-size:14px"
                              color="white"
                            >{{ $t("Register.scats") }}</v-avatar>
                          </v-btn-toggle>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <v-btn-toggle>
                            <v-text-field
                              color="#3d5afe"
                              :label="$t('Register.vehicle_weight')"
                              v-model="vehicle_weight"
                              type="number"
                              autocomplete="off"
                              small
                              dense
                              flat
                              solo
                              background-color="#ebedfc"
                            >
                              <template slot="label">
                                <span style="font-size:14px">{{ $t('Register.vehicle_weight') }}</span>
                              </template>
                            </v-text-field>
                            <v-avatar
                              tile
                              style="font-size:14px"
                              color="white"
                            >{{ $t("Register.kg") }}</v-avatar>
                          </v-btn-toggle>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <v-btn-toggle>
                            <v-text-field
                              color="#3d5afe"
                              v-model="max_loading"
                              type="number"
                              autocomplete="off"
                              small
                              dense
                              flat
                              solo
                              background-color="#ebedfc"
                            >
                              <template slot="label">
                                <span style="font-size:14px">{{ $t('Register.max_loading') }}</span>
                              </template>
                            </v-text-field>
                            <v-avatar
                              style="font-size:14px"
                              tile
                              color="white"
                            >{{ $t("Register.kg") }}</v-avatar>
                          </v-btn-toggle>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" xl="2" lg="3" md="4" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <v-btn-toggle>
                            <v-text-field
                              color="#3d5afe"
                              v-model="total_weight"
                              type="number"
                              autocomplete="off"
                              small
                              dense
                              flat
                              solo
                              background-color="#ebedfc"
                            >
                              <template slot="label">
                                <span style="font-size:14px">{{ $t('Register.total_weight') }}</span>
                              </template>
                            </v-text-field>
                            <v-avatar
                              style="font-size:14px"
                              tile
                              color="white"
                            >{{ $t("Register.kg") }}</v-avatar>
                          </v-btn-toggle>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <ValidationProvider
                            style="font-size:14px"
                            rules="required"
                            v-slot="{ errors }"
                            :v-model="use_id"
                            :bails="false"
                          >
                            <v-autocomplete
                              color="#3d5afe"
                              :label="$t('Register.use')"
                              :items="uses"
                              v-model="use_id"
                              item-text="name"
                              item-value="use_id"
                              required
                              small
                              dense
                              flat
                              solo
                              background-color="#ebedfc"
                            >
                              <template slot="label">
                                <span style="font-size:14px">{{ $t('Register.use') }}</span>
                                <span class="red--text pl-2">*</span>
                              </template>
                            </v-autocomplete>

                            <span style="color:red" class="overline text-left">
                              <span v-for="(error, use_id) in errors" :key="use_id">
                                <span class="li">{{$t("Register.validated")}}</span>
                              </span>
                            </span>
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>

              <v-card color="white" flat class="mt-4">
                <v-card-title>
                  <span style="font-size:18px">{{$t('Register.Create_Title1')}}</span>
                </v-card-title>
                <v-card-text>
                  <v-row align="start" justify="left">
                    <v-col cols="12" xl="4" lg="4" md="4" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <ValidationProvider
                            rules="required"
                            v-slot="{ errors }"
                            :v-model="gender"
                            :bails="false"
                          >
                            <v-autocomplete
                              color="#3d5afe"
                              :items="genders"
                              item-text="PName"
                              dense
                              flat
                              solo
                              background-color="#ebedfc"
                              v-model="gender"
                            >
                              <template slot="label">
                                <span style="font-size:14px">{{ $t('Register.Gender') }}</span>
                                <span class="red--text pl-2">*</span>
                              </template>
                            </v-autocomplete>

                            <span style="color:red" class="overline text-left">
                              <span v-for="(error, genders) in errors" :key="genders">
                                <span style="font-size:14px" class="li">{{$t("Register.validated")}}</span>
                              </span>
                            </span>
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" xl="4" lg="4" md="4" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <ValidationProvider
                            rules="required"
                            v-slot="{ errors }"
                            :v-model="owner_name"
                            :bails="false"
                          >
                            <v-text-field
                              color="#3d5afe"
                              small
                              dense
                              flat
                              solo
                              background-color="#ebedfc"
                              v-model="owner_name"
                              type="text"
                            >
                              <template slot="label">
                                <span style="font-size:14px">{{ $t('Register.OwnerName') }}</span>
                                <span class="red--text pl-2">*</span>
                              </template>
                            </v-text-field>

                            <span style="color:red" class="overline text-left">
                              <span v-for="(error, owner_name) in errors" :key="owner_name">
                                <span class="li">{{$t("Register.validate")}}</span>
                              </span>
                            </span>
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                    </v-col>

                    <v-col cols="12" xl="4" lg="4" md="4" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <ValidationProvider
                            rules="required"
                            v-slot="{ errors }"
                            :v-model="province_id"
                            :bails="false"
                          >
                            <v-autocomplete
                              color="#3d5afe"
                              :items="provinces"
                              v-model="province_id"
                              item-text="name"
                              item-value="province_id"
                              required
                              small
                              dense
                              flat
                              solo
                              background-color="#ebedfc"
                            >
                              <template slot="label">
                                <span style="font-size:14px">{{ $t('Province.Name') }}</span>
                                <span class="red--text pl-2">*</span>
                              </template>
                            </v-autocomplete>

                            <span style="color:red" class="overline text-left">
                              <span v-for="(error, province_id) in errors" :key="province_id">
                                <span class="li">{{$t("Register.validated")}}</span>
                              </span>
                            </span>
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" xl="4" lg="4" md="4" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <ValidationProvider
                            rules="required"
                            v-slot="{ errors }"
                            :v-model="district_id"
                            :bails="false"
                          >
                            <v-autocomplete
                              color="#3d5afe"
                              :items="getalldata"
                              v-model="district_id"
                              item-text="name"
                              item-value="district_id"
                              required
                              small
                              dense
                              flat
                              solo
                              background-color="#ebedfc"
                            >
                              <template slot="label">
                                <span style="font-size:14px">{{ $t('District.Name') }}</span>
                                <span class="red--text pl-2">*</span>
                              </template>
                            </v-autocomplete>

                            <span style="color:red" class="overline text-left">
                              <span v-for="(error, district_id) in errors" :key="district_id">
                                <span class="li">{{$t("Register.validated")}}</span>
                              </span>
                            </span>
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" xl="4" lg="4" md="4" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <ValidationProvider
                            rules="required"
                            v-slot="{ errors }"
                            :v-model="village_id"
                            :bails="false"
                          >
                            <v-autocomplete
                              color="#3d5afe"
                              :items="getall"
                              v-model="village_id"
                              item-text="name"
                              item-value="village_id"
                              required
                              small
                              dense
                              flat
                              solo
                              background-color="#ebedfc"
                            >
                              <template slot="label">
                                <span style="font-size:14px">{{ $t('Village.Name') }}</span>
                                <span class="red--text pl-2">*</span>
                              </template>
                            </v-autocomplete>

                            <span style="color:red" class="overline text-left">
                              <span v-for="(error, village_id) in errors" :key="village_id">
                                <span class="li">{{$t("Register.validated")}}</span>
                              </span>
                            </span>
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" xl="4" lg="4" md="4" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <ValidationProvider
                            rules="required"
                            v-slot="{ errors }"
                            :v-model="phone"
                            :bails="false"
                          >
                            <v-text-field
                              color="#3d5afe"
                              :items="phones"
                              v-model="phone"
                              v-maska="['+856 (#0) #### ####', '+856 (#0) #### ####']"
                              item-value="inspection_id"
                              small
                              required
                              dense
                              flat
                              solo
                              background-color="#ebedfc"
                              type="text"
                            >
                              <template slot="label">
                                <span style="font-size:14px">{{ $t('Register.Phone') }}</span>
                                <span class="red--text pl-2">*</span>
                              </template>
                            </v-text-field>

                            <span style="color:red" class="overline text-left">
                              <span v-for="(error, phone) in errors" :key="phone">
                                <span class="li">{{$t("Register.validate")}}</span>
                              </span>
                            </span>
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    depressed
                    v-on="on"
                    color="#00E676"
                    @click="update"
                    class="white--text mr-4 text-capitalize"
                  >
                    <v-icon class="mr-2">check</v-icon>
                    {{$t("Register.Update")}}
                  </v-btn>

                  <v-btn
                    depressed
                    color="#B0BEC5"
                    @click="reset"
                    class="white--text text-capitalize"
                  >{{$t("Type.Cancel")}}</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-alert v-if="msg === true" color="#00E676" class="white--text">
                <v-icon color="#00E676">mdi-check</v-icon>
                {{ $t("User.CreateSuccess") }}
              </v-alert>
              <v-alert
                v-if="msg === false"
                text
                prominent
                color="red"
              >{{ $t("User.CreateNotSuccess") }}</v-alert>
            </v-col>
          </v-row>
        </ValidationObserver>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import AuthService from "@/services/AuthService.js";
import VuePhoneNumberInput from "vue-phone-number-input";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full";
import { ValidationObserver } from "vee-validate/dist/vee-validate.full";

Vue.use(VueAxios, axios);

import "vue-phone-number-input/dist/vue-phone-number-input.css";
Vue.component("vue-phone-number-input", VuePhoneNumberInput);

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    villages: [],
    districts: [],
    provinces: [],
    genders: ["ຊາຍ", "ຍິງ"],
    steeringwheel: ["ຂວາ", "ຊ້າຍເດີມ", "ຊ້າຍຍ້າຍພວງ"],
    fuels: ["ແອັດຊັງ", "ກາຊວນ", "ກາຣ", "ໄຟຟ້າ"],
    snackbar: false,
    snackbarText: "",
    owner_name: "",
    gender: "",
    phone: "",
    tr_id: "",
    village_id: "",
    model_id: [],
    type_id: [],
    color_id: "",
    platc_no: "",
    rules: [
      (value) => value.length <= 4 || "ທ່ານໃສ່ເກີນ 4 ໂຕເລກ",
      (value) => (value && value.length >= 4) || "ຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ",

      (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "4 ໝາຍເລກພໍດີ.";
      },
    ],
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
    uses: [],
    trs: [],
    owners: [],
    province_id: [],
    district_id: [],
    price: "",
    prices: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
    getall: [],
    getalldata: [],
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
    },
    model_id() {
      this.getType();
    },
    type_id() {
      this.getPrice();
    },
  },

  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/");
    } else if (this.$store.getters.getUser.register_update === "1") {
      let res = await axios.get(
        "/api/register/register_id/" + this.$route.query.register_id
      );
      this.owner_name = res.data.registers.owner_name || "";
      this.gender = res.data.registers.gender || "";
      this.phone = res.data.registers.phone || "";
      this.province_id = res.data.registers.province_id || "";
      this.district_id = res.data.registers.district_id || "";
      this.village_id = res.data.registers.village_id || "";
      this.tr_id = res.data.registers.tr_id || "";
      this.platc_no = res.data.registers.platc_no || "";
      this.model_id = res.data.registers.model_id || "";
      this.type_id = res.data.registers.type_id || "";
      this.color_id = res.data.registers.color_id || "";
      this.use_id = res.data.registers.use_id || "";
      this.fuel = res.data.registers.fuel || "";
      this.price = res.data.registers.price || "";
      this.steering_wheel = res.data.registers.steering_wheel || "";
      this.cylinder = res.data.registers.cylinder || "";
      this.cylinder_size_cc = res.data.registers.cylinder_size_cc || "";
      this.engine_no = res.data.registers.engine_no || "";
      this.chassis_no = res.data.registers.chassis_no || "";
      this.width = res.data.registers.width || "";
      this.length = res.data.registers.length || "";
      this.height = res.data.registers.height || "";
      this.passenger_scats = res.data.registers.passenger_scats || "";
      this.vehicle_weight = res.data.registers.vehicle_weight || "";
      this.max_loading = res.data.registers.max_loading || "";
      this.total_weight = res.data.registers.total_weight || "";
      this.getVillage();
      this.getColor();
      this.getOwner();
      this.getDistrict();
      this.getProvince();
      this.getAllData();
      this.getTypeRegister();
      this.getModel();
      this.getType();
      this.getUse();
      this.getPrice();

      this.register_update = this.$store.getters.getUser.register_update;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("./login");
    }
  },
  methods: {
    async update() {
      const isValid = await this.$refs.observer.validate();

      this.owner_name != false &&
        this.gender != false &&
        this.phone != false &&
        this.tr_id != false &&
        this.province_id != false &&
        this.use_id != false &&
        this.district_id != false &&
        this.village_id != false &&
        this.model_id != false &&
        this.type_id != false &&
        this.color_id != false &&
        this.price != false &&
        this.platc_no != false &&
        this.steering_wheel != false &&
        this.fuel != false &&
        this.cylinder != false &&
        this.cylinder_size_cc != false &&
        this.engine_no != false &&
        this.chassis_no != false &&
        // this.width != false &&
        // this.length != false &&
        // this.height != false &&
        // this.passenger_scats != false &&
        // this.vehicle_weight != false &&
        // this.max_loading != false &&
        // this.total_weight != false &&
        (await this.axios.put("/api/register/update", {
          register_id: this.$route.query.register_id,
          owner_name: this.owner_name,
          gender: this.gender,
          phone: this.phone,
          tr_id: this.tr_id,
          province_id: this.province_id,
          use_id: this.use_id,
          district_id: this.district_id,
          village_id: this.village_id,
          model_id: this.model_id,
          type_id: this.type_id,
          color_id: this.color_id,
          price: this.price,
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
          total_weight: this.total_weight,
        }));
      if (!isValid) {
        // alert("Please Save");
      } else {
        this.$router.replace("./Register");
      }
    },
    // async update() {
    //     const isValid = await this.$refs.observer.validate(
    //         this.province_id != false && this.name != false &&
    //         await this.axios.put("/api/register/update", {
    //             district_id: this.$route.query.district_id,
    //             province_id: this.province_id,
    //             name: this.name,
    //             status: this.status
    //         }),
    //     );
    //     if (!isValid) {
    //         // alert("Please Save");

    //     } else {
    //         this.$router.replace("./District");
    //     }
    // },

    //  async update() {
    //         let res = await this.axios.put("/api/register/update", {
    //             register_id: this.$route.query.register_id,
    //             owner_name: this.owner_name,
    //             gender: this.gender,
    //             fuel: this.fuel,
    //             phone: this.phone,
    //             province_id: this.province_id,
    //             district_id: this.district_id,
    //             village_id: this.village_id,
    //             tr_id: this.tr_id,
    //             model_id: this.model_id,
    //             type_id: this.type_id,
    //             color_id: this.color_id,
    //             use_id: this.use_id,
    //             platc_no: this.platc_no,
    //             price: this.price,
    //             steering_wheel: this.steering_wheel,
    //             cylinder: this.cylinder,
    //             cylinder_size_cc: this.cylinder_size_cc,
    //             engine_no: this.engine_no,
    //             chassis_no: this.chassis_no,
    //             width: this.width,
    //             length: this.length,
    //             height: this.height,
    //             passenger_scats: this.passenger_scats,
    //             vehicle_weight: this.vehicle_weight,
    //             max_loading: this.max_loading,
    //             total_weight: this.total_weight
    //         });

    //         if (res) {
    //             this.$router.replace("./Register");
    //         }
    //     },
    // async reset() {
    //     (this.full_name = ""),
    //     (this.owner_name = ""),
    //     (this.gender = ""),
    //     (this.phone = ""),
    //     (this.province_id = ""),
    //     (this.district_id = ""),
    //     (this.village_id = ""),
    //     (this.tr_id = ""),
    //     (this.model_id = ""),
    //     (this.type_id = ""),
    //     (this.color_id = ""),
    //     (this.use_id = ""),
    //     (this.price = ""),
    //     (this.platc_no = ""),
    //     (this.steering_wheel = ""),
    //     (this.fuel = ""),
    //     (this.cylinder = ""),
    //     (this.cylinder_size_cc = ""),
    //     (this.engine_no = ""),
    //     (this.chassis_no = ""),
    //     (this.width = ""),
    //     (this.length = ""),
    //     (this.height = ""),
    //     (this.passenger_scats = ""),
    //     (this.vehicle_weight = ""),
    //     (this.max_loading = ""),
    //     (this.total_weight = "");
    // },

    //ບ້ານ
    getVillage() {
      this.axios.get("/api/village").then((response1) => {
        this.villages = response1.data.villages;
      });
    },

    getTypeRegister() {
      this.axios.get("/api/type_register").then((response) => {
        this.trs = response.data.trs;
      });
    },
    getColor() {
      this.axios.get("/api/color").then((response) => {
        this.colors = response.data.colors;
      });
    },
    getUse() {
      this.axios.get("/api/use").then((response) => {
        this.uses = response.data.uses;
      });
    },
    getOwner() {
      this.axios.get("/api/owner").then((response) => {
        this.owners = response.data.owners;
      });
    },
    //ແຂວງ

    async getAllData() {
      this.axios.get("/api/province").then((response) => {
        this.provinces = response.data.provinces;
      });
    },
    //ເມືອງ
    async getProvince() {
      let res = await this.axios.get("/api/district/getAll", {
        params: {
          province_id: this.province_id,
        },
      });
      this.getalldata = res.data.getalldata;
    },
    //ບ້ານ
    async getDistrict() {
      let res = await this.axios.get("/api/district/all", {
        params: {
          district_id: this.district_id,
        },
      });
      this.getall = res.data.getall;
    },

    getModel() {
      this.axios.get("/api/model").then((response) => {
        this.models = response.data.models;
      });
    },
    async getType() {
      let res = await this.axios.get("/api/type/type", {
        params: {
          model_id: this.model_id,
        },
      });
      this.types = res.data.types;
    },
    // async getPrice() {
    //     let res = await this.axios.get("/api/register/price", {
    //         params: {
    //             type_id: this.type_id
    //         }
    //     });
    //     this.prices = res.data.prices;
    // }
  },
};
</script>
