<template>
  <div id="app">
    <h1>QRCodes for Vue</h1>
     <v-text-field v-model="qrText" label="URL"></v-text-field>
     <qrcode :background="background" :size="size" :value="qrText"></qrcode>
  </div>
</template>
<script>
import Qrcode from 'v-qrcode/src/index'
export default {
  data () {
      return {
          qrText: '',
          size: 200,
          background: 'white'
      }
  },
  components: {
      Qrcode
  },
  methods:{

  }
}
</script>