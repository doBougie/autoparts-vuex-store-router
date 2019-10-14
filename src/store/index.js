import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products.js'
import suppliers from './modules/suppliers.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    suppliers,
  }
})
