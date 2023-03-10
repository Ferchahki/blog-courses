<template lang="">
<form @submit.prevent="createPost">
    <div class="form-group">
        <label for="exampleFormControlInput1">New Posts</label>
        <input v-model="title" type="text" class="form-control" id="title" placeholder="...">
    </div>
    <div class="form-group">
        <label for="exampleFormControlTextarea1">Content</label>
        <textarea  v-model="content" class="form-control" id="content" rows="3"></textarea>
    </div>
    <button  class="btn btn-success">Submit</button>
</form>
</template>
<script>
export default {
    data(){
        return {
            title:'',
            content:''
        }
    },
    methods:{

        createPost() {
                    let post = {
                    title: this.title,
                    content: this.content
                    };
            
            fetch('http://localhost:5000/posts',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(post)

            })
            .then(()=>this.$router.push('/blog'))
            .catch(err=>console.log(err.message))
                
                   
        }

    }
    
}
</script>
<style lang="">
    
</style>