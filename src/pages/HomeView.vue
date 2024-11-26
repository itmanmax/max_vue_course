<script setup>
</script>

<template>
  <div class="home">
    <h1>zhn学习Vue！</h1>
    <div class="content">
      <h2>学习内容概览：</h2>
      <div class="course-list">
        <div class="course-item">
          <h3>生命周期和模板引用</h3>
          <p>学习Vue组件的生命周期钩子函数和如何使用模板引用来操作DOM</p>
        </div>

        <div class="course-item">
          <h3>侦听器</h3>
          <p>了解如何使用watch和watchEffect来响应数据的变化</p>
        </div>

        <div class="course-item">
          <h3>组件</h3>
          <p>掌握Vue组件的基本概念和使用方法</p>
        </div>

        <div class="course-item">
          <h3>Props</h3>
          <p>学习组件之间如何通过Props传递数据</p>
        </div>

        <div class="course-item">
          <h3>Emits</h3>
          <p>理解组件间的事件通信机制</p>
        </div>

        <div class="course-item">
          <h3>插槽</h3>
          <p>掌握如何使用插槽来实现组件的内容分发</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  padding: 20px;
}

h1 {
  color: #42b883;
  font-size: 2.5em;
  margin-bottom: 30px;
}

h2 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.course-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
}

.course-item {
  background: #f8f8f8;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.course-item:hover {
  transform: translateY(-5px);
}

.course-item h3 {
  color: #42b883;
  margin-bottom: 10px;
}

.course-item p {
  color: #666;
  line-height: 1.6;
}
</style>
