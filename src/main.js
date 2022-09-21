import { createApp } from 'vue'
import App from './App'
import components from './index'
import router from "@/router/router";
import directives from '@/directives';

const app = createApp(App)

//глобально регистрируем все компоненты в папке UI
components.forEach(component =>{
    app.component(component.name, component)
})

directives.forEach(directive =>{
    app.directive(directive.name, directive)
})

app
    .use(router)
    .mount('#app');
