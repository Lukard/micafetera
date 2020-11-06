<template>
  <div class="footer">
    <router-link :to="{ name: 'Cookies' }" rel="política de cookies">
      Política de cookies
    </router-link>
    <router-link :to="{ name: 'Privacy' }" rel="política de cookies">
      Política de privacidad
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
  padding: 16px 16px 0px 16px;
  display: flex;
  flex-direction: column;
}
a {
  text-decoration: inherit;
  color: inherit;
  margin-bottom: 16px;
}
</style>
