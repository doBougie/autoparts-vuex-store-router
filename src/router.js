import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ProductsList from './components/products/ProductsList.vue';
import ProductEdit from './components/products/ProductsEdit.vue';
import SuppliersList from './components/suppliers/SuppliersList.vue';
import SupplierEdit from './components/suppliers/SuppliersEdit.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',

    },
    {
      path: '/products/list',
      component: ProductsList,
      name: 'products-list',
    },
    {
      path: '/products/edit/:id',
      component: ProductEdit,
      name: 'product-edit',
      props: true,
    },
    {
      path: '/suppliers/list',
      component: SuppliersList,
      name: 'suppliers-list',
    },
    {
      path: '/suppliers/edit/:id',
      component: SupplierEdit,
      name: 'supplier-edit',
      props: true,
    },
  ],
});
