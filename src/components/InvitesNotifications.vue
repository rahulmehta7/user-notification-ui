<template>
  <section>
    <div v-for="invite in getInvites" :key="invite.invite_id">
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
    await this.getUserInvites();
  },
  
  computed: {
    getInvites()
    {
      return this.invites;
    }
  },
  methods: {
    async getUserInvites()
    {
      this.invites =  await fetchUserNotification(false);   
      const self = this; 
      setTimeout(() => { self.getUpdatedInvites() }, 3000);
      return;      
    },
    async getUpdatedInvites(){
      this.invites =  await fetchUserNotification(true);    
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
