<template>
  <div>
    <head-nav></head-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import HeadNav from "../components/HeadNav";
export default {
  name: "layout",
  components: {
    HeadNav
  }
};
</script>

<style scoped></style>
