<template>
  <div class="two-container">
    <div class="title">
      {{ $t("index.two.title") }}
    </div>
    <div class="item">
      <div class="item_one">
        <h1>01</h1>
        <div>
          {{ $t("index.two.item_one_desc") }}
        </div>
        <p>
          {{ $t("index.two.item_one_detail") }}
        </p>
      </div>
      <div class="item_two">
        <h1 class="h1_2">02</h1>
        <div>
          {{ $t("index.two.item_two_desc") }}
        </div>
        <p>
          {{ $t("index.two.item_two_detail") }}
        </p>
      </div>
      <div class="item_three">
        <h1>03</h1>
        <div>
          {{ $t("index.two.item_three_desc") }}
        </div>
        <p>
          {{ $t("index.two.item_three_detail") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "two"
};
</script>

<style lang="scss" scoped>
.two-container {
  background-color: #f2f3f5;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 100px;

  .title {
    margin-left: 110px;
    flex: 1;
    font-size: 32px;
    margin-top: 85px;
    font-family: "Rubik-Medium", serif;
  }

  .item {
    margin-top: 50px;
    margin-left: 110px;
    display: flex;
    > div {
      width: 320px;
      height: 363px;
      background-color: #ffffff;
      margin-right: 90px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        font-size: 32px;
        font-family: Rubik-Light, serif;
        text-align: center;
        width: 226px;
        line-height: 26px;
        color: #fc557a;
      }
      .h1_2 {
        margin-top: 56px;
      }

      div {
        font-size: 20px;
        color: #fc557a;
        line-height: 26px;
        width: 226px;
        margin-top: 32px;
      }

      p {
        width: 226px;
        margin-top: 10px;
        font-family: Rubik-Light, serif;
        line-height: 26px;
      }
    }
  }
}
</style>
