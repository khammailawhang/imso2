<template>
<div>
       <v-app-bar  app style="background: #ffffff"></v-app-bar>
    <v-container no-gutters>
        
      
        <template>
            <v-row justify="center" no-gutters id="print">
                <v-col align="center" justify="center">
                    <v-col cols="12" xl="10" lg="10" md="10" sm="12">
                        <v-card ref="form" align="center" width="65%">
                            <table style="font-family:Vision,Phetsarath OT" width="100%">
                                <tr>
                                    <br />
                                    <h3 align="center" style="font-family:Vision,Phetsarath OT" width="100%">ໃບບິນເກັບຄ່າທໍານຽນກວດເຕັກນິກ</h3>
                                </tr>
                            </table>
                            <table style="font-family:Vision,Phetsarath OT" width="100%">
                                <tbody colspan="12">
                                    <tr class="tr">
                                        <td class="td">
                                            {{
                      $t("TR.OwnerName")
                      }}
                                        </td>
                                        <td class="td">
                                            <Strong class="indigo--text" v-text="owner_name"></Strong>
                                        </td>
                                    </tr>
                                    <tr class="tr">
                                        <td class="td">
                                            {{
                      $t("TR.ID_no")
                      }}
                                        </td>
                                        <td class="td">
                                            <Strong class="indigo--text" v-text="TRName"> </Strong> <Strong class="indigo--text" v-text="platc_no"> </Strong>

                                        </td>
                                    </tr>
                                    <tr class="tr">
                                        <td class="td">
                                            {{
                      $t("TR.Provice")
                      }}
                                        </td>
                                        <td class="td">
                                            <Strong class="indigo--text" v-text="PName"> </Strong>
                                        </td>
                                    </tr>
                                    <tr class="tr">
                                        <td class="td">
                                            {{
                      $t("TR.mode")
                      }}
                                        </td>
                                        <td class="td">
                                            <Strong class="indigo--text" v-text="MName"></Strong>
                                        </td>
                                    </tr>
                                    <tr class="tr">
                                        <td class="td">
                                            {{
                      $t("TR.type")
                      }}
                                        </td>
                                        <td class="td">
                                            <Strong class="indigo--text" v-text="TName"></Strong>
                                        </td>
                                    </tr>
                                    <tr class="tr">
                                        <td class="td">
                                            {{
                      $t("FeeSetting.Price")
                      }}
                                        </td>
                                        <td class="td">

                                            <Strong class="indigo--text ">
                                                <div v-format="'0,000 ກີບ'">{{PiName}}</div>

                                            </Strong>

                                        </td>
                                    </tr>

                                    <tr class="tr">
                                        <td class="td">
                                            QR
                                        </td>
                                        <td class="td">
                                            <img :content="generatePDFwithQRcode()" :src="QRvalue" contain width="100px" height="100px">

                                            <div>{{created_at | formatDate}}</div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </v-card>
                    </v-col>
                </v-col>
            </v-row>
        </template>
    </v-container>
</div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import jsPDF from "jspdf";
import VanillaQR from "vanillaqr";
import VueHtmlToPaper from "vue-html-to-paper";

// eslint-disable-next-line
import autoTable from "jspdf-autotable";
Vue.use(VueHtmlToPaper, VueAxios, axios);

export default {
    components: {

        // Qrcode

    },
    data: () => ({
        fee_id: "",
        snackbar: false,
        snackbarText: "",
        owner_name: "",
        platc_no: "",
        engine_no: "",
        chassis_no: "",
        fees: [],
        created_at: "",

        value: '',
        QRvalue: '',
        size: 150,
        base64: '',
        file: '',
        qrUrl: 'http://localhost:8080/la/feeqr?fee_id='
    }),

    watch: {
        variant(val) {
            if (val.includes("filter")) {
                this.value = true;
            }
        }
    },
    async created() {
        let res = await axios.get("/api/fee/fee_id/" + this.$route.query.fee_id);
          this.fee_id = res.data.fees.fee_id || "";
        this.owner_name = res.data.fees.owner_name || "";
        this.PName = res.data.fees.PName || "";
        this.DName = res.data.fees.DName || "";
        this.VName = res.data.fees.VName || "";
        this.TRName = res.data.fees.TRName || "";
        this.MName = res.data.fees.MName || "";
        this.TName = res.data.fees.TName || "";
        this.CName = res.data.fees.CName || "";
        this.platc_no = res.data.fees.platc_no || "";
        this.PiName = res.data.fees.PiName || "";
        this.created_at = res.data.fees.created_at || "";
        this.branch_id = this.$store.getters.getUser.branch_id;

    },
    methods: {
        generatePDFwithQRcode() {
            var qr = new VanillaQR({ // create QRcode
                url: this.qrUrl + this.fee_id
            })
            const imageElement = qr.toImage("jpg") // convert QRcode to image
            this.QRvalue = imageElement.src
            const doc = new jsPDF('p', 'pt', 'a4')
            const width = doc.internal.pageSize.getWidth()
            const elementHTML = document.getElementById('content')
            const specialElementHandlers = {
                '#elementH': function () {
                    return "";
                }
            }
            doc.fromHTML(elementHTML, 5, 5, {
                'width': width,
                'elementHandlers': specialElementHandlers
            })
            // doc.addImage(imageElement.src, 'JPEG', (width / 1) - 50, 250, 100, 100) // import รูปเข้าไปใน pdf
            // doc.save('test.pdf')
        },
        print() {
            this.$htmlToPaper("print");
        },
        generateFromHTML() {
            const el = this.$refs.print;
            let doc = new jsPDF();
            doc.fromHTML(
                el, // HTML string or DOM elem ref.
                10, // x coord
                10
            );
            // doc.save("export.pdf");
        },
        feeRequestTo(branch_id) {
            this.$router.push("./FeeList?branch_id=" + branch_id);
        }
    }
};
</script>

<style scoped>
.bottom-gradient {
    background-image: linear-gradient(to top,
            rgba(0, 0, 0, 0.4) 0%,
            transparent 72px);
}

.repeating-gradient {
    background-image: repeating-linear-gradient(-45deg,
            rgba(255, 0, 0, 0.25),
            rgba(255, 0, 0, 0.25) 5px,
            rgba(0, 0, 255, 0.25) 5px,
            rgba(0, 0, 255, 0.25) 10px);
}

.table,
.th,
.td {
    font-size: 16px;
    border: 0px solid black;
    border-collapse: collapse;
    padding: 15px;
}

.th .td {
    padding: 5px;
    text-align: left;
}
</style>
