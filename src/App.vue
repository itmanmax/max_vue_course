<script setup>
import { RouterView } from 'vue-router'
import SideNav from './components/SideNav.vue'
</script>

<template>
  <div class="container">
    <SideNav />
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
  margin-left: 250px;
  width: calc(100% - 250px);
}
</style>
