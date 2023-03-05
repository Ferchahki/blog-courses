<template lang="">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" to="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                <router-link  class="nav-link" :to="{name:'home'}">Home
                    <span class="visually-hidden">(current)</span>
                </router-link>
                </li>:
                <li class="nav-item">
                <router-link  class="nav-link" :to="{name:'Blog'}">Blog</router-link>
                </li>
                <li class="nav-item">
                <router-link  class="nav-link" :to="{name:'about'}">About</router-link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        <div class="my-3">
            <button  @click="priveaus"  type="button" class="btn btn-success" fdprocessedid="oq68p">Priveaus</button>
            <button  @click="next" type="button" class="btn btn-danger" fdprocessedid="oq68p">Next</button>
            <button @click="redirect"  type="button" class="btn btn-dark" fdprocessedid="oq68p">Redirect</button>
        </div>
    

</template>
<script>
export default {
    methods:{
        priveaus(){
            this.$router.go(-1);
        },
        next(){
            this.$router.go(1);
        },
        redirect(){
            this.$router.push('/');
        },
    }
    
}
</script>
<style>
.router-link-active{
    color: black;
    background-color: antiquewhite;
    padding: 6px;
}
</style>