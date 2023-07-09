<template>
  <keep-alive>
    <div>
      <div class="box">
        <van-nav-bar left-arrow @click-left="$router.back()" />
        <div class="city">
          <a href="#" @click.prevent="city"
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
            <div @click="onSearch" class="icon">
              <van-icon name="location-o" size="25px" color="#fff" />
            </div>
          </template>
        </van-search>
      </div>
      <!-- 下拉选择菜单 -->
      <van-sticky>
        <van-dropdown-menu>
          <van-dropdown-item title="区域" ref="area">
            <van-picker :columns="columns" @change="onChange" />
            <div style="padding: 5px 0px; display: flex">
              <van-button type="default" block @click="onCancle">
                取消
              </van-button>
              <van-button type="primary" block @click="onConfirm">
                确认
              </van-button>
            </div>
          </van-dropdown-item>
          <van-dropdown-item title="方式" ref="area1">
            <van-picker :columns="value1" @change="onChange1" />
            <div style="padding: 5px 0px; display: flex">
              <van-button type="default" block @click="onCancle1">
                取消
              </van-button>
              <van-button type="primary" block @click="onConfirm1">
                确认
              </van-button>
            </div>
          </van-dropdown-item>
          <van-dropdown-item title="租金" ref="area2">
            <van-picker :columns="value2" @change="onChange2" />
            <div style="padding: 5px 0px; display: flex">
              <van-button type="default" block @click="onCancle2">
                取消
              </van-button>
              <van-button type="primary" block @click="onConfirm2">
                确认
              </van-button>
            </div>
          </van-dropdown-item>
          <van-dropdown-item
            title="筛选"
            @open="showFlag"
            :overlay="showFlag"
          />
        </van-dropdown-menu>
      </van-sticky>
      <FindShowRight v-model="show" @committags="committags"></FindShowRight>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <MyCard
          @fn="counter(item.houseCode)"
          v-for="(item, index) in list"
          :key="index"
          :item="item"
        ></MyCard>
      </van-list>
    </div>
  </keep-alive>
</template>

<script>
import { mapState } from 'vuex'
import { houses, condition } from '@/api/user'
import MyCard from '@/components/MyCard.vue'
import FindShowRight from './FindShowRight.vue'
export default {
  name: 'LookFor',
  props: {},

  components: { MyCard, FindShowRight },
  async created () {
    const { body } = await condition(this.dqcity.value)
    function deepCopy (newObj, oldObj) {
      for (let k in oldObj) {
        if (oldObj[k] instanceof Array) {
          newObj[k] = []
          deepCopy(newObj[k], oldObj[k])
        } else if (oldObj[k] instanceof Object) {
          newObj[k] = {}
          deepCopy(newObj[k], oldObj[k])
        } else {
          newObj.text = oldObj.label
          newObj.value = oldObj.value
        }
      }
    }
    let arr = {}
    let arr1 = {}
    let arr2 = {}
    let arr3 = {}
    deepCopy(arr, body.area)
    deepCopy(arr1, body.subway)
    deepCopy(arr2, body.rentType)
    deepCopy(arr3, body.price)
    this.columns.push(arr)
    this.columns.push(arr1)
    for (const key in arr2) {
      this.value1.push(arr2[key])
    }
    for (const key in arr3) {
      this.value2.push(arr3[key])
    }
    this.arr = arr.children
    this.arr[0].children = [{ text: '不限' }]
    console.log(this.arr)
    // console.log(arr1)
    // console.log(body.area)
    // console.log(body)
  },
  data () {
    return {
      value: '',
      list: [],
      loading: false,
      finished: false,
      current: 1,
      sorter: 'weight_desc',
      value1: [],
      value2: [],
      show: false,
      columns: [],
      myArea: '',
      data: {
        id: '',
        area: '',
        subway: '',
        rentType: '',
        price: '',
        more: ''
      },
      arr: []
    }
  },
  methods: {
    async committags (value) {
      this.data.more = value.join('|')
      const { body } = await houses(this.data)
      this.list = body.list
      console.log(this.data.more);
    },
    showFlag () {
      this.show = !this.show
    },
    async onConfirm () {
      this.$refs.area.toggle()
      const { body } = await houses(this.data)
      this.list = body.list
    },
    async onConfirm1 () {
      this.$refs.area1.toggle()
      const { body } = await houses(this.data)
      this.list = body.list
    },
    async onConfirm2 () {
      this.$refs.area2.toggle()
      const { body } = await houses(this.data)
      this.list = body.list
    },
    onCancle () {
      this.$refs.area.toggle()
    },
    onCancle1 () {
      this.$refs.area1.toggle()
    },
    onCancle2 () {
      this.$refs.area2.toggle()
    },
    onChange (picker, value) {
      if (value[0] === '区域') {
        const res = this.arr.find(ele => {
          // console.log(ele);
          if (ele.text === value[1]) {
            return ele
          }
        })
        const wes = res.children.find(ele => {
          if (ele.text === value[2]) {
            return ele
          }
        })
        console.log(wes)
        console.log(res)
        this.data.id = res.value
        this.data.area = wes.value
      } else {
        console.log(value[1][0])
        this.data.subway = value[1][0]
      }
      this.myArea = value
    },
    onChange1 (picker, value) {
      this.data.rentType = value.value
      console.log(value)
    },
    onChange2 (picker, value) {
      this.data.price = value.value
      console.log(value)
    },
    onSearch () {
      this.$router.push({
        path: '/baidumap',
        name: 'baidumap'
      })
    },
    async onLoad () {
      const { body } = await houses({
        current: this.current,
        sorter: this.sorter
      })
      this.list.push(...body.list)
      this.loading = false
      this.current++

      if (this.current > body.pageTotal) {
        this.finished = true
      }
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
    },
    city () {
      this.$router.push({
        path: '/hkindexbar',
        name: 'hkindexbar'
      })
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
.my-card {
  z-index: 10;
}
.van-card {
  border-top: 1px solid #c0bdbd;
}
.box {
  position: relative;
  .van-search {
    position: absolute;
    top: -3px;
    z-index: 10;
    left: 80px;
    background-color: rgba(0, 0, 0, 0);
    width: 280px;
  }
}
.city {
  width: 50px;
  background-color: #fff;
  position: absolute;
  z-index: 12;
  top: 7px;
  left: 43px;
  height: 34px;
  line-height: 34px;
  border-right: 1px solid #cdcbcb;
  border-radius: 3px;
  text-align: center;
  a {
    font-size: 14px;
    color: #000;
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
</style>
