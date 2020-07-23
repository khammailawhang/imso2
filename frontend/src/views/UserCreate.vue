<template>
  <div class="usercreate">
    <v-content>
      <v-container>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" align="left">
            <v-card dense flat color="white">
              <v-card-text>
                <strong>{{$t("Navbar.Dashboard")}}</strong>
                <v-icon small>mdi-chevron-right</v-icon>
                <strong>{{$t("Navbar.UserSetting")}}</strong>
                <v-icon small>mdi-chevron-right</v-icon>
                <span>{{$t("User.Create_Title")}}</span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="pt-6">
            <v-card flat color="white">
              <v-card-title>
                {{ $t("User.Create_Title") }}
                <v-spacer />
                <v-tooltip bottom color="#3d5afe">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      depressed
                      @click="back(branch_id)"
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
                <v-row>
                  <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                    <v-text-field v-model="name" type="text" autocomplete="off">
                      <template slot="label">
                        <span>{{ $t("User.user") }}</span>
                        <span class="red--text pl-2">*</span>
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                    <v-select :items="genders" v-model="gender" item-text="name" required>
                      <template slot="label">
                        <span>{{ $t('Register.Gender') }}</span>
                        <span class="red--text pl-2">*</span>
                      </template>
                    </v-select>
                  </v-col>
                  <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                    <v-text-field v-maska="['+856 (#0) #### ####', '+856 (#0) #### ####']" v-model="phone" type="text" autocomplete="off">
                      <template slot="label">
                        <span>{{ $t("User.phone") }}</span>
                        <span class="red--text pl-2">*</span>
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                    <v-text-field v-model="email" type="text" :rules="rules" autocomplete="off">
                      <template slot="label">
                        <span>{{ $t("User.email") }}</span>
                        <span class="red--text pl-2">*</span>
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                    <v-select
                      :items="branchs"
                      v-model="branch_id"
                      item-text="name"
                      item-value="branch_id"
                      required
                    >
                      <template slot="label">
                        <span>{{ $t("User.branch") }}</span>
                        <span class="red--text pl-2">*</span>
                      </template>
                    </v-select>
                  </v-col>
                  <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                    <v-text-field v-model="username" type="text" autocomplete="off">
                      <template slot="label">
                        <span>{{ $t("User.username") }}</span>
                        <span class="red--text pl-2">*</span>
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                    <v-text-field
                      v-model="password"
                      type="password"
                      :rules="ruless"
                      autocomplete="off"
                    >
                      <template slot="label">
                        <span>{{ $t("User.passw") }}</span>
                        <span class="red--text pl-2">*</span>
                      </template>
                    </v-text-field>
                    <password-meter :password="password" />
                  </v-col>
                  <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                    <v-text-field
                      v-model="password_repeat"
                      type="password"
                      :rules="ruless"
                      autocomplete="off"
                    >
                      <template slot="label">
                        <span>{{ $t("User.passw1") }}</span>
                        <span class="red--text pl-2">*</span>
                      </template>
                    </v-text-field>
                    <password-meter :password="password_repeat" />
                  </v-col>
                  <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                    <v-select
                      :items="levels"
                      v-model="level_id"
                      item-text="name"
                      item-value="level_id"
                      required
                    >
                      <template slot="label">
                        <span>{{ $t("User.level") }}</span>
                        <span class="red--text pl-2">*</span>
                      </template>
                    </v-select>
                  </v-col>

                  <v-card-text align="left">
                    <v-toolbar-title class="ml-0 pr-6">
                      <h5 class="#3d5afe--text">{{ $t("User.Permission") }}</h5>
                    </v-toolbar-title>
                  </v-card-text>

                  <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                    <v-simple-table dense class="black--text table table-borderless">
                      <template v-slot:default>
                        <tbody>
                          <tr>
                            <td>1. {{$t('Navbar.Dashboard')}}</td>
                            <td colspan="10">
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox value="1" v-model="home" color="#3d5afe" v-on="on"></v-checkbox>
                                </template>
                                <span>{{$t('User.Title')}}</span>
                              </v-tooltip>
                            </td>
                          </tr>
                          <tr>
                            <td>2. {{$t('Navbar.Register')}}</td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="register"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Title')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="register_create"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Create')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="register_update"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Update')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="register_delete"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Delete')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="register_detail"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Detail')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="register_report"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Report')}}</span>
                              </v-tooltip>
                            </td>
                            <td colspan="4">
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="register_export"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Export')}}</span>
                              </v-tooltip>
                            </td>
                          </tr>
                          <tr>
                            <td>3. {{$t('Navbar.Inspection')}}</td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="inspection"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Title')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="inspection_create"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Create')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="inspection_update"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Update')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="inspection_delete"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Delete')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="inspection_detail"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Detail')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="inspection_print_grid"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Print1')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="inspection_print_table"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Print2')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="inspection_upload"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Upload')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="inspection_report"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Report')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="inspection_export"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Export')}}</span>
                              </v-tooltip>
                            </td>
                          </tr>
                          <tr>
                            <td>4. {{$t('Navbar.Fee')}}</td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox value="1" v-model="fee" color="#3d5afe" v-on="on"></v-checkbox>
                                </template>
                                <span>{{$t('User.Title')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="fee_create"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Create')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="fee_update"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Update')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="fee_delete"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Delete')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="fee_print"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Print')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="fee_detail"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Detail')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="fee_report"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Report')}}</span>
                              </v-tooltip>
                            </td>
                            <td colspan="3">
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="fee_export"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Export')}}</span>
                              </v-tooltip>
                            </td>
                          </tr>
                          <tr>
                            <td>5. {{$t('Navbar.Report')}}</td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox value="1" v-model="report" color="#3d5afe" v-on="on"></v-checkbox>
                                </template>
                                <span>{{$t('User.Title')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="report_inspection"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Inspection')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="report_fee"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Fee')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="report_report"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Report')}}</span>
                              </v-tooltip>
                            </td>
                            <td colspan="7">
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="report_export"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Export')}}</span>
                              </v-tooltip>
                            </td>
                          </tr>
                          <tr>
                            <td>6. {{$t('Navbar.Setting')}}</td>
                            <td colspan="10">
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox value="1" v-model="setting" color="#3d5afe" v-on="on"></v-checkbox>
                                </template>
                                <span>{{$t('User.Title')}}</span>
                              </v-tooltip>
                            </td>
                          </tr>
                          <tr>
                            <td>7. {{$t('Navbar.Model')}}</td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox value="1" v-model="model" color="#3d5afe" v-on="on"></v-checkbox>
                                </template>
                                <span>{{$t('User.Title')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="model_create"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Create')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="model_update"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Update')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="model_delete"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Delete')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="model_report"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Report')}}</span>
                              </v-tooltip>
                            </td>
                            <td colspan="5">
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="model_export"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Export')}}</span>
                              </v-tooltip>
                            </td>
                          </tr>
                          <tr>
                            <td>8. {{$t('Navbar.Type')}}</td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox value="1" v-model="type" color="#3d5afe" v-on="on"></v-checkbox>
                                </template>
                                <span>{{$t('User.Title')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="type_create"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Create')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="type_update"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Update')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="type_delete"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Delete')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="type_report"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Report')}}</span>
                              </v-tooltip>
                            </td>
                            <td colspan="5">
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="type_export"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Export')}}</span>
                              </v-tooltip>
                            </td>
                          </tr>
                          <tr>
                            <td>9. {{$t('Navbar.Color')}}</td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox value="1" v-model="color" color="#3d5afe" v-on="on"></v-checkbox>
                                </template>
                                <span>{{$t('User.Title')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="color_create"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Create')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="color_update"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Update')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="color_delete"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Delete')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="color_report"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Report')}}</span>
                              </v-tooltip>
                            </td>
                            <td colspan="5">
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="color_export"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Export')}}</span>
                              </v-tooltip>
                            </td>
                          </tr>
                          <tr>
                            <td>10. {{$t('Navbar.Village')}}</td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox value="1" v-model="village" color="#3d5afe" v-on="on"></v-checkbox>
                                </template>
                                <span>{{$t('User.Title')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="village_create"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Create')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="village_update"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Update')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="village_delete"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Delete')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="village_report"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Report')}}</span>
                              </v-tooltip>
                            </td>
                            <td colspan="5">
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="village_export"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Export')}}</span>
                              </v-tooltip>
                            </td>
                          </tr>
                          <tr>
                            <td>11. {{$t('Navbar.District')}}</td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="district"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Title')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="district_create"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Create')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="district_update"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Update')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="district_delete"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Delete')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="district_report"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Report')}}</span>
                              </v-tooltip>
                            </td>
                            <td colspan="5">
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="district_export"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Export')}}</span>
                              </v-tooltip>
                            </td>
                          </tr>
                          <tr>
                            <td>12. {{$t('Navbar.Province')}}</td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="province"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Title')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="province_create"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Create')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="province_update"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Update')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="province_delete"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Delete')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="province_report"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Report')}}</span>
                              </v-tooltip>
                            </td>
                            <td colspan="5">
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="province_export"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Export')}}</span>
                              </v-tooltip>
                            </td>
                          </tr>
                          <tr>
                            <td>13. {{$t('Navbar.Type_Register')}}</td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="type_register"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Title')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="type_register_create"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Create')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="type_register_update"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Update')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="type_register_delete"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Delete')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="type_register_report"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Report')}}</span>
                              </v-tooltip>
                            </td>
                            <td colspan="5">
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="type_register_export"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Export')}}</span>
                              </v-tooltip>
                            </td>
                          </tr>
                          <tr>
                            <td>14. {{$t('Navbar.Branch')}}</td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox value="1" v-model="branch" color="#3d5afe" v-on="on"></v-checkbox>
                                </template>
                                <span>{{$t('User.Title')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="branch_create"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Create')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="branch_update"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Update')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="branch_delete"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Delete')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="branch_report"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Report')}}</span>
                              </v-tooltip>
                            </td>
                            <td colspan="5">
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="branch_export"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Export')}}</span>
                              </v-tooltip>
                            </td>
                          </tr>
                          <tr>
                            <td>15. {{$t('Navbar.UserSetting')}}</td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="user_authorization"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Title')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="user_authorization_create"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Create')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="user_authorization_update"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Update')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="user_authorization_delete"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Delete')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="user_authorization_detail"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Detail')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="user_authorization_upload"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Upload')}}</span>
                              </v-tooltip>
                            </td>
                            <td>
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="user_authorization_report"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Report')}}</span>
                              </v-tooltip>
                            </td>
                            <td colspan="2">
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="user_authorization_export"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Export')}}</span>
                              </v-tooltip>
                            </td>
                          </tr>
                          <tr>
                            <td>16. {{$t('Navbar.AdminManagement')}}</td>
                            <td colspan="2">
                              <v-tooltip left color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                  <v-checkbox
                                    value="1"
                                    v-model="admin"
                                    color="#3d5afe"
                                    v-on="on"
                                  ></v-checkbox>
                                </template>
                                <span>{{$t('User.Admin')}}</span>
                              </v-tooltip>
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-col>
                  <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="pl-6">
                    <v-checkbox v-model="status" color="#00E676" :label="$t('User.Status')"></v-checkbox>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions class="pr-6 pb-6">
                <v-spacer />
                <v-btn
                  bottom
                  right
                  color="#00E676"
                  large
                  depressed
                  @click="save"
                  class="white--text"
                  v-if="user_authorization_create ==='1'"
                >
                  <v-icon class="mr-2">save</v-icon>
                  {{$t("User.Save")}}
                </v-btn>
                <v-btn
                  @click="back(branch_id)"
                  color="#B0BEC5"
                  large
                  depressed
                  class="white--text"
                >{{$t("User.Back")}}</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
           <v-col cols="12">
              <v-alert
                  v-if="msg === true"
                  text
                  prominent
                  color="#00E676"
                ><v-icon color="#00E676">mdi-check</v-icon> {{ $t("User.CreateSuccess") }}</v-alert>
                <v-alert
                  v-if="msg === err"
                  text
                  prominent
                  color="red"
                >{{ $t("User.CreateNotSuccess") }}</v-alert>
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
Vue.use(VueAxios, axios);
import AuthService from "@/services/AuthService.js";
import passwordMeter from "vue-simple-password-meter";
export default {
  components: { passwordMeter },
  data: () => ({
    genders: ["ຊາຍ", "ຍິງ"],
    gender: "",
    rules: [
      value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "e-mail.";
      }
    ],
    ruless: [
      value => value.length <= 5 || "ສ້າງເປັນລະຫັດໄດ້ແລ້ວ",
      value => (value && value.length >= 6) || "6 ຕົວອັດສອນຂື້ນໄປ"
    ],
    name: "",
    phone: "",
    email: "",
    username: "",
    password: "",
    password_repeat: "",
    level_id: "",
    branch_id: "",
    home: "",
    register: "",
    register_create: "",
    register_update: "",
    register_delete: "",
    register_detail: "",
    register_report: "",
    register_export: "",
    inspection: "",
    inspection_create: "",
    inspection_update: "",
    inspection_delete: "",
    inspection_print_grid: "",
    inspection_print_table: "",
    inspection_detail: "",
    inspection_upload: "",
    inspection_report: "",
    inspection_export: "",
    fee: "",
    fee_create: "",
    fee_update: "",
    fee_delete: "",
    fee_print: "",
    fee_detail: "",
    fee_report: "",
    fee_export: "",
    report: "",
    report_inspection: "",
    report_fee: "",
    report_report: "",
    report_export: "",
    setting: "",
    model: "",
    model_create: "",
    model_update: "",
    model_delete: "",
    model_report: "",
    model_export: "",
    type: "",
    type_create: "",
    type_update: "",
    type_delete: "",
    type_report: "",
    type_export: "",
    color: "",
    color_create: "",
    color_update: "",
    color_delete: "",
    color_report: "",
    color_export: "",
    village: "",
    village_create: "",
    village_update: "",
    village_delete: "",
    village_report: "",
    village_export: "",
    district: "",
    district_create: "",
    district_update: "",
    district_delete: "",
    district_report: "",
    district_export: "",
    province: "",
    province_create: "",
    province_update: "",
    province_delete: "",
    province_report: "",
    province_export: "",
    company_information: "",
    company_information_create: "",
    company_information_update: "",
    company_information_delete: "",
    company_information_upload: "",
    company_information_report: "",
    company_information_export: "",
    fee_setting: "",
    fee_setting_create: "",
    fee_setting_update: "",
    fee_setting_delete: "",
    fee_setting_report: "",
    fee_setting_export: "",
    type_register: "",
    type_register_create: "",
    type_register_update: "",
    type_register_delete: "",
    type_register_report: "",
    type_register_export: "",
    standard_setting: "",
    standard_setting_create: "",
    standard_setting_update: "",
    standard_setting_delete: "",
    standard_setting_report: "",
    standard_setting_export: "",
    branch: "",
    branch_create: "",
    branch_update: "",
    branch_delete: "",
    branch_report: "",
    branch_export: "",
    user_authorization: "",
    user_authorization_create: "",
    user_authorization_update: "",
    user_authorization_delete: "",
    user_authorization_detail: "",
    user_authorization_upload: "",
    user_authorization_report: "",
    user_authorization_export: "",
    admin: "",
    status: true,
    msg: "",
    levels: [],
    branchs: []
  }),
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("login");
    } else if (this.$store.getters.getUser.user_authorization_create === "1") {
      //   this.initialize();
      this.getBranch();
      this.getLevel();
      this.user_authorization_create = this.$store.getters.getUser.user_authorization_create;
      this.branch_id = this.$store.getters.getUser.branch_id;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("login");
    }
  },
  methods: {
    async save() {
      try {
        const credentials = {
          gender: this.gender,
          name: this.name,
          phone: this.phone,
          email: this.email,
          username: this.username,
          password: this.password,
          password_repeat: this.password_repeat,
          level_id: this.level_id,
          branch_id: this.branch_id,
          home: this.home,
          register: this.register,
          register_create: this.register_create,
          register_update: this.register_update,
          register_delete: this.register_delete,
          register_detail: this.register_detail,
          register_report: this.register_report,
          register_export: this.register_export,
          inspection: this.inspection,
          inspection_create: this.inspection_create,
          inspection_update: this.inspection_update,
          inspection_delete: this.inspection_delete,
          inspection_print_grid: this.inspection_print_grid,
          inspection_print_table: this.inspection_print_table,
          inspection_detail: this.inspection_detail,
          inspection_upload: this.inspection_upload,
          inspection_report: this.inspection_report,
          inspection_export: this.inspection_export,
          fee: this.fee,
          fee_create: this.fee_create,
          fee_update: this.fee_update,
          fee_delete: this.fee_delete,
          fee_print: this.fee_print,
          fee_detail: this.fee_detail,
          fee_report: this.fee_report,
          fee_export: this.fee_export,
          report: this.report,
          report_report: this.report_report,
          report_inspection: this.report_inspection,
          report_fee: this.report_fee,
          report_export: this.report_fee,
          setting: this.setting,
          model: this.model,
          model_create: this.model_create,
          model_update: this.model_update,
          model_delete: this.model_delete,
          model_report: this.model_report,
          model_export: this.model_export,
          type: this.type,
          type_create: this.type_create,
          type_update: this.type_update,
          type_delete: this.type_delete,
          type_report: this.type_report,
          type_export: this.type_export,
          color: this.color,
          color_create: this.color_create,
          color_update: this.color_update,
          color_delete: this.color_delete,
          color_report: this.color_report,
          color_export: this.color_export,
          village: this.village,
          village_create: this.village_create,
          village_update: this.village_update,
          village_delete: this.village_delete,
          village_report: this.village_report,
          village_export: this.village_export,
          district: this.district,
          district_create: this.district_create,
          district_update: this.district_update,
          district_delete: this.district_delete,
          district_report: this.district_report,
          district_export: this.district_export,
          province: this.province,
          province_create: this.province_create,
          province_update: this.province_update,
          province_delete: this.province_delete,
          province_report: this.province_report,
          province_export: this.province_export,
          company_information: this.company_information,
          company_information_create: this.company_information_create,
          company_information_update: this.company_information_update,
          company_information_delete: this.company_information_delete,
          company_information_upload: this.company_information_upload,
          company_information_report: this.company_information_report,
          company_information_export: this.company_information_export,
          fee_setting: this.fee_setting,
          fee_setting_create: this.fee_setting_create,
          fee_setting_update: this.fee_setting_update,
          fee_setting_delete: this.fee_setting_delete,
          fee_setting_report: this.fee_setting_report,
          fee_setting_export: this.fee_setting_export,
          type_register: this.type_register,
          type_register_create: this.type_register_create,
          type_register_update: this.type_register_update,
          type_register_delete: this.type_register_delete,
          type_register_report: this.type_register_report,
          type_register_export: this.type_register_export,
          standard_setting: this.standard_setting,
          standard_setting_create: this.standard_setting_create,
          standard_setting_update: this.standard_setting_update,
          standard_setting_delete: this.standard_setting_delete,
          standard_setting_report: this.standard_setting_report,
          standard_setting_export: this.standard_setting_export,
          branch: this.branch,
          branch_create: this.branch_create,
          branch_update: this.branch_update,
          branch_delete: this.branch_delete,
          branch_report: this.branch_report,
          branch_export: this.branch_export,
          user_authorization: this.user_authorization,
          user_authorization_create: this.user_authorization_create,
          user_authorization_update: this.user_authorization_update,
          user_authorization_delete: this.user_authorization_delete,
          user_authorization_detail: this.user_authorization_detail,
          user_authorization_upload: this.user_authorization_upload,
          user_authorization_report: this.user_authorization_report,
          user_authorization_export: this.user_authorization_export,
          admin: this.admin,
          status: this.status
        };
        const response = await AuthService.signUp(credentials);
        this.msg = response.msg;
        if (response) {
            this.msg = response.data.msg;
        //   this.$router.replace("./User");
        }
      } catch (error) {
        this.msg = error.response.data.msg;
      }
    },
    getBranch() {
      this.axios.get("/api/branch").then(response => {
        this.branchs = response.data.branchs;
      });
    },
    getLevel() {
      this.axios.get("/api/level").then(response => {
        this.levels = response.data.levels;
      });
    },
    back(branch_id) {
      this.$router.push("User?branch_id=" + branch_id);
    }
  }
};
</script>
