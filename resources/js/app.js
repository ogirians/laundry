
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 import Vue from 'vue'
 import router from './router.js'
 import store from './store.js'
 import App from './App.vue'
 import BootstrapVue from 'bootstrap-vue'
 import VueSweetalert2 from 'vue-sweetalert2'

 Vue.use(VueSweetalert2)
 Vue.use(BootstrapVue)

 import 'bootstrap-vue/dist/bootstrap-vue.css'

 new Vue({
     el: '#dw',
     router,
     store,
     components: {
         App
     }
 })
