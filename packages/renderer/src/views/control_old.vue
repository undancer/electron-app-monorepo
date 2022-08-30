<script lang="ts" setup>
// import { create } from 'vue-demi'

// const emit = defineEmits({
//   send: (value) => {
//     console.log('emit', value)
//     return true
//   },
// })

// console.log('ipc', this.ipc)

const click = (event: Event, ...args: any[]) => {
  const { ipc } = window
  ipc?.invoke('click', ...args).then(({ data }) => {
    console.log(data)
  })

  // console.log('click', (event.target! as HTMLButtonElement).value)
}

const route = (event: Event, ...args: any[]) => {
  const { ipc } = window
  ipc?.invoke('route', ...args)
    .then(({ data }) => {
      console.log(data)
    })
}
</script>

<template>
  <div class="panel">
    <button class="btn btn-default" @click="(event) => route(event, 'browsing')">
      GoTo Browsing
    </button>
    <button
      v-for="index in 16"
      :key="`btn-${index}`"
      class="btn"
      @click="(event) => click(event, index)"
    >
      按钮 {{ index }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.panel {
  @apply grid grid-cols-4 grid-rows-4 gap-1;
  //@apply bg-red-200 w-screen h-screen m-1;
}
.btn {
  @apply focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 ring-0 ring-blue-500;
  @apply mx-1;
}
</style>
