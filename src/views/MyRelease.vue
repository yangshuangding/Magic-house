<template>
  <div>
    <van-nav-bar title="发布房源" left-arrow @click-left="$router.back()" />
    <van-cell-group>
      <van-cell title="房源信息" color="#21b97a" class="ls" />
      <van-cell
        title="小区名称"
        is-link
        :value="$route.query.name || mysearch"
        @click="search"
      />
    </van-cell-group>
    <div class="mj">
      <van-field v-model="pic" label="租 金" placeholder="请输入租金/月" />
      <van-field v-model="area" label="建筑面积" placeholder="请输入建筑面积" />
    </div>
    <van-cell is-link @click="showPopup" :value="value" title="户型" />
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <van-picker
        title="标题"
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </van-popup>
    <van-cell is-link @click="showPopup1" :value="value1" title="所在楼层" />
    <van-popup v-model="show1" position="bottom" :style="{ height: '40%' }">
      <van-picker
        title="标题"
        show-toolbar
        :columns="columns1"
        @confirm="onConfirm1"
        @cancel="onCancel1"
    /></van-popup>
    <van-cell is-link @click="showPopup2" :value="value2" title="朝向" />
    <van-popup v-model="show2" position="bottom" :style="{ height: '40%' }">
      <van-picker
        title="标题"
        show-toolbar
        :columns="columns2"
        @confirm="onConfirm2"
        @cancel="onCancel2"
    /></van-popup>
    <van-cell title="房屋标题" />
    <van-field
      v-model="title"
      placeholder="请输入标题(例如:整租 小区名 2室 5000元)"
    />
    <van-cell title="房屋图像" />
    <van-uploader v-model="fileList" multiple :after-read="afterRead" />
    <van-cell title="房屋配置" />
    <div class="HouseDetail_about__1W1Px">
      <div class="HouseDetail_houseTitle__3dg6k"></div>
      <ul class="HousePackage_root__1MUw0">
        <!-- 房屋配套 -->
        <li
          class="HousePackage_item__2q4AQ"
          :class="{ bs: selected.includes(item.name) }"
          v-for="item in itemList"
          :key="item.icon"
          @click="xaunz(item.name)"
        >
          <p>
            <van-icon class-prefix="my-icon" :name="item.icon" size="25px" />
          </p>
          {{ item.name }}
        </li>
      </ul>
    </div>
    <van-cell title="房屋描述" />
    <van-field
      v-model="message"
      rows="2"
      autosize
      type="textarea"
      maxlength="50"
      placeholder="请输入留言"
      show-word-limit
      class="myfield"
    />
    <van-tabbar v-model="active">
      <van-button type="default" class="btn" @click="chongz">取消</van-button>
      <van-button type="primary" class="btn1" @click="sub">提交</van-button>
    </van-tabbar>
  </div>
</template>

<script>
import { params, userhouses, image } from '@/api/user'
export default {
  name: 'MyRelease',
  props: {},
  components: {},
  data () {
    return {
      fname: '',
      selected: [],
      active: '',
      pic: '',
      area: '',
      type: '',
      title: '',
      floor: '',
      message: '',
      orientation: '',
      img: '',
      allList: {},
      data: {
        title: '',
        description: '',
        houseImg: '',
        oriented: '',
        supporting: '',
        price: '',
        roomType: '',
        size: '',
        floor: '',
        community: ''
      },
      mysearch: '请输入小区名称',
      show: false,
      show2: false,
      show1: false,
      value: '请选择',
      value1: '请选择',
      value2: '请选择',
      columns: ['一室', '二室', '三室', '四室', '四室+'],
      columns1: ['高楼层', '中楼层', '低楼层'],
      columns2: ['东', '南', '西', '北', '东南', '东北', '西南', '西北'],
      fileList: [],
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
      ]
    }
  },
  async created () {
    const { body } = await params()
    this.columns1 = body.floor.map(ele => ele.label)
    this.columns2 = body.oriented.map(ele => ele.label)
    this.columns = body.roomType.map(ele => ele.label)
    this.itemList.forEach(ele => {
      body.supporting.forEach(item => {
        if (ele.name === item.label) {
          ele.value = item.value
        }
      })
    })
    this.allList = body
    // console.log(this.itemList)
    // console.log(body)
  },
  updated () {},
  methods: {
    async afterRead (file) {
      const form = new FormData()
      form.append('file', file.file)
      console.log(file)
      this.img = await image(form)
      console.log(this.img)
    },
    showPopup () {
      this.show = true
    },
    showPopup1 () {
      this.show1 = true
    },
    showPopup2 () {
      this.show2 = true
    },
    onConfirm (value) {
      this.value = value
      this.show = false
    },
    onConfirm1 (value) {
      this.value1 = value
      this.show1 = false
    },
    onConfirm2 (value) {
      this.value2 = value
      this.show2 = false
    },
    onCancel () {
      this.show = false
    },
    onCancel1 () {
      this.show1 = false
    },
    onCancel2 () {
      this.show2 = false
    },
    xaunz (name) {
      console.log(1)
      if (this.selected.includes(name)) {
        this.selected = this.selected.filter(ele => ele !== name) // 取消选定
      } else {
        this.selected.push(name) // 设置选定项
      }
    },
    search () {
      this.$router.push('/mysearch')
    },

    sub () {
      this.data.title = this.title
      this.data.description = this.message
      this.data.houseImg = this.img.body[0]
      console.log(this.data.houseImg)
      this.data.oriented = this.allList.oriented.find(ele => {
        if (ele.label === this.value2) {
          return ele.value
        }
      }).value
      this.data.supporting = this.selected.join('|')
      this.data.price = this.pic
      this.data.roomType = this.allList.roomType.find(ele => {
        if (ele.label === this.value) {
          return ele.value
        }
      }).value
      console.log(this.data.roomType)
      this.data.size = this.area
      this.data.floor = this.allList.floor.find(ele => {
        if (ele.label === this.value1) {
          return ele
        }
      }).value
      this.data.community = this.$route.query.id
      console.log(this.data)
      if (this.data.houseImg === '') {
        this.$toast('请上传图片')
      } else {
        userhouses(this.data).then(response => {
          console.log(response)
          this.$dialog
            .confirm({
              title: '发布成功',
              message: '是否去查看'
            })
            .then(() => {
              this.$router.push({
                path: '/mylet',
                name: 'mylet'
              })((this.title = '')),
                (this.message = ''),
                (this.pic = ''),
                (this.area = ''),
                (this.selected = ''),
                (this.allList = '')
            })
            .catch(() => {})
        })
      }
      (this.title = ''),
        (this.message = ''),
        (this.pic = ''),
        (this.area = ''),
        (this.selected = ''),
        (this.allList = '')
    },
    chongz () {
      this.$dialog
        .confirm({
          title: '提示',
          message: '是否退出编辑'
        })
        .then(() => {
          (this.title = ''),
            (this.message = ''),
            (this.pic = ''),
            (this.area = ''),
            (this.selected = ''),
            (this.allList = '')
        })
        .catch(() => {
          this.$router.push({
            path: '/home',
            name: 'home'
          })
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
.ls {
  color: #21b97a;
}
.zjinp {
  border: 0;
  flex: 1;
  z-index: 999;
  float: left;
}
.HouseDetail_about__1W1Px {
  margin-bottom: 10px;
  padding: 0 10px;
  padding-bottom: 0;
  background: #fff;
  // border-bottom: 1px solid #cecece;
  .HouseDetail_houseTitle__3dg6k {
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 10px;
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
    .bs {
      color: #21b97a;
    }
  }
}
.myfield {
  height: 200px;
}
.btn {
  width: 200px;
  height: 50px;
  color: #21b97a;
}
.btn1 {
  width: 200px;
  height: 50px;
  color: #fff;
}
</style>
