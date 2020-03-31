<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="changeBtn">{{$store.state['app-javascript'].loginApp}}</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  methods:{
    changeBtn(){
      this.$store.commit('app-javascript/changeLogin', '改变后的javascript')
    }
  },
  mounted(){
    console.log(this.$store.state['app-javascript'])
  },
  components: {
    HelloWorld,
  },
};
</script>
