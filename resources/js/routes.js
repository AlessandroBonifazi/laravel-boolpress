import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// import AppComponent from './app/AppComponent';
import HomeComponent from './pages/HomeComponent';


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeComponent,
        }
    ]
})

export default router;