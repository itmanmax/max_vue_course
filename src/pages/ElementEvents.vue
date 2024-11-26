<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

const form = reactive({
  name: '',
  email: '',
  type: ''
})

const rules = {
  name: [
    { required: true, message: '请输入名称', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ]
}

const formRef = ref(null)

const handleSubmit = async () => {
  if (!formRef.value) return
  await formRef.value.validate((valid) => {
    if (valid) {
      ElMessage.success('提交成功！')
    } else {
      ElMessage.error('表单验证失败！')
    }
  })
}

const handleReset = () => {
  formRef.value?.resetFields()
}

const activeIndex = ref('1')
</script>

<template>
  <div class="events-demo">
    <el-card class="demo-card">
      <template #header>
        <h3>组件属性和事件</h3>
      </template>

      <!-- 导航菜单 -->
      <el-menu
        :default-active="activeIndex"
        class="demo-menu"
        mode="horizontal"
        @select="(index) => activeIndex = index"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="2">我的工作台</el-menu-item>
        <el-menu-item index="3">消息中心</el-menu-item>
      </el-menu>

      <!-- 表单 -->
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="100px"
        class="demo-form"
      >
        <el-form-item label="名称" prop="name">
          <el-input
            v-model="form.name"
            placeholder="请输入名称"
            clearable
            @clear="() => ElMessage.info('内容已清空')"
          />
        </el-form-item>

        <el-form-item label="邮箱" prop="email">
          <el-input
            v-model="form.email"
            placeholder="请输入邮箱"
          />
        </el-form-item>

        <el-form-item label="类型">
          <el-select
            v-model="form.type"
            placeholder="请选择类型"
            @change="(val) => ElMessage.info(`选择了: ${val}`)"
          >
            <el-option label="类型一" value="1" />
            <el-option label="类型二" value="2" />
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleSubmit">提交</el-button>
          <el-button @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style scoped>
.events-demo {
  padding: 20px;
}

.demo-card {
  max-width: 800px;
  margin: 0 auto;
}

.demo-menu {
  margin-bottom: 20px;
}

.demo-form {
  margin-top: 20px;
}
</style>
