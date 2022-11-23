import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router/index"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

// 初始化css，重置css默认样式
import "normalize.css/normalize.css"
// 全局css
import "@/styles/index.scss"
import "./style.css"

// 引入icon插件
import initSvgIcon from "@/icons/index"
import "virtual:svg-icons-register"

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(initSvgIcon)
app.mount("#app")
