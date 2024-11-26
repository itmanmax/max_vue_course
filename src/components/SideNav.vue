<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="sidebar">
    <h2>Vue学习导航</h2>
    <nav>
      <RouterLink to="/">首页</RouterLink>
      <RouterLink to="/lifecycle">9. 生命周期和模板引用</RouterLink>
      <RouterLink to="/watchers">10. 侦听器</RouterLink>
      <RouterLink to="/components">11. 组件</RouterLink>
      <RouterLink to="/props">12. Props</RouterLink>
      <RouterLink to="/emits">13. Emits</RouterLink>
      <RouterLink to="/slots">14. 插槽</RouterLink>
      <RouterLink to="/success">15. 你做到了！</RouterLink>
      <RouterLink to="/element">Element Plus 测试</RouterLink>
      <RouterLink to="/element-practice">Element Plus 练习</RouterLink>
      <RouterLink to="/element-basic">Element基础组件</RouterLink>
      <RouterLink to="/element-events">Element组件事件</RouterLink>
      <RouterLink to="/element-layout">Element响应式布局</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #f4f4f4;
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

nav a {
  padding: 10px;
  text-decoration: none;
  color: #333;
  border-radius: 4px;
}

nav a:hover {
  background-color: #e0e0e0;
}

nav a.router-link-active {
  background-color: #42b883;
  color: white;
}
</style>
