<template>
  <div class="slot-page">
    <h2>插槽示例</h2>

    <!-- 使用默认插槽内容的卡片 -->
    <div class="demo-box">
      <h3>默认插槽内容：</h3>
      <SlotCard />
    </div>

    <!-- 自定义插槽内容的卡片 -->
    <div class="demo-box">
      <h3>自定义插槽内容：</h3>
      <SlotCard>
        <template #header>
          <h3>自定义标题</h3>
        </template>

        <template #default>
          <p>{{ message }}</p>
          <p>这是自定义的主体内容</p>
        </template>

        <template #footer>
          <button>确定</button>
          <button>取消</button>
        </template>
      </SlotCard>
    </div>
  </div>
</template>

<script>
import SlotCard from '../components/SlotCard.vue'

export default {
  components: {
    SlotCard
  },
  data() {
    return {
      message: '这是动态插槽内容'
    }
  }
}
</script>

<style scoped>
.slot-page {
  padding: 20px;
}

.demo-box {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.demo-box h3 {
  margin-bottom: 15px;
  color: #2c3e50;
}

button {
  margin-left: 10px;
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
</style>
