import { createApp } from 'vue';
import App from './App.vue';
import 'element-plus/theme-chalk/src/index.scss';
import './registerServiceWorker';
import router from './router';
import store from './store';
import * as ELIcons from '@element-plus/icons-vue';
import GlobalAuthor from '@/components/global/Author.vue';

const app = createApp(App);

for (const [iconName, iconComponent] of Object.entries(ELIcons)) {
  app.component(iconName === 'Menu' ? `icon-${iconName.toLowerCase()}` : iconName, iconComponent);
}

// 注册全局组件
app.component('GlobalAuthor', GlobalAuthor);

app.use(store).use(router).mount('#app');
