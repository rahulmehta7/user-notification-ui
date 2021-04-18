<template>
  <div id="app">
    <div v-if="isUserLogin" id="nav">
      <router-link to="/"></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    isUserLogin()
    {
      let token = localStorage.getItem("samauthToken");  
      if(token)
      {
        return false;
      }    
      return true;
    }
  },
}
</script>

<style>

</style>
