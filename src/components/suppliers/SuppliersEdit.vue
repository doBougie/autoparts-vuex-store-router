<template>
  <div v-if="supplierToEdit">

    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" v-model="supplierToEdit.name">
      </div>
    </div>

    <div class="field">
      <label class="label">Address</label>
      <div class="control">
        <input class="input" type="text" v-model="supplierToEdit.address_line_1">
      </div>
    </div>

    <div class="field">
      <label class="label">Ville</label>
      <div class="control">
        <input class="input" type="text" v-model="supplierToEdit.address_city">
      </div>
    </div>

    <div class="field">
      <label class="label">Telephone</label>
      <div class="control">
        <input class="input" type="text" v-model="supplierToEdit.telephone">
      </div>
    </div>

    <router-link
      class="button is-primary"
      :to="{ name:'suppliers-list'}"
    >
      Save
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'suppliers-edit',
  props: {
    id: {
      required: true,
    },
  },
  created() {
    this.$store.dispatch('suppliers/request');
  },
  computed: {
    supplierToEdit() {
      const suppliers = this.$store.state.suppliers.list;
      return suppliers.find(p => p.id == this.id);
    },
  },
};
</script>
