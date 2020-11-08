<template>
  <ul class="section-products">
    <li v-for="(item, index) in links" :key="index">
      <iframe
        style="width:120px;height:240px;"
        marginwidth="0"
        marginheight="0"
        scrolling="no"
        frameborder="0"
        :src="item"
        v-if="windowWidth > 120 * (index + 1)"
      ></iframe>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AfiliateRow',
  data() {
    return {
      windowWidth: Math.min(window.innerWidth, 800),
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = Math.min(window.innerWidth, 800);
    };
  },
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.section-products {
  padding-inline-start: 0;
  display: flex;
  justify-content: space-between;
}
@media only screen and (min-width: 768px) {
  .section-products {
    padding-inline-start: 0;
    display: flex;
    justify-content: space-between;
  }
}
.ul,
li {
  list-style-type: none;
}
</style>
