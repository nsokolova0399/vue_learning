<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
        <my-input v-focus v-model="post.title" type="text" placeholder="Название"/>
        <my-input v-model="post.body" type="text" placeholder="Описание"/>
        <my-button @click="createPost" style="border: 1px solid teal;align-self: flex-end; margin-top: 15px">Создание</my-button>

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
        },
        //для примера
        // watch:{
        //     //т к объект не является примитивным типом, то необходимо включить глубое отслежование объекта,
        //     post: {
        //         handler(newVal){
        //             console.log(newVal)
        //         },
        //         deep:true
        //     }
        // }
    }
</script>

<style scoped>
</style>