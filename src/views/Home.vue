<template>
  <div class="home-view">
    <div>
      <h1 class="home-view-header">Welcome to Notification Dashboard      
      </h1>      
      <b-button class="" type="is-primary" @click="logoutUser()">Logout</b-button>
    </div>
    <InvitesNotifications/>
  </div>
</template>

<script>
// @ is an alias to /src
import InvitesNotifications from '@/components/InvitesNotifications.vue'

export default {
  name: 'Home',
  components: {
    InvitesNotifications
  },
  methods: {
    logoutUser()
    {
      localStorage.removeItem("samauthToken");
      this.$router.push({ path: '/'});
    }
  },
}
</script>

<style>
.home-view{
  display: flex;  
  flex-direction: column;  
  align-items: center;  
}

.home-view-header{
  font-size: 3em;
  margin: 1em;
}

.home-view-button{
  margin-top: 1em;
  margin-left: 20em
}

</style>
