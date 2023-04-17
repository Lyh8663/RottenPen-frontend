<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		//全局变量
		//获取 getApp().globalData.xxx
		//修改 getApp().globalData.xxx = xx
		globalData:{
			envprefix: 'http://47.100.211.157/lbt',//网络请求前缀
			userId:"",//用户登录时，写入的id
			accessToken:"",//用户登录时，写入的token
			accountBookId:"",//当前选定的账本id
			monthlyBudget:1500,//当前设置的本月预算
			billInfo:"",//用户选中的账单,用于加载账单详情
			assetInfo:"",//用户选中的资产,用于加载资产详情
			userAge:"",//用户的年龄,用于年龄相关的功能
			OCRresult:"",//用户扫描的结果，有appendixImgUrl、money、tag、notes、date等字段
		}
	}
</script>

<style>
	/*每个页面公共css */
	          //picker头部背景色

	.uni-picker-container .uni-picker-action.uni-picker-action-confirm{
		color: #FCC637;
	}
	
</style>
