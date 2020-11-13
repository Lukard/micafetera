<template>
  <ul class="cluster">
    <ClusterItem
      image="../assets/home_automatic.png"
      text="Krups EA8108 Roma: La mejor cafetera automática del 2020 calidad-precio"
    />
    <ClusterItem
      image="../assets/home_express.png"
      text="Cecotec Power Espresso 20: Tu espresso de bar a un precio imbatible"
    />
    <ClusterItem
      image="../assets/home_italiana.png"
      text="Orbegozo KFN 610: La mejor cafetera italiana del mercado en 2020"
    />
  </ul>
</template>

<script>
import ClusterItem from "@/components/ClusterItem.vue";

export default {
  name: "Cluster",
  components: {
    ClusterItem,
  },
};
</script>

<style scoped>
.cluster {
  display: flex;
  padding-inline-start: 0;
}
.item {
  flex-grow: 1;
  height: 256px;
  position: relative;
}
.image {
  max-height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
}
.title {
  color: #c6baad;
  position: absolute;
  left: 0;
  bottom: 0;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
}
.background {
  content: "";
  background: linear-gradient(to bottom, transparent 0%, #000 100%);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.background:hover {
  content: "";
  background: linear-gradient(to bottom, transparent 0%, rgb(59, 59, 59) 100%);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.ul,
li {
  list-style-type: none;
}
</style>