<template>
  <div class="edit">
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
                <span>{{$t("User.Edit_Title")}}</span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="pt-6">
            <v-card flat color="white">
              <v-card-title>
                {{ $t("User.Edit_Title") }}
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
                        <v-select :items="genders" v-model="gender" item-text="gender">
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
                        <v-text-field v-model="email" type="text" autocomplete="off">
                            <template slot="label">
                                <span>{{ $t("User.email") }}</span>
                        <span class="red--text pl-2">*</span>
                            </template>
                        </v-text-field>
                  </v-col>
                  <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                        <v-text-field
                          v-model="username"
                          type="text"
                          autocomplete="off">
                            <template slot="label">
                                <span>{{ $t("User.username") }}</span>
                        <span class="red--text pl-2">*</span>
                            </template>
                          </v-text-field>
                  </v-col>

                  <v-col cols="12" xl="2" lg="3" md="3" sm="4">
                        <v-select
                          :items="levels"
                          v-model="level_id"
                          item-text="name"
                          item-value="level_id"
                          required
                          small
                          dense
                        >
                        <template slot="label">
                             <span>{{ $t("User.level") }}</span>
                        <span class="red--text pl-2">*</span>
                        </template>
                        </v-select>
                  </v-col>

                  <v-card-text align="left">
                    <v-toolbar-title class="ml-0 pr-6">
                      <h5 class="#3d5afe--text">
                        {{ $t("User.Permission") }}
                      </h5>
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
                                  <v-checkbox value="1" v-model="register" color="#3d5afe" v-on="on"></v-checkbox>
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
                                    v-model="report_detail"
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
                                  <v-checkbox value="1" v-model="district" color="#3d5afe" v-on="on"></v-checkbox>
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
                                  <v-checkbox value="1" v-model="province" color="#3d5afe" v-on="on"></v-checkbox>
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
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-col>
                  <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="pl-6">
                    <v-checkbox
                      value="1"
                      v-model="status"
                      color="#3d5afe"
                      :label="$t('User.Status')"
                    ></v-checkbox>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions  class="pr-6 pb-6">
                <v-spacer />
                    <v-btn
                      bottom
                      right
                      large
                      depressed
                      color="#00E676"
                      @click="update"
                      class="white--text"
                    >
                      <v-icon class="mr-2">save</v-icon>
                      {{$t("User.Update")}}
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
                ><v-icon color="#00E676">mdi-check</v-icon> {{ $t("User.UpdateSuccess") }}</v-alert>
                <v-alert
                  v-if="msg === err"
                  text
                  prominent
                  color="red"
                >{{ $t("User.UpdateNotSuccess") }}</v-alert>
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
export default {
  data: () => ({
    genders: ["ຊາຍ", "ຍິງ"],
    gender: "",
    fixedHeader: true,
    users_id: "",
    name: "",
    phone: "",
    email: "",
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
    report_detail: "",
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
    status: "",
    msg: "",
    levels: [],
    branchs: []
  }),
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("login");
    } else if (this.$store.getters.getUser.user_authorization_update === "1") {
      let res = await axios.get(
        "/api/user/users_id/" + this.$route.query.users_id
      );
      this.users_id = res.data.users.users_id || "";
      this.gender = res.data.users.gender || "";
      this.name = res.data.users.name || "";
      this.phone = res.data.users.phone || "";
      this.email = res.data.users.email || "";
      this.username = res.data.users.username || "";
      this.password = res.data.users.password || "";
      this.password_repeat = res.data.users.password || "";
      this.level_id = res.data.users.level_id || "";
      this.branch_id = res.data.users.branch_id || "";
      this.photo = res.data.users.photo || "";
      this.home = res.data.users.home || "";
      this.register = res.data.users.register || "";
      this.register_create = res.data.users.register_create || "";
      this.register_update = res.data.users.register_update || "";
      this.register_delete = res.data.users.register_delete || "";
      this.register_detail = res.data.users.register_detail || "";
      this.register_upload = res.data.users.register_upload || "";
      this.register_report = res.data.users.register_report || "";
      this.register_export = res.data.users.register_export || "";
      this.inspection = res.data.users.inspection || "";
      this.inspection_create = res.data.users.inspection_create || "";
      this.inspection_update = res.data.users.inspection_update || "";
      this.inspection_delete = res.data.users.inspection_delete || "";
      this.inspection_print_grid = res.data.users.inspection_print_grid || "";
      this.inspection_print_table = res.data.users.inspection_print_table || "";
      this.inspection_detail = res.data.users.inspection_detail || "";
      this.inspection_upload = res.data.users.inspection_upload || "";
      this.inspection_report = res.data.users.inspection_report || "";
      this.inspection_export = res.data.users.inspection_export || "";
      this.fee = res.data.users.fee || "";
      this.fee_create = res.data.users.fee_create || "";
      this.fee_update = res.data.users.fee_update || "";
      this.fee_delete = res.data.users.fee_delete || "";
      this.fee_print = res.data.users.fee_print || "";
      this.fee_detail = res.data.users.fee_detail || "";
      this.fee_report = res.data.users.fee_report || "";
      this.fee_export = res.data.users.fee_export || "";
      this.report = res.data.users.report || "";
      this.report_detail = res.data.users.report_detail || "";
      this.report_report = res.data.users.report_report || "";
      this.report_export = res.data.users.report_export || "";
      this.setting = res.data.users.setting || "";
      this.model = res.data.users.model || "";
      this.model_create = res.data.users.model_create || "";
      this.model_update = res.data.users.model_update || "";
      this.model_delete = res.data.users.model_delete || "";
      this.model_report = res.data.users.model_report || "";
      this.model_export = res.data.users.model_export || "";
      this.type = res.data.users.type || "";
      this.type_create = res.data.users.type_create || "";
      this.type_update = res.data.users.type_update || "";
      this.type_delete = res.data.users.type_delete || "";
      this.type_report = res.data.users.type_report || "";
      this.type_export = res.data.users.type_export || "";
      this.color = res.data.users.color || "";
      this.color_create = res.data.users.color_create || "";
      this.color_update = res.data.users.color_update || "";
      this.color_delete = res.data.users.color_delete || "";
      this.color_report = res.data.users.color_report || "";
      this.color_export = res.data.users.color_export || "";
      this.village = res.data.users.village || "";
      this.village_create = res.data.users.village_create || "";
      this.village_update = res.data.users.village_update || "";
      this.village_delete = res.data.users.village_delete || "";
      this.village_report = res.data.users.village_report || "";
      this.village_export = res.data.users.village_export || "";
      this.district = res.data.users.district || "";
      this.district_create = res.data.users.district_create || "";
      this.district_update = res.data.users.district_update || "";
      this.district_delete = res.data.users.district_delete || "";
      this.district_report = res.data.users.district_report || "";
      this.district_export = res.data.users.district_export || "";
      this.province = res.data.users.province || "";
      this.province_create = res.data.users.province_create || "";
      this.province_update = res.data.users.province_update || "";
      this.province_delete = res.data.users.province_delete || "";
      this.province_report = res.data.users.province_report || "";
      this.province_export = res.data.users.province_export || "";
      this.company_information = res.data.users.company_information || "";
      this.company_information_create =
        res.data.users.company_information_create || "";
      this.company_information_update =
        res.data.users.company_information_update || "";
      this.company_information_delete =
        res.data.users.company_information_delete || "";
      this.company_information_upload =
        res.data.users.company_information_upload || "";
      this.company_information_report =
        res.data.users.company_information_report || "";
      this.company_information_export =
        res.data.users.company_information_export || "";
      this.fee_setting = res.data.users.fee_setting || "";
      this.fee_setting_create = res.data.users.fee_setting_create || "";
      this.fee_setting_update = res.data.users.fee_setting_update || "";
      this.fee_setting_delete = res.data.users.fee_setting_delete || "";
      this.fee_setting_report = res.data.users.fee_setting_report || "";
      this.fee_setting_export = res.data.users.fee_setting_export || "";
      this.type_register = res.data.users.type_register || "";
      this.type_register_create = res.data.users.type_register_create || "";
      this.type_register_update = res.data.users.type_register_update || "";
      this.type_register_delete = res.data.users.type_register_delete || "";
      this.type_register_report = res.data.users.type_register_report || "";
      this.type_register_export = res.data.users.type_register_export || "";
      this.standard_setting = res.data.users.standard_setting || "";
      this.standard_setting_create =
        res.data.users.standard_setting_create || "";
      this.standard_setting_update =
        res.data.users.standard_setting_update || "";
      this.standard_setting_delete =
        res.data.users.standard_setting_delete || "";
      this.standard_setting_report =
        res.data.users.standard_setting_report || "";
      this.standard_setting_export =
        res.data.users.standard_setting_export || "";
      this.branch = res.data.users.branch || "";
      this.branch_create = res.data.users.branch_create || "";
      this.branch_update = res.data.users.branch_update || "";
      this.branch_delete = res.data.users.branch_delete || "";
      this.branch_report = res.data.users.branch_report || "";
      this.branch_export = res.data.users.branch_export || "";
      this.user_authorization = res.data.users.user_authorization || "";
      this.user_authorization_create =
        res.data.users.user_authorization_create || "";
      this.user_authorization_update =
        res.data.users.user_authorization_update || "";
      this.user_authorization_delete =
        res.data.users.user_authorization_delete || "";
      this.user_authorization_detail =
        res.data.users.user_authorization_detail || "";
      this.user_authorization_upload =
        res.data.users.user_authorization_upload || "";
      this.user_authorization_report =
        res.data.users.user_authorization_report || "";
      this.user_authorization_export =
        res.data.users.user_authorization_export || "";
      this.status = res.data.users.status || "";
      this.getBranch();
      this.getLevel();

      this.userId = this.$store.getters.getUser.users_id;
      this.user_authorization_updated = this.$store.getters.getUser.user_authorization_update;
      this.branch_id = this.$store.getters.getUser.branch_id;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("../login");
    }
  },
  methods: {
    async update() {
      try {
        const credentials = {
          users_id: this.users_id,
          gender: this.gender,
          name: this.name,
          phone: this.phone,
          email: this.email,
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
          report_detail: this.report_detail,
          report_export: this.report_export,
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
          status: this.status
        };
        const response = await AuthService.update(credentials);
        this.msg = response.msg;
        if (response) {
        //   this.$router.replace("./User");
        this.msg = response.data.msg;
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
