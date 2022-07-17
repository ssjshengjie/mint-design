# 快速开始
本节将介绍如何在项目中使用 mint-design。
# 用法
## 完整引入
如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。
```
//main.ts
import { createApp } from 'vue'
import Mint from 'mint-desgin'
import 'mint-design/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(Mint)
app.mount('#app')
```
# 手动导入
mint-desgin 提供了基于 ES Module 开箱即用的 Tree Shaking 功能。

但是你需要安装 unplugin-mint-design 来导入样式。 请参考 文档 了解如何配置它。
App.vue
```html
<template>
  <mt-button>I am ElButton</mt-button>
</template>
<script>
  import { MtButton } from 'element-plus'
  export default {
    components: { MtButton },
  }
</script>
```