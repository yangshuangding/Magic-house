<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <van-cell
      :value="item.communityName"
      v-for="item in list"
      :key="item.community"
      @click="back(item.communityName, item.community)"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { community } from '@/api/user'
export default {
  name: 'MySearch',
  props: {},
  components: {},
  data () {
    return {
      value: '',
      list: []
    }
  },

  methods: {
    async onSearch (val) {
      //   Toast(val)
      const { body } = await community(val, this.dqcity.value)
      this.list = body
      console.log(body)
      console.log(val)
    },
    onCancel () {
      this.$router.back()
    },
    back (name, id) {
      this.$router.push({
        path: '/myrelease',
        name: 'myrelease',
        query: {
          name,
          id
        }
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

<style scoped lang="less"></style>
