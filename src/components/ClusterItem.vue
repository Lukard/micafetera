<template>
  <li class="item">
    <img class="image" :src="require(`${image}`)" />
    <div class="background"></div>
    <h2 class="title">{{ text }}</h2>
  </li>
</template>

<script>
export default {
  name: "ClusterItem",
  props: ["image", "text"],
};
</script>

<style scoped>
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
li {
  list-style-type: none;
}
</style>