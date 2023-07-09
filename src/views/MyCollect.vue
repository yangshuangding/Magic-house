<template>
  <div>
    <van-nav-bar title="收藏列表" left-arrow @click-left="$router.back()" />
    <MyCard v-for="item in list" :key="item.houseCode" :item="item"></MyCard>
  </div>
</template>

<script>
import { ckcollect } from '@/api/user'
import MyCard from '@/components/MyCard.vue'
export default {
  name: 'MyCollect',
  props: {},
  components: {
    MyCard
  },
  data () {
    return {
      list: []
    }
  },
  async created () {
    const { body } = await ckcollect()
    console.log(body)
    this.list = body
  },
  methods: {},
  mounted () {},
  watch: {},
  computed: {},
  filters: {}
}
</script>

<style scoped lang="less"></style>
