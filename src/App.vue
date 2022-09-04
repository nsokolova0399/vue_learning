<template>
    <div class="app">
        <h1>Страница с постами</h1>
        <my-button @click="showDialog">Создать пост</my-button>
        <my-dialog v-model:show="dialogVisible">
            <post-form
                @create="createPost"
            />
        </my-dialog>

        <post-list
                :posts="posts"
                @remove="removePost"
        />
    </div>
</template>

<script>
    import PostForm from "@/components/PostForm";
    import PostList from "@/components/PostList";
    import MyDialog from "@/components/UI/MyDialog";
    import MyButton from "@/components/UI/MyButton";
    export default {
        components:{
            MyButton,
            MyDialog,
            PostForm, PostList
        },
        data(){
            return{
                posts: [
                    {id: 1, title: 'JavaScript 1', body: 'Описание поста'},
                    {id: 2, title: 'JavaScript 2', body: 'Описание поста'},
                    {id: 3, title: 'JavaScript 3', body: 'Описание поста'},
                ],
                dialogVisible: false,
            }
        },
        methods:{
            createPost(post) {
                this.posts.push(post);
                this.dialogVisible=false;
            },
            removePost(post){
                this.posts = this.posts.filter(p => p.id !== post.id)
            },
            showDialog(){
                this.dialogVisible=true;
            }
        },
    }
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app{
    padding: 20px;
}
    form{
        display: flex;
        flex-direction: column;
    }

</style>