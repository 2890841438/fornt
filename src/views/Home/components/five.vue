<template>
  <div class="five-container">
    <div class="left">
      <a href="#">{{ $t("index.five.1") }}</a>
      <a href="#">{{ $t("index.five.2") }}</a>
      <a href="#">{{ $t("index.five.3") }}</a>
      <a href="#">{{ $t("index.five.4") }}</a>
      <a href="#">{{ $t("index.five.5") }}</a>
      <a @click.prevent="changelanguge" style="cursor: pointer">中/English</a>
      <div class="live">
        <a href="#">{{ $t("index.five.6") }}</a>
        <a href="#" style="margin-left: 10px">{{ $t("index.five.7") }}</a>
      </div>
    </div>
    <div class="right">
      <div class="input_box">
        <h1>{{ $t("index.five.footer.title") }}</h1>
        <input type="text" name="" placeholder="Your Name" />
        <input type="email" name="" placeholder="Eamil Address" />
        <input type="phone" name="" placeholder="Phone Number" />
        <input type="text" name="" placeholder="Number of Restaurants" />
        <input type="text" name="" placeholder="Restaurants's Point of Sale" />
        <div>{{ $t("index.five.btn") }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "five",
  methods: {
    changelanguge() {
      if (this.$i18n.locale === "en") this.$i18n.locale = "zh";
      else this.$i18n.locale = "en";
      scrollTo(0, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.five-container {
  display: flex;
  flex-direction: row;
  margin-top: 65px;
  /*justify-content: center;*/
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 110px;

    a {
      margin-bottom: 25px;
      font-size: 16px;
      line-height: 28px;
      font-family: Rubik-Light, serif;
    }

    .live {
      margin-top: 140px;
    }
  }

  .right {
    flex: 1;
    margin-left: 75px;

    .input_box {
      border: 2px solid #fc275d;
      width: 450px;
      height: 480px;
      background-color: #f1f0f2;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      h1 {
        margin-top: 20px;
        font-size: 20px;
        color: #000000;
        font-family: Rubik-Bold, serif;
      }

      input {
        width: 350px;
        height: 50px;
        padding-left: 30px;
        outline: none;
        border: 1px solid white;
      }

      div {
        background-color: #fc275d;
        color: #ffffff;
        height: 60px;
        width: 200px;
        line-height: 60px;
        cursor: pointer;
        text-align: center;
        font-size: 20px;
        font-family: Rubik-Light, serif;
        margin-top: 20px;
        margin-bottom: 20px;
      }

      input::placeholder {
        color: #c6c6c6;
        font-size: 20px;
      }
    }
  }
  padding-bottom: 63px;
}
</style>
