<template>
  <el-card>
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
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    getComment () {
      this.$axios({
        url: '/articles', // 请求地址
        params: {
          response_type: 'comment' // 此参数用来控制获取数据类型
        }
        // query参数应该在那个位置传 axios
        // params 传get参数也就是query的参数
        // data 传body的参数也就是请求体的参数
      }).then(result => {
        this.list = result.data.results
        console.log(result)
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
            article_id: row.id // 要求参数的文章id
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
