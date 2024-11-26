<script setup>
// 如果不需要这个函数可以直接删除
// const generateContent = (text) => `${text}内容`
</script>

<template>
  <div class="layout-demo">
    <el-card class="demo-card">
      <template #header>
        <h3>响应式布局示例</h3>
      </template>

      <!-- 基础栅格 -->
      <div class="section">
        <h4>基础栅格</h4>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content">6列</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">6列</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">6列</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">6列</div>
          </el-col>
        </el-row>
      </div>

      <!-- 响应式栅格 -->
      <div class="section">
        <h4>响应式栅格</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
            <div class="grid-content">响应式列</div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
            <div class="grid-content">响应式列</div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
            <div class="grid-content">响应式列</div>
          </el-col>
        </el-row>
      </div>

      <!-- 容器布局 -->
      <div class="section">
        <h4>容器布局</h4>
        <el-container class="demo-container">
          <el-header>Header</el-header>
          <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>Main</el-main>
          </el-container>
          <el-footer>Footer</el-footer>
        </el-container>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.layout-demo {
  padding: 20px;
}

.demo-card {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 30px;
}

.section h4 {
  margin-bottom: 15px;
  color: #409EFF;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background: #409EFF;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.demo-container {
  border: 1px solid #eee;
  border-radius: 4px;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
