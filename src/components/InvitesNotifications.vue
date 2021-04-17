<template>
  <section>
    <div v-for="invite in invites" :key="invite.invite_id">
      <div class="invites-notification">
        <b-notification
            :type="getType(invite)"
            has-icon
            aria-close-label="Close notification">
            <p class="invites-text-align">{{ invite.invite }}</p>
            <p class="invites-text-align">Time : {{ invite.invite_time }}</p>
            <p class="invites-text-align">Vector : {{ invite.vector }}</p>
            <p class="invites-text-align">SignId : {{ invite.sig_id }}</p>
            <p class="invites-text-align">Reciever : {{ invite.receiver_id }}</p>
        </b-notification>
    </div> 
    </div>
  </section>
</template>

<script>
import { fetchUserNotification } from '.././components/Authenticate'
export default {
  name: 'InvitesNotifications',
  data() {
    return {
      invites: []
    }
  },
  props: {
  },
  async mounted() {
    await this.getUserInvites()
  },
  
  computed: {

  },
  methods: {
    async getUserInvites()
    {
      this.invites =  await fetchUserNotification();
      return;      
    },
    getType(invite)
    {
      if(invite.status == 'read')
      {
        return 'is-success';
      }
      return 'is-info';
    }    
  },
}




</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.invites-notification
{
  margin-bottom: 2em;
  width: 50em;
}
.invites-text-align{
  text-align: left;
}
</style>
