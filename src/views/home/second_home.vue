<template>
  <div class="second-home">
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="item in list" :key="item">
        <img :src="item" alt />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        // 'http://00.minipic.eastday.com/20160417/20160417090935_cc9ce2f9530fe649f4d420c017a7bf1f_2.jpeg',
        // 'http://img.bimg.126.net/photo/ygtcxNtqBcH6kqzLKUS_9A==/5760666873360998521.jpg',

        'http://00.minipic.eastday.com/20160417/20160417090935_cc9ce2f9530fe649f4d420c017a7bf1f_2.jpeg',
        'http://img5.imgtn.bdimg.com/it/u=2114986510,1671776401&fm=11&gp=0.jpg',
        'http://img.bimg.126.net/photo/ygtcxNtqBcH6kqzLKUS_9A==/5760666873360998521.jpg'
        // 'http://00.minipic.eastday.com/20160417/20160417090935_cc9ce2f9530fe649f4d420c017a7bf1f_2.jpeg'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.second-home {
  height: 100vh;
  height: calc(100vh - 60px);
  background-size: cover;
  background-image: url("http://i0.hdslb.com/bfs/article/0abd3e4f6c4f01808c6a7c0b2fcefd99782b2453.jpg");
}
</style>
