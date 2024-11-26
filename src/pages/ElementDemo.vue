<script setup>
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <div class="element-page">
    <h2>Element Plus 测试</h2>
    <div class="demo-box">
      <!-- 输入框 -->
      <div class="demo-section">
        <h3>输入框</h3>
        <el-input
          v-model="input"
          placeholder="请输入内容"
          style="width: 200px"
        />
      </div>

      <!-- 按钮 -->
      <div class="demo-section">
        <h3>按钮类型</h3>
        <div class="button-group">
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.element-page {
  padding: 20px;
}

.demo-box {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.demo-section {
  margin-bottom: 20px;
}

.demo-section h3 {
  margin-bottom: 15px;
  color: #2c3e50;
}

.button-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
