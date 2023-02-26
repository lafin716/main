<template>
  <div class="list-wrapper">
    <ul>
      <li
        v-for="(item, index) in $store.state.cartItems"
        :key="index"
        class="list-item"
      >
        <img class="thumbnail" :src="item.imageUrl" :alt="item.name" />
        <div class="description">
          <p>{{ item.name }}</p>
          <span>{{ item.price }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { FETCH_CART_ITEMS } from '@/store'

export default {
  async fetch() {
    await this.$store.dispatch(FETCH_CART_ITEMS)
  },
}
</script>
<style scoped>
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
</style>
