<template>
  <div class="box">
    <div class="city">
      <a href="#" @click.prevent="city(dqcity.name)"
        >{{ dqcity.name }}<van-icon name="arrow-down"
      /></a>
    </div>
    <van-search
      v-model="value"
      show-action
      placeholder="请输入小区或者地址"
      @search="onSearch"
    >
      <template #action>
        <div @click="map($route.query.id)" class="icon">
          <van-icon name="location-o" size="25px" color="#fff" />
        </div>
      </template>
    </van-search>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in list" :key="item.id"
        ><img :src="item.imgSrc" alt=""
      /></van-swipe-item>
    </van-swipe>
    <div class="list">
      <ul>
        <li>
          <a href="#" @click.prevent="home">
            <van-icon name="home-o" size="40" color="#17b574" />
            <p>整租</p>
            <div class="zzc"></div>
          </a>
        </li>
        <li>
          <a href="#" @click.prevent="home">
            <van-icon name="friends-o" size="40" color="#17b574" />
            <p>合租</p>
            <div class="zzc"></div>
          </a>
        </li>
        <li @click="map($route.query.id)">
          <a href="#">
            <van-icon name="location-o" size="40" color="#17b574" />
            <p>地图找房</p>
            <div class="zzc"></div>
          </a>
        </li>
        <li @click="mylat">
          <a href="#">
            <van-icon name="wap-home-o" size="40" color="#17b574" />
            <p>去出租</p>
            <div class="zzc"></div>
          </a>
        </li>
      </ul>
    </div>
    <div class="nav">
      <div class="tlt">
        <span class="hkzf" @click="home">租房小组</span>
        <span class="more">更多</span>
      </div>
      <div class="comunter">
        <ul>
          <li v-for="item in zfList" :key="item.id">
            <img :src="item.imgSrc" alt="" />
            <div class="txt">
              <p>{{ item.title }}</p>
              <p>{{ item.desc }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getToken } from '@/utils/storage'
import { swiper, groups } from '@/api/user'
export default {
  name: 'HkIndex',
  props: {},
  components: {},
  data () {
    return {
      value: '',
      list: [],
      zfList: []
    }
  },
  async created () {
    const { body } = await swiper()
    body.forEach(ele => {
      ele.imgSrc = 'http://liufusong.top:8080' + ele.imgSrc
    })
    this.list = body
    const res = await groups(this.dqcity.value)
    res.body.forEach(ele => {
      ele.imgSrc = 'http://liufusong.top:8080' + ele.imgSrc
    })
    this.zfList = res.body
  },
  methods: {
    onSearch () {},
    map (id) {
      this.$router.push({
        path: '/baidumap',
        name: 'baidumap',
        query: {
          id
        }
      })
    },
    city (hkCity) {
      this.$router.push({
        path: '/hkindexbar',
        name: 'hkindexbar',
        query: {
          hkCity
        }
      })
    },
    home () {
      this.$router.push({
        path: '/search',
        name: 'search'
      })
    },
    mylat () {
      if (getToken()) {
        this.$router.push('/myrelease')
      } else {
        this.$dialog
          .confirm({
            title: '提示',
            message: '还没有登录哦,是否去登录'
          })
          .then(() => {
            this.$router.push({
              path: '/hklogin',
              name: 'hklogin'
            })
          })
          .catch(() => {
            // on cancel
          })
      }
    }
  },
  mounted () {},
  watch: {},
  computed: {
    ...mapState(['dqcity'])
  },
  filters: {}
}
</script>

<style scoped lang="less">
.city {
  width: 50px;
  background-color: #fff;
  position: absolute;
  z-index: 12;
  top: 30px;
  left: 20px;
  height: 34px;
  line-height: 34px;
  border-right: 1px solid #cdcbcb;
  border-radius: 3px;
  text-align: center;
  a {
    font-size: 14px;
  }
}
.zzc {
  width: 60px;
  height: 60px;
  background-color: rgba(7, 176, 106, 0.05);
  border-radius: 30px;
  position: absolute;
  top: 0;
  left: 15px;
}
.icon {
  line-height: 25px;
}
.box {
  position: relative;
  .van-search {
    position: absolute;
    top: 20px;
    z-index: 10;
    left: 55px;
    background-color: rgba(0, 0, 0, 0);
    width: 310px;
  }
}
.my-swipe {
  height: 212px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  img {
    height: 242px;
    width: 100%;
  }
}
.list {
  width: 100%;
  height: 122px;
  text-align: center;
  // background-color: aquamarine;
  ul {
    display: flex;
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }
}
a {
  color: #000;
  padding: 10px 0;
  margin-top: 10px;
  position: relative;
}
.nav {
  background-color: #f6f5f6;
  padding: 0 10px;
  .tlt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0 15px 10px;
    .hkzf {
      font-weight: 700;
    }
    .more {
      font-size: 14px;
      color: #666;
    }
  }
  .comunter {
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        width: 172px;
        height: 50px;
        display: flex;
        margin-bottom: 10px;
        background-color: #fff;
        img {
          width: 50px;
          height: 50px;
          margin: 0 10px;
        }
        .txt {
          p {
            padding: 0;
            margin: 0;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
