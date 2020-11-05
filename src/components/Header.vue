<template>
  <div class="header-image-container">
    <router-link to="/" class="header-image" rel="home">
      <img src="../assets/micafetera.png" alt="Mi Cafetera" width="100%" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header-image-container {
  display: flex;
  justify-content: center;
}
.header-image {
  width: 60%;
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
