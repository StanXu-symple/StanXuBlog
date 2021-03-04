<template>
  <div id="app">
    <login></login>
    <router-view/>
  </div>
</template>

<script>
import Login from "@/views/login/Login";

export default {
  name: 'App',
  components:{
    Login
  }
}
</script>

<style>

</style>
