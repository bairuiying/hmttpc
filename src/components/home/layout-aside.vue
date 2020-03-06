<template>
  <div class="layout-aside">
    <div class="title">
      <img src="../../assets/img/logo_admin.png" alt />
    </div>
    <!-- 导航菜单 -->
    <el-menu background-color="#323745" text-color="#adafb5">
      <!-- 子菜单 没有子菜单的用el-mrnu-item标签 -->
      <el-menu-item>
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </el-menu-item>

      <!-- 二级菜单 -->
      <el-submenu>
        <!-- 二级菜单  -->
        <template slot="title">
          <i class="el-icon-s-grid"></i>
          <span slot="title">内容管理</span>
        </template>
        <el-menu-item>发布文章</el-menu-item>
        <el-menu-item>内容列表</el-menu-item>
        <el-menu-item>评论管理</el-menu-item>
        <el-menu-item>素材管理</el-menu-item>
      </el-submenu>
      <el-submenu>
        <!-- 二级菜单  -->
        <i slot="title" class="el-icon-user"></i>
        <span slot="title">粉丝管理</span>
        <el-menu-item>图文数据</el-menu-item>
        <el-menu-item>粉丝概况</el-menu-item>
        <el-menu-item>粉丝画像</el-menu-item>
        <el-menu-item>粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item>
        <i class="el-icon-user-solid"></i>
        <span>账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.layout-aside {
  background-color: #2e2f32;
  height: 100vh;
  .title {
    text-align: center;
    padding: 10px 0;
    img {
      height: 35px;
    }
  }
  .el-menu {
    border-right: none ;
  }
}
</style>
