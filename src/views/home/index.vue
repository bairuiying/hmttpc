<template>
  <!-- el-vontainer是大容器 上下导航栏嵌套在里面 -->
  <el-container>
    <!-- 左侧导航栏 -->
    <el-aside style="200px;background:#2e2f32">
      <layout-aside></layout-aside>
    </el-aside>
    <el-container>
      <!-- 头部导航栏 -->
      <el-header>
        <layout-header></layout-header>
      </el-header>

      <!-- 身体区 -->
      <el-main style="padding: 0">
        <!-- <h1>主要区</h1> -->
        <!-- 这里防止二级路由容器 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// 局部注册
// import LayoutAside from '@/components/home/layout-aside'
// import LayoutHeader from '@/components/home/layout-header'
// @ is an alias to /src

export default {
  // components: {
  //   'layout-aside': LayoutAside,
  //   'layout-header': LayoutHeader
  // }
}
</script>
