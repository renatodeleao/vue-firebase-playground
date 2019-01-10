<template>
  <SiteLayout>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />

      <router-link to="/login" tag="button">Login</router-link>
      <router-link to="/signup" tag="button">Signup</router-link>
    </div>
  </SiteLayout>
</template>

<script>
// @ is an alias to /src
import SiteLayout from "@/views/_layouts/SiteLayout.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    SiteLayout,
    HelloWorld
  }
};
</script>
