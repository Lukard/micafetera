<template>
  <div class="header-image-container">
    <router-link :to="{ name: 'Home' }" class="header-image" rel="home">
      <img src="../assets/micafetera.webp" alt="Mi Cafetera" width="100%" />
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
  width: 100%;
  margin: 16px;
}
@media (min-width: 768px) {
  .header-image {
    width: 60%;
    max-width: 1024px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
}
</style>
