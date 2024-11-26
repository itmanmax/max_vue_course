<template>
  <div class="user-card">
    <h3>用户信息卡片</h3>
    <p>用户名：{{ username }}</p>
    <p>年龄：{{ age }}</p>
    <p>会员状态：{{ isVip ? 'VIP会员' : '普通用户' }}</p>
  </div>
</template>

<script>
export default {
  props: {
    username: String,
    age: Number,
    isVip: Boolean
  }
}
</script>

<style scoped>
.user-card {
  padding: 15px;
  background-color: #f8f8f8;
  border-radius: 4px;
}

.user-card h3 {
  color: #42b883;
  margin-bottom: 10px;
}

.user-card p {
  margin: 8px 0;
}
</style>
