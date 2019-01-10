<template>
  <div>
    <h1>Signup</h1>
    <input type="text" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="signup">Signup</button>
    <hr />
    or <button @click="singupWith('github')">Singup with github</button>

    <hr />
    <router-link :to="{ name: 'login' }">Have account? login</router-link><br />
    <router-link to="/">Back home</router-link>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "signup",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async signup() {
      try {
        let user = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        alert(`Success! ${user.email}`);
      } catch (err) {
        alert(`Oops! ${err.message}`);
      }
    },
    signupWidth() {}
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
