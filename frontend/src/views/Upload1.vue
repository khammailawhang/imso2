<template>
  <div class="file">
    <v-row align="start" justify="center">
      <v-col cols="6">
        <h1>Upload</h1>
        <v-text-field
          outlined
          dense
          label="Name"
          v-model="title"
        ></v-text-field>
        <label>Upload File</label><br />
        <input type="file" ref="name" @change="onSelect" />
        <v-btn class="white--text" large color="green" block @click="onSubmit"
          >Submit</v-btn
        >
        <div class="message" v-if="message">
          <v-alert dense text type="success">
            {{ message }}
          </v-alert>
        </div>
        <v-text-field label="Title" v-model="title"></v-text-field>
        <v-text-field label="Name" v-model="name"></v-text-field>
        <v-btn @click="save">Save</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import console from "console.log";
import axios from "axios";
export default {
  name: "FileUpload",
  data() {
    return {
      title: "",
      name: "",
      message: ""
    };
  },
  methods: {
    save() {
      axios.post("/api/upload/save", {
        title: this.title,
        name: this.name
      });
      this.message = "Uploaded!";
    },
    onSelect() {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const name = this.$refs.name.files[0];
      this.name = name;
      if (!allowedTypes.includes(name.type)) {
        this.message = "Filetype is wrong!!";
      }
      if (name.size > 500000) {
        this.message = "Too large, max size allowed is 500kb";
      }
    },
    async onSubmit() {
      const formData = new FormData();
      formData.append("title", this.title);
      formData.append("name", this.name);
      try {
        await axios.post("/api/upload/create", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        this.message = "Uploaded!!";
      } catch (err) {
        console.log(err);
        this.message = err.response.data.error;
      }
    }
  }
};
</script>
