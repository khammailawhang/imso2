<template>
  <div class="pdf">
    <v-row align="center">
      <v-col cols="12" align="12">
        <h2>PDF Print</h2>
         <v-text-field v-model="form.name" label="Enter name here"></v-text-field>
         <v-btn color="red" @click="download">Download</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data:() =>({
    form:{
      name:''
    }
  }),
  methods:{
    download(){
      
    }
  }
}
</script>