<template>
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :value="false">expand</el-radio-button>
    <el-radio-button :value="true">collapse</el-radio-button>
  </el-radio-group> -->
  <el-menu default-active="2" class="el-menu-vertical-demo  border-t-[1px] border-gray-200 !bg-[#001529]"
    :collapse="store.isCollapse" @open="handleOpen" @close="handleClose">
    <el-sub-menu index="1">
      <template #title>

        <el-icon>
          <location />
        </el-icon>
        <span class="text-white">Gemifikatsiya</span>
      </template>
      <!-- <el-menu-item-group show-timeout="100">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group> -->


    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title class="text-white">
        <router-link to="/users">
          Users
        </router-link>
      </template>
    </el-menu-item>

    <el-menu-item index="4">
      <el-icon>
        <setting />
      </el-icon>
      <template #title class="text-white">Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from '../store'

const store = useStore()

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
