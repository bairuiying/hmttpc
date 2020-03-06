<template>
  <!-- el-vontainer是大容器 上下导航栏嵌套在里面 -->
  <el-container>
    <!-- 左侧导航栏 -->
    <el-aside>
      <layout-aside></layout-aside>
    </el-aside>
    <el-container>
      <!-- 头部导航栏 -->
      <el-header>
        <h1>头部</h1>
      </el-header>

      <!-- 身体区 -->
      <el-main>
        <h1>主要区</h1>
        <!-- 这里防止二级路由容器 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import LayoutAside from '@/components/home/layout-aside'
// @ is an alias to /src

export default {
  components: {
    'layout-aside': LayoutAside
  }
}
</script>
