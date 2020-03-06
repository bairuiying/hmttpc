<template>
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
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1327342435,676752371&fm=26&gp=0.jpg"
          alt
        />
        <el-dropdown trigger="hover">
          <span>多喝热水</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>git地址</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {}
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
