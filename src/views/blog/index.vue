<template lang="">
        <div class="container p-3 my-3 border">
        <h1>My First Bootstrap Page</h1>
        <p>This container has a border and some extra padding and margins.</p>
        </div>
        <div class="row">
            <div class="col-md-6" v-for="post in posts">
                <h1><router-link :to="{name:'post-show',params:{id:post.id,slug:post.slug}}"> {{ post.title}}</router-link></h1>
                <p class="lead">{{ post.content }}</p>
            </div>
        </div>
</template>
<script>
export default {
    data(){
        return{
           posts:[]

        }
    },
    mounted(){
        fetch('http://localhost:5000/posts')
            .then(res=>res.json())
            .then(data=>this.posts=data)
            .catch(err=>console.log(err))
    }
    
}
</script>
<style lang="">
    
</style>