<template lang="">

        <div class="row">
            <div class="col-md-12 text-right">
            <router-link to="/blog"  class="btn btn-primary">Back to list</router-link>
            </div>
        </div>

    <form @submit.prevent="editPost">
        <div class="form-group">
            <label for="exampleFormControlInput1">New Posts</label>
            <input v-model="post.title" type="text" class="form-control" id="title" placeholder="...">
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Content</label>
            <textarea  v-model="post.content" class="form-control" id="content" rows="3"></textarea>
        </div>
        <button  class="btn btn-success">Update</button>
    </form>
</template>
<script>
import { PUREISH_TYPES } from '@babel/types';

export default {
    props:['id'],
    data(){
        return {
            url:`http://localhost:5000/posts/${this.id}`,
            post:{
                title:'',
                content:''
            }
           
        }
    },
    methods:{
        editPost(){
            if(this.post.title==''|| this.post.content==''){
                return;
            }
            fetch(this.url,{
                method: 'PUT',
                headers:{'Content-type':'application/json'},
                body: JSON.stringify(this.post)
            })
            .then(res => res.json())
            .then(data =>this.$router.push('/blog'))
            .catch(err => console.log(err.message))
        }


    },
    mounted() {
        fetch(`http://localhost:5000/posts/${this.id}`)
        .then(res => res.json())
        .then(data =>this.post=data)
        .catch(err => console.log(err))
    }
    
}
</script>
<style lang="">
    
</style>