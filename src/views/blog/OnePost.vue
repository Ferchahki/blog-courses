<template lang="">
    <h1 @click="toggle = !toggle"> {{ post.title }}</h1>
            <p class="lead" v-if="toggle">{{ post.content }}</p>
            <div class="my-3">
                <router-link :to="{name: 'post-show', params: { id: post.id, slug: post.slug }}" class="btn btn-sm btn-info">Show</router-link >
                <router-link :to="{name: 'post-edit', params: { id: post.id }}" class="btn btn-sm btn-warning ml-3">Edit</router-link>
                <button @click="deletePost" class="btn btn-sm btn-dark ml-3">Delete</button>
            </div>
</template>
<script>
export default {
    props: ['post'],
    data() {
        return {
            toggle: false,
            url: `http://localhost:5000/posts/${this.post.id}`
        }
    },
    methods: {
        deletePost() {
            fetch(this.url, {method: 'DELETE'})
              .then(() => this.$emit('delete', this.post.id))
              .catch(err => console.log(err.message));
        }
    }
}
</script>
<style lang="">
    
</style>