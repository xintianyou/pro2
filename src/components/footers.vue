<template>
  <div class="footer">
    <router-link :to="{path:tab.path}" :key="index" v-for="(tab, index) in tabs">{{ tab.title }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'footers',
  data () {
    return {
      tabs: [
        {
          title: '首页',   
          path: '/'      
        },
        {
          title: '内容',
          path: '/pages/content'        
        },
        {
          title: '我的',
          path: '/pages/mine'          
        }
      ]
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.footer{
  height: 50px;
  width: 100%;
  line-height: 50px;
  position: fixed;
  bottom: 0;
  background-color: #999;
  color: #fff;
  text-align: center;
}
.footer a {
  display: inline-block;
  width: 33%;
  color: #333;
  text-decoration: none;
}
.router-link-exact-active{
  background: #4baf8c;
  color: #fff !important;
}
</style>
  