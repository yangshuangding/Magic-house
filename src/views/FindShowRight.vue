<template>
  <div>
    <van-popup
      position="right"
      :style="{ width: '80%', height: '100%' }"
      v-model="flag"
      @close="changeshow"
    >
      <div class="filter" ref="total">
        <div class="housetype">
          <p>户型</p>
          <div class="content">
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >一室</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >二室</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >三室</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >四室</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >四室+</van-tag
            >
          </div>
        </div>
        <div class="position">
          <p>朝向</p>
          <div class="content">
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >东</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >西</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >南</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >北</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >东南</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >东北</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >西南</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >西北</van-tag
            >
          </div>
        </div>
        <div class="floor">
          <p>楼层</p>
          <div class="content">
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >高楼层</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >中楼层</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >低楼层</van-tag
            >
          </div>
        </div>
        <div class="housedevice">
          <p>房屋亮点</p>
          <div class="content">
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >集中供暖</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >双卫生间</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >进地铁</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >随时看房</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >精装</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >公寓</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              ref="tolong"
              >独立卫生间</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >押一付一</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >独立阳台</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >月租</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >限男生</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >限女生</van-tag
            >
            <van-tag
              type="primary"
              size="large"
              plain
              @click="changecolor"
              color="#888"
              text-color="#888"
              >新上</van-tag
            >
          </div>
        </div>
      </div>
      <div class="footer">
        <van-button type="default" size="large" @click="removetags"
          >清除</van-button
        >
        <van-button type="primary" size="large" @click="committags"
          >确定</van-button
        >
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'FindShowRight',
  props: ['value'],
  data () {
    return {
      flag: this.value,
      filterTags: []
    }
  },
  watch: {
    value: {
      handler () {
        this.flag = this.value
      }
    }
  },
  methods: {
    changeshow () {
      this.$emit('input')
    },
    changecolor (e) {
      e.target.classList.toggle('active')
      this.filterTags.push(e.target.innerText)
    },
    committags () {
      this.$emit('committags', this.filterTags)
      this.$refs.total
        .querySelectorAll('.active')
        .forEach(item => item.classList.remove('active'))
      this.flag = false
    },
    removetags () {
      this.$refs.total
        .querySelectorAll('.active')
        .forEach(item => item.classList.remove('active'))
      this.filterTags = []
    }
  }
}
</script>

<style lang="less" scoped>
.active {
  border-color: #21b97a;
  color: #21b97a;
  background-color: #defaef;
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-between;
  width: 225px;
  //   height: 155px;
  margin-left: 40px;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 14px;
  .van-tag {
    font-size: 12px;
    display: inline-block;
    width: 60px;
    height: 24px;
    text-align: center !important;
    line-height: 24px;
    margin-bottom: 18px;
    margin-right: 15px;
    // padding: 0;
  }
}
.filter {
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
  p {
    margin: 20px, 0;
    font-size: 15px;
  }
}
.footer {
  position: sticky;
  bottom: 0;
  left: 0;
  display: flex;
  .van-button--default {
    width: 100px;
    color: #21b97a;
    font-size: 18px;
  }
  .van-button--primary {
    width: 100%;
    color: white;
    font-size: 18px;
  }
}
</style>
