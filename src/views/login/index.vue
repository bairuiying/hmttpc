<template>
  <div class="login">
    <!-- 表单 -->
    <el-card class="login-card">
      <!-- 头部标题logo部分 -->
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 表单 -->
      <el-form style="margin-top:20px">
        <!-- 这是我的表单容器 -->
        <el-form-item>
          <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width:60%" placeholder="请输入验证码"></el-input>
          <el-button style="float:right" plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox>我同意协议</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%" type="primary">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
// scoped 只对当前组件有用
// 如果需要写样式，则要给lang属性赋值
.login {
  background-image: url(../../assets/img/login_bg.jpg);
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 460px;
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
