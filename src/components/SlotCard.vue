<template>
  <div class="slot-card">
    <div class="card-header">
      <slot name="header">
        <h3>默认标题</h3>
      </slot>
    </div>

    <div class="card-body">
      <slot>
        <p>这是默认内容，当没有传入内容时显示</p>
      </slot>
    </div>

    <div class="card-footer">
      <slot name="footer">
        <button>默认按钮</button>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.slot-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.card-header {
  background-color: #f8f8f8;
  padding: 15px;
  border-bottom: 1px solid #ddd;
}

.card-body {
  padding: 20px;
}

.card-footer {
  background-color: #f8f8f8;
  padding: 15px;
  border-top: 1px solid #ddd;
  text-align: right;
}
</style>
