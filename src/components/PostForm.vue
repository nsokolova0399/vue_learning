<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
        <my-input v-model="post.title" type="text" placeholder="Название"/>
        <my-input v-model="post.body" type="text" placeholder="Описание"/>
        <my-button @click="createPost" style="align-self: flex-end; margin-top: 15px">Создание</my-button>

    </form>
</template>

<script>
    export default {
        name: "PostForm",
        data(){
            return{
                post: {
                    title: '',
                    body: ''
                }
            }
        },
        methods:{
            createPost(){
                this.post.id = Date.now();
                this.$emit('create', this.post);
                this.title = '';
                this.body = '';
            },
        }
    }
</script>

<style scoped>
</style>