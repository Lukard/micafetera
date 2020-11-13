<template>
  <ul class="cluster">
    <li class="item">
      <h2 class="title">
        Krups EA8108 Roma: La mejor cafetera automática del 2020 calidad-precio
      </h2>
    </li>
    <li class="item">
      <h2 class="title">
        Krups EA8108 Roma: La mejor cafetera automática del 2020 calidad-precio
      </h2>
    </li>
    <li class="item">
      <h2 class="title">
        Krups EA8108 Roma: La mejor cafetera automática del 2020 calidad-precio
      </h2>
    </li>
    <!--<ClusterItem
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
    />-->
  </ul>
</template>

<script>
//import ClusterItem from '@/components/ClusterItem.vue';

export default {
  name: 'Cluster',
  components: {
    //ClusterItem,
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
  background: url('../assets/home_automatic.png') no-repeat center;
  background-size: contain;
  position: relative;
}
.item:before {
  content: ' ';
  z-index: 0;
  background: linear-gradient(to bottom, transparent 0%, #000 100%);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.item:hover:before {
  content: ' ';
  z-index: 0;
  background: linear-gradient(to bottom, transparent 0%, rgb(59, 59, 59) 100%);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.title {
  position: absolute;
  bottom: 0;
  margin: 16px;
  color: #c6baad;
}
.ul,
li {
  list-style-type: none;
}
</style>
