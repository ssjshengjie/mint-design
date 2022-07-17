import DefaultTheme from 'vitepress/theme'
import '@mint-design/theme-thalk/src/index.scss'
import './style.css'
export default {
  ...DefaultTheme,
  enhaceApp({ app }) {
    app.use()
  }
}