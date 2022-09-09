<template>
    <select class="listSelected" v-model="modelValue" @change="changeOption">
        <option disabled value="">Выберите из списка</option>
        <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>

<script>
    export default {
        name: "my-select",
        props:{
            modelValue: {
                type: String
            },
            //объекты массива
            options: {
                type: Array,
                //для пустых массивов реккомендуется использовать стрелочную функцию
                default: () => []
            }
        },
        methods:{
            changeOption(event){
                this.$emit('update:modelValue', event.target.value);
            }
        }
    }
</script>

<style scoped>
.listSelected{
    border-color: teal;
    border-width: 3px;
    padding: 15px;
    color: #004949;
    font-size: 15px;
}
</style>