<template>
<v-col cols="12" xl="12" lg="11" md="12" sm="11">

    <div class="card" color="blue">
        <div class="card-body"><br>
        <v-row>
            <v-col cols="12" lg="6" md="12" sm="12" xs="12">
                <div class="card-img-bottom">
                    <chartjs-doughnut :bind="true" :datasets="datasets" :labels="labels" :option="option" />
                </div>
            </v-col>
            <v-col cols="12" lg="6" md="12" sm="12" xs="12">
                <div class="card-img-bottom">
                    <chartjs-doughnut :bind="true" :datasets="datasets" :labels="labels" :option="option" />
                </div>
            </v-col>
             
             </v-row>
        </div>
    </div>

</v-col>
</template>

<script>
export default {
  
    data() {
        return {
            labels: ["TOYOTA", "ford", "mazda", "Ben",
                //  "Coupe", "Wagons","Convertible","Sports Car","Diesel","Crossover","Luxury Car","Hybrid/Electric","Certified Pre-Owned"
            ],
            option: {},
            datasets: [{
                data: [30, 60, 80, 50,
                    // 70, 20,10, 20, 20, 40, 70, 20, 50, 70, 20
                ],
                backgroundColor: [
                    "purple",
                    "red",
                    "orange",
                    "#E53935",
                    "red",
                    "blue",
                    "#f36e60",
                    "#ffdb3b",
                    "#185190",
                    "pink",
                    "red",
                    "blue",
                    "pink",
                    "red",
                    "blue"
                ],
                hoverBackgroundColor: [
                    "#f36e60",
                    "#ffdb3b",
                    "#185190",
                    "pink",
                    "red",
                    "blue",
                    "#f36e60",
                    "#ffdb3b",
                    "#185190",
                    "pink",
                    "red",
                    "blue",
                    "pink",
                    "red",
                    "blue"
                ]
            }]
        };
    }
};
</script>
