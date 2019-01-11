<template>
  <div class="o-skeleton">
    <div class="o-skeleton__tip">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>

    <div class="o-skeleton__body">
      <h1>Welcome App homepage</h1>
      <button @click="handleLogout">Logout</button>
    </div>

    <div class="o-skeleton__tip">Footer</div>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapState, mapActions } from "vuex";
export default {
  name: "app-home",
  computed: {
    ...mapState({
      user: state => state.user,
    })
  },
  methods: {
    ...mapActions({
      logout: 'logout'
    }),
    async handleLogout() {
      try {
        await this.logout();
        alert("logged out");
        this.$router.replace("/");
      } catch (err) {
        console.log(err);
        alert("something went wrong, not logged out");
      }
    }
  }
};
</script>

<style></style>
