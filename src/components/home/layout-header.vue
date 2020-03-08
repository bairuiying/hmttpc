<template>
<!-- 头部布局 -->
  <!-- elementUI布局组件 el-row和el-col -->
  <el-row align="middle" type="flex" class="layout-header">
    <el-col class="left" :span="12">
      <i class="el-icon-s-fold"></i>
      <span>江苏传智播客</span>
    </el-col>
    <!-- 右侧列 -->
    <el-col class="right" :span="12">
      <!-- 在放置一个row组件 align属性设置对齐方式  justify 水平对齐属性 -->
      <el-row type="flex" justify="end" align="middle">
        <img :src="userInfo.photo" alt />
        <el-dropdown trigger="hover" @command="clickMenu">
          <span>{{ userInfo.name }}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="info">个人信息</el-dropdown-item>
            <el-dropdown-item command="git">git地址</el-dropdown-item>
            <el-dropdown-item command="lgout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    clickMenu (command) {
      if (command === 'info') {
      } else if (command === 'git') {
        window.location.href = 'https://github.com/bairuiying/hmttpc.git'
      } else if (command === 'lgout') {
        window.localStorage.removeItem('user-token')
        this.$router.push('/login')
      }
    }
  },
  created () {
    const token = localStorage.getItem('user-token') // 拿本地缓存
    this.$axios({ // 获取用户的额个人信息
      url: '/user/profile', // 请求地址
      headers: {
        Authorization: `Bearer ${token}`
      }// 请求头参数header放置请求头参数
    }).then(result => {
      // 如果加载成功我们将数据赋值给userInfo
      this.userInfo = result.data.data
    })
  }
}
</script>

<style lang="less" scoped>
.layout-header {
  height: 60px;
  .left {
    i {
      font-size: 20px;
      //   line-height: 60px;
      //   padding: 0 5px 0 0;
    }
  }
  .right {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 4px;
    }
  }
}
</style>
