<template>
  <Frame>
    <h1>Las mejores marcas de cafeteras de 2020</h1>
    <p>
      <b>¿A quien no le gusta un buen café?</b> Especialmente por las mañanas,
      una taza de café recien preparada con nuestra máquina de café puede darnos
      la energía necesaria para empezar con buen pie el día.
    </p>
    <p>
      Es habitual empezar en el mundo del café tomando café instantáneo, pero
      mas pronto que tarde querrás
      <b>probar algo con más sabor y más elegante</b>.
    </p>
    <p>
      Si has llegado a aquí es que estas buscando comprar una buena cafetera
      automática o cafetera express; o bien reemplazar tu cafetera italiana de
      toda la vida. <b>Busca y compara</b> los diferentes modelos y anímate a
      comprar el modelo que más te guste.
    </p>
    <h1>¿Qué cafetera comprar?</h1>
    <p>
      Hoy en día existe una amplia variedad de cafeteras en el mercado
      disponibles para nuestro uso y disfrute. Dependiendo del tipo de café, el
      tipo de elaboración y cuerpo y sabor que desemos obtener nos interesará un
      tipo de cafetera u otra.
    </p>
    <h2>Cafetera Express</h2>
    <div class="section-body">
      <img
        class="section-image"
        src="../assets/home_express.png"
        alt="Cafetera express"
      />
      <p>
        Si lo que quieres es disfrutar del buen sabor de un
        <b>café de cafetería o restaurante</b>, la cafetera express es la que
        estás buscando.
        <br />
        <br />
        Ésta típica <b>cafetera de bar</b> es capaz de prepar un
        <i>café intenso</i> y una <i>crema deliciosa</i>
        que nos daran un buen empuje de energia para afrontar el día.
        <br />
        <br />
        Aquí tienes un listado las mejores cafeteras express de 2020:
      </p>
    </div>
    <ul class="section-products">
      <li v-for="(express, index) in expresses" :key="express.link">
        <iframe
          style="width:120px;height:240px;"
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          :src="express.link"
          v-if="windowWidth > 120 * (index + 1)"
        ></iframe>
      </li>
    </ul>
  </Frame>
</template>

<script>
import Frame from '@/components/Frame.vue';

export default {
  name: 'Home',
  components: {
    Frame,
  },
  data() {
    return {
      expresses: [
        {
          link:
            '//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=micafetera-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0763N7WMP&linkId=52121ebc26d3c598a3ff2a419e513cea',
        },
        {
          link:
            '//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=micafetera-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B06WGTZ874&linkId=917a399b37cc2ec89b0fb4f708d03026',
        },
        {
          link:
            '//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=micafetera-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07YFYS364&linkId=0f7fd2854005680b4a4a8c7992114e6e',
        },
        {
          link:
            '//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=micafetera-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07KJ5K22S&linkId=1b3f0e81c469c776c2990a3b04db0e84',
        },
        {
          link:
            '//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=micafetera-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07XBY42XM&linkId=49d1c0d0a39a3bcdc6dfb5f66c92e070',
        },
        {
          link:
            '//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=micafetera-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B01M9BF86K&linkId=8a26e67408d69ef1943e41b372f26851',
        },
      ],
      windowWidth: Math.min(window.innerWidth, 800),
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = Math.min(window.innerWidth, 800);
    };
  },
};
</script>

<style scoped>
p {
  line-height: 150%;
}
.section-body {
  display: flex;
  flex-direction: column;
}
.section-image {
  width: 100%;
}
@media only screen and (min-width: 768px) {
  .section-body {
    display: flex;
    flex-direction: row;
  }
  .section-image {
    width: 30%;
  }
}
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
