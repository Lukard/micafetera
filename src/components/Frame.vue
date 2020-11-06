<template>
  <div>
    <Header />
    <Menu />
    <CookiesBanner />
    <main class="content">
      <slot></slot>
    </main>
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

<style scoped>
.content {
  margin-top: 16px;
  max-width: 800px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
}
</style>
