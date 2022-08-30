<script lang="ts" setup>
</script>

<template>
  <div class="control">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.control {
  @apply w-screen h-screen;
  @apply container mx-auto my-4 px-4;
  @apply bg-red-200;
}
</style>
