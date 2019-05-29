<template>
    <div class="list">
        list
        <div>
            <!-- <router-link to="/list/guonei">国内新闻</router-link>
            <router-link to="/list/guoji">国际新闻</router-link> -->
            <router-link
                v-for="nav in navs"
                :key="nav.id"
                :to="{name: nav.name}"
                active-class="abc"
                replace
            >{{nav.title}}</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return {
            navs:[
                {id:1, title:"国内新闻", name:"gn"},
                {id:2, title:"国际新闻", name:"gj"}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .abc{
        color:pink;
    }
</style>


