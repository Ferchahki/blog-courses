<template lang="">
     <h1 @click="toggle =!toggle">
                     {{ post.title}}
     </h1>
        <p class="lead" v-if="toggle">{{ post.content }}</p>
            <div class="my-3">
                <route-link :to="{name:'post-show',params:{id:post.id,slug:post.slug}}" class="btn btn-sm btn-success">Editer</route-link>
                <button class="btn btn-sm btn-info">show</button>
                <button class="btn btn-sm btn-danger">Delete</button>
            </div>        

</template>
<script>
export default {
    props:['post'],
   data() {
    return {
        toggle:false
    }
   },
}
</script>
<style lang="">
    
</style>