<template>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <h2 class="title">{{ title }}</h2>
        <div>
          <StarIcon
            color="yellow"
            v-for="index in parseInt(rating)"
            :key="author + index"
          />
          <StarIcon
            v-for="index in 5 - rating"
            :key="author + (parseInt(rating) + index)"
          />
        </div>
      </div>
      <p class="text">
        <slot></slot>
      </p>
    </div>
    <p class="footer">
      <b>{{ author }}</b> | {{ date }}
    </p>
  </div>
</template>

<script>
import StarIcon from "@/components/icons/StarIcon.vue";

export default {
  name: "Opinion",
  props: ["title", "author", "date", "rating"],
  components: { StarIcon },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 16px;
}
.container {
  background-color: #c6baad;
  padding: 16px;
  border-radius: 8px 8px 8px 0px;
  margin-bottom: 32px;
  margin-top: 0;
  display: flex;
  flex-direction: column;
}
.container::before {
  content: "";
  position: absolute;
  bottom: 32px;
  left: 0;
  border-right: 32px solid transparent;
  border-top: 32px solid #c6baad;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
}
h2 {
  margin: 0;
}
p {
  line-height: 150%;
  font-size: large;
}
.text {
  margin-bottom: 0;
  margin-top: 8px;
}
.footer {
  margin: 0;
}
</style>