<template>
  <div class="container">
    <AffiliateItem
      productUrl="https://www.amazon.es/Krups-EA8108-s%C3%BAper-autom%C3%A1tica-selecci%C3%B3n-intensidad/dp/B00INSX904"
      affiliateUrl="https://amzn.to/2KbijDe"
    />
    <AffiliateItem
      productUrl="https://www.amazon.es/gp/product/B07MMSHC4R?ie=UTF8"
      affiliateUrl="https://amzn.to/2UvFHgw"
    />
    <AffiliateItem
      productUrl="https://www.amazon.es/DeLonghi-Dedica-EC685-M-inoxidable-capuccinatore/dp/B06WGTZ874"
      affiliateUrl="https://amzn.to/3nsCo6c"
    />
    <AffiliateItem
      productUrl="https://www.amazon.es/Cecotec-Power-Espresso-Professionale-Capuccino/dp/B07MJ6S1MV"
      affiliateUrl="https://amzn.to/32OV1cR"
    />
    <AffiliateItem
      productUrl="https://www.amazon.es/Nespresso-Krups-Essenza-Mini-Cafetera/dp/B06XJ3MFMN"
      affiliateUrl="https://amzn.to/3lSm8Lp"
    />
    <AffiliateItem
      productUrl="https://www.amazon.es/Bosch-Tas1003-Cafetera-Monodosis-Multibebida/dp/B07GQKR88T"
      affiliateUrl="https://amzn.to/2UIXXTU"
    />
    <AffiliateItem
      productUrl="https://www.amazon.es/Bonsenkitchen-permanente-inoxidable-indicador-antigoteo/dp/B07H5673NJ"
      affiliateUrl="https://amzn.to/35RpokJ"
    />
    <AffiliateItem
      productUrl="https://www.amazon.es/Orbegozo-KFN-610-Cafetera-capacidad/dp/B00791DSM0"
      affiliateUrl="https://amzn.to/2IXfEwo"
    />
    <AffiliateItem
      productUrl="https://www.amazon.es/Bodum-1913-01-Caffettiera-Cafetera-color/dp/B00008WU98"
      affiliateUrl="https://amzn.to/2HrCcFa"
    />
    <a
      target="_blank"
      href="https://www.amazon.es/gp/search?ie=UTF8&tag=micafetera-21&linkCode=ur2&linkId=045abbe3c77f57fd4370bc2e31ba9841&camp=3638&creative=24630&index=aps&keywords=cafeteras"
      class="see_more"
      >Ver más <b>OFERTAS</b> en Amazon</a
    >
  </div>
</template>

<script>
import AffiliateItem from '@/components/AffiliateItem.vue';

export default {
  name: 'AffiliateGrid',
  components: {
    AffiliateItem,
  },
};
</script>

<style scoped>
.container {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
}
.see_more:link {
  text-decoration: inherit;
  color: inherit;
  cursor: pointer;
  background-color: black;
  color: white;
  border-radius: 32px;
  padding: 16px 32px 16px 32px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.5);
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
  margin-bottom: 16px;
}
.see_more:visited {
  text-decoration: inherit;
  color: inherit;
  cursor: pointer;
  background-color: black;
  color: white;
  border-radius: 32px;
  padding: 16px 32px 16px 32px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.5);
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
  margin-bottom: 16px;
}
.see_more:hover {
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: none;
}
</style>
