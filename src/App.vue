<template>
  <div id="app">
   <!-- <router-view/> -->
   <keep-alive>
       <router-view v-if='$route.meta.keepAlive'/>
     </keep-alive>
       <router-view v-if='!$route.meta.keepAlive'/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  width: 100%;
/*  max-width: 750px; */
  color: #333333;
  font-size: 0.28rem;
  margin:0 auto;
}
p{
  margin: 0;
}
.main{
  box-sizing: border-box;
  padding: 0 0.2rem;
}
img{
  max-width: 100%;
}
</style>
