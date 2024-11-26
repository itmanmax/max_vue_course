<script setup>
import { ref } from 'vue'

const input = ref('')
const radio = ref('1')
const checkbox = ref([])
const select = ref('')

// 删除未使用的handleClick函数
</script>

<template>
  <div class="basic-demo">
    <el-card class="demo-card">
      <template #header>
        <h3>Element Plus 基础组件</h3>
      </template>

      <!-- 按钮组件 -->
      <div class="section">
        <h4>按钮</h4>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </div>

      <!-- 输入框组件 -->
      <div class="section">
        <h4>输入框</h4>
        <el-input v-model="input" placeholder="请输入内容" />
      </div>

      <!-- 单选框组件 -->
      <div class="section">
        <h4>单选框</h4>
        <el-radio-group v-model="radio">
          <el-radio label="1">选项1</el-radio>
          <el-radio label="2">选项2</el-radio>
        </el-radio-group>
      </div>

      <!-- 复选框组件 -->
      <div class="section">
        <h4>复选框</h4>
        <el-checkbox-group v-model="checkbox">
          <el-checkbox label="选项1" />
          <el-checkbox label="选项2" />
          <el-checkbox label="选项3" />
        </el-checkbox-group>
      </div>

      <!-- 选择器组件 -->
      <div class="section">
        <h4>选择器</h4>
        <el-select v-model="select" placeholder="请选择">
          <el-option label="选项1" value="1" />
          <el-option label="选项2" value="2" />
        </el-select>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.basic-demo {
  padding: 20px;
}

.demo-card {
  max-width: 800px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 4px;
}

.section h4 {
  margin-bottom: 10px;
  color: #409EFF;
}

.el-button {
  margin-right: 10px;
}
</style>
