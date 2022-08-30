<!-- <script setup lang="ts"> -->
<!-- // This starter template is using Vue 3 <script setup> SFCs -->
<!-- // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup -->
<!-- import HelloWorld from './components/HelloWorld.vue' -->
<!-- import Message from './components/Message.vue' -->
<!-- </script> -->

<script lang="ts" setup>
const { ipc } = window
ipc?.on('route', (event, args) => {
  console.log('route', event, args)
})
</script>

<!-- <template> -->
<!--  <div> -->
<!--    <a href="https://vitejs.dev" target="_blank"> -->
<!--      <img src="/vite.svg" class="logo" alt="Vite logo"> -->
<!--    </a> -->
<!--    <a href="https://vuejs.org/" target="_blank"> -->
<!--      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo"> -->
<!--    </a> -->
<!--  </div> -->
<!--  <HelloWorld msg="Vite + Vue" /> -->
<!-- </template> -->

<template>
  <router-view />
</template>

<!-- <style scoped> -->
<!-- .logo { -->
<!--  height: 6em; -->
<!--  padding: 1.5em; -->
<!--  will-change: filter; -->
<!-- } -->
<!-- .logo:hover { -->
<!--  filter: drop-shadow(0 0 2em #646cffaa); -->
<!-- } -->
<!-- .logo.vue:hover { -->
<!--  filter: drop-shadow(0 0 2em #42b883aa); -->
<!-- } -->
<!-- </style> -->
<style lang="scss">
@import "./style.scss";
</style>

<style lang="scss" scoped>
</style>

<!-- <style lang="scss" scoped> -->
<!-- :global(#app){ -->
<!--  @apply font-sans text-base; -->
<!--  @apply flex flex-1; -->
<!--  @apply flex-wrap; -->
<!--  @apply w-screen h-screen; -->
<!--  @apply drag; -->
<!-- } -->
<!-- </style> -->

<!-- &lt;!&ndash; <style> &ndash;&gt; -->
<!-- &lt;!&ndash; #app { &ndash;&gt; -->
<!-- &lt;!&ndash;  font-family: Avenir, Helvetica, Arial, sans-serif; &ndash;&gt; -->
<!-- &lt;!&ndash;  -webkit-font-smoothing: antialiased; &ndash;&gt; -->
<!-- &lt;!&ndash;  -moz-osx-font-smoothing: grayscale; &ndash;&gt; -->
<!-- &lt;!&ndash;  text-align: center; &ndash;&gt; -->
<!-- &lt;!&ndash;  color: #2c3e50; &ndash;&gt; -->
<!-- &lt;!&ndash;  margin-top: 60px; &ndash;&gt; -->
<!-- &lt;!&ndash; } &ndash;&gt; -->

<!-- &lt;!&ndash; .logo { &ndash;&gt; -->
<!-- &lt;!&ndash;  width: 400px; &ndash;&gt; -->
<!-- &lt;!&ndash;  border-radius: 1rem; &ndash;&gt; -->
<!-- &lt;!&ndash;  box-shadow: 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25); &ndash;&gt; -->
<!-- &lt;!&ndash; } &ndash;&gt; -->
<!-- &lt;!&ndash; </style> &ndash;&gt; -->
