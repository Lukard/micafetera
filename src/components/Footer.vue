<template>
  <div class="footer">
    <router-link :to="{ name: 'Cookies' }" rel="política de cookies">
      Política de cookies
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
div {
  border-top: 1px solid black;
  padding: 16px;
}
a {
  text-decoration: inherit;
  color: inherit;
}
</style>
