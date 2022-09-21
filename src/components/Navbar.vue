<template>
    <div class="navbar">
        <div @click="$router.push('/')" style="color: teal; font-size:30px; font-weight: bold">Vue 3</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/posts')" class="btn">Посты</my-button>
            <my-button @click="$router.push('/about')" style="margin-left: 20px">О сайте</my-button>
        </div>
    </div>
</template>

<script>
export default {
  name: "Navbar",
}
</script>

<style scoped>
    .navbar{
        height: 70px;
        background-color: white;
        box-shadow: 2px 2px 4px gray;
        display: flex;
        align-items: center;
        padding: 0 15px;
    }
    .navbar__btns{
        margin-left: auto;
    }
    .btn{
        border-color: rgba(248, 255, 255, 0.97);
        border-size: 0px;
        border-radius: 16px;
        box-shadow: 2px 2px 2px gray;
        font-size: 15px;
    }
    .btn:hover{
        background-color: rgba(248, 255, 255, 0.97);
    }
    .btn:active{
        background-color: rgba(248, 255, 255, 0.97);
        border-color: rgba(248, 255, 255, 0.97);
    }
</style>