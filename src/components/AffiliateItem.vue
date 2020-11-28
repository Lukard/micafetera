<template>
  <div v-if="info != null" class="container">
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
      ><b>Comprar en Amazon</b></a
    >
  </div>
</template>

<script>
export default {
  name: 'AffiliateItem',
  data() {
    return {
      info: null,
    };
  },
  props: ['productUrl', 'affiliateUrl'],
  mounted: async function() {
    const url = `https://cors-anywhere.herokuapp.com/${this.productUrl}`;
    const html = await (await fetch(url)).text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const title =
      doc.getElementById('productTitle')?.textContent?.trim() ??
      doc.getElementById('title')?.textContent?.trim();
    const image =
      doc.getElementById('landingImage')?.getAttribute('data-old-hires') ??
      doc.getElementById('main-image')?.getAttribute('data-a-hires');
    const isPrime =
      doc
        .getElementById('priceBadging_feature_div')
        ?.getElementsByClassName('a-icon-prime') !== undefined;
    const previousPrice = doc.getElementsByClassName(
      'priceBlockStrikePriceString'
    )[0]?.textContent;
    const price =
      doc.getElementById('priceblock_ourprice')?.textContent ??
      doc.getElementById('priceblock_dealprice')?.textContent;
    this.info = {
      title: title,
      image: image,
      isPrime: isPrime,
      previousPrice: previousPrice,
      price: price,
    };
  },
};
</script>

<style scoped>
.container {
  border: 1px solid black;
  border-radius: 8px;
  padding: 16px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
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
.image {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 256px;
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
  content: ' ';
  background: url('../assets/shopping_cart.svg') no-repeat;
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
</style>
