<template>
    <div class="detail">
        我是详情页！！！  {{$route.params.id}}  {{this.$route.query.title}}  {{id}}
    </div>
</template>

<script>
export default {
    props:["id"],
    created(){
        console.log(this.$route.params.id, this.$route.query.title)
        //拿到他的id可以请求数据
        /* this.$http.get(url,{
            params:{
                ordeId:this.$route.parms.id
            }
        }).then(res=>{
            this.info = re.data.info;
        }) */
    }
}
</script>

