<template>
  <div v-if="productToEdit">
    <div class="field">
      <label class="label">Code</label>
      <div class="control">
        <input class="input" type="text" v-model="productToEdit.code">
      </div>
    </div>

    <div class="field">
      <label class="label">Titre</label>
      <div class="control">
        <input class="input" type="text" v-model="productToEdit.title">
      </div>
    </div>

    <div class="field">
      <label class="label">Prix</label>
      <div class="control">
        <input class="input" type="text" v-model="productToEdit.unitPrice">
      </div>
    </div>

    <router-link
      class="button is-primary action-do-save"
      :to="{ name:'products-list'}"
    >
      Save
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'products-edit',
  props: {
    id: {
      required: true,
    },
  },
  created() {
    this.$store.dispatch('products/request');
  },
  computed: {
    productToEdit() {
      const products = this.$store.state.products.list;
      return products.find(p => p.id == this.id);
    },
  },
};
</script>
