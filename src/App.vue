<template>
  <div id="app">
    <Headers />
    <router-view />
    <Footers />
  </div>
</template>

<script>
import Headers from './components/headers'
import Footers from './components/footers'
export default {
  name: 'App',
  components: {
    Headers,
    Footers
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  padding: 50px 0;
}
button:focus, input:focus{
  outline: none;
}
ul, li{
  list-style: none;
}
</style>
