<template>
<div>
    <v-content>
        <v-container>
            <v-row align="center" justify="center" no-gutters>
                <v-col cols="6" xl="6" lg="6" md="6" sm="6">
                    <v-card flat color="white">
                        <v-card-title>
                            {{$t('Fee.Print')}}
                            <v-spacer />
                            <v-btn class="indigo--text mr-4" small depressed fab dark color="yellow" bottom @click="print">
                                <v-icon color="#3d5afe">mdi-printer</v-icon>
                            </v-btn>
                            <v-tooltip bottom color="#3d5afe">
                                <template v-slot:activator="{ on }">
                                    <v-btn depressed @click="feeRequestTo(branch_id)" small fab color="#3d5afe" dark v-on="on">
                                        <v-icon small>mdi-undo-variant</v-icon>
                                    </v-btn>
                                </template>
                                <span>{{ $t("Inspection.Back") }}</span>
                            </v-tooltip>
                        </v-card-title>
                        <v-card-text id="print" style="font-family:Phetsarath OT">
                            <table style="font-family:Vision,Phetsarath OT" width="90%">
                                <tr>
                                    <br />
                                    <h3 align="center" style="font-family:Vision,Phetsarath OT" width="90%">{{$t("Fee.Title")}}</h3>
                                </tr>
                            </table>
                            <table style="font-family:Phetsarath OT" width="80%">
                                <tbody colspan="10">
                                
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
                        $t("TR.Provice")
                        }}
                                        </td>
                                        <td class="td">
                                            <Strong class="indigo--text" v-text="PName"></Strong>
                                        </td>
                                    </tr>
                                    <tr class="tr">
                                        <td class="td">
                                            {{
                        $t("TR.ID_no")
                        }}
                                        </td>
                                        <td class="td">
                                            <Strong class="indigo--text" v-text="TRName"></Strong>
                                            <Strong class="indigo--text" v-text="platc_no"></Strong>
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
                                            <Strong class="indigo--text">
                                                <div v-format="'0,000 Kip'">{{PiName}}</div>
                                            </Strong>
                                        </td>
                                    </tr>
                                 

                                </tbody>
                            </table>
                        </v-card-text>
                    </v-card>
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
        printed: "printed",

        value: '',
        QRvalue: '',
        size: 150,
        base64: '',
        file: '',
        qrUrl: 'http://178.128.23.172/la/feeqr?fee_id='
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
            this.axios.put("/api/fee/printed", {
                fee_id: this.$route.query.fee_id,
                printed: this.printed
            })
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
