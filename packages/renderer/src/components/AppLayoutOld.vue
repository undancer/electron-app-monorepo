<script lang="ts" setup>
// import { useRoute } from 'vue-router'
// import { shallowRef, watch } from 'vue'
// import AppLayoutDefault from '@renderer/layouts/AppLayoutDefault.vue'
//
// const layout = shallowRef(AppLayoutDefault)
// const route = useRoute()
// watch(() => route.meta, async (meta) => {
//   try {
//     const component = Object.entries(import.meta.globEager('@renderer/layouts/*.vue'))
//       .filter(([key]) => key.endsWith(`/${meta.layout}.vue`))
//       .map<any>(([, value]) => value)
//       .find(c => c)
//
//     layout.value = component?.default || AppLayoutDefault
//   } catch (e) {
//     layout.value = AppLayoutDefault
//   }
// })
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
// console.log(route)

// console.log(route.meta)
console.log(router.options.routes)
// router.
</script>

<template>
  <div>
    border
  </div>
  <slot />
</template>

<!-- <template> -->
<!--  <component :is="layout"> -->
<!--    <slot /> -->
<!--  </component> -->
<!-- </template> -->

<style lang="scss" scoped>

</style>
