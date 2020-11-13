<template>
  <li class="item">
    <img class="image" :src="image" />
    <h2 class="title">{{ text }}</h2>
  </li>
</template>

<script>
export default {
  name: 'ClusterItem',
  props: ['image', 'text'],
};
</script>

<style scoped>
.item {
  width: calc(800px / 3);
  height: 256px;
  position: relative;
}
.item:after {
  content: ' ';
  z-index: 0;
  background: linear-gradient(to bottom, transparent 0%, #000 100%);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.item:hover:after {
  content: ' ';
  z-index: 0;
  background: linear-gradient(to bottom, transparent 0%, rgb(59, 59, 59) 100%);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 0;
  max-width: 100%;
  max-height: 100%;
}
.title {
  position: absolute;
  bottom: 0;
  margin: 16px;
  z-index: 1;
  color: #c6baad;
}
li {
  list-style-type: none;
}
</style>
