<template>
<div>
    <h5 class="text-left black--text py-4">
          <span to="Home" class="grey--text">{{ $t("Navbar.Dashboard") }}</span>
          <span class="grey--text"> / </span>
          <span class="grey--text">{{ $t("Navbar.Register") }}</span>
          <span class="grey--text"> / </span>
          <span class="indigo--text">{{ $t("Register.Table_Title") }}</span>
        </h5>
  <v-card outlined>
    <v-card-title>
        <h4 class="white--text">ລົງທະບຽນຂໍ້ມູນຊື່ເຈົ້າຂອງລົດ ແລະ ຂໍ້ມູນລົດ</h4>
      <v-spacer></v-spacer>
      <div>
        <v-switch
          v-model="sticky"
          label="Sticky Banner"
          hide-details
        ></v-switch>
      </div>
    </v-card-title>
    <v-card-text class="white">
      <v-row>
          <v-col cols="12" lg="2" md="2" sm="2">
                <v-text-field
                  label="ຊື່ ແລະ ນາມສະຸນ"
                  v-model="owner_name"
                  type="text"
                  autocomplete="off"
                />
              </v-col>
              <v-col cols="12" lg="2" md="2" sm="2">
                <v-select
                  :items="genders"
                  label="ເພດ"
                  v-model="gender"
                  item-text="gender"
                  item-value="gender"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" lg="2" md="2" sm="2">
                <v-text-field
                  label="ເບີໂທລະສັບ"
                  v-model="phone"
                  type="text"
                  autocomplete="off"
                />
              </v-col>

              <v-col cols="12" lg="2" md="2" sm="2">
                <v-select
                  :items="provinces"
                  label="ແຂວງ"
                  v-model="province_id"
                  item-text="name"
                  item-value="province_id"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" lg="2" md="2" sm="2">
                <v-select
                  :items="getalldata"
                  label="ເມືອງ"
                  v-model="district_id"
                  item-text="name"
                  item-value="district_id"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" lg="2" md="2" sm="2">
                <v-select
                  :items="getall"
                  label="ບ້ານ"
                  v-model="village_id"
                  item-text="name"
                  item-value="village_id"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" lg="2" md="2" sm="2">
                <v-select
                  :items="trs"
                  label="ປະເພດທະບຽນ"
                  v-model="tr_id"
                  item-text="name"
                  item-value="tr_id"
                ></v-select>
              </v-col>
              <v-col cols="12" lg="2" md="2" sm="2"
                ><v-text-field
                  label="ເລກທະບຽນ"
                  v-model="platc_no"
                  type="text"
                  autocomplete="off"
              /></v-col>
              <v-col cols="12" lg="2" md="2" sm="2"
                ><v-select
                  :items="models"
                  label="ເລືອກຍີ່ຫໍ້ລົດ"
                  v-model="model_id"
                  item-text="name"
                  item-value="model_id"
                  required
                ></v-select
              ></v-col>
              <v-col cols="12" lg="2" md="2" sm="2"
                ><v-select
                  :items="types"
                  label="ເລືອກປະເພດລົດ"
                  v-model="type_id"
                  item-text="TName"
                  item-value="type_id"
                  required
                ></v-select
              ></v-col>
              <v-col cols="12" lg="2" md="2" sm="2"
                ><v-select
                  :items="colors"
                  label="ເລືອກສີລົດ"
                  v-model="color_id"
                  item-text="name"
                  item-value="color_id"
                  required
                ></v-select
              ></v-col>
              <v-col cols="12" lg="2" md="2" sm="2">
                <v-select
                  :items="steeringwheel"
                  label="ພວງມາໄລ"
                  v-model="steering_wheel"
                  item-text="name"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" lg="2" md="2" sm="2"
                ><v-select
                  :items="fuels"
                  label="ໃຊ້ນຳມັນ"
                  v-model="fuel"
                ></v-select
              ></v-col>
              <v-col cols="12" lg="2" md="2" sm="2"
                ><v-text-field
                  label="ຈຳນວນສູບ"
                  v-model="cylinder"
                  type="number"
                  autocomplete="off"
              /></v-col>
              <v-col cols="12" lg="2" md="2" sm="2">
                <v-btn-toggle>
                  <v-text-field
                    label="ຄວາມແຮງ"
                    v-model="cylinder_size_cc"
                    type="number"
                    autocomplete="off"
                  />
                  <v-avatar tile color="white">
                    ຊຊ
                  </v-avatar>
                </v-btn-toggle>
              </v-col>
              <v-col cols="12" lg="2" md="2" sm="2"
                ><v-text-field
                  label="ເລກຈັກ"
                  v-model="engine_no"
                  type="number"
                  autocomplete="off"
              /></v-col>
              <v-col cols="12" lg="2" md="2" sm="2"
                ><v-text-field
                  label="ເລກຖັງ"
                  v-model="chassis_no"
                  type="number"
                  autocomplete="off"
              /></v-col>
              <v-col cols="12" lg="2" md="2" sm="2">
                <v-btn-toggle>
                  <v-text-field
                    label="ກ້ວາງ"
                    v-model="width"
                    type="number"
                    autocomplete="off"
                  />
                  <v-avatar tile color="white">
                    ມມ
                  </v-avatar>
                </v-btn-toggle>
              </v-col>
              <v-col cols="12" lg="2" md="2" sm="2">
                <v-btn-toggle>
                  <v-text-field
                    label="ຍາວ"
                    v-model="length"
                    type="number"
                    autocomplete="off"
                  />
                  <v-avatar tile color="white">
                    ມມ
                  </v-avatar>
                </v-btn-toggle>
              </v-col>
              <v-col cols="12" lg="2" md="2" sm="2">
                <v-btn-toggle>
                  <v-text-field
                    label="ສູງ"
                    v-model="height"
                    type="number"
                    autocomplete="off"
                  />
                  <v-avatar tile color="white">
                    ມມ
                  </v-avatar>
                </v-btn-toggle>
              </v-col>
              <v-col cols="12" lg="2" md="2" sm="2">
                <v-btn-toggle>
                  <v-text-field
                    label="ຈຳນວນບ່ອນນັ່ງໂດຍສານ"
                    v-model="passenger_scats"
                    type="number"
                    autocomplete="off"
                  />
                  <v-avatar tile color="white">
                    ບ່ອນນັ່ງ
                  </v-avatar>
                </v-btn-toggle>
              </v-col>
              <v-col cols="12" lg="2" md="2" sm="2">
                <v-btn-toggle>
                  <v-text-field
                    label="ນໍ້າໜັກລົດ"
                    v-model="vehicle_weight"
                    type="number"
                    autocomplete="off"
                  />
                  <v-avatar tile color="white">
                    ກິໂລ
                  </v-avatar>
                </v-btn-toggle>
              </v-col>
              <v-col cols="12" lg="2" md="2" sm="2">
                <v-btn-toggle>
                  <v-text-field
                    label="ນໍ້າໜັກບັນທຸກ"
                    v-model="max_loading"
                    type="number"
                    autocomplete="off"
                  />
                  <v-avatar tile color="white">
                    ກິໂລ
                  </v-avatar>
                </v-btn-toggle>
              </v-col>
              <v-col cols="12" lg="2" md="2" sm="2">
                <v-btn-toggle>
                  <v-text-field
                    label="ນໍ້າໜັກລວມ"
                    v-model="total_weight"
                    type="number"
                    autocomplete="off"
                  />
                  <v-avatar tile color="white">
                    ກິໂລ
                  </v-avatar>
                </v-btn-toggle>
              </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
        <v-btn rounded outlined color="indigo" class="white--text">Cancel</v-btn>
        <v-btn rounded outlined color="indigo" class="white--text">Save now</v-btn>
    </v-card-actions>
  </v-card>
</div>
</template>
<script>
export default {
  data: () => ({
    sticky: false
  })
};
</script>
