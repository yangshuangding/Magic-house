<template>
  <div>
    <van-nav-bar title="城市列表" left-arrow @click-left="$router.back()" />
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="#">当前城市</van-index-anchor>
      <van-cell :title="$route.query.hkCity" />

      <van-index-anchor index="热">热门城市</van-index-anchor>
      <van-cell
        :title="item.label"
        v-for="item in hotList"
        :key="item.id"
        @click="jiaozhu(item.label, item.value)"
      />

      <van-index-anchor index="1" v-for="(item, index) in myList" :key="index"
        ><span>{{ item.index }}</span>
        <van-cell
          :title="ele.label"
          v-for="(ele, index) in item.mylabel"
          :key="index"
          @click="jiaozhu(ele.label, ele.value)"
        />
      </van-index-anchor>
    </van-index-bar>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { city, hot } from '@/api/user'
export default {
  name: 'HkIndexBar',
  props: {},
  components: {},
  data () {
    return {
      hotList: [],
      list: [],
      indexLis1: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ],
      indexList: [
        '#',
        '热',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ],
      myList: [],
      city: ''
    }
  },
  async created () {
    const { body } = await city()
    this.list = body
    this.list.forEach(ele => {
      ele.short = ele.short.toUpperCase()
    })
    const ser = this.list.sort((a, b) => {
      return a.short.charCodeAt(0) - b.short.charCodeAt(0)
    })
    const res = await hot()
    this.list = ser
    this.hotList = res.body
    console.log(this.hotList)
    this.myList = this.indexLis1.map(ele => {
      return {
        index: ele,
        mylabel: ser.filter(item => {
          if (item.short.charAt(0) === ele) {
            return item.label
          }
        })
      }
    })
    console.log(this.myList)
  },
  methods: {
    ...mapMutations(['clickCity']),
    jiaozhu (name, id) {
      this.$store.commit('clickCity', { name, id })
      this.$router.push({
        path: '/home',
        name: 'home',
      })
    }
  },
  mounted () {},
  watch: {},
  computed: {},
  filters: {}
}
</script>

<style scoped lang="less">
.van-index-anchor {
  color: #666 !important;
}
.van-index-bar__sidebar {
  height: 600px;
}
</style>
