<template>
  <div class="">
    <h1>register</h1>
    <!-- add 2way binding with v-model -->
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email"
    />
    <br>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password"
    />
    <br>
    <!-- onclick call register method -->
    <button
      @click="register"
    >register</button>
  </div>
</template>

<script>
// import the authentication service
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
    email (value) {
      console.log('email has changed to', value)
    }
  },
  methods: {
    // 3 add async, with the endpoint method register, pass email & password then wait until it give a response, when we get the response, we print the response
    async register () {
      // 1 check if this log the email & password
      // console.log('register button was clicked', this.email, this.password)
      // 2 use the auth service
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
  // things done after
  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'hello world'
  //   }, 2000)
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
