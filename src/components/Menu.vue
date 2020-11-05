<template>
  <header class="menu">
    <nav class="navigation">
      <ul class="navigation-item">
        Automática
      </ul>
      <ul class="navigation-item">
        Express
      </ul>
      <ul class="navigation-item">
        Italiana
      </ul>
      <ul class="navigation-item">
        De goteo
      </ul>
      <ul class="navigation-item">
        De émbolo
      </ul>
      <ul class="navigation-item">
        De cápsulas
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Menu',
};
</script>

<style scoped>
.menu {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
}
.navigation {
  display: flex;
  justify-content: center;
}
.navigation-item {
  margin-left: 8px;
  margin-right: 8px;
  padding-inline-start: 0px;
}
</style>
