<template>
    <div v-if="posts.length > 0">
        <h3>Список постов</h3>
        <TransitionGroup name="user-list">
            <post-item
                    :post="post"
                    v-for="post in posts"
                    :key="post.id"
                    @remove="$emit('remove', post)"
            />
        </TransitionGroup>

    </div>
    <h2 v-else style="color: teal">
        Список постов пуст
    </h2>
</template>

<script>
    import PostItem from "@/components/PostItem";
    export default {
        name: "PostList",
        components: {PostItem},
        props:{
            posts:{
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
    .user-list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .user-list-enter-active,
    .user-list-leave-active {
        transition: all 0.3s ease;
    }
    .user-list-enter-from,
    .user-list-leave-to {
        opacity: 0;
        transform: translateX(130px);
    }
    .user-list-move{
        transition: transform 0.4s ease;
    }
</style>