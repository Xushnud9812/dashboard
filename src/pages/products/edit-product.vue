<template>
  <div>
    <div class="mb-5 flex items-center gap-3">
      <el-button link @click="router.go(-1)">
        <el-icon>
          <Back />
        </el-icon>
        Back
      </el-button>
      <h1 class="">Product Edit</h1>
    </div>
    <el-form ref="ruleFormRef" :model="newForm" :rules="rules" label-position="top">
      <el-form-item label="Product title" prop="title">
        <el-input v-model="newForm.title" />
      </el-form-item>
      <el-form-item label="Product description" prop="description">
        <el-input v-model="newForm.description" />
      </el-form-item>
      <el-form-item label="Product price" prop="price">
        <el-input v-model="newForm.price" />
      </el-form-item>
      <el-form-item label="Product Image url" prop="image">
        <el-input v-model="newForm.image" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Create
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()


const newForm = ref({
  title: '',
  description: '',
  price: '',
  image: ''
})

const fetchProduct = () => {
  axios.get(`https://65af3f432f26c3f2139a4d9f.mockapi.io/api/v1/products/${route.params.id}`)
    .then(res => {
      newForm.value = res.data
    })
}

fetchProduct()


const ruleFormRef = ref(null)

const rules = reactive({
  title: [
    { required: true, message: 'Please input Activity title', trigger: 'change' }
  ],
  description: [
    { required: true, message: 'Please input Activity description', trigger: 'blur' }
  ],
  price: [
    { required: true, message: 'Please input Activity price', trigger: 'blur' }
  ],
  image: [
    { required: true, message: 'Please input Activity image', trigger: 'blur' }
  ],
})

const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      axios.put(`https://65af3f432f26c3f2139a4d9f.mockapi.io/api/v1/products/${route.params.id}`, newForm.value)
        .then(res => {
          router.push('/products')
        })
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="scss" scoped></style>