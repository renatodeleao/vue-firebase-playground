<template>
  <div>
    <h1>Login</h1>
    <input type="text" placeholder="Email" v-model="email" />
    <input type="text" placeholder="Password" v-model="password" />
    <button @click="login">Login</button>

    <hr />
    <div>
      <p>or Signin with:</p>
      <button @click="loginWith('github')">Signin with Github</button>
    </div>
    <hr />
    <router-link :to="{ name: 'signup' }"
      >Don't have an account? Signup</router-link
    ><br />
    <router-link to="/">Back home</router-link>
  </div>
</template>

<script>
import firebase from "firebase";
const getFirebaseAuthProvider = function(provider) {
  if(provider === "github") {
    return new firebase.auth.GithubAuthProvider()
  }
};

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
        let res = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        alert(`Connected!`);
        console.log(res);

        this.$router.replace("app");
      } catch (err) {
        alert(`Oops! ${err.message}`);
      }
    },
    async loginWith(providerName) {
      try {
        let provider = getFirebaseAuthProvider(providerName);
        let res = await firebase.auth().signInWithPopup(provider);
        console.log(res);
        this.$router.replace("app");
      } catch (err) {
        console.log(err);
        alert("Oop something went wrong");
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
