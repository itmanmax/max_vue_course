<template>
  <div class="component-page">
    <h2>组件示例</h2>
    <div class="demo-box">
      <ChildComp />
    </div>
  </div>
</template>

<script>
import ChildComp from '../components/DemoChild.vue'

export default {
  components: {
    ChildComp
  }
}
</script>

<style scoped>
.component-page {
  padding: 20px;
}

.demo-box {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
