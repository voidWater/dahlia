<template>
	<div class="container">
		<div class="form">
			<div class="control-bar">
				<el-page-header @back="goBack" content="详情页面">
				</el-page-header>
			</div>
			<el-form ref="form" :model="form" label-width="80px" :inline="true">
			  <el-form-item label="活动名称">
				<el-input v-model="form.name"></el-input>
			  </el-form-item>
			  <el-form-item label="活动区域">
				<el-select v-model="form.region" placeholder="请选择活动区域">
				  <el-option label="区域一" value="shanghai"></el-option>
				  <el-option label="区域二" value="beijing"></el-option>
				</el-select>
			  </el-form-item>
			  <el-form-item label="活动时间">
				<el-col :span="11">
				  <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
				</el-col>
				<el-col class="line" :span="2">-</el-col>
				<el-col :span="11">
				  <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
				</el-col>
			  </el-form-item>
			  <el-form-item label="即时配送">
				<el-switch v-model="form.delivery"></el-switch>
			  </el-form-item>
			  <el-form-item label="活动性质">
				<el-checkbox-group v-model="form.type">
				  <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
				  <el-checkbox label="地推活动" name="type"></el-checkbox>
				  <el-checkbox label="线下主题活动" name="type"></el-checkbox>
				  <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
				</el-checkbox-group>
			  </el-form-item>
			  <el-form-item label="特殊资源">
				<el-radio-group v-model="form.resource">
				  <el-radio label="线上品牌商赞助"></el-radio>
				  <el-radio label="线下场地免费"></el-radio>
				</el-radio-group>
			  </el-form-item>
			  <el-form-item label="活动形式">
				<el-input type="textarea" v-model="form.desc"></el-input>
			  </el-form-item>
			  <el-row>
				  <el-form-item>
				  				&nbsp;&nbsp;&nbsp;&nbsp;<el-button type="primary" @click="onSubmit">立即创建</el-button>
				  				<el-button>取消</el-button>
				  </el-form-item>
			  </el-row>
			  
			</el-form>
		</div>
		<div class="table">
			<div class="control-bar">
				<i class="el-icon-edit"></i>&nbsp;&nbsp;&nbsp;&nbsp;
				<i class="el-icon-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;
				<i class="el-icon-delete"></i>&nbsp;&nbsp;&nbsp;&nbsp;
				<el-button type="primary" icon="el-icon-search">导出</el-button>
			</div>
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
		name:"view",
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
