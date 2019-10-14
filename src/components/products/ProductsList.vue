<template>
  <div>
    <h1>Ceci est la liste des produits</h1>

    <table class="table">
      <tbody>
        <tr v-for="product in products">
          <td>
            {{ product.code }}
          </td>
          <td>
            {{ product.title }}
          </td>
          <td>
            {{ product.unitPrice }} $
          </td>
          <td>
            <router-link
              class="button is-primary"
              :to="{ name: 'product-edit', params: { id: product.id } }"
            >
              Editer ce produit
            </router-link>

          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'products-list',
  created() {
    this.$store.dispatch('products/request');
  },
  computed: {
    products() {
      return this.$store.state.products.list;
    },
  },
};

</script>
