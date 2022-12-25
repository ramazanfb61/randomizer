<template>
 <div class="w-full h-screen border-red-500 border ">
    <h3 class="my-5 text-center">home</h3>
    <appRandomizer></appRandomizer>
 </div>
</template>

<script>
import appRandomizer from '../components/appRandomizer.vue';

export default {
  components:{
    appRandomizer
  }
}
</script>