<template>
  <div id="app">
		<transition name="el-fade-in-linear">
			<router-view/>
		</transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  created:function(){
		this.$router.push({path:'/mainOrigin'})
  },
  methods:{
  }
}
</script>
<style>
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	}
	body{
		margin:0;
	}
</style>
