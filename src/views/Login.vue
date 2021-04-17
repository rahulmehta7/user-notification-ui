<template>
  <section class="home">
    <div class="home-container">
          <b-field class="home--field-label" label="Username">
              <b-input v-model="username" placeholder="Enter username..." maxlength="30"></b-input>
          </b-field>
          <b-field label="Password" 
              :type="getType"           
              :message="getMessage">   
              <b-input type="password"
                  v-model="password"
                  placeholder="Enter Password..."
                  password-reveal>
              </b-input>
          </b-field>
    </div>
    <div class="login-button">
      <b-button  type="is-primary" @click="validateUser()">Login</b-button>
    </div>
  </section>  
</template>

<script>
// @ is an alias to /src
import { authenticateUser } from '.././components/Authenticate'

export default {
  name: 'Home',
  components: {
    //HelloWorld
  },
  data() {
    return {
      username: null,
      password: null,
      userLoginStatus: null,
      labelPosition: 'on-border'
    }
  },
  computed: {  
    getType(){
      if(this.userLoginStatus == false)
      {
        return 'is-danger'
      }        
      return '';
    },
    getMessage(){
      if(this.userLoginStatus == false)
      {
        return 'Password is wrong'
      }        
      return '';
    }
  },
  methods: {
    async validateUser(){
     this.userLoginStatus = await authenticateUser(this.username, this.password)    
     if(this.userLoginStatus)
     {
       this.$router.push({ path: '/home'});
     }  
    }
  },
}
</script>
<style>
.home{
  display: flex;  
  flex-direction: column;  
  align-items: center;

}
.home-container{
  margin-top: 2em;
  width: 20em;
  text-align: left;
}
.login-button{
    margin-top: 2em;
}
</style>
