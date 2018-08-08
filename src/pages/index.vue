<template>
  <div class="index">
    <Swiper class="imgBox" v-if="list.length > 0" :autoPlay='true' :showIndicator='true' interval="2500" duration="500">
      <Slide v-for="(item, index) in list" :key="index">
        <img :src="item.imgurl" @click="enterDetail(index)"/>
      </Slide>
    </Swiper>
    <div class="optionBox">
      <div class="left">
        规格：
      </div>
      <div class="right">
        <Select :optionsData="selectMenu" @changeSize="getInfo('size',$event)"/>
      </div>
    </div>
    <div class="optionBox">
      <div class="left">
        口味：
      </div>
      <div class="right">
        <Radios :initBtn="btnMenu" @changetype="getInfo('type',$event)"/>
      </div>
    </div>
    <div class="optionBox">
      <div class="left">
        数量：
      </div>
      <div class="right">
        <Counter :min="defaultCounter.min" :max="defaultCounter.max" @changeNum="getInfo('counter',$event)"/>
      </div>
    </div>
    <div class="optionBox">
      <div class="left">
        价格：
      </div>
      <div class="right">
        <div>{{0}}元</div>
      </div>
    </div>
    <div class="optionBox">
      <div class="left">
        
      </div>
      <div class="right">
        <button class="active">立即购买</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Slide } from 'vue-swiper-component';
import Radios from '../components/radios';
import Select from '../components/select';
import Counter from '../components/counter';
export default {
  name: 'index',
  components: {
    Swiper,
    Slide,
    Radios,
    Select,
    Counter
  },
  data () {
    return {
      size: 1,
      type: 1,
      counter: 1,
      list: [
        // {imgurl:require('../assets/slideShow/1.png'),name:1,url:'http://www.baidu.com'},
        // {imgurl:require('../assets/slideShow/2.png'),name:1,url:'http://www.sina.com'},
        // {imgurl:require('../assets/slideShow/3.png'),name:1,url:'http://www.soho.com'}
      ],
      btnMenu:[
        {
            name: '不辣',
            value: 1
        },
        {
            name: '微辣',
            value: 2
        },
        {
            name: '中辣',
            value: 3
        },
        {
            name: '重辣',
            value: 4
        }
      ],
      selectMenu:[
        {
            name: '小份',
            value: 1,
            prise: 5
        },
        {
            name: '中份',
            value: 2,
            prise: 10
        },
        {
            name: '大份',
            value: 3,
            prise: 15
        }
      ],
      defaultCounter: {
        min: 1,
        max: 10
      }
    }
  },
  methods: {
    // getType (data) {
    //   console.log(data)
    // },
    // getSize (data) {
    //   console.log(data)
    // },
    // getNum (data) {
    //   console.log(data)
    // }
    getInfo (key, value) {
      this[key] = value;
      var resultData = {
        'size': this.size,
        'type': this.type,
        'counter': this.counter
      }
      console.log(resultData)
    }
  },
  created() {
    this.$axios('/cartes/list?shop_id=11').then((res) => {
      console.log(res)
      
    }, (err) => {
      console.log(err)
    });
  }
}
</script>

<style scoped>
.imgBox img{
  width: 100%;
  height: 100%;
}
.optionBox{
  width: 100%;
  height: 25px;
  margin: 10px 0;
}
.optionBox .left{
  width: 20%;
  line-height: 25px;
  float: left;
  text-align: center;
}
.optionBox .right{
  width: 80%;
  float: left;
}

.active{
  padding: 5px 10px;
    background-color: #4baf8c;
    color: #fff; 
    border: 0.5px solid #4baf8c;
}
</style>
  