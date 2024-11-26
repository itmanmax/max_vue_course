<script>
export default {
  props: {
    lastReceived: String
  },
  data() {
    return {
      inputMessage: '',
      replyMessage: ''
    }
  },
  methods: {
    sendMessage() {
      if (this.inputMessage.trim()) {
        // 发送消息给父组件
        this.$emit('send-message', this.inputMessage)
        this.inputMessage = ''
      }
    },
    sendReply() {
      if (this.replyMessage.trim()) {
        // 发送回复消息给父组件
        this.$emit('reply-message', this.replyMessage)
        this.replyMessage = ''
      }
    }
  }
}
</script>

<template>
  <div class="message-chat">
    <!-- 发送消息区域 -->
    <div class="input-area">
      <input
        v-model="inputMessage"
        @keyup.enter="sendMessage"
        placeholder="输入发送的消息，按回车发送"
      >
      <button @click="sendMessage">发送</button>
    </div>

    <!-- 回复消息区域 -->
    <div class="input-area reply-area">
      <input
        v-model="replyMessage"
        @keyup.enter="sendReply"
        placeholder="输入回复的消息，按回车发送"
      >
      <button @click="sendReply">回复</button>
    </div>

    <div class="last-received" v-if="lastReceived">
      最后收到的消息: {{ lastReceived }}
    </div>
  </div>
</template>

<style scoped>
.message-chat {
  padding: 15px;
  border-radius: 8px;
  background-color: #f8f8f8;
}

.input-area {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.reply-area {
  margin-top: 10px;
}

input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3aa876;
}

.last-received {
  margin-top: 10px;
  font-size: 0.9em;
  color: #666;
}
</style>
