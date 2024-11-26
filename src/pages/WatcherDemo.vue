<template>
  <div class="watcher-page">
    <h2>侦听器示例</h2>
    <div class="demo-box">
      <p>待办事项 ID: {{ todoId }}</p>
      <button @click="todoId++" :disabled="!todoData">获取下一个待办事项</button>

      <div class="todo-display">
        <p v-if="!todoData">正在加载...</p>
        <div v-else class="todo-info">
          <p><span>编号：</span>{{ todoData.id }}</p>
          <p><span>标题：</span>{{ todoData.title }}</p>
          <p><span>状态：</span>{{ todoData.completed ? '已完成' : '未完成' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
}

// 组件挂载时获取数据
fetchData()

// 侦听器：当 todoId 变化时重新获取数据
watch(todoId, () => {
  fetchData()
})
</script>

<style scoped>
.watcher-page {
  padding: 20px;
}

.demo-box {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

button {
  margin: 10px 0;
  padding: 8px 16px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #a8a8a8;
  cursor: not-allowed;
}

.todo-display {
  margin-top: 20px;
}

.todo-info {
  padding: 15px;
  background-color: #f8f8f8;
  border-radius: 4px;
}

.todo-info p {
  margin: 8px 0;
}

.todo-info span {
  font-weight: bold;
  margin-right: 10px;
}
</style>
