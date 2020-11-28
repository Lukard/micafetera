<template>
  <ul class="cluster">
    <ClusterItem
      :image="require('../assets/home_automatic.webp')"
      text="Krups EA8108 Roma: La mejor cafetera automática del 2020 calidad-precio"
    />
    <ClusterItem
      :image="require('../assets/home_express.webp')"
      text="Cecotec Power Espresso 20: Tu espresso de bar a un precio imbatible"
    />
    <ClusterItem
      :image="require('../assets/home_italiana.png')"
      text="Orbegozo KFN 610: Preciosa cafetera italiana al alcance de cualquiera"
    />
    <ClusterItem
      :image="require('../assets/home_french.webp')"
      text="Bodum 1913-01: Bonita y funcional cafetera de prensa con diseño elegante"
    />
    <ClusterItem
      :image="require('../assets/home_dropping.webp')"
      text="Bonsenkitchen: Gran capacidad en esta cómoda cafetera de goteo"
    />
    <ClusterItem
      :image="require('../assets/home_capsules.webp')"
      text="Nespresso De'Longhi Inissia: Buque insignia de la marca lider de cafetera de capsulas"
    />
  </ul>
</template>

<script>
import ClusterItem from '@/components/ClusterItem.vue';

export default {
  name: 'Cluster',
  components: {
    ClusterItem,
  },
};
</script>

<style scoped>
.cluster {
  display: flex;
  padding-inline-start: 0;
  flex-wrap: wrap;
}
.ul {
  list-style-type: none;
}
</style>
