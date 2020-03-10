<template>
  <el-card v-loading="loading">
    <bread-crumb slot="header">
      <template slot="title">评论管理</template>
    </bread-crumb>
    <el-table :data="list">
      <el-table-column prop="title" width="550" label="标题"></el-table-column>
      <el-table-column :formatter="formatterBool" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="fans_comment_count" label="总评论数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="obj">
          <el-button style="float" size="small" type="text">修改</el-button>
          <el-button
            @click="openOrClose(obj.row)"
            size="small"
            type="text"
          >{{ obj.row.comment_status ? '关闭' : '打开' }}评论</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 放置分页组件 -->
    <el-row style="height:80px" type="flex" align="middle" justify="center">
      <el-pagination
        background
        lauout="prev, pager, next"
        :page-size="page.pageSize"
        :total="page.total"
        @current-change="changePage"
        :current-page="page.currentPage"
      ></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      page: {
        total: 0, // 此参数用来控制获取数据
        currentPage: 1, // 查对应码
        pageSize: 10 // 查10条
      },
      list: []
    }
  },
  methods: {
    changePage (newPage) {
      // 将最新的数据赋值给page
      this.page.currentPage = newPage
      // 重新拉取数据
      this.getComment() // 获取评论
    },
    getComment () {
      this.loading = true
      this.$axios({
        url: '/articles', // 请求地址
        params: {
          response_type: 'comment', // 此参数用来控制获取数据类型
          page: this.page.currentPage, // 查第一页
          per_page: this.page.pageSize // 查十条
        }
        // query参数应该在那个位置传 axios
        // params 传get参数也就是query的参数
        // data 传body的参数也就是请求体的参数
      }).then(result => {
        // 将返回的结果中的 数组总赋值给list
        this.list = result.data.results
        // 在获取完数据之后 将总数赋值给total
        this.page.total = result.data.total_count // 将总数赋值
        this.loading = false
      })
    },

    formatterBool (row, column, cellValue, index) {
      // row 代表当前一行
      // column代表当前单元格的列信息
      // cellValue代表当前单元格的值
      //   index 代表当前的索引
      // 该函数需要返回最后一个
      return cellValue ? '打开' : '关闭'
    },

    openOrClose (row) {
      const mss = row.comment_status ? '关闭' : '打开'
      this.$confirm(`是否${mss}评论`, '提示').then(() => {
        // 调用打开或者关闭接口
        this.$axios({
          url: '/comments/status', // 请求地址
          method: 'put',
          // query参数
          params: {
            article_id: row.id.toString() // 要求参数的文章id
          },
          data: {
            // body参数
            allow_comment: !row.comment_status // 是打开还是关闭
          }
        })
          .then(() => {
            // 成功了 提示消息  然后重新拉去数据
            this.$message.success(`${mss}评论成功`)
            // 重新拉去数据
            this.getComment()
          })
          .catch(() => {
            this.$message.error(`${mss}评论失败`)
          })
      })
    }
  },
  created () {
    this.getComment()
  }
}
</script>

<style>
</style>
