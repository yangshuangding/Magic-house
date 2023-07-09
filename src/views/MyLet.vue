<template>
  <div>
    <van-nav-bar title="我的出租" left-arrow @click-left="$router.back()" />
    <div class="empty-container" v-if="flag">
      <img src="http://liufusong.top:8080/img/not-found.png" alt="" />
      <p>
        您还没有房源，<a href="#" class="Rent_link__2yGRO" @click="fn"
          >去发布房源</a
        >吧~
      </p>
    </div>
    <MyCard
      v-for="item in list"
      :key="item.houseCode"
      :item="item"
      @fn="counter(item.houseCode)"
    ></MyCard>
  </div>
</template>

<script>
import { userhses } from '@/api/user'
import MyCard from '@/components/MyCard.vue'
export default {
  name: 'MyLet',
  props: {},
  components: { MyCard },
  async created () {
    const { body } = await userhses()
    console.log(body)
    if (body.length !== 0) {
      this.flag = false
      this.list = body
    }
  },
  data () {
    return {
      flag: true,
      list: []
    }
  },
  methods: {
    fn () {
      this.$router.push('/myrelease')
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
  mounted () {},
  watch: {},
  computed: {},
  filters: {}
}
</script>

<style scoped lang="less">
.empty-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 150px;
    margin: 30px 0;
    height: 97px;
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 14px;
    .Rent_link__2yGRO {
      color: #33be85;
      font-size: 14px;
    }
  }
}
a {
  background: transparent;
  text-decoration: none;
}
</style>
