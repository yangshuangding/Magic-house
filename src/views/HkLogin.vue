<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow @click-left="$router.back()" />
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
            pattern: /^\w{5,}$/
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
          >登录</van-button
        >
      </div>
    </van-form>
    <p><a href="#" @click.prevent="register">还没有账号，去注册~~</a></p>
  </div>
</template>

<script>
import { setToken, getToken } from '@/utils/storage'
import { login } from '@/api/user'
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
      console.log(values)
      const res = await login(values)
      console.log(res)
      setToken(res.body.token)
      getToken(res.body.token)
      if (res.status === 200) {
        this.$toast.success('登录成功')
        this.$router.push({
          path: '/home',
          name: 'home'
        })
      }
    },
    register () {
      this.$router.push({
        path: '/hkregister',
        name: 'hkregister'
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
