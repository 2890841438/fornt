<template>
  <div class="container">
    <div class="center_content">
      <h3>{{ $t("index.one.title") }}</h3>
      <p>{{ $t("index.one.desc") }}</p>
    </div>
    <div class="flow-content">
      <div class="left">
        <div class="title">
          <h3>{{ $t("index.one.detail1") }}</h3>
          <h3>{{ $t("index.one.title1") }}</h3>
        </div>
        <div class="imgs">
          <div class="items">
            <div class="item">
              <img :src="require('@/assets/one/1.png')" />
              <p>{{ $t("index.one.item1") }}</p>
            </div>
            <div class="item">
              <img :src="require('@/assets/one/2.png')" />
              <p>{{ $t("index.one.item2") }}</p>
            </div>
            <div class="item">
              <img :src="require('@/assets/one/3.png')" />
              <p>{{ $t("index.one.item3") }}</p>
            </div>
            <div class="item">
              <img :src="require('@/assets/one/4.png')" />
              <p>{{ $t("index.one.item4") }}</p>
            </div>
          </div>
          <div class="items">
            <div class="item">
              <img :src="require('@/assets/one/5.png')" />
              <p>{{ $t("index.one.item5") }}</p>
            </div>
            <div class="item">
              <img :src="require('@/assets/one/6.png')" />
              <p>{{ $t("index.one.item6") }}</p>
            </div>
            <div class="item">
              <img :src="require('@/assets/one/7.png')" />
              <p>{{ $t("index.one.item7") }}</p>
            </div>
            <div class="item">
              <img :src="require('@/assets/one/8.png')" />
              <p>{{ $t("index.one.item8") }}</p>
            </div>
          </div>
          <div class="items">
            <div class="item">
              <img :src="require('@/assets/one/9.png')" />
              <p>{{ $t("index.one.item9") }}</p>
            </div>
            <div class="item">
              <img :src="require('@/assets/one/10.png')" />
              <p class="sp">{{ $t("index.one.item10") }}</p>
            </div>
            <div class="item">
              <img :src="require('@/assets/one/11.png')" />
              <p>{{ $t("index.one.item11") }}</p>
            </div>
            <div class="item">
              <img :src="require('@/assets/one/12.png')" />
              <p>{{ $t("index.one.item12") }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <img :src="require('@/assets/one/ipad.png')" />
        <div class="desc">
          <div class="detail">
            {{ $t("index.one.right_desc") }}
          </div>
          <div class="btn">
            {{ $t("index.title5") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "one"
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f6f9fd;
  padding-bottom: 100px;

  .center_content {
    margin: 0 auto;
    width: 780px;
    height: 140px;
    text-align: center;

    h3 {
      font-size: 32px;
      width: 670px;
      height: 66px;
      font-family: Rubik-Medium, serif;
      line-height: 36px;
    }

    p {
      font-size: 20px;
      font-family: Rubik-Light, serif;
      line-height: 28px;
      color: #fc275d;
      margin-top: 10px;
    }
  }

  .flow-content {
    margin-top: 50px;
    width: 470px;
    margin-left: 110px;
    display: flex;

    .left {
      .title {
        font-size: 16px;
        font-family: Rubik-Light, serif;
        line-height: 26px;
      }

      .imgs {
        display: flex;
        text-align: left;
        flex-wrap: wrap;
        width: 500px;
        justify-content: space-between;
        align-items: center;

        .items {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 45px;

          .item:last-child {
            margin-left: 0px;
          }

          .item {
            margin-right: 60px;
            text-align: center;
            font-family: Rubik-Light, serif;
            width: 68px;
            height: 96px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;

            img {
              width: 50px;
              margin-bottom: 10px;
            }

            p {
              font-size: 16px;
              font-family: Rubik-Light, serif;
              line-height: 16px;
              width: 90px;
              height: 40px;
            }

            .sp {
            }
          }
        }
      }
    }

    .right {
      margin-left: 140px;

      .desc {
        margin-top: 75px;
        display: flex;

        .detail {
          margin-left: 25px;
          width: 250px;
          font-size: 16px;
          font-family: Rubik-Light, serif;
          line-height: 26px;
          margin-right: 40px;
        }
        .btn {
          width: 200px;
          height: 60px;
          background-color: #fc557a;
          line-height: 60px;
          text-align: center;
          color: #ffffff;
          font-family: Rubik-Light, serif;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
