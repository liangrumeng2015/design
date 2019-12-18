<template>
  <div>
    <div class="card" v-for="(item,idx) in CardData" :key="idx">
      <div class="card_left_img">
        <img :src="item.imgsrc" />
      </div>
      <div class="card_center_txt">
        <div class="txt_2">{{item.bigTxt}}</div>
        <span>{{item.name}}</span>
      </div>
      <div class="card_btn_icon" v-if="button">
        <button>+常用</button>
      </div>
      <div class="card_btn_icon card_icon_arrow" v-if="!button">
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    CardData: Array,
    button: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="stylus" scoped>
.card {
  display: flex;
  align-items: center;
  margin: 10px auto;
  background-color #fff
  padding: 0 15px
}

.card_left_img {
  flex: 2;

  img {
    width: 40px;
    height: 40px;
  }
}

.card_center_txt {
  flex: 8;
  font-size: 14px;
  color: #313131;

  .txt_2 {
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  span {
    color: #9a9a9a;
    font-size: 12px;
  }
}

.card_btn_icon {
  flex: 2;

  button {
    width: 60px;
    height: 30px;
    color: #478cb4;
    border: 1px solid #478cb4;
    background-color: transparent;
    border-radius: 5px;
  }
}

.card_icon_arrow {
  text-align: right;
  color: #848484;
}
</style>