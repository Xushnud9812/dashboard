<template>
  <div class="common-layout">

    <el-header class="flex items-center fixed top-0 left-0 w-full z-10 bg-[#001529] text-white">
      <Navbar />
    </el-header>
    <el-container>
      <div>
        <Sidebar class=" !fixed top-[60px] h-screen" />
      </div>
      <div class="pt-20  duration-500 w-full pr-5" :class="store.isCollapse ? 'pl-[84px]' : 'pl-[220px]'">

        <RouterView />

      </div>
    </el-container>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue';
import { useStore } from '../store'

const store = useStore()


</script>

<style lang="scss" scoped></style>