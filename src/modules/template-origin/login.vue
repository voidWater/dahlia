<template>
	<div class="container">
			<div class="left-content">
				<img class="left-img" src="../../assets/template-origin/57c63637e0ac4.jpg" />
			</div>
			<div class="right-content">
				<div style="width:40%;padding-bottom: 150px;">
					<img class="user-img" src="../../assets/template-origin/1575015198(1).png" />
									<el-form ref="form" :model="form" label-width="80px">
					  <el-form-item label="用户名">
						<input  v-model="form.name"></input>
					  </el-form-item>
					  <img src="../../assets/template-origin/nickname.93a6d6f0.png" style="width: 100%;margin-bottom: 7px;"/>
					  <el-form-item label="密码">
					  	<input id="goIn" type="password" v-model="form.password" @keyup.enter="login"></input>
					  </el-form-item>
					</el-form>
				</div>
			</div>
	</div>
</template>

<script>
	export default{
		name:"login",
		data(){
			return {
				form:{
					name:"li",
					password:"123"
				}
			}
		},
		created:function(){
			
		},
		mounted:function(){
			document.getElementById('goIn').focus()
		},
		methods:{
			login:function(){
				this.$router.push({path:'/mainOrigin'})
			}
		}
	}
</script>

<style scoped>
@-webkit-keyframes rotation{
    from {-webkit-transform: rotate(0deg);}
    to {-webkit-transform: rotate(-360deg);}
}

.an{
	position: fixed;
	top:200px;
	width: 250px;
    -webkit-transform: rotate(360deg);
    animation: rotation 1s linear infinite;
    -moz-animation: rotation 1s linear infinite;
    -webkit-animation: rotation 1s linear infinite;
    -o-animation: rotation 1s linear infinite;
}

.container{
/* 	display: flex;justify-content:space-around;align-items:center;height: 800px; */
}
input{
	background:none;  
	outline:none;  
	border:0px;
	font-size: 18px;

}

.left-img{
     width: 70%;margin: 50px auto;display: flex;justify-content: center;align-items: center;
}
.user-img{
	width:150px;height:150px;
	border-radius: 100px;margin-bottom: 60px;
}
.container .left-content{
	background-color: #0b1e3e;
	position: absolute;top:0;bottom: 0;left: 0;width: 50%;display: flex;justify-content: center;align-items: center;
}
.container .right-content{
	position: absolute;top:0;bottom: 0;left: 50%;width: 50%;display: flex;justify-content: center;align-items: center;
}
</style>
