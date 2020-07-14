<template>
  <div>
    <v-btn @click="generatorExport">Print</v-btn>
    <v-row ref="export">
      <h1>ລະບົບ</h1>
      <h1>ระบบ</h1>
      <h1>Hello</h1>
    </v-row>
  </div>
</template>
<script>
import * as jsPDF from "jspdf";
export default {
  methods: {
    generatorExport() {
      const el = this.$refs.export;
      let doc = new jsPDF();

      doc.addFont("Phetsarath OT", "Phetsarath OT", "normal");
      doc.addFont("Phetsarath OT", "Phetsarath OT", "bold");
      doc.setFont("Arimo");
      doc.setFontType("normal");
      doc.setFontSize(28);

      doc.text("Hello, World!", 100, 100);

      doc.setFontType("bold");

      doc.text("Hello, ລະບົບระบบWorld!", 100, 150);
      doc.setFont("Phetsarath OT");
      doc.setFontType("normal");
      doc.fromHTML(
        el, // HTML string or DOM elem ref.
        10, // x coord
        10
      );
      doc.save("export.pdf");
    }
  }
};
</script>
