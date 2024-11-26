<template>
  <div class="message-sender">
    <input v-model="message" placeholder="请输入消息">
    <button @click="sendMessage">发送消息</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['send-message'])
const message = ref('')

const sendMessage = () => {
  emit('send-message', message.value)
  message.value = ''
}
</script>
