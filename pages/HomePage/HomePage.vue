<template>
	<view class="container">
		<view style="height:var(--status-bar-height);width: 100%;"></view>
		<view class="topbar">
			<!-- 账本内容 -->
			<view class="topbar_view">
				<image class="accountbook" src="../../static/accountbook.png"></image>
				<!-- <view class="account_type">生活账本</view> -->
				<view class="account_type" @click="selectXiala">
					<view class="account_typetext">
						{{optionType}}
					</view>
					<view class="xiala">
						<view class="xiala-xuanxiang" :class="[isXiala==1?'open':'',isXiala==2?'close':'']">
							<scroll-view scroll-y="true"  class="scrollArea">
								<view class="xiala-hang" v-for="(item,index) in option" :key="index" @click="xuanzeAccountBook(index,item.value,item.id)">
									<view class="xiala-hang-item-normal" v-if="index!=0">
										<view class="itemvalue">
											{{item.value}}
										</view>
										<view class="chosenIcon">
											<image src="../../static/zhangbengouzi.png" alt="" v-if="optionType==item.value"></image>
										</view>
									</view>
									<view class="xiala-hang-item-add" v-else @click="inputDialogToggle">
										<view class="chosenIcon">
											<image src="../../static/zhangbentianjia.png" alt=""></image>
										</view>
										<view class="itemvalue">
											{{item.value}}
										</view>
									</view>
								</view>	
							</scroll-view>
						</view>
					</view>
				</view>
				
			</view>
			
			<view class="topbar_view">
				<image class="search" src="../../static/search.png"></image>
				<image class="more" src="../../static/more.png"></image>
			</view>		
		</view>
		<view>
			<!-- 输入框示例 -->
			<uni-popup ref="inputDialog" type="dialog">
				<uni-popup-dialog ref="inputClose"  mode="input" title="添加账本" value="请输入要添加的账本名称"
					placeholder="请输入内容" @confirm="dialogInputConfirm"></uni-popup-dialog>
			</uni-popup>
		</view>
		<view class="in_ex_ba">
			
			<view class="in_ex_ba_1">
				<view class="in_ex_ba_2">
					<view class="text0">本月收入</view>
					<view class="income">123</view>
				</view>
				<view class="in_ex_ba_2">
					<view class="text0">本月支出</view>
					<view class="expenditure">123</view>
				</view>
				<view class="in_ex_ba_2">
					<view class="text0">本月结余</view>
					<view class="balance">123</view>
				</view>
			</view>
			<view class="in_ex_ba_3">
				<view class="text1">1月预算</view>
				<view class="percent">
					<view class="yet_month">300</view>
					<view>/</view>
					<view class="total">1000</view>
				</view>
			</view>
			<view class="progress-box">
				<progress percent="67"  stroke-width="4" activeColor="#E88684FF" backgroundColor="#F7B89DFF"/>
			</view>
			<view class="in_ex_ba_4">
				<view class="in_ex_ba_5">
					<view class="text2">已用：</view>
					<view class="yet_day">225.00</view>
				</view>
				<view class="in_ex_ba_5">
					<view class="text2">剩余日均：</view>
					<view class="balance_day">51.23</view>
				</view>
			</view>
			<view class="in_ex_ba_6" @click="toAddBill()">
				<view class="add_bill">添加一条新账</view>
			</view>
		</view>
		<view class="bill">
			<view class="day_bill" v-for="(bill,b) in billList" :key="b">
				<view class="bill_title">
					<view class="date">{{bill.date}}</view>
					<view class="weeekday">{{bill.weekday}}</view>
					<view class="in_ex">
						<view class="in_ex_1">
							<view class="text3">收</view>
							<view class="in">{{bill.in}}</view>
						</view>
						<view class="in_ex_1">
							<view class="text3">支</view>
							<view class="ex">{{bill.ex}}</view>
						</view>
					</view>
				</view>
				<view class="bill_info" v-for="(info,i) in billInfoList" :key="i" @click="toBillDetail()">
					<image class="bill_type_image" :src="info.image"></image>
					<view class="bill_type_text">{{info.type}}</view>
					<view class="bill_info_detail">{{info.money}}</view>
				</view>
			</view>		
		</view>
		<uni-fab  ref="fab" :pattern="pattern" :content="content" 
						 @trigger="trigger" horizontal="right" />
						 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//添加账本时,输入的账本名
				newAccountName: '',
				//账本选中内容
				optionType:'日常账本',
				option:[
					{lable:0,value:"添加账本",id:-1},
					{lable:1,value:"日常账本",id:-1},
					{lable:2,value:"家庭账本",id:-1},
					{lable:3,value:"公司帐本",id:-1},
					{lable:3,value:"...",id:-1},
					{lable:3,value:"...",id:-1},
				],
				isXiala:2,
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#7A7E83',
					buttonColor: '#072750',
					iconColor: '#fff'
				},
				content: [{
					conPath: "../../static/camera3.png",
					selectedIconPath:"../../static/camera3.png",
					text: '拍照',
					active: true
				    },
					{
					iconPath: "../../static/sound3.png",
					selectedIconPath:"../../static/sound3.png",
					text: '语音',
					active: true
					},
					{
					iconPath: "../../static/write.png",
					selectedIconPath:"../../static/write.png",
					text: '对话',
					active: true
					}
				],
				billList:[
					{date:"03月01日",weekday:"周一",in:"23.89",ex:"3.00"},
					{date:"03月01日",weekday:"周一",in:"23.89",ex:"3.00"},
					{date:"03月01日",weekday:"周一",in:"23.89",ex:"3.00"},
				],
				billInfoList:[
					{image:"../../static/diet.png",type:"食品餐饮-请客吃饭",money:"-10.00"},
					{image:"../../static/diet.png",type:"食品餐饮-请客吃饭",money:"-10.00"},
					{image:"../../static/diet.png",type:"食品餐饮-请客吃饭",money:"-10.00"},
					{image:"../../static/diet.png",type:"食品餐饮-请客吃饭",money:"-10.00"},
				],
			}
		},
		methods: {
			//打开添加账本弹出框
			inputDialogToggle() {
				this.$refs.inputDialog.open()
			},
			//添加账本弹出框,选择确定按钮以后的函数
			dialogInputConfirm(val) {
				// uni.showLoading({
				// 	title: '正在创建'
				// })
				// setTimeout(() => {
				// 	uni.hideLoading()
				// 	console.log(val)
				// 	this.newAccountName = val
				// 	// 关闭窗口后，恢复默认内容
				// 	this.$refs.inputDialog.close()
				// }, 3000)
				
				//没输入内容就点了确定
				if(val=="请输入要添加的账本名称"){
					uni.showToast({
						icon:"none",
						title:"添加失败:未输入账本名"
					})
					return;
				}
				//将添加的张本名存在newAccount中
				this.newAccountName = val;
				//发起添加账本的请求
				var that = this;
				uni.request({
					url:getApp().globalData.envprefix + "/admin-api/lbt/account-book/create",
					method:'POST',
					header:{
						'tenant-id':1,
						'Authorization': "Bearer " + getApp().globalData.accessToken
					},
					data:{
						'title':that.newAccountName
					},
					success(res) {
						// 确认是否添加成功
						console.log(res.data);
						//显示用户添加账本操作成功
						uni.showToast({
							icon:"none",
							title:"成功添加账本"
						})
						//发起刷新账本列表的请求
						uni.request({//获取所有账本信息
							url: getApp().globalData.envprefix + '/admin-api/lbt/extends/accountbook/get',
							header:{
								"tenant-id":1,
								"Authorization": 'Bearer ' + getApp().globalData.accessToken
							},
							success(res) {
								console.log(res.data.data);
								//用户肯定已有账本
								var arrTemp = [];
								for(var i = 0;i < res.data.data.length+1;i++){//对数据进行处理
									if(i==0){//首位
										arrTemp.push({
											label:i,
											value:'添加账本',
											id:-1
										});
										continue;
									}
									arrTemp.push({
										label:i,
										value:res.data.data[i-1].title,
										id:res.data.data[i-1].id
									});
								}
								if(res.data.data.length<5){//不足6个账本,则添加...作为填充
									var time = 5 - res.data.data.length;
									for(var i = 0;i<time;i++){
										arrTemp.push({
											label:res.data.data.length+i+1,
											value:"...",
											id:-1
										})
									}
								}
								that.option = arrTemp;//更新账本列表
								console.log("账本列表已更新")
							}
						})
					}
				})
				
				
				// 关闭窗口后，恢复默认内容
				this.$refs.inputDialog.close()
			},
			//跳转到添加一条新帐页面
			toAddBill(){
				uni.navigateTo({
					url:"../AddBillPage/AddBillPage",
				})
			},
			//跳转到账单详情页面
			toBillDetail(){
				uni.navigateTo({
					url:"../BillDetail/BillDetail",
				})
			},
			//悬浮框点击展开
			trigger(e) {
				// console.log(e)
				// this.content[e.index].active = !e.item.active
				if(e.item.text=="拍照"){
					console.log("拍照被点击了");
					//跳转到拍照页面
				}else if(e.item.text=="语音"){
					console.log("语音被点击了");
					//跳转到语音输入页面
					uni.showToast({
						icon:'none',
						title:"暂未开放，敬请期待"
					})
				}else{
					console.log("对话被点击了");
					//跳转到对话输入页面
					uni.showToast({
						icon:'none',
						title:"暂未开放，敬请期待"
					})
				}
				
			},
			//下拉列表操控
			//0:表示还没有选中内容 1:表示下拉菜单展开 2:表示已经选中内容
			selectXiala(){
				// console.log("被点击了")
				// console.log(this.isXiala)
				if(this.isXiala==0){
					this.isXiala=1
					console.log(this.isXiala)
				}else if(this.isXiala==1){
					this.isXiala=2
					console.log(this.isXiala)
				}else if(this.isXiala==2){
					this.isXiala=1
					console.log(this.isXiala)
				}
			},
			//选中账本
			xuanzeAccountBook(index,value,id){
				// console.log("选中了" + index);
				if(index==0){
					console.log("选中添加账本");
					//发起添加账本的请求
					return;
				}
				if(id==-1){
					console.log("选中" + value);
					uni.showToast({
						icon:"none",
						title:"账本待添加"
					})
					return;
				}
				console.log("选中" + value);
				this.optionType=value;
				//发起查看账本内容的请求
			},
			//日期获取方法
			getMonthBeginAndEnd(){
				//1.获取今天的日期
				const date = new Date();
				console.log("当前时间" + date);
				
				//2.获取今天的年月
				const year = date.getFullYear();
				const month = date.getMonth();
				
				//3.获取本月开始时间和本月结束的日期
				let thisMonthStartDate = new Date(year,month,1);
				let thisMonthEndDate = new Date(year,month+1,1);
				
				//4.格式转化
				// thisMonthStartDate.uni.$u.timeFormat(thisMonthStartDate,'yyyy-mm-dd');
				// thisMonthEndDate.uni.$u.timeFormat(thisMonthEndDate,'yyyy-mm-dd');
				thisMonthStartDate = this.format(thisMonthStartDate);
				thisMonthEndDate = this.format(thisMonthEndDate);
				console.log("本月开始:" + thisMonthStartDate);
				console.log("本月结束" + thisMonthEndDate);
				
				//5.返回数组
				return [thisMonthStartDate,thisMonthEndDate];
			},
			//格式化日期的方法
			format(dat){
			    //获取年月日，时间
			    var year = dat.getFullYear();
			    var mon = (dat.getMonth()+1) < 10 ? "0"+(dat.getMonth()+1) : dat.getMonth()+1;
			    var data = dat.getDate()  < 10 ? "0"+(dat.getDate()) : dat.getDate();
			    var hour = dat.getHours()  < 10 ? "0"+(dat.getHours()) : dat.getHours();
			    var min =  dat.getMinutes()  < 10 ? "0"+(dat.getMinutes()) : dat.getMinutes();
			    var seon = dat.getSeconds() < 10 ? "0"+(dat.getSeconds()) : dat.getSeconds();
			                 
			    var newDate = year +"-"+ mon +"-"+ data +" "+ hour +":"+ min +":"+ seon;
			    return newDate;
			}
		},
		onLoad(){
			var that = this;
			
			//后门，先设置好用户，对接内容
			getApp().globalData.userId = "1646777091362164738";
			getApp().globalData.accessToken = "49a67be53d4f4de5bd6088b2b43088a9"
			
			//判断，用户未登录，则跳转到登录页面要求用户登录
			if(getApp().globalData.userId==""){
				console.log("用户未登录，跳转到登录页面");
				uni.navigateTo({
					url:"/pages/LoginAndRegistPage/LoginAndRegistPage"
				})
				return;
			}
			console.log("用户已登录，userId为" + getApp().globalData.userId=="")
			
			
			//发起请求，获取信息
			uni.request({//获取所有账本信息
				url: getApp().globalData.envprefix + '/admin-api/lbt/extends/accountbook/get',
				header:{
					"tenant-id":1,
					"Authorization": 'Bearer ' + getApp().globalData.accessToken
				},
				success(res) {
					console.log(res.data.data);
					if(res.data.data.length==0){//用户没有账本
						//为用户默认创建一个日常账本
						//获取用户账本信息
						//对数据进行处理
						
						return;
					}
					//确定有账本以后
					var arrTemp = [];
					for(var i = 0;i < res.data.data.length+1;i++){//对数据进行处理
						// optionType:'日常账本',
						// option:[
						// 	{lable:0,value:"添加账本"},
						// 	{lable:1,value:"日常账本"},
						// 	{lable:2,value:"家庭账本"},
						// 	{lable:3,value:"公司帐本"},
						// 	{lable:3,value:"..."},
						// 	{lable:3,value:"..."},
						// ],
						if(i==0){//首位
							arrTemp.push({
								label:i,
								value:'添加账本',
								id:-1
							});
							continue;
						}
						arrTemp.push({
							label:i,
							value:res.data.data[i-1].title,
							id:res.data.data[i-1].id
						});
						if(res.data.data[i-1].title=="日常账本"){//将选中账本写入全局信息
							getApp().globalData.accountBookId = res.data.data[i-1].id;
						}
					}
					if(res.data.data.length<5){//不足6个账本,则添加...作为填充
						var time = 5 - res.data.data.length;
						for(var i = 0;i<time;i++){
							arrTemp.push({
								label:res.data.data.length+i+1,
								value:"...",
								id:-1
							})
						}
					}
					that.optionType = "日常账本"
					that.option = arrTemp;//更新账本列表
					
					console.log("账本列表已更新")
					
					//发起查询请求,查询该账本有关信息进行显示
					var month_begin_time = 0;//获取当月开始时间
					var month_end_time = 0;//获取当月结束时间
					uni.request({
						url:getApp().globalData.envprefix + '/admin-api/lbt/extends/data/inout/monthly',
						header:{
							'tenant-id': 1,
							'Authorization':'Bearer' + getApp().globalData.accessToken
						},
						data:{
							'accountBookId': getApp().globalData.accountBookId,
							// 'beginTime':,//需要获取开始时间
							// 'endTime'://需要获取结束时间
							'beginTime':that.getMonthBeginAndEnd()[0],
							'endTime':that.getMonthBeginAndEnd()[1]
						},
						success(res) {//等待问题解决
							console.log(res.data.data);
						}
					})
				}
			})
			
		}
	}
	
</script>

<style>
	.container{
		background-color: #F6F6F6;
		width: 100vw;
		height: 100vh;
	}
	.in_ex_ba{
		position: relative;
		left: 1vw;
		/* top: 90px; */
		width: 90vw;
		height: 20vh;
		opacity: 1;
		border-radius: 5px;
		background: #FDF1DAFF;
		border: 2vw solid #FFFFFFFF;
		border-bottom: 20vw solid #FFFFFFFF;
		padding: 2vw;
		padding-top: 5vw;
	}
	.topbar{
		display: flex;
		justify-content: space-between;
		background-color: #FFFFFFFF;
		width: 98vw;
		position: relative;
		left: 1vw;
		padding-top: 20rpx;
	}
	.accountbook{
		width: 6.8vw;
		height: 6.8vw;
		padding-left: 2vw;
	}
	.account_type{
		font-size: 14px;
		margin-left: 2vw;
		margin-top: 1vw;
	}
	.account_typetext{
		font-weight: 600;
	}
	.xiala{
		position: absolute;
		bottom: -300rpx;
		left: 15rpx;
		height: 290rpx;
		width: 300rpx;
		/* background-color: aqua; */
		z-index: 100;
		/* background-color: aquamarine; */
	}
	.scrollArea{
		height: 100%;
		width: 100%;
	}
	.xiala-xuanxiang{
		height: 290rpx;
		width: 300rpx;
		/* background-color: rgba(36, 44, 61, 1); */
		box-sizing: border-box;
		overflow: hidden;
	}
	.xiala-hang{
		height: 100rpx;
		width: 100%;
		border-bottom: 1px solid #efefef;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: white;
	}
	.xiala-hang-item-normal{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}
	.xiala-hang-item-normal .itemvalue{
		margin-left: 20rpx;
	}
	.xiala-hang-item-add{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		/* justify-content: center; */
		color: rgba(252, 198, 55, 1);
	}
	.xiala-hang-item-add .itemvalue{
		margin-left: 15rpx;
	}
	
	.xiala-hang-item-add .chosenIcon{
		margin-left: 20rpx;
	}
	.chosenIcon{
		height: 40rpx;
		width: 40rpx;
	}
	.chosenIcon image{
		height: 100%;
		width: 100%;
	}
	.xiala-hang:last-child{
		border: 0px;
	}
	/* 显示或关闭动画*/
	.open {
	    animation: slideContentUp 0.2s linear both;
	}
	 
	.close {
	    animation: slideContentDown 0.2s linear both;
	}
	 
	/* 动态设置高度 */
	@keyframes slideContentUp {
	    from {
	       height: 0;
	    }
	 
	    to {
	        height: -230rpx;
	    }
	}
	 
	@keyframes slideContentDown {
	   from {
			height: -230rpx;
	    }
	 
	    to {
	        height: 0;
	    }
	}
	.topbar_view{
		display: flex;
	}
	.search{
		width: 6.8vw;
		height: 6.8vw;
		margin-right: 6.8vw;
	}
	.more{
		width: 6.8vw;
		height: 6.8vw;
		padding-right: 2vw;
	}
	.in_ex_ba_1{
		display: flex;
		justify-content: space-around;
		position: relative;
		
	}
	.in_ex_ba_2{
		display: flex;
		flex-direction: column;
		
	}
	.text0{
		font-weight: 700;
	}
	.expenditure{
		color: #E88684FF;
		text-align: center;
		font-weight: 700;
		font-size: 20px;
		
	}
	.income{
		text-align: center;
		margin-top: 3px;
	}
	.balance{
		text-align: center;
		margin-top: 3px;
	}
	.in_ex_ba_3{
		//background-color: #7c3bfdff;
		display: flex;
		justify-content: space-between;
		width: 84vw;
		position: relative;
		left: 3vw;
		margin-top: 4vw;
	}
	.percent{
		display: flex;
		font-size: 14px;
	}
	.text1{
		font-size: 14px;
	}
	.progress-box{
		width: 84vw;
		position: relative;
		left: 3vw;
		margin-top: 2vw;
	}
	.in_ex_ba_4{
		display: flex;
		text-align: end;
		width: 84vw;
		position: relative;
		left: 30vw;
		margin-top: 5vw;
		font-size: 13px;
	}
	.in_ex_ba_5{
		display: flex;	
	}
	.text2{
		margin-left: 4vw;
	}
	.yet_day{
		font-weight: 700;	
	}
	.balance_day{
		font-weight: 700;
	}
	.in_ex_ba_6{
		background-color: #072750FF;
		opacity: 1;
		border-radius: 5px;
		text-align: center;	
		width: 94vw;
		margin-left: -2vw;
		margin-top: 10vw;
	}
	.add_bill{
		color: white;
		padding-top: 4vw;
		padding-bottom: 4vw;
		font-weight: 500;
	}
	.bill{
		background-color: #FFFFFFFF;
		border-radius: 4px;
		width: 86vw;
		padding:5vw;
		position: relative;
		left: 2vw;
		top: 20rpx;
	}
	.bill_title{
		display: flex;
		justify-content: space-between;
		
	}
	.in_ex{
		display: flex;
		text-align: end;
	}
	.in_ex_1{
		display: flex;
	}
	.date{
		font-weight: 500;
		margin-top: -1vw;
	}
	.weeekday{
		font-size: 13px;
		margin-left: -15vw;
	}
	.text3{
		font-size: 13px;
		margin-left: 3vw;
		margin-right: 1vw;
	}
	.in{
		color: #43CF7CFF;
		font-size: 13px;
	}
	.ex{
		color: #FF5733FF;
		font-size: 13px;
	}
	.bill_info{
		display: flex;
		justify-content: space-between;
		margin-top: 6vw;
		margin-bottom: 6vw;
	}
	.bill_type_image{
		width: 6.8vw;
		height: 6.8vw;
	}
	.bill_type_text{
		margin-left: -20vw;
	}
	.bill_info_detail{
		color: #FF5733FF;
	}
</style>
