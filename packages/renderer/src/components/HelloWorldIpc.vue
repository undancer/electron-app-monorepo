<script lang="ts" setup>
// import { sendMsgToMainProcess } from '@renderer/api'
import appStore from '@renderer/stores'
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Vite + Electron & Esbuild',
  },
})

const log = ref('')
const msg = ref('')

const sendMsg = async () => {
  try {
    log.value += `[render]: ${msg.value} \n`
    const data = ''
    // const { data } = await sendMsgToMainProcess(msg.value)
    log.value += `[main]: ${data}  \n`
  } catch (error) {
    console.error(error)
  }
}

// const { ipc } = appStore

// ipc.on('reply-msg', (msg: string) => {
//   log.value += `[main]: ${msg}  \n`
// })
</script>

<template>
  <h1>{{ props.title }}</h1>

  <textarea v-model="log" cols="60" disabled rows="10" />
  <div style="margin-top: 20px">
    <input v-model="msg" placeholder="send msg to main process" type="text">
    <button style="margin-left: 20px" @click="sendMsg">
      Send
    </button>
  </div>
</template>

<style>
</style>
