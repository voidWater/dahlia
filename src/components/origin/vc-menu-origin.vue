<template>
  <div class="menu" v-bind:class="{'menu1':$store.state.view.shrinkMenu,'menu2':mouseenterFlag}" @mouseenter="mouseenterFlag=!mouseenterFlag" @mouseleave="mouseenterFlag=!mouseenterFlag">
		<div class="title"><div v-show="!$store.state.view.shrinkMenu||mouseenterFlag" class="user-bar" @click="goToLogin"><el-avatar :size="50" :src="circleUrl"></el-avatar></div></div>
		<el-scrollbar style="height: 100%;">
		<div v-if="!$store.state.view.shrinkMenu||mouseenterFlag" style="margin-top: 20px;">
			<div v-for="(item,index) in $store.state.view.menuItems">
				<a href="#"><div class="menu-itme" v-bind:class="{ 'menu-active': item.active }" @click="menuOpen(item)">
					<i :class="item.icon">&nbsp;&nbsp;</i>{{item.name}}<div class="arr-right" >&nbsp;
					<i v-if="item.childs.length>0&&!item.active" class="fa fa-angle-right"></i>
					<i v-if="item.childs.length>0&&item.active" class="fa fa-angle-down"></i>
					</div></div></a>
				<el-collapse-transition>
					<div v-if="item.childs.length>0 && item.active">
						<a href="#" v-for="(subItem,index) in item.childs" @click="menuOpen(item,index,true)"><div class="sub-menu-itme " v-bind:class="{ 'sub-menu-active': subItem.active }">
							 <i v-if="!subItem.active" class="fa fa-genderless" style="font-size: 8px;">&nbsp;&nbsp;</i>
							 <i v-else class="fa fa-circle" style="font-size: 8px;">&nbsp;&nbsp;</i>
							 {{subItem.name}}
						</div></a>
					</div>
				</el-collapse-transition>
			</div>
		</div>	
		<div v-else  >
			<div v-for="(item,index) in $store.state.view.menuItems" >
				<a href="#">
					<div class="menu-itme-s" >
						<i :class="item.icon">&nbsp;&nbsp;</i>
					</div>
				</a>
			</div>
		</div>
		</el-scrollbar>
  </div>
</template>
<script>
export default {
  name: 'vc-menu-origin',
  data () {
    return {
		circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
		mouseenterFlag:false
	}
  },
  methods:{
	goToLogin:function(){
		this.$router.push({path:'/login'});
		this.$store.state.view.tabs=[];
	},
	menuOpen:function(item,index,flag){
		if(flag){
			item.childs.forEach(i=>{
				i.active=false;
			})
			item.childs[index].active=true;
			let tabFlag = false;
			this.$store.state.view.tabs.forEach(t=>{
				if(t.code==item.childs[index].code){
					t.active=true;
					t.showClose=true;
					tabFlag = true;
				}else{
					t.active=false;
					t.showClose=false;
				}
			})
			if(!tabFlag){
				this.$store.state.view.tabs.push({name:item.childs[index].name,code:item.childs[index].code,path:item.childs[index].path,showClose:true,active:true});
			}
			this.$router.push({path:item.childs[index].path})
			
		}else{
			this.$router.push({path:item.path})
			if(item.active){
				this.$store.state.view.menuItems.forEach(i=>{
					i.active=false;
				});
			}else{
				this.$store.state.view.menuItems.forEach(i=>{
					i.active=false;
				});
				item.active=!item.active;
			}
			if(!item.childs.length>0){
				this.$store.state.view.tabs.forEach(t=>{
					if(t.code==item.code){
						t.active=true;
						t.showClose=true;
					}else{
						t.active=false;
						t.showClose=false;
					}
				})
			}
		}
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only //0c1a47 -->
<style scoped>
.menu{
	background-color: #192a5e;text-align: left;
	position: absolute;top: 0;bottom: 0;left: 0;width: 200px;
	overflow:-Scroll;overflow-y:hidden
}
.menu1{
	background-color: #192a5e;text-align: left;
	position: absolute;top: 0;bottom: 0;left: 0;width: 50px;
	overflow:-Scroll;overflow-y:hidden
}
.menu2{
	background-color: #192a5e;text-align: left;
	position: absolute;top: 0;bottom: 0;left: 0;width: 200px;z-index:999999;
}
.shrink-style{
	width: 200px;
}
.title{
	background: url(../../assets/template-origin/title.png);
	background-color: #122150;
	height:89px;line-height: 72px;color:#fff;
	padding-top: 80px;
}
.user-bar{
	color:#fff;margin-bottom: 20px;text-align: center;
	padding: 20px;
}
.menu-itme-s{
	color:#cbcbcb;
	height: 36px;
	line-height: 36px;
	font-size: 14px;
	padding: 5px 0 5px 20px;
	
}
.menu-itme{
	color:#cbcbcb;
	height: 36px;
	line-height: 36px;
	font-size: 14px;
	padding: 5px 0 5px 35px;
}
.menu-itme:hover{
	background-color: #0c1a47;
}
.menu-active{
	background-color: #122150;
}
.sub-menu-itme{
	color:#cbcbcb;
	height: 36px;
	line-height: 36px;
	font-size: 14px;
	padding: 5px 0 5px 45px;
	background-color: #122150;
}
.sub-menu-itme:hover{
	background-color: #0c1a47;
}
.sub-menu-active{
	color:#3963bc;
}
.arr-right{float:right;margin-right: 20px;}
a{text-decoration: none;}
</style>
