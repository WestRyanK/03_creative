<template>
  <form @submit.prevent="search">
    <input type="text" v-model="searchKeywords"></input>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
export default {
  name: 'Search',
  components: { AppHeader }
}
</script>
