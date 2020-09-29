<template>
  <div class="three-container">
    <div>
      <div class="left">
        <img :src="require('@/assets/three/pic.png')" />
      </div>
      <div class="right">
        <h1>{{ $t("index.three.one.title") }}</h1>
        <div class="desc">
          <div class="name">
            {{ $t("index.three.one.title_1") }}
          </div>
          <div class="detail">
            {{ $t("index.three.one.title_1_des") }}
          </div>
        </div>
        <div class="desc">
          <div class="name">
            {{ $t("index.three.one.title_2") }}
          </div>
          <div class="detail">
            {{ $t("index.three.one.title_2_des") }}
          </div>
        </div>
        <div class="desc">
          <div class="name">
            {{ $t("index.three.one.title_3") }}
          </div>
          <div class="detail">
            {{ $t("index.three.one.title_3_des") }}
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="right">
        <h1>{{ $t("index.three.two.title") }}</h1>
        <div class="desc">
          <div class="name">
            {{ $t("index.three.two.title_1") }}
          </div>
          <div class="detail">
            {{ $t("index.three.two.title_1_des") }}
          </div>
        </div>
        <div class="desc">
          <div class="name">
            {{ $t("index.three.two.title_2") }}
          </div>
          <div class="detail">
            {{ $t("index.three.two.title_2_des") }}
          </div>
        </div>
      </div>
      <div class="left">
        <img :src="require('@/assets/three/pic2.png')" />
      </div>
    </div>

    <div>
      <div class="left">
        <img :src="require('@/assets/three/pic3.png')" />
      </div>
      <div class="right">
        <h1>{{ $t("index.three.three.title") }}</h1>
        <div class="desc">
          <div class="name">
            {{ $t("index.three.three.title_1") }}
          </div>
          <div class="detail">
            {{ $t("index.three.three.title_1_des") }}
          </div>
        </div>
        <div class="desc">
          <div class="name">
            {{ $t("index.three.three.title_2") }}
          </div>
          <div class="detail">
            {{ $t("index.three.three.title_2_des") }}
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="right">
        <h1>{{ $t("index.three.four.title") }}</h1>
        <div class="desc">
          <div class="name">
            {{ $t("index.three.four.title_1") }}
          </div>
          <div class="detail">
            {{ $t("index.three.four.title_1_des") }}
          </div>
        </div>
      </div>
      <div class="left">
        <img :src="require('@/assets/three/pic4.png')" />
      </div>
    </div>

    <div>
      <div class="left">
        <img :src="require('@/assets/three/pic5.png')" />
      </div>
      <div class="right">
        <h1>{{ $t("index.three.five.title") }}</h1>
        <div class="desc">
          <div class="name">
            {{ $t("index.three.five.title_1") }}
          </div>
          <div class="detail">
            {{ $t("index.three.five.title_1_des") }}
          </div>
        </div>
        <div class="desc">
          <div class="name">
            {{ $t("index.three.five.title_2") }}
          </div>
          <div class="detail">
            {{ $t("index.three.five.title_2_des") }}
          </div>
        </div>
        <div class="desc">
          <div class="name">
            {{ $t("index.three.five.title_3") }}
          </div>
          <div class="detail">
            {{ $t("index.three.five.title_3_des") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Three"
};
</script>

<style lang="scss" scoped>
.three-container {
  padding-top: 100px;
  margin-left: 110px;

  > div {
    padding-bottom: 200px;
    display: flex;

    .left {
      flex: 1;
      align-self: center;

      img {
        width: 486px;
        height: 322px;
      }
    }

    .right {
      flex: 1;
      display: flex;
      flex-direction: column;

      h1 {
        text-align: left;
        font-size: 32px;
        font-family: Rubik-Medium, serif;
      }

      .desc {
        display: flex;
        flex-direction: column;

        .name {
          flex: 1;
          margin-top: 35px;
          font-size: 20px;
          color: #fc557a;
        }

        .detail {
          margin-top: 10px;
          flex: 1;
          font-size: 16px;
          line-height: 24px;
          width: 560px;
        }
      }
    }
  }
}
</style>
