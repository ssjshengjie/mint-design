<script setup lang="ts">
import { MIcon } from '@mint-design/components/icon'
import { MtButton } from '@mint-design/components/button'
import { AccessibilitySharp } from '@vicons/ionicons5'

</script>

<template>
  <div>
    <MIcon size="20" color="red">
      <AccessibilitySharp />
    </MIcon>
    <MIcon size="40" color="yellow">
      <AccessibilitySharp />
    </MIcon>
    <MtButton type="warning" :icon="AccessibilitySharp">
      测试
    </MtButton>
  </div>
</template>

<style scoped>
</style>
