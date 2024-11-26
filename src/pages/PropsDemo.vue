<template>
  <div class="props-page">
    <h2>Props 示例</h2>
    <div class="demo-box">
      <UserCard
        :username="username"
        :age="age"
        :is-vip="isVip"
      />
    </div>
  </div>
</template>

<script>
import UserCard from '../components/UserCard.vue'

export default {
  components: {
    UserCard
  },
  data() {
    return {
      username: '张三',
      age: 25,
      isVip: true
    }
  }
}
</script>

<style scoped>
.props-page {
  padding: 20px;
}

.demo-box {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
