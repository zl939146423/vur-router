<template>
  <div class="home">
    Home
    <ul>
      <router-link tag="li" to="/detail/1?title=新闻一">新闻一</router-link>
      <router-link tag="li" :to="{name:'detail', params:{id:'2'}, query:{title: '新闻二'}}">新闻二</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

</style>

