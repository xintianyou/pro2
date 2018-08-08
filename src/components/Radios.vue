<template>
    <div>
        <button class="button" :class="{'active':index == nowIndex}" v-for="(item, index) in initBtn" @click="choose(item, index)">{{ item.name }}</button>
    </div>
</template>

<script>

export default {
    name: 'radios',
    props:{
        initBtn: {
            type: Array,
            default: function() {
                return [
                    {
                        name: 'test',
                        value: 1
                    }
                ]
            }
        }
    },
    data () {
        return {
            nowIndex: 0 
        }
    },
    methods: {
        choose (item,index) {
            this.nowIndex = index;
            this.$emit('changetype',item.value)
        }
    }
}

</script>

<style scoped>
.button{
    margin-right: 5px;
    background-color: #fff;
    color: #333;
    border: 0.5px solid #ccc;
    padding: 3px 5px;
}
.active{
    background-color: #4baf8c;
    color: #fff; 
    border: 0.5px solid #4baf8c;
}
</style>