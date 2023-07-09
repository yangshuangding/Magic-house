<template>
  <div>
    <div class="my">
      <div class="my_title">
        <img src="http://liufusong.top:8080/img/profile/bg.png" alt="背景图" />
        <div class="my_info">
          <div class="my_icon">
            <img :src="myImg" alt="" />
          </div>
          <div class="my_user">
            <div class="my_name">{{ uname }}</div>
            <div v-if="!flag">
              <button class="exit" @click.prevent="exit">退出</button>
            </div>
            <div class="my_edit" v-if="flag">
              <a href="#" @click.prevent="logs">去登录</a>
            </div>
            <p style="color: #999; font-size: 12px" v-if="!flag">
              编辑个人资料<van-icon name="play" color="#999" />
            </p>
          </div>
        </div>
      </div>
      <div class="am-grid" >
        <div class="am-flexbox">
          <div class="am-flexbox-item">
            <div class="am-grid-item-content">
              <a href="#" @click.prevent="collect">
                <div class="My_menuItem">
                  <van-icon name="star-o" class="van_icon" />
                  <span>我的收藏</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="am-flexbox">
          <div class="am-flexbox-item">
            <div class="am-grid-item-content">
              <a href="#"  @click.prevent="mylet">
                <div class="My_menuItem">
                  <van-icon name="wap-home-o" class="van_icon" />
                  <span>我的出租</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="am-flexbox">
          <div class="am-flexbox-item">
            <div class="am-grid-item-content">
              <a href="#">
                <div class="My_menuItem">
                  <van-icon name="underway-o" class="van_icon" />
                  <span>看房记录</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="am-grid">
        <div class="am-flexbox">
          <div class="am-flexbox-item">
            <div class="am-grid-item-content">
              <a href="#">
                <div class="My_menuItem">
                  <van-icon name="idcard" class="van_icon" />
                  <span>成为房主</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="am-flexbox">
          <div class="am-flexbox-item">
            <div class="am-grid-item-content">
              <a href="#">
                <div class="My_menuItem">
                  <van-icon name="contact" class="van_icon" />
                  <span>个人资料</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="am-flexbox">
          <div class="am-flexbox-item">
            <div class="am-grid-item-content">
              <a href="#">
                <div class="My_menuItem">
                  <van-icon name="service-o" class="van_icon" />
                  <span>联系我们</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="My_ad">
        <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { getToken, delToken } from '@/utils/storage'
import { user } from '@/api/user'
export default {
  name: 'HkMine',
  props: {},
  components: {},
  async created () {
    if (getToken()) {
      const res = await user(getToken())
      if (res.status === 200) {
        console.log(res)
        this.flag = false
        this.uname = res.body.nickname
        this.myImg = 'http://liufusong.top:8080' + res.body.avatar
      }
    } else {
      console.log(1)
    }
  },
  data () {
    return {
      flag: true,
      uname: '游客',
      myImg: 'http://liufusong.top:8080/img/profile/avatar.png'
    }
  },
  methods: {
    fn () {},
    logs () {
      this.$router.push({
        path: '/hklogin',
        name: 'hklogin'
      })
    },
    exit () {
      this.$dialog
        .confirm({
          title: '提示',
          message: '是否确认退出'
        })
        .then(() => {
          this.$router.push({
            path: '/hklogin',
            name: 'hklogin'
          })
          delToken()
        })
        .catch(() => {
          // on cancel
        })
    },
    collect () {
      if (getToken()) {
        this.$router.push({
          path: '/mycollect',
          name: 'mycollect'
        })
      } else {
        this.$dialog
          .confirm({
            title: '提示',
            message: '还没有登录哦,是否去登录'
          })
          .then(() => {
            this.$router.push({
              path: '/hklogin',
              name: 'hklogin'
            })
          })
          .catch(() => {
            // on cancel
          })
      }
    },
    mylet () {
      if (getToken()) {
        this.$router.push({
          path: '/mylet',
          name: 'mylet'
        })
      } else {
        this.$dialog
          .confirm({
            title: '提示',
            message: '还没有登录哦,是否去登录'
          })
          .then(() => {
            this.$router.push({
              path: '/hklogin',
              name: 'hklogin'
            })
          })
          .catch(() => {
            // on cancel
          })
      }
    }
  },
  mounted () {},
  watch: {},
  computed: {},
  filters: {}
}
</script>

<style scoped lang="less">
.my {
  .my_title {
    position: relative;
    height: 300px;
    img {
      width: 100%;
      height: 191px;
    }
    .my_info {
      position: absolute;
      background: #fff;
      width: 318px;
      height: 165px;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0 0 10px 3px #ddd;
      margin: 50px auto 0;
      text-align: center;
      font-size: 13px;
      .my_icon {
        position: relative;
        transform: translateY(-50%);
        border-radius: 50%;
        width: 70px;
        height: 70px;
        border: 5px solid #f5f5f5;
        display: inline-block;
        box-shadow: 0 2px 2px #bdbdbd;
        img {
          width: 100%;
          height: 70px;
          border-radius: 50%;
        }
      }
      .my_user {
        padding-top: 15px;
        .my_name {
          margin-top: -30px;
          margin-bottom: 10px;
        }
        .my_edit {
          color: #999;
          font-size: 12px;
          margin-top: 20px;
          a {
            background-color: #21b97a;
            font-size: 13px;
            height: 30px;
            line-height: 30px;
            padding: 0 15px;
            display: inline-block;
            color: #fff;
            border-radius: 10px;
          }
        }
        .exit {
          width: 54px;
          height: 20px;
          border-radius: 30px;
          color: #fff;
          padding: 2px 15px;
          background: #21b97a;
          font-size: 12px;
          border: 0;
        }
      }
    }
  }
  .am-grid {
    display: flex;
    .am-flexbox {
      flex: 1;
      text-align: left;
      overflow: hidden;
      display: flex;
      align-items: center;
      .am-flexbox-item {
        box-sizing: border-box;
        flex: 1 1;
        margin-left: 8px;
        min-width: 10px;
        .am-grid-item-content {
          text-align: center;
          width: 100%;
          height: 100%;
          padding: 15px 0;
          a {
            .My_menuItem {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              height: 100%;
              font-size: 13px;
              color: #333;
              .van_icon {
                margin-bottom: 10px;
                font-size: 20px;
              }
            }
          }
        }
      }
    }
  }
  .My_ad {
    text-align: center;
    margin-top: 10px;
    img {
      width: 92%;
    }
  }
}
</style>
