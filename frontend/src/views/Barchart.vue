<template>
<div>
    <v-row>
        <v-col cols="8">
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title">Bar</h2>
                </div>

                <div class="card-img-bottom">
                    <canvas id="fooCanvas" count="3" />

                    <chartjs-bar v-for="(item, index) in types" :key="index" :backgroundcolor="item.bgColor" :beginzero="beginZero" :bind="true" :bordercolor="item.borderColor" :data="item.data" :datalabel="item.dataLabel" :labels="labels" target="fooCanvas" />
                </div>
            </div>
        </v-col>
    </v-row>
</div>
</template>

<script>
export default {
    data() {
        return {
            beginZero: true,
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            types: [{
                    bgColor: "pink",
                    borderColor: "white",
                    data: [1, 3, 5, 7, 2, 4, 6],
                    dataLabel: "Bar"
                },
                {
                    bgColor: "yellow",
                    borderColor: "white",
                    data: [1, 5, 2, 6, 3, 7, 4],
                    dataLabel: "Baz"
                },
                {
                    bgColor: "red",
                    borderColor: "white",
                    data: [1, 5, 2, 6, 3, 4, 12],
                    dataLabel: "OK"
                }
            ]
        };
    }
};
</script>
