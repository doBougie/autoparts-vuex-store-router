<template>
  <div id="app">
    <app-navigation></app-navigation>
    <router-view/>
  </div>
</template>

<script>
import AppNavigation from "./components/Navigation";

export default {
  components: { AppNavigation }
}
</script>

<style lang="scss">
</style>

