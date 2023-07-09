<template>
  <div class="bjc">
    <van-nav-bar
      :title="list.community"
      left-arrow
      @click-left="$router.back()"
    />
    <div class="pic">
      <img :src="list.houseImg[0]" />
    </div>
    <div class="HouseDetail_info__w_ymp">
      <h3 class="HouseDetail_infoTitle__E1ASO">{{ list.description }}</h3>
      <div class="am-flexbox HouseDetail_tags__3VXf3 am-flexbox-align-center">
        <div class="am-flexbox-item">
          <span>{{ list.tags[0] }}</span>
        </div>
      </div>
      <div
        class="am-flexbox HouseDetail_infoPrice__3SZhW am-flexbox-align-center"
      >
        <div class="am-flexbox-item HouseDetail_infoPriceItem__Rxzot">
          {{ list.price }}
          <span class="HouseDetail_month__uBAXz">/月</span>
          <div>租金</div>
        </div>
        <div class="am-flexbox-item HouseDetail_infoPriceItem__Rxzot">
          {{ list.roomType }}
          <span class="HouseDetail_month__uBAXz"></span>
          <div>房型</div>
        </div>
        <div class="am-flexbox-item HouseDetail_infoPriceItem__Rxzot">
          {{ list.size }}
          <span class="HouseDetail_month__uBAXz">/平米</span>
          <div>面积</div>
        </div>
      </div>
      <div
        class="am-flexbox HouseDetail_infoBasic__3prns am-flexbox-align-start"
      >
        <div class="am-flexbox-item">
          <div>
            <span class="HouseDetail_title__iGpj_"> 装修： </span>
            {{ list.supporting.length > 5 ? '精装修' : '简装' }}
          </div>
          <div>
            <span class="HouseDetail_title__iGpj_"> 楼层： </span>
            {{ list.floor }}
          </div>
        </div>
        <div class="am-flexbox-item">
          <div>
            <span class="HouseDetail_title__iGpj_"> 朝向： </span>
            {{ list.oriented[0] }}
          </div>
          <div>
            <span class="HouseDetail_title__iGpj_"> 类型： </span>
            {{ list.roomType }}
          </div>
        </div>
      </div>
    </div>
    <div class="HouseDetail_map__21q54">
      <div class="HouseDetail_mapTitle__3reEo">
        小区：<span>{{ list.community }}</span>
      </div>
      <div class="BaiDuMap">
        <baidu-map
          :center="center"
          :zoom="zoom"
          :scroll-wheel-zoom="true"
          style="width: 100%; height: 100%"
          @ready="handler"
          @click="getClickInfo"
          @moving="syncCenterAndZoom"
          @moveend="syncCenterAndZoom"
          @zoomend="syncCenterAndZoom"
        >
          <bm-overlay
            pane="labelPane"
            :class="{ sample: true, active }"
            @draw="draw"
            @mouseover.native="active = true"
            @mouseleave.native="active = false"
          >
            <div>
              <span>{{ list.community }}</span>
              <div class="zzc"></div>
            </div>
          </bm-overlay>
          <!-- 必须给容器指高度，不然地图将显示在一个高度为0的容器中，看不到 -->
          <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
          <bm-geolocation
            anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
            :showAddressBar="true"
            :autoLocation="true"
          ></bm-geolocation>
          <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
        </baidu-map>
      </div>
    </div>
    <div class="HouseDetail_about__1W1Px">
      <div class="HouseDetail_houseTitle__3dg6k">房屋配套</div>
      <ul class="HousePackage_root__1MUw0">
        <!-- 房屋配套 -->
        <li
          class="HousePackage_item__2q4AQ"
          v-for="item in jzList"
          :key="item.icon"
        >
          <p>
            <van-icon class-prefix="my-icon" :name="item.icon" size="25px" />
          </p>
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="HouseDetail_set__26npJ">
      <div class="HouseDetail_houseTitle__3dg6k">房源概况</div>
      <div>
        <div class="HouseDetail_contact__O_lsw">
          <div class="HouseDetail_user__TZj3w">
            <img
              src="	http://liufusong.top:8080/img/avatar.png
"
              alt=""
            />
            <div class="HouseDetail_useInfo__FrBlz">
              <div>王女士</div>
              <div class="HouseDetail_userAuth__Xr6gY">
                <i><van-icon name="certificate" size="16px" /></i>已认证房主
              </div>
            </div>
          </div>
          <span class="HouseDetail_userMsg__3mcRl">发消息</span>
        </div>
        <div class="HouseDetail_descText__2JsQA">
          1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
          2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
          3.人车分流，环境优美。
          4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。
        </div>
      </div>
    </div>
    <div class="HouseDetail_recommend__1L7WT">
      <div class="HouseDetail_houseTitle__3dg6k">猜你喜欢</div>
      <div class="HouseDetail_items__1nCaB">
        <MyCard
          v-for="item in youLike"
          :key="item.houseCode"
          :item="item"
        ></MyCard>
      </div>
    </div>
    <van-tabbar>
      <van-tabbar-item @click="collect">
        <img :src="scimg" alt="" />
        收藏</van-tabbar-item
      >
      <van-tabbar-item>在线咨询</van-tabbar-item>
      <van-tabbar-item class="myvan">电话预约</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { housesid, collect, delcoll } from '@/api/user'
import MyCard from '@/components/MyCard.vue'
export default {
  name: 'DetailPage',
  props: {},
  components: {
    MyCard
  },
  async created () {
    // console.log(this.$route.query.id)
    const { body } = await housesid(this.$route.query.id)
    console.log(body)
    this.list = body
    this.list.houseImg[0] = 'http://liufusong.top:8080' + this.list.houseImg[0]
    this.list.supporting.filter(ele => {
      return this.itemList.forEach(item => {
        if (ele === item.name) {
          this.jzList.push(item)
        }
      })
    })
    console.log(this.jzList)
  },
  data () {
    return {
      list: '',
      // 地址信息
      address: null,
      center: { lng: 0, lat: 0 },
      //地图展示级别
      zoom: 18,
      active: false,
      scflag: false,
      youLike: [
        {
          price: 7200,
          desc: '83㎡/南/高楼层',
          houseCode: 'dwadwggjwgd',
          title: '天居园 2室1厅',
          houseImg: '/img/message/1.png'
        },
        {
          price: 4500,
          desc: '72.32㎡/南 北/低楼层',
          houseCode: 'dwadwggajwgd',
          title: '安贞西里 3室1厅',
          houseImg: '/img/message/2.png'
        },
        {
          price: 4300,
          desc: '52㎡/西南/低楼层',
          houseCode: 'dwwggajwgd',
          title: '角门甲4号院 1室1厅',
          houseImg: '/img/message/3.png'
        }
      ],
      itemList: [
        { name: '衣柜', icon: 'yigui1' },
        { name: '洗衣机', icon: 'xiyiji' },
        { name: '空调', icon: 'kongtiao' },
        { name: '天然气', icon: 'meiqitianranqi' },
        { name: '冰箱', icon: 'bingxiang' },
        { name: '暖气', icon: 'nuanqi' },
        { name: '电视', icon: 'dianshiji' },
        { name: '热水器', icon: 'haofangtuo400my-iconfont2reshuiqi' },
        { name: '宽带', icon: 'kuandai' },
        { name: '沙发', icon: 'shafa' }
      ],
      jzList: []
    }
  },
  methods: {
    handler () {
      this.center.lng = this.list.coord.longitude
      this.center.lat = this.list.coord.latitude
    },
    draw ({ el, BMap, map }) {
      const pixel = map.pointToOverlayPixel(
        new BMap.Point(this.list.coord.longitude, this.list.coord.latitude)
      )
      el.style.left = pixel.x - 60 + 'px'
      el.style.top = pixel.y - 20 + 'px'
    },
    getClickInfo (e) {
      // 创建地理编码实例
      const myGeo = new window.BMap.Geocoder()
      // 根据坐标逆解析地址
      myGeo.getLocation(
        new window.BMap.Point(e.point.lng, e.point.lat),
        result => {
          if (result) {
            this.address = result.address
          }
        }
      )
      this.center.lng = e.point.lng
      this.center.lat = e.point.lat
    },
    syncCenterAndZoom (e) {
      this.zoom = e.target.getZoom()
    },
    async collect () {
      if (this.scflag === false) {
        const col = await collect(this.$route.query.id)
        this.$toast('收藏成功')
        this.scflag = !this.scflag
        console.log(col)
      } else {
        const col = await delcoll(this.$route.query.id)
        this.$toast('取消收藏')
        this.scflag = !this.scflag
        console.log(col)
      }
    }
  },
  mounted () {},
  watch: {},
  computed: {
    scimg () {
      if (this.scflag) {
        return 'http://liufusong.top:8080/img/star.png'
      } else {
        return 'http://liufusong.top:8080/img/unstar.png'
      }
    }
  },
  filters: {}
}
</script>

<style scoped lang="less">
.bjc {
  background-color: #f6f5f6;
}
.sample {
  transform: scale(0.7);
  width: 120px;
  height: 30px;
  line-height: 30px;
  background: rgba(238, 93, 91, 1);
  overflow: hidden;
  border: 1px solid red;
  font-size: 19px;
  color: #fff;
  text-align: center;
  padding: 10px;
  position: absolute;
}
.sample.active {
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
}
.BaiDuMap {
  width: 100%;
  height: 100%;
}
.HouseDetail_recommend__1L7WT {
  margin: 10px 0 0;
  padding: 0 15px;
  background: #fff;
  .HouseDetail_houseTitle__3dg6k {
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 10px;
    padding: 15px 0;
    // border-bottom: 1px solid #cecece;
  }
  .HouseDetail_items__1nCaB {
    height: 400px;
    // background-color: #39becd;
  }
}
.HouseDetail_set__26npJ {
  margin: 10px 0;
  padding: 0 10px;
  line-height: 150%;
  background: #fff;
  .HouseDetail_houseTitle__3dg6k {
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 10px;
    padding: 15px 0;
    border-bottom: 1px solid #cecece;
  }
  .HouseDetail_contact__O_lsw {
    position: relative;
    .HouseDetail_user__TZj3w {
      margin-bottom: 10px;
      display: flex;
      img {
        width: 52px;
        height: 52px;
        margin: 10px 10px 0 0;
      }
      .HouseDetail_useInfo__FrBlz {
        padding: 15px 0 0 5px;
        .HouseDetail_userAuth__Xr6gY {
          font-size: 12px;
          color: #fa5741;
        }
      }
    }
    .HouseDetail_userMsg__3mcRl {
      position: absolute;
      right: 15px;
      top: 20px;
      color: #33be85;
      border: 1px solid #33be85;
      border-radius: 3px;
      padding: 3px 15px;
    }
  }
  .HouseDetail_descText__2JsQA {
    line-height: 1.6;
    padding: 10px 0;
    color: #333;
  }
}
.HouseDetail_about__1W1Px {
  margin-bottom: 10px;
  padding: 40px 10px;
  padding-bottom: 0;
  background: #fff;
  // border-bottom: 1px solid #cecece;
  .HouseDetail_houseTitle__3dg6k {
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 10px;
    padding: 15px 0;
    border-bottom: 1px solid #cecece;
  }
  .HousePackage_root__1MUw0 {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    background: #fff;
    margin: 0;
    padding: 0;
    .HousePackage_item__2q4AQ {
      margin: 10px 0;
      width: 20%;
      line-height: 23px;
      p {
        margin: 0;
      }
    }
  }
}
.HouseDetail_map__21q54 {
  margin-top: 10px;
  background: #fff;
  height: 189px;
  // background-color: aqua;
  .HouseDetail_mapTitle__3reEo {
    margin: 0 3%;
    line-height: 44px;
    color: #666;
    span {
      color: #333;
    }
  }
}
.van-tabbar-item {
  border-top: 1px solid #999;
  border-right: 1px solid #999;
  color: #999;
  font-size: 17px;
  img {
    width: 16px;
    height: 16px;
  }
}
.myvan {
  border-right: 0;
  background-color: #21b97a;
  color: #fff;
}
.HouseDetail_info__w_ymp {
  padding: 15px;
  background: #fff;
  .HouseDetail_infoTitle__E1ASO {
    font-weight: 400;
    font-size: 16px;
    color: #333;
  }
  .HouseDetail_tags__3VXf3 {
    position: relative;
    margin: 10px 0;
    .am-flexbox-item {
      box-sizing: border-box;
      flex: 1 1;
      margin-left: 8px;
      min-width: 10px;
      span {
        color: #39becd;
        background: #e1f5f8;
        display: inline-block;
        font-size: 12px;
        border-radius: 3px;
        padding: 4px 5px;
        margin-right: 5px;
        line-height: 12px;
      }
    }
  }
  .HouseDetail_infoPrice__3SZhW {
    border-top: 1px solid #cecece;
    border-bottom: 1px solid #cecece;
    margin: 15px 0;
    padding: 15px 0;
    .am-flexbox-item {
      box-sizing: border-box;
      flex: 1 1;
      margin-left: 8px;
      min-width: 10px;
    }
    .HouseDetail_infoPriceItem__Rxzot {
      text-align: center;
      color: #fa5741;
      font-weight: 700;
      div:first-child {
        color: #fa5741;
        font-size: 18px;
      }
      div {
        font-weight: normal;
        color: #999;
        height: 26px;
        line-height: 26px;
        .HouseDetail_month__uBAXz {
          font-size: 12px;
          font-weight: 400;
        }
      }
    }
  }
  .am-flexbox.am-flexbox-align-start {
    align-items: flex-start;
  }
  .HouseDetail_infoBasic__3prns {
    font-size: 13px;
    .am-flexbox-item {
      box-sizing: border-box;
      flex: 1 1;
      margin-left: 8px;
      min-width: 10px;
      .HouseDetail_title__iGpj_ {
        display: inline-block;
        color: #999;
        padding-right: 5px;
        line-height: 26px;
      }
    }
  }
}
.am-flexbox {
  text-align: left;
  overflow: hidden;
  display: flex;
}
.am-flexbox.am-flexbox-align-center {
  align-items: center;
}
.pic {
  height: 252px;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
