export default {
	namespaced:true,
    state:{        //数据状态
		id:"",
		name:"双12",
		title:"123",
		childTitle:"学琴不孤单，两人报名半价优惠",
		discounts1:"￥960/人",
		discounts2:"￥1920/人",
		date1:"",
		date2:"2019-12-12",
		des:"抢购12节钢琴季课，专业的老师带给孩子最专业的启蒙，宗旨是让孩子在音乐启蒙的道路上不走弯路",
		expl:[
			{p:"两人一起报名便可参与特惠活动"},
			{p:"或者一人报名再邀请一人报名（不邀请他人按原价收费）"},
			{p:"老生不参与半价活动，但老生邀请新生并且新生报名成功赠送价值360元的钢琴和声乐课各一节"},
			{p:"参加活动的家长请及时添加工作人员微信"}
			],
		tip:"ps:转发此链接到朋友圈并获得11个赞可获得价值300元的声乐体验课一节，由加拿大华人艺术家陈红浪老师亲自教授。",
		day:0,
		hour:0,
		min:0,
		sec:0,
    proxy:"/love"
	},
	getters:{

    },
	mutations:{   //修改状态，同步
		setState(state,payload){

		}
	},
	actions:{    //修改状态，异步
		setStateAsyn(context,payload){
		  /**
		   * 模拟异步的过程，2000毫秒后通过commit()方法执行mumations中的changeSearchContentByObject方法改变数据
		   * 同样，payload可以是单数据或通过对象的方式，传递多个数据
		   * 这里只举例通过对象传递多数据的情况
		   */
		  setTimeout(()=>{
			context.commit("setState",payload)
		  },2000)
		}
	}
}
