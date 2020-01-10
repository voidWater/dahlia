<template>
	<div class="container">
		<div class="form">
			<el-form ref="form" :model="form" label-width="80px" :inline="true">
			  <el-form-item label="活动名称">
				<el-input v-model="form.name"></el-input>
			  </el-form-item>
			  <el-form-item label="">
			  	<el-button type="primary" @click="onSubmit">立即创建</el-button>
			  </el-form-item>
			</el-form>
		</div>
		<div class="table">
			<template>
			  <el-table
				ref="multipleTable"
				:data="tableData"
				tooltip-effect="dark"
				style="width: 100%"
				@selection-change="handleSelectionChange">
				<el-table-column
				  type="selection"
				  width="55">
				</el-table-column>
				<el-table-column
				  label="日期"
				  width="120">
				  <template slot-scope="scope">{{ scope.row.date }}</template>
				</el-table-column>
				<el-table-column
				  prop="name"
				  label="姓名"
				  width="120">
				</el-table-column>
				<el-table-column
				  prop="address"
				  label="地址"
				  show-overflow-tooltip>
				</el-table-column>
			  </el-table>
			</template>
			<div style="margin-top: 10px;">
			<el-pagination
			  background
			  layout=" prev, pager, next, jumper,total, sizes"
			  :total="1000">
			</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"t3",
		data(){
			return{
				form: {
				  name: '',
				  region: '',
				  date1: '',
				  date2: '',
				  delivery: false,
				  type: [],
				  resource: '',
				  desc: ''
				},
				tableData: [{
				  date: '2016-05-03',
				  name: '王小虎',
				  address: '上海市普陀区金沙江路 1518 弄'
				}, {
				  date: '2016-05-02',
				  name: '王小虎',
				  address: '上海市普陀区金沙江路 1518 弄'
				}, {
				  date: '2016-05-04',
				  name: '王小虎',
				  address: '上海市普陀区金沙江路 1518 弄'
				}, {
				  date: '2016-05-01',
				  name: '王小虎',
				  address: '上海市普陀区金沙江路 1518 弄'
				}, {
				  date: '2016-05-08',
				  name: '王小虎',
				  address: '上海市普陀区金沙江路 1518 弄'
				}, {
				  date: '2016-05-06',
				  name: '王小虎',
				  address: '上海市普陀区金沙江路 1518 弄'
				}, {
				  date: '2016-05-07',
				  name: '王小虎',
				  address: '上海市普陀区金沙江路 1518 弄'
				}]
			}
		},
		created:function(){
			
		}
	}
</script>

<style scoped>
.container{
	padding: 8px;
}
.container .form .control-bar{
	margin: 0 0 10px 20px;
}
.container .form{
	text-align: left;
	padding: 20px;
}

.container .table{
	text-align: left;
}
.container .table .control-bar{
	margin: 0 0 5px 20px;
}
</style>
