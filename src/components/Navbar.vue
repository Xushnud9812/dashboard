<template>
  <div class="flex items-center gap-10 text-2xl">
    <h1>Teacher</h1>
    <button @click="store.isCollapse = !store.isCollapse">
      <el-icon>
        <Fold />
      </el-icon>
    </button>
  </div>
</template>

<script setup>
import { useStore } from '../store'

const store = useStore()
</script>

<style lang="scss" scoped></style>