import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import {routes} from './routes';

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({routes});

const store = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        increment(state, payload = 1){
            state.count += payload;
        },
        decrement(state, payload = 1){
            state.count -= payload;
        }
    }
});

new Vue({
    el: '#app',
    store,
    router, //<-- añadimos el router a nuestra app
    render: h => h(App)
});


//filtros
Vue.filter('reverse',(value)=>{
    return value.split("").reverse().join("");
});