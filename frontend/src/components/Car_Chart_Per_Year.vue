<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">ລາຍງານຂໍ້ມູນລົດຕໍ່ປີ</h3>
    </div>

    <div class="card-img-bottom">
      <canvas id="fooCanvas" count="12" />

      <chartjs-bar
        v-for="(item, index) in types"
        :key="index"
        :backgroundcolor="item.bgColor"
        :beginzero="beginZero"
        :bind="true"
        :bordercolor="item.borderColor"
        :data="item.data"
        :datalabel="item.dataLabel"
        :labels="labels"
        target="fooCanvas"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beginZero: true,
      labels: ["January", "Februar", "March", "April", "May", "June", "July","August","September","Otober","November","December"],
      types: [
        {
          bgColor: "red",
          borderColor: "white",
          data: [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12],
          dataLabel: "MICRO"
        },
        {
          bgColor: "pink",
          borderColor: "white",
          data: [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12],
          dataLabel: "SEDAN"
        },
        {
          bgColor: "purple",
          borderColor: "white",
           data: [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12],
          dataLabel: "CUV"
        },
        {
          bgColor: "#00B0FF",
          borderColor: "white",
          data: [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12],
          dataLabel: "SUV"
        },
        {
          bgColor: "indigo",
          borderColor: "white",
          data: [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12],
          dataLabel: "HATCHBACK"
        },
        {
          bgColor: "blue",
          borderColor: "white",
           data: [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12],
          dataLabel: "ROADSTER"
        },
        {
          bgColor: "indigo",
          borderColor: "white",
          data: [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12],
          dataLabel: "PICKUP"
        },
        {
          bgColor: "#00C853",
          borderColor: "white",
          data: [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12],
          dataLabel: "VAN"
        },
        {
          bgColor: "cyan",
          borderColor: "white",
           data: [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12],
          dataLabel: "COUPE"
        },
        {
          bgColor: "green",
          borderColor: "white",
          data: [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12],
          dataLabel: "SUPERCAR"
        },
        {
          bgColor: "yellow",
          borderColor: "white",
          data: [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12],
          dataLabel: "CAMPERVAN"
        },
        {
          bgColor: "#FF5722",
          borderColor: "white",
           data: [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12],
          dataLabel: "MINITRUCK"
        }
      ]
    };
  }
};
</script>
