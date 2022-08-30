<script lang="ts" setup>
import HelloWorld from '@renderer/components/HelloWorldIpc.vue'
</script>

<template>
  <div class="welcome">
    <img alt="Vue logo" class="logo" src="../../src/assets/logo.png">
    <HelloWorld title="Vite + Electron & Esbuild" />
  </div>
</template>

<style lang="scss" scoped>
.welcome {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
 }
.logo {
  width: 200px;
  border-radius: 1rem;
  box-shadow: 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>
