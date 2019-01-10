<template>
  <div>
    <h1>Login</h1>
    <input type="text" placeholder="Email" v-model="email" />
    <input type="text" placeholder="Password" v-model="password" />
    <button @click="login">Login</button>

    <hr />
    <router-link :to="{ name: 'signup' }"
      >Don't have an account? Signup</router-link
    ><br />
    <router-link to="/">Back home</router-link>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      try {
        let user = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        alert(`Connected! ${user.email}`);
        this.$router.replace("app");
      } catch (err) {
        alert(`Oops! ${err.message}`);
      }
    }
  }
};
</script>

<style scoped lang="scss">
input {
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>
