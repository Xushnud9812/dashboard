<template>
  <div class="mb-20">
    <div class="flex items-center justify-between mb-10">

      <h1 class="">Products list</h1>
      <el-button @click="router.push('/create-product')" type="primary">Create Product</el-button>
    </div>


    <el-table v-loading="loading" :data="users" style="width: 100%">
      <el-table-column type="index" :index="indexMethod" width="50" />
      <el-table-column prop="title" label="Title" />
      <el-table-column prop="description" label="Description" />
      <el-table-column prop="price" label="Price" />
      <el-table-column fixed="right" label="Operations">
        <template #default="scope">
          <el-button type="primary" size="small" @click="handleClick(scope.row.id)">
            <el-icon>
              <Edit />
            </el-icon>
          </el-button>
          <el-popconfirm @confirm="deleteProduct(scope.row.id)" title="Are you sure to delete this?">
            <template #reference>
              <el-button type="danger" size="small">
                <el-icon>
                  <Delete />
                </el-icon>
              </el-button>
            </template>
          </el-popconfirm>


        </template>
      </el-table-column>
    </el-table>

    <div class="flex justify-end mt-10">

      <el-pagination v-model="currentPage" @current-change="handleCurrentChange" background
        layout="total,sizes, prev, pager, next" :total="totalUsers" />
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import api from '../../api'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const users = ref([])
const loading = ref(false)
const totalUsers = ref(0)
const pageSize = ref(10)
const currentPage = ref(1)

const handleCurrentChange = (page) => {
  currentPage.value = page
  fetchProducts()
}

const indexMethod = (index) => {
  return (currentPage.value - 1) * pageSize.value + index + 1
}

const fetchProducts = () => {
  loading.value = true
  axios.get('https://65af3f432f26c3f2139a4d9f.mockapi.io/api/v1/products', {
    params: {
      limit: pageSize.value,
      page: currentPage.value
    }
  })
    .then(res => {
      users.value = res.data
      totalUsers.value = 37
    })
    .catch(err => {
      console.log('err', err);
    })
    .finally(() => {
      loading.value = false
    })
}

onMounted(() => {
  fetchProducts()
});

const deleteProduct = async (id) => {
  await axios.delete(`https://65af3f432f26c3f2139a4d9f.mockapi.io/api/v1/products/${id}`)
  fetchProducts()
}


const handleClick = (id) => {
  router.push({ name: "edit-product", params: { id } })
}


</script>

<style  scoped>
.cell {
  @apply !line-clamp-2
}
</style>