<template>
  <div>
    <div id="invoice">
      <h1>Print me!</h1>
    </div>
    <v-btn color="blue" @click="print">Print</v-btn>
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