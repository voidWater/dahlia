<template>
	<div id=''>
<!-- 		<div class="head">
			<span class="title">编辑器</span>
		</div> -->
		<el-row>
		  <el-col :span="12">
			  <div class="left">
				   <el-tabs v-model="activeName" >
				  	<el-tab-pane label="活动列表" name="first" >
				  		<div class="hd-list" v-for="item in hdList" @click="selectedHd(item)">
							<div style="line-height: 50px;padding: 0 10px;">
								{{item.name}}
								<div style="float: right;line-height: 50px;">
									<el-button @click="createLine(item)">生成链接</el-button>
									<el-button @click="editHd(item)">编辑</el-button>
									<el-button type="warning" @click="delHd(item)">删除</el-button>
								</div>
							</div>
						</div>
						<el-button type="primary" @click="addHd">新增活动</el-button>
				  	</el-tab-pane>
				  	<el-tab-pane label="活动编辑" name="second">
						<el-form label-width="80px">
						  <el-form-item label="活动名称">
							<el-input v-model="$store.state.jan.name"></el-input>
						  </el-form-item>
						  <el-form-item label="页头标题">
						  	<el-input v-model="$store.state.jan.title"></el-input>
						  </el-form-item>
						  <el-form-item label="子标题">
						  	<el-input v-model="$store.state.jan.childTitle"></el-input>
						  </el-form-item>
						  <el-form-item label="活动时间">
							<!-- <el-col :span="11">
							  <el-date-picker type="date" placeholder="选择开始日期" v-model="$store.state.jan.date1" style="width: 100%;" ></el-date-picker>
							</el-col>
							<el-col class="line" :span="2">-</el-col> -->
							<el-col :span="11">
							  <el-date-picker type="date" placeholder="选择结束日期" v-model="$store.state.jan.date2" style="width: 100%;"
							  value-format="yyyy-MM-dd" @change="endDateChange"></el-date-picker>
							</el-col>
						  </el-form-item>
						  <el-form-item label="活动价格">
							<el-col :span="11">
							  <el-input placeholder="编辑优惠价格" v-model="$store.state.jan.discounts1"></el-input>
							</el-col>
							<el-col class="line" :span="2">-</el-col>
							<el-col :span="11">
							  <el-input placeholder="编辑原始价格" v-model="$store.state.jan.discounts2"></el-input>
							</el-col>
						  </el-form-item>
						  <el-form-item label="课程介绍">
							  <el-input type="textarea"  v-model="$store.state.jan.des"></el-input>
						  </el-form-item>
						  <el-form-item label="活动说明">
							  <el-input v-for="ex in $store.state.jan.expl" v-model="ex.p"></el-input>
							  <el-button @click="addExpl">+</el-button>
							  <el-button @click="subExpl">-</el-button>
						  </el-form-item>
						  <el-form-item label="提示">
						  	  <el-input type="textarea"  v-model="$store.state.jan.tip"></el-input>
						  </el-form-item>
						  <el-form-item>
							<el-button v-if="flag" type="primary" @click="onSubmit" :disabled="bdis">创建</el-button>
							<el-button v-else type="success" @click="onSubmit" :disabled="bdis">修改</el-button>
						  </el-form-item>
						</el-form>
					</el-tab-pane>
				  </el-tabs>

			  </div>
		  </el-col>
		  <el-col :span="12">
			  <div class="right">

          <div style="width: 450px;height: 700px;overflow: auto;border-radius: 10px;border:10px solid #f16f6f">
            <el-scrollbar style="height: 100%;">
            <router-view/>
            </el-scrollbar>
          </div>

			  </div>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		name:"jan",
		data(){
		return{
			activeName:"first",
			hdList:"123123",
			flag:false,
      bdis:true,
      proxy:this.$store.state.jan.proxy
		}
		},
		created:function(){
			this.$router.push({path:'/mainOrigin/janMain/view'})
			this.timer = setInterval(this.countdown, 1000);
			this.init();
		},
		methods:{
			init:function(){
				this.$axios
				  .get(this.proxy+'/musicStudio/all')
				  .then(response => {
					this.hdList=response.data;
				  })
				  .catch(error => {
					console.log(error)
				  })
			},
			onSubmit:function(){
				console.log(this.$store.state.jan)
				var str = "";
				for(let i = 0;i<this.$store.state.jan.expl.length;i++){
					str+=this.$store.state.jan.expl[i].p+(i==this.$store.state.jan.expl.length-1?"":"%%")
				}
				this.bdis=false;
				this.$axios
				  .post(this.proxy+'/musicStudio/save',{
					  id:this.$store.state.jan.id,
					  name:this.$store.state.jan.name,
					  title:this.$store.state.jan.title,
					  childTitle:this.$store.state.jan.childTitle,
					  datestr:this.$store.state.jan.date2,
					  pics:this.$store.state.jan.discounts1+","+this.$store.state.jan.discounts2,
					  des:this.$store.state.jan.des,
					  expl:str,
					  tip:this.$store.state.jan.tip
				  })
				  .then(response => {
					console.log(response.data);
					if(response.data==1){
						this.activeName="first"
						this.$message({type:"success",message:"操作成功"});
						this.$axios
						  .get(this.proxy+'/musicStudio/all')
						  .then(response => {
							this.hdList=response.data;
						  })
						  .catch(error => {
							console.log(error)
						  })
					}else{
						this.$message("操作失败！");
					}
          that.bdis=false;
				  })
				  .catch(error => {
					console.log(error)
					this.$message("失败！");
          that.bdis=false;
				  })
			},
			selectedHd:function(val){
				this.$store.state.jan.id=val.id,
				this.$store.state.jan.name=val.name;
				this.$store.state.jan.title=val.title;
				this.$store.state.jan.childTitle=val.childTitle;
				this.$store.state.jan.date2=val.datestr;
				var pics = val.pics.split(",");
				this.$store.state.jan.discounts1=pics[0];
				this.$store.state.jan.discounts2=pics[1];
				this.$store.state.jan.des=val.des;
				var expl = val.expl.split("%%");
				this.$store.state.jan.expl=[];
				for(let i = 0;i < expl.length;i++){
					this.$store.state.jan.expl.push({p:expl[i]});
				}
				this.$store.state.jan.tip=val.tip
			},
			addHd:function(){
				this.activeName="second"
				this.flag = true;
				this.$store.state.jan.id="",
				this.$store.state.jan.name="",
				this.$store.state.jan.title="",
				this.$store.state.jan.childTitle="",
				this.$store.state.jan.date2="",
				this.$store.state.jan.discounts1="",
				this.$store.state.jan.discounts2="",
				this.$store.state.jan.des="",
				this.$store.state.jan.expl=[{p:""}],
				this.$store.state.jan.tip=""
			},
			editHd:function(val){
				this.activeName="second"
				this.flag = false;
				console.log(val);
				this.$store.state.jan.id=val.id,
				this.$store.state.jan.name=val.name;
				this.$store.state.jan.title=val.title;
				this.$store.state.jan.childTitle=val.childTitle;
				this.$store.state.jan.date2=val.datestr;
				var pics = val.pics.split(",");
				this.$store.state.jan.discounts1=pics[0];
				this.$store.state.jan.discounts2=pics[1];
				this.$store.state.jan.des=val.des;
				var expl = val.expl.split("%%");
				this.$store.state.jan.expl=[];
				for(let i = 0;i < expl.length;i++){
					this.$store.state.jan.expl.push({p:expl[i]});
				}
				this.$store.state.jan.tip=val.tip
			},
			delHd:function(val){
				this.$axios
				  .delete(this.proxy+'/musicStudio/del?id='+val.id)
				  .then(response => {
					if(response.data==1){
						this.init();
					}
				  })
				  .catch(error => {
					console.log(error)
				  })
			},
			createLine:function(val){
				this.$alert('https://fullmusic.club/love/ac/get?id='+val.id,'复制链接，到浏览器中访问' , {
				  confirmButtonText: '确定'
				});
			},
			endDateChange:function(val){
				this.countdown();
			},
			addExpl:function(){
				this.$store.state.jan.expl.push({p:""});
			},
			subExpl:function(){
				this.$store.state.jan.expl.pop();
			},
			countdown:function () {//倒计时
        var deadline= new Date(this.$store.state.jan.date2)
				var now= new Date()
				var nowNum = deadline-now;
				this.$store.state.jan.day=parseInt(nowNum/(60*60*24*1000))
				this.$store.state.jan.hour=parseInt((deadline-now)%(60*60*24*1000)/(60*60*1000))
				this.$store.state.jan.min=parseInt((deadline-now)%(60*60*24*1000)%(60*60*1000)/(60*1000))
				this.$store.state.jan.sec=parseInt((deadline-now)%(60*60*24*1000)%(60*60*1000)%(60*1000)/1000)
			}
		}
	}
</script>

<style scoped>
.head{
	height:50px;width: 100%;background-color: #f16f6f;color:#FFFFFF;text-align: left;
}
.head .title{
	font-size: 16;font-weight: bold;line-height: 50px;margin-left: 50px;
}
.right{
	padding: 30px;background-color: #F5F5F5;
}
.left{
	padding: 30px;
}
.hd-list{
	text-align: left;margin: 10px 10px;
	background-color: #f16f6f;
	height:50px;color:#fff;
}
</style>
