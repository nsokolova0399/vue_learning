<template>

        <div
                class="page"
                @click="$emit('clickPost', quantityPost)"

        >
            <slot></slot>
        </div>

</template>

<script>
    export default {
        name: "my-page",
        props:{
            quantityPost:{
                type: [Number],
                required: true
            }
        }
    }
</script>

<style scoped>

    .page{
        border: 1px solid black;
        padding: 10px;
    }

    .current-page{
        border: 3px solid teal;
    }
</style>