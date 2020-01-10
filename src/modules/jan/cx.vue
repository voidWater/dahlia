<template>
	<div class="hello">
		<div>
			<mt-swipe :auto="4000" class="banner-wrap">
			  <mt-swipe-item class="banner-item">
				<img class="img-bar" src="../../assets/jan/0.jpg">
			  </mt-swipe-item>
			  <mt-swipe-item class="banner-item">
				<img class="img-bar" src="../../assets/jan/1.jpg">
			  </mt-swipe-item>
			  <mt-swipe-item class="banner-item">
				<img class="img-bar" src="../../assets/jan/xs_2.jpg">
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="date-bar">
			<span class="title"><b>{{$store.state.jan.name}}</b></span>
			<span class="date">距离活动结束还有{{$store.state.jan.day}}天{{$store.state.jan.hour}}时{{$store.state.jan.min}}分{{$store.state.jan.sec}}秒</span>
		</div>
		<div class="title-bar">{{$store.state.jan.childTitle}}</div>
		<div class="title-info"><span>音乐启蒙、</span><span>左右脑开发</span></div>
		<div class="pic-bar"><span class="curr"><b>{{$store.state.jan.discounts1}}</b></span><span class="jd"><s>{{$store.state.jan.discounts2}}</s></span></div>
		<div class="title-tip"><span><i class="fa fa-exclamation-circle"></i>不与其他优惠共享&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span><span><i class="fa fa-exclamation-circle"></i>请提前预约</span></div>
		<div class="bar"></div>
			 <div class="content">
				<div class="biv">
					<div><img class="img" src="../../assets/jan/tz.png"><div class="title">课程介绍</div></div>
					<div style="padding:5px">
						&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{$store.state.jan.des}}
					</div>
				</div>
				<div class="biv">
					<div><img class="img" src="../../assets/jan/tz.png"><div class="title">活动说明</div></div>
					<p v-for="(ex,index) in $store.state.jan.expl">&nbsp{{index+1}}&nbsp&nbsp&nbsp{{ex.p}}</p>
					<p style="color:red">{{$store.state.jan.tip}}</p>
				</div>
				<div class="biv">
					<div><img class="img" src="../../assets/jan/tz.png"><div class="title">中心简介</div></div>
					<div>
						&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp简乐艺术中心，创办人由上海音乐学院本科和英国皇家音乐学院硕士毕业，亲自带领的教师团队，培养的学生遍布全国，有很多学生参加比赛并获奖，艺术中心自创办以来受到家长及社会各界的一致好评！本中心金盘校区与由国内外知名音乐学院毕业的优秀演奏家所引领的音乐空间及音乐素养的联合，打造更高的品质来引领音乐培训，使孩子们学习到更多的更专业的艺术技术，同时也使孩子们的个人素质和道德品质得到全面的发展。金盘校区面积达300平方米，是一个温馨有爱的小别墅，拥有一个高雅专业古典的演奏厅，三间舒适宽敞的钢琴专业教室，一间环境优美的综合音乐素养教室，一个丰富的阅读室，舒适的共享交流区与家长休闲区，良好的办学环境能使我们的学员在艺术教学中更健康更快乐的成长。
					</div>
				</div>
				<div class="biv">
					<div><img class="img" src="../../assets/jan/tz.png"><div class="title">部分教师简介</div></div>
					<div>
						<img class="ls_img" src="../../assets/jan/ls_1.jpg">
					</div>
					<div>
						<img class="ls_img" src="../../assets/jan/ls_2.jpg">
					</div>
					<div>
						<img class="ls_img" src="../../assets/jan/ls_3.jpg">
					</div>
					<div>
						<img class="ls_img" src="../../assets/jan/ls_5.jpg">
					</div>
					<div>
						<img class="ls_img" src="../../assets/jan/ls_6.jpg">
					</div>
					<div>
						<img class="ls_img" src="../../assets/jan/ls_4.jpg">
					</div>
				</div>
				<div class="biv">
					<div><img class="img" src="../../assets/jan/tz.png"><div class="title">学生风采</div></div>
					<div>
						<img class="ls_img" src="../../assets/jan/xs_1.jpg">
					</div>
					<div>
						<img class="ls_img" src="../../assets/jan/xs_2.jpg">
					</div>
				</div>
		</div>
		<div class="bar"></div>
		 <div class="datail">
			<div class="name"><span >简乐艺术中心（金盘店）</span></div>
			<div class="info"><b><i class="fa fa-clock-o"></i></b>&nbsp09:00-21:30</div>
			<div class="info"><b><i class="fa fa-phone"></i></b>&nbsp18889520523</div>
			<div class="info"><b><i class="fa fa-map-signs"></i></b>&nbsp海南省海口市龙华区城西镇金盘金花路41号</div>
			<div id="allmap1"></div>
			<div class="name" style="margin-top:10px"><span >简乐艺术中心（国兴工作室）</span></div>
			<div class="info"><b><i class="fa fa-clock-o"></i></b>&nbsp09:00-21:30</div>
			<div class="info"><b><i class="fa fa-phone"></i></b>&nbsp18889520523</div>
			<div class="info"><b><i class="fa fa-map-signs"></i></b>&nbsp海南省海口市美兰区美祥路晋江花园</div>
			<div id="allmap2"></div>
		 </div>

		<div class="shade" v-show="popupVisible" @click="upPopup"></div>
		<div class="qgp" v-show="popupVisible">
			<div>
				<img class="img" src="../../assets/jan/ls.jpg">
			</div>
			<div class="title">
				识别图中二维码，及时与客服联系，了解活动详情，一起过个有意义的双11吧
			</div>
		</div>
		<div class="footer" @click="upPopup">立即抢购</div>
	</div>
</template>

<script>
	export default{
		name:"cx",
		data(){
			return{
				day:0,
				hour:0,
				min:0,
				sec:0,
				popupVisible:false,
        proxy:this.$store.state.jan.proxy
			}
		},
		created:function(){
			this.$axios
			  .get(this.proxy+'/musicStudio/get?id='+this.$route.params.id)
			  .then(response => {
				console.log(response.data);
				this.$store.state.jan.id=response.data.id,
				this.$store.state.jan.name=response.data.name;
				this.$store.state.jan.title=response.data.title;
				this.$store.state.jan.childTitle=response.data.childTitle;
				this.$store.state.jan.date2=response.data.datestr;
				var pics = response.data.pics.split(",");
				this.$store.state.jan.discounts1=pics[0];
				this.$store.state.jan.discounts2=pics[1];
				this.$store.state.jan.des=response.data.des;
				var expl = response.data.expl.split("%%");
				this.$store.state.jan.expl=[];
				for(let i = 0;i < expl.length;i++){
					this.$store.state.jan.expl.push({p:expl[i]});
				}
				this.$store.state.jan.tip=response.data.tip
				document.title=this.$store.state.jan.title;
			  })
			  .catch(error => {
				console.log(error)
				this.$message("失败！");
			  })

		},
		mounted() {
			var map = new BMap.Map("allmap1");
			map.centerAndZoom(new BMap.Point(110.32980847495868, 19.998628411801107),18);//110.32980185464291, 19.998
			map.enableScrollWheelZoom(true);
			var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
			var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
			var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角
			map.addControl(top_left_control);
			map.addControl(top_left_navigation);
			map.addControl(top_right_navigation);
			var marker = new BMap.Marker(new BMap.Point(110.32980847495868, 19.998628411801107)); // 创建点
			map.addOverlay(marker);   //增加点
			// function showInfo(e){
			//     alert(e.point.lng + ", " + e.point.lat);
			// }
			var map2 = new BMap.Map("allmap2");
			map2.centerAndZoom(new BMap.Point(110.379451, 20.028194),18);//110.32980185464291, 19.998
			map2.enableScrollWheelZoom(true);
			var top_left_control1 = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
			var top_left_navigation1 = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
			var top_right_navigation1 = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角
			map2.addControl(top_left_control1);
			map2.addControl(top_left_navigation1);
			map2.addControl(top_right_navigation1);
			var marker1 = new BMap.Marker(new BMap.Point(110.379451, 20.028194)); // 创建点
			map2.addOverlay(marker1);    //增加点

			//map2.addEventListener("click", showInfo);
			//map.addEventListener("tilesloaded",function(){alert("地图加载完毕");});
		},
		methods:{
			upPopup:function(){
				console.log(123);
				this.popupVisible = !this.popupVisible;
			},
		}
	}
</script>

<style scoped>
#allmap1,#allmap2{
	height:200px;
	width:100%;
}
.img-bar{
	height:250px;
	width:100%
}
.ls_img{
	width:100%
}
.hello{
	font-family: Roboto,San Francisco,"Helvetica Neue",Helvetica,Arial,PingFangSC-Light,"Hiragina Sans GB","WenQuanYi Micro Hei",'microsoft yahei ui','microsoft yahei',sans-serif
}
.date-bar{
	width:100%;height:45px;background-color:#f16f6f;color:#fff;
}
.date-bar .title{
	line-height:45px;font-size:20px;float:left;margin-left:15px;
}
.biv .img{
	height:20px;line-height:25px;
}
.date-bar .date{
	line-height:45px;font-size:14px;float:right;margin-right:15px;
}
.title-bar{
	margin: 10px 10px 0px 10px;font-size:18px;text-align:left;
}
.title-info{
	margin-left: 15px;text-align:left;color:#b7c0c5;font-size:10px;
}
.pic-bar{
	margin:10px 15px 2px 10px;text-align:right;
}
.pic-bar .curr{
	font-size:24px;color:red;
}
.pic-bar .jd{
	color:#b7c0c5;margin-left:5px;
}
.title-tip{
	font-size:12px;margin-right:10px;text-align:right;
}
.bar{
	width:100%;height:10px;background-color:#f7f2f2;margin:10px 0;
}
.datail{
	text-align:left;padding:0 10px;margin-bottom:70px;
}
.datail .name{
	margin-bottom:15px;
}
.datail .info{
	text-align:left;font-size:15px;margin:5px 5px 5px 8px;
}
.content .biv{
	margin:8px;text-align:left;
}
.content .biv .title{
	background-color:#ffc107;color:#fff;padding:5px;display:inline-block;
}
.qgp{
	position:fixed;bottom:45px;left:0;width:100%;background-color:#fff;border-radius: 30px 30px 0px 0px;
}
.qgp .img{
	width:40%;
}
.qgp .title{
	padding:5px;
}
.shade{
	position: fixed;top: 0;right: 0;bottom: 0;left: 0;background-color: #a7a0a0cc;
}
.footer{
	height:45px;
	width:100%;
	line-height:50px;
	background-color:red;
	color:#fff;
	position:fixed;
	bottom:0;
	left:0;
}
.banner-wrap{
	height:250px;
	.banner-item{
		height:150px;
	}
}
</style>
