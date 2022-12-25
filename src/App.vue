<script lang="ts">

import AppHeader from './components/appHeader.vue';

export default{
  components:{
    AppHeader,
  }
}

</script>

<template>
  <div class="w-full h-screen">
    <AppHeader></AppHeader>
    <routerView></routerView>
  </div>
</template>

<style scoped>

</style>
