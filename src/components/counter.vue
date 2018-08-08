<template>
    <div class="counter">
        <button @click="changeNum(-1)"> - </button>
        <input type="text" v-model="num" @keyup="inputHandler">
        <button @click="changeNum(1)"> + </button>
        <span class="tips">(最多购买{{ max }}件)</span>
    </div>
</template>

<script>

export default {
    name: 'counter',
    props: {
        min:{
            type: Number,
            default: 1
        },
        max:{
            type: Number,
            default: 5
        }
    },
    data () {
        return {
            num: 1
        }
    },
    methods: {
        changeNum (way) {
            if(way<0){
                if(this.num<=this.min){
                    return;
                }
                this.num--
            }else{
                if(this.num>=this.max){
                    return;
                }
                this.num++
            }
            this.$emit('changeNum',this.num);
        },
        inputHandler(){
            let fix;
            if(typeof this.num === 'string'){
                fix = Number(this.num.replace(/\D/g,''));
            }else{
                fix = this.num;
            }
            if(fix >= this.max || fix <= this.min){
                fix = this.min;
            }
            this.num = fix;
            this.$emit('changeNum',this.num);
        }
    }
}

</script>

<style scoped>
.counter button{
    width: 22px;
    height: 22px;
    border: 0.5px solid #ddd;
    background: #fff;
}
.counter input{
    height: 22px;
    width: 22px;
    border: 0.5px solid #ddd;
    text-align: center;
}
.tips{
  font-size: 14px;
  color: #999;
}
</style>
