<template>
    <div class="mine">
        <!-- <router-link to="/">mine</router-link> 比较简单的点击跳转-->
        <button @click="clickMine">mine</button>
    </div>
</template>

<script>
export default {
    methods:{
        clickMine(){
            let flog = confirm("是否返回首页？")
            if(flog){
                //这里采用编程式导航,$router里的push方法可以实现跳转
                this.$router.push("/")
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


