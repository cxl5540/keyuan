<template>
  <div class="hello">
    <div>
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" />
      </van-cell-group>
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>

    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
  .hello{

  }
h1, h2 {
  font-weight: normal;
  font-size: 0.32rem;
}
</style>
