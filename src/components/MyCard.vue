<template>
  <van-card
    :key="item.houseCode"
    :price="item.price"
    :desc="item.desc"
    :title="item.title"
    :thumb="scr"
    @click="fn"
  >
    <template #tags>
      <van-tag plain type="danger">近地铁</van-tag>
    </template>
  </van-card>
</template>

<script>
export default {
  name: 'HkCard',
  props: ['item'],
  components: {},
  data () {
    return {}
  },
  methods: {
    fn() {
      this.$emit('fn')
    }
  },
  mounted () {},
  watch: {},
  computed: {
    scr () {
      return 'http://liufusong.top:8080' + this.item.houseImg
    }
  },
  filters: {}
}
</script>

<style scoped lang="less">
.van-card {
  border-top: 1px solid #c0bdbd;
}
</style>
