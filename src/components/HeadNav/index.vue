<template>
  <div class="nav_container">
    <div class="logo">
      <img :src="require('@/assets/logo.png')" alt="" />
    </div>
    <div class="nav">
      <router-link to="/" tag="div">
        {{ $t("index.title1") }}
      </router-link>
      <router-link to="/" tag="div">
        {{ $t("index.title2") }}
      </router-link>
      <router-link to="/" tag="div">
        {{ $t("index.title3") }}
      </router-link>
      <router-link to="/" tag="div">
        {{ $t("index.title4") }}
      </router-link>
      <router-link to="/" tag="div" class="btn">
        {{ $t("index.title5") }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>

<style lang="scss" scoped>
.nav_container {
  background-color: #f6f9fd;
  width: 1360px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-bottom: 111px;

  .logo {
    margin-top: 35px;
    margin-left: 40px;
  }

  .nav {
    display: flex;
    margin-right: 58px;

    div {
      margin-left: 45px;
      font-family: Rubik-Medium, serif;
      font-size: 16px;
      line-height: 47px;
      text-align: center;
    }
    .btn {
      height: 47px;
      width: 156px;
      border: 1px solid #fc275d;
    }
  }
}
</style>
