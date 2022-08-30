<script lang="ts" setup>
import { ref } from 'vue'
import AppButton from '@renderer/components/AppButton.vue'
// import appStore from '@renderer/stores'

const hidden = ref(false)
// const { ipc, store } = appStore

// console.log(store)

const clicked: EventListener = (e) => {
  hidden.value = !hidden.value
  // ipc.send('toggle', hidden.value)
  console.log('clicked', e, hidden)
}
</script>

<template>
  <!--  default layout -->
  <div class="header">
    <button class="no-drag" @click="clicked">
      cli
    </button>
    <router-link to="/browsing?url=https://www.baidu.com" class="no-drag">
      browsing
    </router-link>
  </div>
  <div class="aside" :class="{ hidden }">
    <div class="top">
      <AppButton icon="home" />
      <AppButton icon="chat-bubbles" />
      <AppButton icon="settings" />
    </div>
    <div class="bottom">
      <AppButton />
      <AppButton icon="chat-bubbles" />
      <AppButton icon="settings" />
    </div>
  </div>
  <main>
    <router-view />
  </main>
  <!--  <v-layout> -->
  <!--    <v-app-bar height="22" color="grey-darken-3" elevation="0" /> -->
  <!--    <v-navigation-drawer width="72" color="grey-darken-2" permanent /> -->
  <!--    <v-navigation-drawer width="150" color="grey-darken-1" permanent /> -->
  <!--    <v-app-bar height="48" color="grey" elevation="0" /> -->
  <!--    <v-navigation-drawer location="right" width="150" color="grey-lighten-1" permanent /> -->
  <!--    <v-app-bar location="bottom" height="48" color="grey-lighten-2" elevation="0" /> -->
  <!--    <v-main> -->
  <!--      <v-card elevation="0" height="400px" /> -->
  <!--    </v-main> -->
  <!--  </v-layout> -->
  <!--  <router-view /> -->
</template>

<style lang="scss" scoped>
:global(#app) { // 修改根节点
  //@apply bg-yellow-100;
}

$header-height: 10 * 0.25rem;
$aside-width: 10 * 0.25rem;

.header {
  //@apply bg-red-100;
  @apply bg-neutral-100;
  @apply w-full;
  @apply pl-18;
  height: $header-height; // h-10
  @apply border-b;
  //@apply border-yellow-500;
  @apply z-1000;
  @apply shadow shadow-gray-100;
}
.aside {
  //@apply bg-gray-600;
  @apply bg-neutral-100;
  //@apply w-0;
  //@apply w-10;
  @apply flex flex-col;
  @apply border-r border-neutral-200;
  width: $aside-width;
  height: calc(100vh - #{$header-height});
  //@apply z-2000;
  //@apply shadow shadow-gray-100;

  &.hidden {
    @apply hidden;
  }

  .top {
    //@apply border;
    //@apply bg-green-300;
    //@apply mx-auto;
    @apply flex flex-1;
    @apply flex flex-col;
  }

  .bottom {
    @apply mb-4;
    @apply flex flex-col;
  }

  //div {
  //  @apply border;
  //  @apply w-10 h-10;
  //  @apply text-center;
  //  @apply m-auto;
  //  //@apply text-center align-middle;
  //  //@apply px-auto py-auto mx-auto my-auto;
  //  //@apply justify-center;
  //  //@apply content-center place-content-center;
  //  //@apply items-center justify-items-center place-items-center;
  //  //@apply self-center justify-self-center place-self-center;
  //}

  //.bottom {
  //  @apply border;
  //  @apply flex;
  //  @apply absolute;
  //}

}

header {
  @apply w-full h-20 bg-red-100;
}

main {
  @apply flex flex-1;
  //@apply bg-yellow-200;
  height: calc(100vh - #{$header-height});
  @apply p-2;
}
</style>
