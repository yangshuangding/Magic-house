<template>
  <div>
    <router-view />
    <div>
      <van-tabbar route>
        <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/search" icon="search"
          >找房</van-tabbar-item
        >
        <van-tabbar-item replace to="/friends" icon="friends-o"
          >资讯</van-tabbar-item
        >
        <van-tabbar-item replace to="/setting" icon="setting-o"
          >我的</van-tabbar-item
        >
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HkTable',
  props: {
  },
  components: {

  },
  data () {
    return {

    }
  },
  methods: {

  },
  mounted () {

  },
  watch: {

  },
  computed: {

  },
  filters: {

  }
}
</script>

<style scoped lang='less'>
</style>
