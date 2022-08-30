<route lang="yaml">
meta:
  layout: default
</route>

<script lang="ts" setup>
import { toRefs } from 'vue-demi'
import { useRoute } from 'vue-router'
import Message from '../components/Message.vue'
// const { t } = getCurrentInstance()?.appContext.config.globalProperties
// console.log(t)

const { url } = toRefs(useRoute().query)
console.log('browsing')
</script>

<template>
  <div>
    浏览器
    browsing
    {{ url }}
    <Message />
  </div>
</template>

<style lang="scss" scoped>

</style>
