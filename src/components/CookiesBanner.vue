<template>
  <transition name="slide">
    <div class="banner" v-if="show">
      <div class="container">
        <div>
          Usamos cookies.
          <router-link :to="{ name: 'Cookies' }" taget="_blank"
            >Leer más</router-link
          >
        </div>
        <button @click="setCookiesBannerAccepted">OK</button>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue';
import VueCookies from 'vue-cookies';

export default {
  name: 'CookiesBanner',
  data() {
    return {
      show: false,
    };
  },
  methods: {
    setCookiesBannerAccepted: function() {
      this.show = false;
      this.$cookies.set('areCookiesAccepted', true);
    },
  },
  created() {
    Vue.use(VueCookies);
    this.show = 'true' !== this.$cookies.get('areCookiesAccepted');
  },
};
</script>

<style scoped>
.banner {
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #c6baad;
  z-index: 2;
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
}

button {
  width: 128px;
  height: 32px;
  color: white;
  background-color: black;
  border: 4px solid black;
  border-radius: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #000000e0;
  border: 0px solid #000000e0;
}

button:focus {
  outline: none;
}

.slide-enter-active {
  transition: all 0.3s ease;
  opacity: 1;
}

.slide-leave-active {
  transition: all 0.3s ease;
  opacity: 0;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
