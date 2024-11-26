<template>
  <div class="lifecycle-page">
    <h2>生命周期和模板引用</h2>
    <div class="demo-box">
      <p ref="messageRef">等待组件挂载...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const messageRef = ref(null)

onMounted(() => {
  // 在组件挂载后修改引用元素的内容
  messageRef.value.textContent = '组件已挂载完成！'
})
</script>

<style scoped>
.lifecycle-page {
  padding: 20px;
}

.demo-box {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
