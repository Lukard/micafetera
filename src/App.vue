<template>
  <div id="app">
    <Header></Header>
    <Menu></Menu>
    <Home></Home>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Home,
  },
};
</script>

<style>
#app {
  font-family: Questrial, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  left: 0;
  right: 0;
}
</style>
