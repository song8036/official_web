<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0)
    })
  },
}
</script>

<style>
body {
  margin: 0;
}
a {
  text-decoration: none;
}
* {
  font-family: PingFang SC, PingFang SC-Semibold;
}

.fx-row {
  display: flex;
  flex-direction: row;
}

.fx-col {
  display: flex;
  flex-direction: column;
}
</style>
