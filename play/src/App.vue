<script setup lang="ts">
// import { MtIcon } from '@mint-design/components/icon'
// import { MtButton } from '@mint-design/components/button'
// import { AccessibilitySharp } from '@vicons/ionicons5'
import { MtTree } from '@mint-design/components/tree'
import { ref } from 'vue';

function createData(level = 4, parentKey = ''): any {
  if (!level) return []
  const arr = new Array(6 - level).fill(0)
  return arr.map((_, idx: number) => {
    const key = parentKey + level + idx
    return {
      label: createLabel(level), // 显示的内容
      key, // 为了唯一性
      children: createData(level - 1, key) // 孩子
    }
  })
}
function createLabel(level: number): string {
  if (level === 4) return '道生一'
  if (level === 3) return '一生二'
  if (level === 2) return '二生三'
  if (level === 1) return '三生万物'
  return ''
}
const data = ref(createData())
</script>

<template>
  <div>
    <!-- <MIcon size="20" color="red">
      <AccessibilitySharp />
    </MIcon>
    <MIcon size="40" color="yellow">
      <AccessibilitySharp />
    </MIcon>
    <MtButton type="warning" :icon="AccessibilitySharp">
      测试
    </MtButton> -->
    <mt-tree :data="data" label-field="label" key-field="key" children-field="children" />
  </div>
</template>

<style scoped>
</style>
