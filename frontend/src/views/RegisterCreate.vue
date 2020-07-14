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
                <strong>{{$t("Navbar.Register")}}</strong>
                <v-icon small class="ma-2">mdi-chevron-right</v-icon>
                <span>{{$t("Register.Create_Title")}}</span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="pt-6">
            <v-card flat color="white">
              <v-card-title>
                {{$t('Register.Create_Title')}}
                <v-spacer />
                <v-tooltip bottom color="#3d5afe">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      depressed
                      :to="`/${$i18n.locale}/Register`"
                      small
                      fab
                      color="#3d5afe"
                      dark
                      v-on="on"
                    >
                      <v-icon small>mdi-undo-variant</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ $t("Fee.Back") }}</span>
                </v-tooltip>
              </v-card-title>
              <v-card-text>
                <ValidationObserver ref="observer">
                  <v-row>
                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <ValidationProvider
                            rules="required"
                            v-slot="{ errors }"
                            :v-model="tr_id"
                            :bails="false"
                          >
                            <v-autocomplete
                              color="#00C853"
                              :label="$t('TR.Name')"
                              required
                              hide-details="auto"
                              :items="trs"
                              v-model="tr_id"
                              item-text="name"
                              item-value="tr_id"
                              small
                              dense
                            ></v-autocomplete>
                            <v-col style="color:red" class="overline text-left">
                              <li v-for="(error, tr_id) in errors" :key="tr_id">
                                <span class="li">{{$t("Register.validated")}}</span>
                              </li>
                            </v-col>
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
                            :v-model="platc_no"
                            :bails="false"
                          >
                            <v-text-field
                              required
                              solo
                              flat
                              background-color="amber"
                              color="white"
                              :label="$t('Register.Platcno')"
                              small
                              dense
                              v-model="platc_no"
                              :rules="rules"
                              counter
                              maxlength="4"
                              type
                            ></v-text-field>

                            <ul style="color:red" class="overline text-left">
                              <li v-for="(error, platc_no) in errors" :key="platc_no">
                                <span class="li">{{$t("Register.validate")}}</span>
                              </li>
                            </ul>
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
                            :v-model="model_id"
                            :bails="false"
                          >
                            <v-autocomplete
                              color="#00C853"
                              :label="$t('Model.Name')"
                              :items="models"
                              v-model="model_id"
                              item-text="name"
                              item-value="model_id"
                              required
                              small
                              dense
                            ></v-autocomplete>

                            <ul style="color:red" class="overline text-left">
                              <li v-for="(error, model_id) in errors" :key="model_id">
                                <span class="li">{{$t("Register.validated")}}</span>
                              </li>
                            </ul>
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
                            :v-model="type_id"
                            :bails="false"
                          >
                            <v-autocomplete
                              color="#00C853"
                              :label="$t('Type.Name')"
                              :items="types"
                              v-model="type_id"
                              item-text="name"
                              item-value="type_id"
                              required
                              small
                              dense
                            ></v-autocomplete>

                            <ul style="color:red" class="overline text-left">
                              <li v-for="(error, type_id) in errors" :key="type_id">
                                <span class="li">{{$t("Register.validated")}}</span>
                              </li>
                            </ul>
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
                            :v-model="color_id"
                            :bails="false"
                          >
                            <v-autocomplete
                              color="#00C853"
                              :label="$t('Color.Name')"
                              :items="colors"
                              v-model="color_id"
                              item-text="name"
                              item-value="color_id"
                              required
                              small
                              dense
                            ></v-autocomplete>

                            <ul style="color:red" class="overline text-left">
                              <li v-for="(error, color_id) in errors" :key="color_id">
                                <span class="li">{{$t("Register.validated")}}</span>
                              </li>
                            </ul>
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
                            :v-model="steering_wheel"
                            :bails="false"
                          >
                            <v-autocomplete
                              color="#00C853"
                              :label="$t('Register.steering_wheel')"
                              :items="steeringwheel"
                              v-model="steering_wheel"
                              item-text="name"
                              required
                              small
                              dense
                            ></v-autocomplete>

                            <ul style="color:red" class="overline text-left">
                              <li v-for="(error, steering_wheel) in errors" :key="steering_wheel">
                                <span class="li">{{$t("Register.validate")}}</span>
                              </li>
                            </ul>
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
                            :v-model="fuel"
                            :bails="false"
                          >
                            <v-autocomplete
                              color="#00C853"
                              :label="$t('Register.fuel')"
                              :items="fuels"
                              v-model="fuel"
                              item-text="name"
                              required
                              small
                              dense
                            ></v-autocomplete>

                            <ul style="color:red" class="overline text-left">
                              <li v-for="(error, fuel) in errors" :key="fuel">
                                <span class="li">{{$t("Register.validated")}}</span>
                              </li>
                            </ul>
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
                            :v-model="cylinder_size_cc"
                            :bails="false"
                          >
                            <v-btn-toggle>
                              <v-text-field
                                color="#00C853"
                                :label="$t('Register.cylinder_size_cc')"
                                v-model="cylinder_size_cc"
                                type="number"
                                autocomplete="off"
                                required
                                small
                                dense
                              />
                              <v-avatar tile color="white">{{ $t("Register.cc") }}</v-avatar>
                            </v-btn-toggle>
                            <ul style="color:red" class="overline text-left">
                              <li
                                v-for="(error, cylinder_size_cc) in errors"
                                :key="cylinder_size_cc"
                              >
                                <span class="li">{{$t("Register.validate")}}</span>
                              </li>
                            </ul>
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
                            :v-model="cylinder"
                            :bails="false"
                          >
                            <v-text-field
                              color="#00C853"
                              :label="$t('Register.cylinder')"
                              v-model="cylinder"
                              item-text="cylinder"
                              item-value="register_id"
                              required
                              small
                              dense
                            ></v-text-field>

                            <ul style="color:red" class="overline text-left">
                              <li v-for="(error, cylinder) in errors" :key="cylinder">
                                <span class="li">{{$t("Register.validate")}}</span>
                              </li>
                            </ul>
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
                              color="#00C853"
                              :label="$t('Register.p')"
                              :items="prices"
                              item-text="price"
                              dense
                              v-model="price"
                            ></v-autocomplete>

                            <ul style="color:red" class="overline text-left">
                              <li v-for="(error, price) in errors" :key="price">
                                <span class="li">{{$t("Register.validate")}}</span>
                              </li>
                            </ul>
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
                              color="#00C853"
                              :label="$t('Register.engine_no')"
                              v-model="engine_no"
                              type="text"
                              autocomplete="off"
                              small
                              dense
                            />

                            <ul style="color:red" class="overline text-left">
                              <li v-for="(error, engine_no) in errors" :key="engine_no">
                                <span class="li">{{$t("Register.validate")}}</span>
                              </li>
                            </ul>
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
                              color="#00C853"
                              :label="$t('Register.chassis_no')"
                              v-model="chassis_no"
                              type="text"
                              autocomplete="off"
                              small
                              dense
                            />

                            <ul style="color:red" class="overline text-left">
                              <li v-for="(error, chassis_no) in errors" :key="chassis_no">
                                <span class="li">{{$t("Register.validate")}}</span>
                              </li>
                            </ul>
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <v-btn-toggle>
                            <v-text-field
                              color="#00C853"
                              :label="$t('Register.width')"
                              v-model="width"
                              type="number"
                              autocomplete="off"
                              small
                              dense
                            />
                            <v-avatar tile color="white">{{ $t("Register.mm") }}</v-avatar>
                          </v-btn-toggle>
                        </v-col>
                      </v-row>
                    </v-col>

                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <v-btn-toggle>
                            <v-text-field
                              color="#00C853"
                              :label="$t('Register.length')"
                              v-model="length"
                              type="number"
                              autocomplete="off"
                              small
                              dense
                            />
                            <v-avatar tile color="white">{{ $t("Register.mm") }}</v-avatar>
                          </v-btn-toggle>
                        </v-col>
                      </v-row>
                    </v-col>

                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <v-btn-toggle>
                            <v-text-field
                              color="#00C853"
                              v-model="height"
                              type="number"
                              autocomplete="off"
                              :label="$t('Register.height')"
                              small
                              dense
                            />
                            <v-avatar tile color="white">{{ $t("Register.mm") }}</v-avatar>
                          </v-btn-toggle>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <v-btn-toggle>
                            <v-text-field
                              color="#00C853"
                              :label="$t('Register.passenger_scats')"
                              v-model="passenger_scats"
                              type="number"
                              autocomplete="off"
                              small
                              dense
                            />
                            <v-avatar tile color="white">{{ $t("Register.scats") }}</v-avatar>
                          </v-btn-toggle>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <v-btn-toggle>
                            <v-text-field
                              color="#00C853"
                              :label="$t('Register.vehicle_weight')"
                              v-model="vehicle_weight"
                              type="number"
                              autocomplete="off"
                              small
                              dense
                            />
                            <v-avatar tile color="white">{{ $t("Register.kg") }}</v-avatar>
                          </v-btn-toggle>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <v-btn-toggle>
                            <v-text-field
                              color="#00C853"
                              :label="$t('Register.max_loading')"
                              v-model="max_loading"
                              type="number"
                              autocomplete="off"
                              small
                              dense
                            />
                            <v-avatar tile color="white">{{ $t("Register.kg") }}</v-avatar>
                          </v-btn-toggle>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" xl="2" lg="3" md="4" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <v-btn-toggle>
                            <v-text-field
                              color="#00C853"
                              :label="$t('Register.total_weight')"
                              v-model="total_weight"
                              type="number"
                              autocomplete="off"
                              small
                              dense
                            />
                            <v-avatar tile color="white">{{ $t("Register.kg") }}</v-avatar>
                          </v-btn-toggle>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <v-row align="start" justify="left">
                    <v-toolbar-title style class="ml-0 pl-2">
                      <h5>{{$t('Register.Create_Title1')}}</h5>
                    </v-toolbar-title>
                    <v-spacer />
                  </v-row>
                  <v-row align="start" justify="left">
                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <ValidationProvider
                            rules="required"
                            v-slot="{ errors }"
                            :v-model="gender"
                            :bails="false"
                          >
                            <v-autocomplete
                              color="#00C853"
                              :label="$t('Register.Gender')"
                              :items="genders"
                              item-text="PName"
                              dense
                              v-model="gender"
                            ></v-autocomplete>

                            <ul style="color:red" class="overline text-left">
                              <li v-for="(error, genders) in errors" :key="genders">
                                <span class="li">{{$t("Register.validated")}}</span>
                              </li>
                            </ul>
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
                            :v-model="owner_name"
                            :bails="false"
                          >
                            <v-text-field
                              color="#00C853"
                              :label="$t('Register.OwnerName')"
                              small
                              dense
                              v-model="owner_name"
                              type="text"
                            ></v-text-field>

                            <ul style="color:red" class="overline text-left">
                              <li v-for="(error, owner_name) in errors" :key="owner_name">
                                <span class="li">{{$t("Register.validate")}}</span>
                              </li>
                            </ul>
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
                            :v-model="province_id"
                            :bails="false"
                          >
                            <v-autocomplete
                              color="#00C853"
                              :label="$t('Province.Name')"
                              :items="provinces"
                              v-model="province_id"
                              item-text="name"
                              item-value="province_id"
                              required
                              small
                              dense
                            ></v-autocomplete>

                            <ul style="color:red" class="overline text-left">
                              <li v-for="(error, province_id) in errors" :key="province_id">
                                <span class="li">{{$t("Register.validated")}}</span>
                              </li>
                            </ul>
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
                            :v-model="district_id"
                            :bails="false"
                          >
                            <v-autocomplete
                              color="#00C853"
                              :label="$t('District.Name')"
                              :items="getalldata"
                              v-model="district_id"
                              item-text="name"
                              item-value="district_id"
                              required
                              small
                              dense
                            ></v-autocomplete>

                            <ul style="color:red" class="overline text-left">
                              <li v-for="(error, district_id) in errors" :key="district_id">
                                <span class="li">{{$t("Register.validated")}}</span>
                              </li>
                            </ul>
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
                            :v-model="village_id"
                            :bails="false"
                          >
                            <v-autocomplete
                              color="#00C853"
                              :label="$t('Village.Name')"
                              :items="getall"
                              v-model="village_id"
                              item-text="name"
                              item-value="village_id"
                              required
                              small
                              dense
                            ></v-autocomplete>

                            <ul style="color:red" class="overline text-left">
                              <li v-for="(error, village_id) in errors" :key="village_id">
                                <span class="li">{{$t("Register.validated")}}</span>
                              </li>
                            </ul>
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
                            :v-model="phone"
                            :bails="false"
                          >
                            <v-text-field
                              color="#00C853"
                              :label="$t('Register.Phone')"
                              :items="phones"
                              v-model="phone"
                              v-maska="['+856 (#0) #### ####', '+856 (#0) #### ####']"
                              item-value="inspection_id"
                              small
                              required
                              dense
                              type="text"
                            ></v-text-field>

                            <ul style="color:red" class="overline text-left">
                              <li v-for="(error, phone) in errors" :key="phone">
                                <span class="li">{{$t("Register.validate")}}</span>
                              </li>
                            </ul>
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
                            :v-model="use_id"
                            :bails="false"
                          >
                            <v-autocomplete
                              color="#00C853"
                              :label="$t('Register.use')"
                              :items="uses"
                              v-model="use_id"
                              item-text="name"
                              item-value="use_id"
                              required
                              small
                              dense
                            ></v-autocomplete>

                            <ul style="color:red" class="overline text-left">
                              <li v-for="(error, use_id) in errors" :key="use_id">
                                <span class="li">{{$t("Register.validated")}}</span>
                              </li>
                            </ul>
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                    </v-col>
                    <!-- ======================================================= -->
                    <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                      <v-card-actions>
                        <v-spacer />
                        <v-tooltip top color="#00E676">
                          <v-spacer />
                          <template v-slot:activator="{ on }">
                            <v-btn
                              depressed
                              bottom
                              right
                              v-on="on"
                              color="#00E676"
                              @click="save"
                              class="white--text mr-4"
                            >
                              <v-icon>save</v-icon>
                            </v-btn>
                          </template>
                          <span>{{$t("Type.Save")}}</span>
                        </v-tooltip>

                        <v-tooltip top color="red">
                          <v-spacer />
                          <template v-slot:activator="{ on }">
                            <v-btn
                              depressed
                              color="red"
                              v-on="on"
                              @click="reset"
                              class="white--text"
                            >
                              <v-icon>cancel</v-icon>
                            </v-btn>
                          </template>
                          <span>{{$t("Type.Cancel")}}</span>
                        </v-tooltip>
                      </v-card-actions>
                      <br />
                    </v-col>
                  </v-row>
                </ValidationObserver>
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

import { ValidationProvider } from "vee-validate/dist/vee-validate.full";
import { ValidationObserver } from "vee-validate/dist/vee-validate.full";

Vue.use(VueAxios, axios);
export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    villages: [],
    districts: [],
    provinces: [],
    uses: [],
    genders: ["ຊາຍ", "ຍິງ"],
    steeringwheel: ["ຂວາ", "ຊ້າຍ", "None"],
    fuels: ["ແອັດຊັງ", "ກາຊວນ", "ກາຣ", "ໄຟຟ້າ"],
    snackbar: false,
    snackbarText: "",
    owner_name: "",
    gender: "",
    phones: "",
    phone: "",
    tr_id: "",
    village_id: "",

    model_id: [],
    type_id: [],
    color_id: "",
    platc_no: "",
    ruless: [value => value.length <= 1 || ""],
    rules: [
      value => value.length <= 4 || "ທ່ານໃສ່ເກີນ 4 ຕົວເລກ",
      value =>
        (value && value.length >= 4) || "ຕ້ອງເປັນຕົວເລກ ແລະ 4 ຕົວເທົ່ານັ້ນ",

      value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "4 ໝາຍເລກພໍດີ.";
      }
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
    trs: [],
    owners: [],
    province_id: [],
    use_id: [],
    district_id: [],
    price: [],
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
      "30"
    ],
    getall: [],
    getalldata: []
  }),

  watch: {
    variant(val) {
      if (val.includes("filter")) {
        this.value = true;
      }
    },
    use_id() {
      this.getuse();
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
    }
  },
  created() {
    this.getVillage();
    this.getColor();
    this.getOwner();
    this.getDistrict();
    this.getProvince();
    this.getuse();
    this.getAllData();
    this.getTypeRegister();
    this.getModel();
    this.getType();
    this.getPrice();
  },
  methods: {
    async save() {
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

        this.axios.post("/api/register/create", {
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
          total_weight: this.total_weight
        });
      if (!isValid) {
        // alert("Please Save");
      } else {
        this.$router.replace("./Register");
      }
    },

    async reset() {
      (this.full_name = ""),
        (this.owner_name = ""),
        (this.gender = ""),
        (this.phone = ""),
        (this.use_id = ""),
        (this.province_id = ""),
        (this.district_id = ""),
        (this.village_id = ""),
        (this.tr_id = ""),
        (this.model_id = ""),
        (this.type_id = ""),
        (this.color_id = ""),
        (this.price = ""),
        (this.platc_no = ""),
        (this.steering_wheel = ""),
        (this.fuel = ""),
        (this.cylinder = ""),
        (this.cylinder_size_cc = ""),
        (this.engine_no = ""),
        (this.chassis_no = ""),
        (this.width = ""),
        (this.length = ""),
        (this.height = ""),
        (this.passenger_scats = ""),
        (this.vehicle_weight = ""),
        (this.max_loading = ""),
        (this.total_weight = "");
    },
    getVillage() {
      this.axios.get("/api/village").then(response => {
        this.villages = response.data.villages;
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
    async getuse() {
      this.axios.get("/api/use").then(response => {
        this.uses = response.data.uses;
      });
    },
    //ເລືອກແຂວງ ເຈ້າຂອງລົດ
    async getAllData() {
      this.axios.get("/api/province").then(response => {
        this.provinces = response.data.provinces;
      });
    },
    //ເລືອກແຂວງໄດ້ເມືອງ ເຈ້າຂອງລົດ
    async getProvince() {
      let res = await this.axios.get("/api/district/getAll", {
        params: {
          province_id: this.province_id
        }
      });
      this.getalldata = res.data.getalldata;
    },
    //ເລືອກເມືອງໄດ້ບ້ານ ເຈ້າຂອງລົດ

    async getDistrict() {
      let res = await this.axios.get("/api/district/all", {
        params: {
          district_id: this.district_id
        }
      });
      this.getall = res.data.getall;
    },

    //ເລືອກຍີ່ຫໍ້ໄດ້ປະເພດ
    getModel() {
      this.axios.get("/api/model").then(response => {
        this.models = response.data.models;
      });
    },

    async getType() {
      let res = await this.axios.get("/api/type/type", {
        params: {
          model_id: this.model_id
        }
      });
      this.types = res.data.types;
    }
    // async getPrice() {
    //     let res = await this.axios.get("/api/register/price", {
    //         params: {
    //             type_id: this.type_id
    //         }
    //     });
    //     this.prices = res.data.prices;
    // }
  }
};
</script>
