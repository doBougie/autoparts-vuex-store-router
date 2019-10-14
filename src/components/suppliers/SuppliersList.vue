<template>
  <div>
    <h1>Ceci est la liste des produits</h1>

    <table class="table">
      <tbody>
      <tr v-for="supplier in suppliers">
        <td>
          {{ supplier.name }}
        </td>
        <td>
          {{ supplier.address_line_1 }}
        </td>
        <td>
          {{ supplier.address_city }}
        </td>
        <td>
          {{ supplier.telephone }}
        </td>
        <td>
          <router-link
            class="button is-primary"
            :to="{ name: 'supplier-edit', params: { id: supplier.id } }"
          >
            Editer ce produit
          </router-link>

          <router-link
            class="button is-danger"
            :to="{ name: 'supplier-delete'}"
          >
            Delete
          </router-link>
        </td>
      </tr>
      </tbody>
    </table>
    <router-link
      class="button is-primary"
      :to="{ name: 'product-add' }"
    >
      Ajouter
    </router-link>
  </div>
</template>

<script>

    export default {
        name: 'suppliers-list',
        created() {
            this.$store.dispatch('suppliers/request');
        },
        computed: {
            suppliers() {
                return this.$store.state.suppliers.list;
            },
        },
    };

</script>
