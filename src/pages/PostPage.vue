<template>
        <h1>Страница с постами</h1>
        <my-input v-focus v-model="searchQuery" placeholder="Поиск..."></my-input>
        <div class="app__btns">
            <my-button
                    @click="showDialog"
                    style="border: 1px solid teal;"
            >
                Создать пост
            </my-button>
            <my-select
                    v-model="selectedSort"
                    :options="sortOptions"
            />
        </div>
        <my-dialog v-model:show="dialogVisible">
            <post-form
                    @create="createPost"
            />
        </my-dialog>

        <post-list
                :posts="sortedAndSearchedPosts"
                @remove="removePost"
                v-if="!isPostsLoading"
        />
        <div v-else class="donutClass">
            <div class="donut"></div>
        </div>
    <div v-intersection="loadMorePosts" class="observer"></div>
<!--        <div ref="observer" class="observer"></div>-->
        <!--        <div class="page__wrapper">-->
        <!--            <my-page-->
        <!--                    :quantityPost="quantityPost"-->
        <!--                    v-for="quantityPost in totalPages"-->
        <!--                    :key="page"-->
        <!--                    @clickPost="changePage(quantityPost)"-->
        <!--                    :class="{-->
        <!--                        'current-page': page === quantityPost-->
        <!--                    }"-->
        <!--            >{{quantityPost}}-->
        <!--            </my-page>-->
        <!--        </div>-->
</template>

<script>
    import PostForm from "@/components/PostForm";
    import PostList from "@/components/PostList";
    import axios from "axios";
    export default {
        components:{
            PostForm, PostList
        },
        data(){
            return{
                posts: [],
                dialogVisible: false,
                isPostsLoading: false,
                selectedSort: '',
                searchQuery: '',
                page: 1,
                limit: 10,
                totalPages: 0,
                sortOptions:[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]
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
            },
            // changePage(pageNumber){
            //     this.page = pageNumber;
            //     // this.fetchPosts();
            // },

            //будем заимодейстровать с сервером, используя библиотеку аксиос
            async fetchPosts(){
                try{
                    //имитация загрузки
                    this.isPostsLoading = true;
                    //сделаем так, чтобы пользователь видел подгрузку страниц (искуственно)
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                        params:{
                            _page:this.page,
                            _limit:this.limit
                        }
                    });
                    this.totalPages = Math.ceil(response.headers['x-total-count']/this.limit);
                    this.posts = response.data;
                }catch(e){
                    alert('Ошибка');
                }
                finally{
                    this.isPostsLoading = false;
                }
            },

            async loadMorePosts(){
                try{
                    this.page += 1;
                    //сделаем так, чтобы пользователь видел подгрузку страниц (искуственно)
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                        params:{
                            _page:this.page,
                            _limit:this.limit
                        }
                    });
                    this.totalPages = Math.ceil(response.headers['x-total-count']/this.limit);
                    this.posts = [...this.posts, ...response.data];
                }catch(e){
                    alert('Ошибка');
                }
            }
        },
        mounted() {
            this.fetchPosts();
            // Dom элемент за которым необходимо следить "observer"
            // console.log(this.$refs.observer);
            // const options = {
            //     rootMargin: '0px',
            //     threshold: 1.0
            // }
            // const callback = (entries, observer) => {
            //     if(entries[0].isIntersecting && this.page < this.totalPages){
            //         this.loadMorePosts();
            //     }
            // };
            // const observer = new IntersectionObserver(callback, options);
            // observer.observe(this.$refs.observer);
        },
        computed:{
            sortPosts() {
                return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
            },
            //в отсортированных постах ищем необходимый нам
            sortedAndSearchedPosts(){
                return this.sortPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
            }
        },
        //пример как еще можно сделать сортировку
        // watch:{
        //     selectedSort(newValue){
        //         this.posts.sort((post1, post2)=>{
        //             //достаем два поста и сравниваем названия этих постов
        //             return post1[newValue]?.localeCompare(post2[newValue])
        //         })
        //     },
        // },
        watch:{
            // page(){
            //     this.fetchPosts();
            // }
        }

    }
</script>

<style>
    form{
        display: flex;
        flex-direction: column;
    }
    .app__btns{
        display: flex;
        justify-content: space-between;
        margin: 15px 0;
    }
    @keyframes donut-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .donutClass{
        display: flex;
        justify-content: center;
        padding: 200px;
    }
    .donut {

        border: 4px solid rgba(0, 0, 0, 0.1);
        border-left-color: teal;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        animation: donut-spin 1.2s linear infinite;
        padding: 20px;
    }
    .page__wrapper{
        display:flex;
        margin-top: 15px;
        position-bottom: 0;
        justify-content: center;
    }
    .observer{
        margin-top:10px;
        height: 20px;
        background-color: rgba(150, 168, 168, 0.4);
        border: 2px solid rgba(150, 168, 168, 0.99);
    }
</style>