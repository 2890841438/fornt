<template>
  <div class="four-container">
    <div class="header">
      <img :src="require('@/assets/four/pic.png')" />
    </div>

    <div class="main">
      <div>
        <img :src="require('@/assets/four/1.png')" />
        <div>
          <h1>{{ $t("index.four.one.title") }}</h1>
          <p>{{ $t("index.four.one.content") }}</p>
        </div>
      </div>
      <div>
        <img :src="require('@/assets/four/2.png')" />
        <div>
          <h1>{{ $t("index.four.two.title") }}</h1>
          <p>{{ $t("index.four.two.content") }}</p>
        </div>
      </div>
      <div>
        <img :src="require('@/assets/four/3.png')" />
        <div>
          <h1>{{ $t("index.four.three.title") }}</h1>
          <p>{{ $t("index.four.three.content") }}</p>
        </div>
      </div>
      <div>
        <img :src="require('@/assets/four/4.png')" />
        <div>
          <h1>{{ $t("index.four.four.title") }}</h1>
          <p>{{ $t("index.four.four.content") }}</p>
        </div>
      </div>
      <div>
        <img :src="require('@/assets/four/5.png')" />
        <div>
          <h1>{{ $t("index.four.five.title") }}</h1>
          <p>{{ $t("index.four.five.content") }}</p>
        </div>
      </div>
    </div>

    <div class="footer">
      <div>{{ $t("index.four.btn") }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "four"
};
</script>

<style lang="scss" scoped>
.four-container {
  background-color: #f2f3f5;
  padding-top: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 100px;

  .main {
    > div {
      display: flex;
      /*justify-content: start;*/
      align-items: center;

      img {
        width: 101px;
        height: 73px;
      }

      > div {
        margin-bottom: 90px;
        margin-left: 40px;

        h1 {
          font-size: 32px;
          font-family: Rubik-Medium, serif;
          line-height: 32px;
          margin-bottom: 30px;
        }

        p {
          font-size: 16px;
          font-family: Rubik-Light, serif;
          line-height: 26px;
          width: 975px;
        }
      }
    }
  }

  .footer {
    width: 200px;
    height: 60px;
    background-color: #fc275d;
    text-align: center;
    line-height: 60px;
    color: #ffffff;
    font-size: 20px;
    font-family: Rubik-Light, serif;
  }
}
</style>
