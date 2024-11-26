<template>
  <div class="emits-page">
    <h2>Emits 示例</h2>
    <div class="demo-box">
      <div class="chat-container">
        <!-- 消息记录区 -->
        <div class="message-history">
          <div v-for="(msg, index) in messages"
               :key="index"
               :class="['message', msg.type]">
            <span class="content">{{ msg.content }}</span>
            <span class="time">{{ msg.time }}</span>
          </div>
        </div>

        <!-- 子组件 -->
        <MessageChat
          :last-received="lastReceived"
          @send-message="handleMessage($event, 'sent')"
          @reply-message="handleMessage($event, 'received')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MessageChat from '../components/MessageChat.vue'

export default {
  components: {
    MessageChat
  },
  data() {
    return {
      messages: [], // 存储所有的消息记录
      lastReceived: '' // 最后一条接收到的消息
    }
  },
  methods: {
    handleMessage(msg, type) {
      const newMessage = {
        content: msg,
        type: type,
        time: new Date().toLocaleTimeString()
      }
      this.messages.push(newMessage)
      if (type === 'received') {
        this.lastReceived = msg
      }
    }
  }
}
</script>

<style scoped>
.emits-page {
  padding: 20px;
}

.demo-box {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.chat-container {
  max-width: 600px;
  margin: 0 auto;
}

.message-history {
  height: 300px;
  overflow-y: auto;
  border: 1px solid #eee;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
}

.message {
  margin: 8px 0;
  padding: 8px 12px;
  border-radius: 8px;
  max-width: 80%;
}

.sent {
  background-color: #42b883;
  color: white;
  margin-left: auto;
}

.received {
  background-color: #f5f5f5;
  margin-right: auto;
}

.time {
  font-size: 0.8em;
  margin-left: 8px;
  opacity: 0.7;
}
</style>
