<template>
  <div
    v-if="info != null && (relevant == null || isSmartphone == true)"
    class="container"
  >
    <a
      class="image"
      :title="info.title"
      target="_blank"
      rel="nofollow noopener noreferrer"
      :href="affiliateUrl"
    >
      <img :src="info.image" :alt="info.title" height="90%" />
    </a>
    <a
      :title="info.title"
      target="_blank"
      rel="nofollow noopener noreferrer"
      :href="affiliateUrl"
    >
      <h2>{{ info.title }}</h2>
    </a>
    <img class="prime" src="../assets/prime.png" alt="Prime" />
    <div class="priceContainer">
      <p class="previousPrice">
        {{ info.previousPrice }}
      </p>
      <p class="price">
        <b>{{ info.price }}</b>
      </p>
    </div>
    <a
      class="buy"
      title="Comprar en Amazon"
      target="_blank"
      rel="nofollow noopener noreferrer"
      :href="affiliateUrl"
    >
      <b>
        {{
          info.price != null
            ? "Comprar en Amazon"
            : "Consultar precio en Amazon"
        }}
      </b>
    </a>
  </div>
  <div
    v-else-if="info != null && relevant != null"
    class="container container-horizontal"
  >
    <a
      class="image-relevant"
      :title="info.title"
      target="_blank"
      rel="nofollow noopener noreferrer"
      :href="affiliateUrl"
    >
      <img :src="info.image" :alt="info.title" width="100%" />
    </a>
    <div class="relevant-horizontal">
      <a
        :title="info.title"
        target="_blank"
        rel="nofollow noopener noreferrer"
        :href="affiliateUrl"
      >
        <h2 class="title-relevant">{{ info.title }}</h2>
      </a>
      <img class="prime" src="../assets/prime.png" alt="Prime" />
      <div class="priceContainer">
        <p class="previousPrice">
          {{ info.previousPrice }}
        </p>
        <p class="price">
          <b>{{ info.price }}</b>
        </p>
      </div>
      <a
        class="buy"
        title="Comprar en Amazon"
        target="_blank"
        rel="nofollow noopener noreferrer"
        :href="affiliateUrl"
      >
        <b>
          {{
            info.price != null
              ? "Comprar en Amazon"
              : "Consultar precio en Amazon"
          }}
        </b>
      </a>
    </div>
  </div>
</template>

<script>
import { getArticleInfo } from "@/utils/articleInfo.js";

export default {
  name: "AffiliateItem",
  data() {
    return {
      info: null,
      isSmartphone: window.innerWidth <= 1024,
    };
  },
  props: ["productUrl", "affiliateUrl", "relevant"],
  mounted: async function () {
    window.addEventListener("resize", this.onResize);
    this.info = await getArticleInfo(this.productUrl);
  },
  methods: {
    onResize() {
      this.isSmartphone = window.innerWidth <= 1024;
      console.log(window.innerWidth);
      console.log(this.isSmartphone);
      console.log(this.relevant);
      console.log(
        this.info != null &&
          (this.relevant == null || this.isSmartphone == true)
      );
    },
  },
};
</script>

<style scoped>
.container {
  border: 1px solid black;
  border-radius: 8px;
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
.container-horizontal {
  flex-direction: row;
  width: 100% !important;
  max-width: 600px;
  margin: auto;
}
@media (min-width: 1024px) {
  .container {
    width: calc(1024px / 3 - 45px);
    border: 1px solid black;
    border-radius: 8px;
    padding: 16px;
    display: flex;
    justify-content: center;
  }
}
.relevant-horizontal {
  display: flex;
  flex-direction: column;
  margin-left: 16px;
}
.image {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 256px;
}
.image-relevant {
  display: flex;
  justify-content: center;
  min-width: 200px;
}
.prime {
  margin-right: 0;
}
.priceContainer {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
}
.previousPrice {
  text-decoration: line-through;
}
.price {
  font-size: 28px;
}
.buy {
  background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
  border-color: #a88734 #9c7e31 #846a29;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset;
  padding: 12px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.buy:hover {
  background: linear-gradient(to bottom, #f5d78e, #eeb933);
}
.buy:before {
  content: " ";
  background: url("../assets/shopping_cart.svg") no-repeat;
  width: 36px;
  transform: scale(0.45);
  position: absolute;
  left: 8px;
  top: 2px;
  bottom: 0;
}
a:link {
  text-decoration: inherit;
  color: inherit;
}
a:visited {
  text-decoration: inherit;
  color: inherit;
}
p {
  margin-block-start: 8px;
  margin-block-end: 8px;
}
img {
  margin: auto;
}
h2 {
  margin-top: 8px;
  max-height: 50px;
  overflow: hidden;
  margin-bottom: 0px;
  color: #2196f3;
}
h2:hover {
  color: #0275d8;
}
.title-relevant {
  overflow: inherit;
  max-height: inherit;
}
</style>
