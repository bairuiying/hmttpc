<template>
<!-- 使用 elementUI面包屑 -->
    <el-breadcrumb separator=">">
        <el-breadcrumb-item to="/home">首页</el-breadcrumb-item>
        <!-- 第二个选项是动态的 需要用传值的方式进来 props传值 slot插槽（采用） -->
        <el-breadcrumb-item>
            <!-- 内容是动态的 -->
            <!-- 定义一个具名插槽 -->
            <slot name="title"></slot>
        </el-breadcrumb-item>

    </el-breadcrumb>
</template>

<script>
export default {}
</script>

<style>
</style>
