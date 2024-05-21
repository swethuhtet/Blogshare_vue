<script>
export default {
  props: {
    categories: { type: Array , required: true },
    selectedCat: { type: Number,  default: null }
  },
  data() {
    return {
      category_id: this.selectedCat || ''
    }
  },
  watch: {
    selectedCat(newVal) {
      this.category_id = newVal || ''
    }
  },
  emits: ['categoryChanged'],
  methods: {
    categoryChanged(event) {
      this.category_id = event.target.value
      this.$emit('categoryChanged', this.category_id)
      console.log(this.category_id)
    }
  }
}
</script>

<template>
  <div>
    <select id="category" v-model="category_id" @change="categoryChanged" required>
      <option value="" disabled>Select a category</option>
      <option v-for="category in categories" :key="category.id" :value="category.id">
        {{ category.name }}
      </option>
    </select>
  </div>
</template>

<style></style>
