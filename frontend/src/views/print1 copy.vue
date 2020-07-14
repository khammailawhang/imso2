<template>
  <div>
      <v-btn color="blue" class="white--text" @click="print">ພິມ</v-btn>
    <div id="invoice">
      <v-row align="center" justify="center" style="font-family:'Phetsarath OT'">
        <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="center">
         <span>{{$t('Inspection.Title_Print_One')}}<br>{{$t('Inspection.Title_Print_Two')}} <br>--- 000 ---</span>
        </v-col>
        <!-- Title -->
        <v-col cols="12" xl="6" lg="6" md="6" sm="6" align="left">
            <span>ກະຊວງ ຄົມມະນາຄົມ ຂົນສົ່ງ ໄປສະນີ ແລະ ກໍ່ສ້າງ<br>MINISTRY OF C.T.P.C<br>ພະແນກ ຄຂປກ ປະຈຳແຂວງ <span v-text="PName"></span><br>DEPARTMENT OF CTPC</span>
        </v-col>
        <v-col cols="12" xl="6" lg="6" md="6" sm="6" align="right">
            <span>ເລກທີ <span>19653</span> ຄຂປກ.</span>
        </v-col>
        <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="center" class="pb-2">
            <strong style="font-size:14px">{{$t('Inspection.List_vehicle')}}</strong>
        </v-col>
        <v-col cols="12" xl="2" lg="2" md="2" sm="2">{{$t('Register.OwnerName')}}</v-col>
        <v-col cols="12" xl="2" lg="2" md="2" sm="2">{{$t('Register.Gender')}}</v-col>
        <v-col cols="12" xl="2" lg="2" md="2" sm="2">{{$t('Register.Phone')}}</v-col>
        <v-col cols="12" xl="2" lg="2" md="2" sm="2">{{$t('Village.Name')}}</v-col>
        <v-col cols="12" xl="2" lg="2" md="2" sm="2">{{$t('District.Name')}}</v-col>
        <v-col cols="12" xl="2" lg="2" md="2" sm="2">{{$t('Province.Name')}}</v-col>
        <v-col cols="12" xl="2" lg="2" md="2" sm="2"></v-col>
        <v-col cols="12" xl="6" lg="6" md="12" sm="12"></v-col>
        <v-col cols="12" xl="6" lg="6" md="12" sm="12"></v-col>
        <v-col cols="12" xl="6" lg="6" md="12" sm="12"></v-col>
        <v-col cols="12" xl="6" lg="6" md="12" sm="12"></v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueHtmlToPaper from 'vue-html-to-paper';
 
const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ]
}
 
Vue.use(VueHtmlToPaper, options);
Vue.use(VueHtmlToPaper);
export default {
    data() {
    return {
      output: null
    }
  },
  methods: {
    print() {
      this.$htmlToPaper('invoice');
    }
  }
}
</script>