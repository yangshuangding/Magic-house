<template>
  <div>
    <van-nav-bar title="地图找房" left-arrow @click-left="$router.back()" />
    <div class="BaiDuMap">
      <baidu-map
        :center="center"
        :zoom="zoom"
        style="width: 100%; height: 100%"
        @ready="handler"
        :showZoomInfo="true"
      >
        <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
        <bm-scale anchor="BMAP_ANCHOR_BUTTON_LEFT"></bm-scale>
        <MyOverlayVue
          :position="item.coord"
          :active="active"
          v-for="item in list"
          :key="item.value"
          v-show="zoom === 11"
        >
          <template>
            <div @click="xxcity(item.value, item.coord)">
              <p>{{ item.label }}</p>
              {{ item.count }}套
            </div>
          </template>
        </MyOverlayVue>
        <MyOverlayVue
          :position="item.coord"
          :active="active"
          v-for="item in dblList"
          :key="item.value"
          v-show="zoom === 14"
        >
          <template>
            <div @click="xxxcity(item.value, item.coord)">
              <p>{{ item.label }}</p>
              {{ item.count }}套
            </div>
          </template>
        </MyOverlayVue>
        <MyOverlayVue
          :position="item.coord"
          :active="active"
          v-for="item in mydblList"
          :key="item.value"
          v-show="zoom === 17"
          class="three"
        >
          <template>
            <div @click="counters(item.value)">
              <p>{{ item.label }}</p>
              {{ item.count }}套
            </div>
          </template>
        </MyOverlayVue>
        <!-- 必须给容器指高度，不然地图将显示在一个高度为0的容器中，看不到 -->
      </baidu-map>
      <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
        <MyCard
          @fn="counter(item.houseCode)"
          v-for="(item, index) in fyList"
          :key="index"
          :item="item"
        ></MyCard>
      </van-popup>
    </div>
  </div>
</template>
<script>
import MyOverlayVue from '@/components/MyOverlay.vue'
import { mapState } from 'vuex'
import { map, maphouses } from '@/api/user'
import MyCard from '@/components/MyCard.vue'
export default {
  components: {
    MyOverlayVue,
    MyCard
  },
  data () {
    return {
      center: {
        name: '江苏省',
        lng: '',
        lat: ''
      },
      show: false,
      // 地址信息
      address: null,
      //地图展示级别
      zoom: 11,
      active: false,
      overlayList: [],
      list: [],
      dblList: [],
      mydblList: [],
      fyList: []
    }
  },
  async created () {
    const { body } = await map(this.dqcity.value)
    this.overlayList = body
    this.list = this.overlayList.map(item => {
      return {
        ...item,
        coord: {
          lat: item.coord.latitude,
          lng: item.coord.longitude
        }
      }
    })
    console.log(body)
  },
  methods: {
    handler () {
      this.center.lng = 116.404
      this.center.lat = 39.915
    },
    syncCenterAndZoom (e) {
      this.zoom = e.target.getZoom()
    },
    async xxcity (id, coord) {
      const { body } = await map(id)
      this.zoom = 14
      this.dblList = body.map(item => {
        return {
          ...item,
          coord: {
            lat: item.coord.latitude,
            lng: item.coord.longitude
          }
        }
      })
      console.log(coord)
      console.log(this.dblList)
      console.log(this.zoom)
      this.center.lng = coord.lng
      this.center.lat = coord.lat
    },
    async xxxcity (id, coord) {
      const { body } = await map(id)
      this.zoom = 17
      this.mydblList = body.map(item => {
        return {
          ...item,
          coord: {
            lat: item.coord.latitude,
            lng: item.coord.longitude
          }
        }
      })
      this.center.lng = coord.lng
      this.center.lat = coord.lat
      console.log(this.mydblList)
      console.log(this.zoom)
    },
    async counters (id) {
      const { body } = await maphouses(id)
      this.show = true
      this.fyList = body
      console.log(body)
    },
    counter (id) {
      console.log(1)
      this.$router.push({
        path: '/detali',
        name: 'detali',
        query: {
          id
        }
      })
    }
  },
  mounted () {
    this.center.name = this.dqcity.name
    const geoc = new window.BMap.Geocoder()
    geoc.getPoint(
      this.center.name,
      point => {
        if (point) {
          this.center.lng = point.lng
          this.center.lat = point.lat
        } else {
          console.log('获取经纬度坐标失败')
        }
      },
      '中国'
    )
    console.log(this.zoom)
  },
  computed: {
    ...mapState(['dqcity'])
  }
}
</script>
<style scoped lang="less">
.BaiDuMap {
  width: 100%;
  height: 621px;
}
.van-nav-bar {
  z-index: 10;
}
.three {
  width: 80px;
  height: 30px;
  font-size: 12px;
  line-height: 10px;
  padding: 10px 0px;
}
</style>
