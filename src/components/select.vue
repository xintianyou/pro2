<template>
    <div class="select">
        <span class="initOption" @click="showOptions">{{ optionsData[nowIndex].name }}</span>
        <ul class="options" v-show="show">
            <li @click="choose(item, index)" :class="{'active':index == nowIndex}" v-for="(item, index) in optionsData">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'selects',
    props: {
        optionsData: {
            type: Array,
            default: function(){
                return [
                    {
                        name: 'test',
                        value: 1,
                        prise: 5
                    }
                ]
            }
        }
    },
    data () {
        return{
            nowIndex: 0,
            show: false
        }
    },
    methods: {
        choose (item,index) {
            this.nowIndex = index;
            this.show = false;
            this.$emit('changeSize',index);
        },
        showOptions () {
            this.show = !this.show;
        }
    }
}

</script>

<style scoped>
.select{
    position: relative;
}
.options{
    position: absolute;
    background-color: #fff;
}
.options, .options li{
    width: 50px;
}
.options li, .initOption{
    line-height: 25px;
}
.options li:hover{
    background-color: #ccc;
}
.active{
    background-color: #4baf8c;
    color: #fff; 
    border: 0.5px solid #4baf8c;
}
</style>