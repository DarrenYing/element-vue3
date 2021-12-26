import { createApp } from 'vue'
import App from './App.vue'
import ElContainer from './components/container'

const app = createApp(App)

// 定义全局变量，按钮大小
app.config.globalProperties.$BUTTON = { size:'large'}

app.use(ElContainer)
    .mount('#app')
