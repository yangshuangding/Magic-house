<template>
  <div>
    <van-nav-bar title="注册账号" left-arrow @click-left="$router.back()" />
    <van-form @submit="onSubmit" validate-trigger="onSubmit">
      <van-field
        class="uname"
        v-model="username"
        name="username"
        placeholder="请输入用户名"
        :rules="[
          {
            required: true,
            message: '用户名不能为空'
          },
          {
            message: '请填写用户名',
            pattern: /^\w{5,8}$/
          }
        ]"
      />
      <van-field
        class="uname"
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[
          {
            required: true,
            message: '密码不能为空'
          },
          {
            message: '请填写密码',
            pattern: /^\w{6,}$/
          }
        ]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" class="sub"
          >注册</van-button
        >
      </div>
    </van-form>
    <p><a href="#" @click.prevent="login">已有账号，去登录~~</a></p>
  </div>
</template>

<script>
import { register } from '@/api/user'
export default {
  data () {
    return {
      username: '',
      password: '',
      pattern: ''
    }
  },
  methods: {
    async onSubmit (values) {
      const res = await register(values)
      console.log(res)
      if (res.status === 200) {
        this.$toast.success('注册成功')
        this.$router.push({
          path: '/login',
          name: 'login'
        })
      } else {
        this.$toast.success(res.description)
      }
    },
    login () {
      this.$router.push({
        path: '/hklogin',
        name: 'hklogin'
      })
    }
  }
}
</script>

<style scoped lang="less">
.sub {
  background-color: #1cb676;
}
.uname {
  height: 60px;
  line-height: 60px;
  padding-top: 0;
}
.van-form {
  padding: 21px 10px;
}
.van-button {
  border-radius: 0;
}
a {
  text-align: center;
  display: inline-block;
  width: 100%;
  color: #000;
}
</style>
