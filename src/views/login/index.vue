<template>
  <div class="login">
    <!-- 表单 -->
    <el-card class="login-card">
      <!-- 头部标题logo部分 -->
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 表单 需要绑定model属性 绑定rules属性（表单规则验证） ref给el-form一个属性-->
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" style="margin-top:20px">
        <!-- 这是我的表单容器 -->
        <!-- prop 表示要绑定的字段名 -->
        <el-form-item prop="mobile">
          <!-- 表单域 双向绑定v-model -->
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <!-- 表单域 -->
          <el-input v-model="loginForm.code" style="width:60%" placeholder="请输入验证码"></el-input>
          <el-button style="float:right" plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="checked">
          <el-checkbox v-model="loginForm.checked">我同意协议</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" style="width:100%" type="primary">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  // 定义一个表单数据
  data () {
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        checked: false
      },

      // 定义表单验证规则
      loginRules: {
        mobile: [
          { required: true, message: '您的手机号不能为空' },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '您的手机号格式不正确'
          }
        ],
        code: [
          { required: true, message: '您的验证码不能为空' },
          {
            pattern: /^\d{6}$/,
            message: '验证码应该是六位数字'
          }
        ],
        checked: [
          {
            validator: function (rule, value, callback) {
              // rule: 是当前的校验规则
              // value是当前的要校验的字段的值
              // callback是一个回调函数 不论执行成功或者失败都要执行
              // 成功执行callback 失败执行callback里的（new error）
              // 如果error为true则表示成功
              value
                ? callback()
                : callback(new Error('您必须同意我们的霸王条款'))
            }
          }
        ]
      }
    }
  },
  methods: {
    login () {
      // this.$refs.loginForm获取的额是el-form的实例对象
      this.$refs.loginForm.validate().then(() => {
        this.$axios({
          url: '/authorizations', // 请求地址
          data: this.loginForm, // body请求头参数 用于post put patch‘
          method: 'post'
          // params: {}, // 指的是url参数 参数会拼接到url地址上面  常常说的get参数
        })
          .then(result => {
            // 把钥匙放在兜里 也就是吧token存于本地缓存
            window.localStorage.setItem('user-token', result.data.data.token)
            // 跳转到主页
            this.$router.push('/home')
          })
          .catch(() => {
            // 提示消息
            this.$message({ message: '用户名或者密码错误', type: 'error' })
          })
      })
    }
  }
}
</script>

<style lang="less" scoped>
// scoped 只对当前组件有用
// 如果需要写样式，则要给lang属性赋值
.login {
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: "";
    background-image: url(../../assets/img/login_bg.jpg);
    width: 100%;
    height: 100%;
    position: absolute;
    filter: blur(5px);
  }
  .login-card {
    // background-color: rgba(0, 0, 0, 0);
    z-index: 2;
    width: 440px;
    height: 340px;
    .title {
      text-align: center;
      img {
        height: 40px;
      }
    }
  }
}
</style>
