<template>
  <ul>
    <li v-for="(item, index) in list" :key="index" @click="choose(item)">
      <p>{{ item.name }}</p>
      <treeMenu :list="item.children"></treeMenu>
    </li>
  </ul>
</template>

<script>
export default {
  name: "treeMenu",
  props: ["list"],
  data() {
    return {};
  },
  methods:{
    choose(i){
      console.log(i)
    }
  }
};
</script>

<style scoped>
ul {
  padding-left: 20px;
}
</style>
