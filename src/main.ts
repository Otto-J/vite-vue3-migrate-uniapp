// import './assets/main.css'

import { createSSRApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}

// app.use(createPinia())
// app.use(router)

// app.mount('#app')
