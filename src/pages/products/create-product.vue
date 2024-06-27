<template>
  <div>
    <el-page-header @back="router.go(-1)" class="mb-10">
      <template #content>
        <span class="text-large font-600 mr-3"> Create product </span>
      </template>
    </el-page-header>
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


    <div>
      <input type="file" @change="handleChange">

    </div>


  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()


const newForm = reactive({
  title: '',
  description: '',
  price: '',
  image: ''
})

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
      axios.post('https://65af3f432f26c3f2139a4d9f.mockapi.io/api/v1/products', newForm)
      router.push('/products')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}


const handleChange = (e) => {
  console.log('event', e);
  let formdata = new FormData()

  formdata.append('file', e.target.files[0])

  axios.post('https://1b230fdcf22d44089cdbf01be4edb70f.api.mockbin.io/', formdata)


}


</script>

<style lang="scss" scoped></style>