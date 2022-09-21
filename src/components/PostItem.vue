<template>
    <div class="post">
        <div class="id__post" >{{post.id}}</div>
        <div class="border__post">
            <div><strong>Название:</strong> {{ post.title }}</div>
            <div><strong>Описание:</strong> {{ post.body }}</div>
        </div>
        <div class="post__btns">
            <my-button class="btns"
                       style="margin-right: 20px"
                       @click="$router.push(`/posts/${post.id}`)"
            >Открыть</my-button>
            <my-button class="btns"
                       @click="$emit('remove', post)"
            >Удалить</my-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PostItem",
        props:{
            post:{
                type: Object,
                required:true,
            }
        }
    }
</script>

<style scoped>
    .post{
        border: 2px solid teal;
        display: flex;
    }
    .id__post{
        padding: 10px;
    }
    .border__post{
        padding: 10px;
    }
    .post__btns{
        margin: 15px 15px 15px;
        display: inline-flex;
    }
    .btns{
        height: 40px;
        border-color: rgba(0, 128, 128, 0.64);
    }

</style>