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
  try {
    const valid = await formRef.value.validate()
    if (valid) {
      ElMessage.success('提交成功！')
      console.log(form)
    }
  } catch (error) {
    ElMessage.error('表单验证失败！')
    console.log('验证失败', error)
  }
}

const handleReset = () => {
  if (formRef.value) {
    formRef.value.resetFields()
  }
}

const activeIndex = ref('1')
</script>

<template>
  <div class="element-practice">
    <el-card class="page-card">
      <template #header>
        <div class="card-header">
          <h2>Element Plus 组件练习</h2>
        </div>
      </template>

      <!-- 标签页 -->
      <el-tabs v-model="activeIndex">
        <!-- 表单标签页 -->
        <el-tab-pane label="表单组件" name="1">
          <el-form
            ref="formRef"
            :model="form"
            :rules="rules"
            label-width="100px"
            status-icon
          >
            <!-- 基础信息 -->
            <el-form-item label="姓名" prop="name">
              <el-input v-model="form.name" placeholder="请输入姓名" />
            </el-form-item>

            <el-form-item label="邮箱" prop="email">
              <el-input v-model="form.email" placeholder="请输入邮箱" />
            </el-form-item>

            <el-form-item label="年龄" prop="age">
              <el-input-number v-model="form.age" :min="1" :max="120" />
            </el-form-item>

            <!-- 选择项 -->
            <el-form-item label="兴趣爱好">
              <el-checkbox-group v-model="form.hobby">
                <el-checkbox label="阅读" />
                <el-checkbox label="运动" />
                <el-checkbox label="音乐" />
                <el-checkbox label="旅行" />
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="性别">
              <el-radio-group v-model="form.gender">
                <el-radio label="男" />
                <el-radio label="女" />
              </el-radio-group>
            </el-form-item>

            <!-- 文本域 -->
            <el-form-item label="个人简介">
              <el-input
                v-model="form.desc"
                type="textarea"
                rows="4"
                placeholder="请输入个人简介"
              />
            </el-form-item>

            <!-- 按钮组 -->
            <el-form-item>
              <el-button type="primary" @click="handleSubmit">提交</el-button>
              <el-button @click="handleReset">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>

        <!-- 布局标签页 -->
        <el-tab-pane label="布局组件" name="2">
          <div class="layout-demo">
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="grid-content">列 1</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">列 2</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">列 3</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">列 4</div>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<style scoped>
.element-practice {
  padding: 20px;
}

.page-card {
  max-width: 800px;
  margin: 0 auto;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.layout-demo {
  margin-top: 20px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background: #42b883;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

:deep(.el-form-item) {
  max-width: 500px;
}
</style>
