<template>
  <div class="o-skeleton">
    <div class="o-skeleton__tip">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </div>

    <div class="o-skeleton__body"><slot /></div>

    <div class="o-skeleton__tip">Footer</div>
  </div>
</template>

<script>
export default {
  name: "site-layout"
};
</script>

<style scoped lang="scss">
.o-skeleton {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
}

.o-skeleton__tip {
  flex: none;
}

.o-skeleton__body {
  flex: 1 0 auto;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
