<template>
  <header class="menu" v-if="windowWidth > 600">
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
  <div v-else-if="windowWidth <= 600" class="fab-container">
    <nav class="mobile-navigation" v-if="show">
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
    <button class="fab" @click="show = !show">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      windowWidth: window.innerWidth,
      show: false,
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
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
.fab-container {
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 1;
}
.fab {
  width: 56px;
  height: 56px;
  margin-right: 16px;
  margin-bottom: 16px;
  border-radius: 32px;
  background-color: #c6baad;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.fab:hover {
  background-color: #c6baada0;
}
.fab:focus {
  outline: none;
}
.bar {
  background-color: black;
  height: 4px;
  width: 28px;
  margin-top: 2px;
  margin-bottom: 2px;
}
.mobile-navigation {
  background-color: #c6baad;
  margin-right: 16px;
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 8px;
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
