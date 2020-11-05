<template>
  <div>
    <Header />
    <Menu />
    <CookiesBanner />
    <slot></slot>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Menu from '@/components/Menu.vue';
import CookiesBanner from '@/components/CookiesBanner.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Frame',
  components: {
    Header,
    Menu,
    CookiesBanner,
    Footer,
  },
};
</script>
