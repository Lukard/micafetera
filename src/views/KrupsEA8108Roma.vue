<template>
  <Frame>
    <h1>Krups EA8108 Roma</h1>
    <p>
      Hoy os traemos una potente cafetera que sabrá sacarle el máximo partido a
      los granos de vuestro café favorito. Nos encontramos ante una cafetera
      superautomática lo que significa que solo tendremos que rellenar el
      depósito de agua y el depósito de granos de café para disfrutar de un buen
      café mañanero.
    </p>
    <div class="iframe-container">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/4zrl0Hspuxo?controls=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <h1>Componentes</h1>
    <div class="component-title">
      <PressureIcon />
      <h2>Presión</h2>
    </div>
    <p>
      Esta cafetera cuenta con una <b>potencia de 15 bares</b>, lo que nos
      permitirá mediante sus <b>3 niveles de intensidad</b> conseguir la
      potencia de sabor exacta que mas se ajuste a nuestros gustos.
    </p>
    <p>
      En la <b>parte superior</b> se encuentra la
      <b>bandeja donde depositaremos el café</b>
      para que posteriormente el molinillo incorporado muela el café con la
      fineza que hayamos indicado en la ruedecita que se encuentra en el
      interior de la bandeja.
    </p>
    <div class="component-title">
      <SteamIcon />
      <h2>Boquilla de vapor</h2>
    </div>
    <p>
      El aparato dispone de boquilla de vapor. Lo que nos permitirá calentar la
      leche y preparar una espuma muy cremosa para nuestros preciados
      capuchinos.
    </p>
    <div class="component-title">
      <WaterDepositIcon />
      <h2>Depósito de agua</h2>
    </div>
    <p>
      Con una <b>capacidad de 1.7 litros</b>, este depósito de agua nos
      permitirá preparar una buena cantidad de café antes de tenerlo que
      rellenar de nuevo.
    </p>
    <p>
      <b>El depósito se encuentra en la parte posterior</b>. Hay que tener este
      detalle en cuenta dependiendo del lugar donde vayamos a situar nuestra
      cafetera ya que puede entorpecer su retirada e incorporación.
    </p>
    <div class="component-title">
      <CoffeeDepositIcon />
      <h2>Depósito de posos de café</h2>
    </div>
    <p>
      El depósito de café se encuentra <b>situado en la parte izquierda</b> del
      aparato. De nuevo es necesario tener en cuenta este dato de cara a su
      colocación para no entorpercer la retirada de los posos.
    </p>
    <div class="component-title">
      <SizeIcon />
      <h2>Tamaño</h2>
    </div>
    <p>
      La Krups EA 8108 Roma tiene unas <b>dimensiones de 36.5 x 26 x 32 cm</b> y
      <b>pesa 7 kg</b>.
    </p>
    <div class="component-title">
      <MoneyIcon />
      <h2>Precio</h2>
    </div>
    <p
      v-html="
        previousPrice != null
          ? 'Anteriormente esta cafetera tenía un precio \
      de <del> ' +
            previousPrice +
            '</del>, pero actualmente está disponible por un <b>precio de ' +
            price +
            '</b>.'
          : 'Esta cafetera está disponible actualmente por un <b>precio de ' +
            price +
            '</b>.'
      "
    ></p>
    <AffiliateItem
      productUrl="https://www.amazon.es/Krups-EA8108-s%C3%BAper-autom%C3%A1tica-selecci%C3%B3n-intensidad/dp/B00INSX904"
      affiliateUrl="https://amzn.to/3cLWfen"
      relevant
    />
    <h1>Limpieza de la cafetera</h1>
    <p>
      Con el fin de alargar la vida útil de nuestra Krups Roma es recomendable
      utilizar periódicamente <b>pastillas limpiadoras</b>. De esta manera
      conseguiremos descalcificar y eliminar los depósitos y residuos grasos que
      desprende el café en el recorrido que toma por la máquina antes de llegar
      a nuestra taza.
    </p>
    <div class="cleaning-affiliate">
      <AffiliateItem
        productUrl="https://www.amazon.es/Krups-3000-Pastillas-limpiadoras-Espresseria/dp/B000CELRGU"
        affiliateUrl="https://amzn.to/31VC33o"
      />
      <AffiliateItem
        productUrl="https://www.amazon.es/Krups-XS3000-Pastillas-limpieza-unidades/dp/B0060KKKFY"
        affiliateUrl="https://amzn.to/3mySPi0"
      />
      <AffiliateItem
        productUrl="https://www.amazon.es/Krups-XS3000-Pastillas-limpieza-unidades/dp/B0060KLMZ6"
        affiliateUrl="https://amzn.to/3s9uQre"
      />
    </div>
    <h1>Opiniones</h1>
    <Opinion
      title="Una maravilla"
      author="Loco Aviador"
      date="4 de abril de 2021"
      rating="5"
    >
      Totalmente recomendable para los "cafeteros". Se puede ajustar desde la
      intensidad del molido del grano de café hasta la cantidad de agua que
      quieres. Rápida, cómoda, fácil de usar, autolimpiable........ Lo dicho,
      una auténtica maravilla.
    </Opinion>
    <Opinion
      title="Cafetera de 10"
      author="Eduardo"
      date="26 de marzo de 2021"
      rating="5"
    >
      Se estropeó la cafetera de capsulas y nos decidimos por una automática que
      a muy corto plazo la amortizas y además contaminando menos. Elegimos esta
      marca y modelo en concreto porque seguramente sea la más compacta. No soy
      un experto en cafeteras ni mucho menos así que mis impresiones
      comparandola con la anterior son muy simples: <br />- Enciende casi tan
      rápido como la otra <br />- Fácil de usar <br />- Se nota diferencia en el
      sabor de cafe, esta muy bueno <br />- Hace un poco ruido al moler el café
      (lógicamente) <br />- Gran depósito de agua <br />Con un poco de tiempo
      intentaré sacarle partido al vaporizador. <br />Estoy contento con la
      compra
    </Opinion>
    <Opinion
      title="Buen café."
      author="Marta Roibás Varela"
      date="24 de marzo de 2021"
      rating="5"
    >
      Estamos muy satisfechos con la cafetera, la compramos para sustituir a una
      de cápsulas y no hay color, el café está más bueno, ahorramos dinero y
      contaminamos menos.
    </Opinion>
    <Opinion
      title="De las mejores compras que he hecho"
      author="Mila"
      date="21 de marzo de 2021"
      rating="5"
    >
      Me encanta 😋! Válido para prácticamente todos los vasos/tazas y el café
      sale buenísimo. Sin duda una muy buena compra.
    </Opinion>
    <Opinion
      title="Calidad del material mejorable"
      author="Cristobal R."
      date="8 de marzo de 2021"
      rating="4"
    >
      El café que hace es fantástico, pero me ha decepcionado un poco la calidad
      de los materiales. Quiero verla con el paso del tiempo, pero hasta ahora
      estamos contentos con la calidad del café, que al final de eso se trata.
    </Opinion>
    <h1>Imprescindible para tu nueva cafetera</h1>
    <div class="cleaning-affiliate margin-bottom">
      <AffiliateItem
        productUrl="https://www.amazon.es/Lavazza-Qualit%C3%A0-Oro-1kg-Granos/dp/B0049U0DMC"
        affiliateUrl="https://amzn.to/3uzBnwF"
      />
      <AffiliateItem
        productUrl="https://www.amazon.es/DeLonghi-5513214591-espresso-unidades-transparente/dp/B004MALMT2"
        affiliateUrl="https://amzn.to/3rYCpAF"
      />
      <AffiliateItem
        productUrl="https://www.amazon.es/inoxidable-medici%C3%B3n-art%C3%ADstico-perfectas-Cappuccino/dp/B07CQH8RRJ"
        affiliateUrl="https://amzn.to/39SsLcI"
      />
    </div>
  </Frame>
</template>

<script>
import Frame from "@/components/Frame.vue";
import Opinion from "@/components/Opinion.vue";
import WaterDepositIcon from "@/components/icons/WaterDepositIcon.vue";
import PressureIcon from "@/components/icons/PressureIcon.vue";
import SizeIcon from "@/components/icons/SizeIcon.vue";
import SteamIcon from "@/components/icons/SteamIcon.vue";
import CoffeeDepositIcon from "@/components/icons/CoffeeDepositIcon.vue";
import MoneyIcon from "@/components/icons/MoneyIcon.vue";
import AffiliateItem from "@/components/AffiliateItem";

import { getArticleInfo } from "@/utils/articleInfo.js";

export default {
  name: "KrupsEA8108Roma",
  components: {
    Frame,
    WaterDepositIcon,
    PressureIcon,
    SizeIcon,
    SteamIcon,
    CoffeeDepositIcon,
    MoneyIcon,
    Opinion,
    AffiliateItem,
  },
  data() {
    return {
      image: null,
      title: null,
      price: "329,40 €",
      previousPrice: null,
      cleaningPills: null,
    };
  },
  mounted: async function () {
    let info = await getArticleInfo(
      "https://www.amazon.es/Krups-EA8108-s%C3%BAper-autom%C3%A1tica-selecci%C3%B3n-intensidad/dp/B00INSX904"
    );
    this.price = info.price;
    this.previousPrice = info.previousPrice;
    this.image = info.image;
    this.title = info.title;
  },
};
</script>

<style scoped>
iframe {
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  position: absolute;
}

.iframe-container {
  width: 100%;
  padding-top: 56.25%;
  position: relative;
}

.component-title {
  display: flex;
}

h2 {
  margin: 0;
  padding-left: 8px;
}

p {
  line-height: 150%;
  font-size: large;
}

.buy {
  background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
  border-color: #a88734 #9c7e31 #846a29;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset;
  padding: 12px 12px 12px 36px;
  text-align: center;
  position: relative;
  cursor: pointer;
  margin-top: 16px;
  width: calc(100% - 16);
  display: block;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 768px) {
  .buy {
    width: 200px;
  }
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
  left: 4px;
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
.cleaning-affiliate {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 16px;
}
.margin-bottom {
  margin-bottom: 16px;
}
</style>

