<template>
	<view class="container">
		<view style="height:var(--status-bar-height);width: 100%;"></view>
		<view style="height:var(--status-bar-height);width: 100%; position: fixed; background-color: white; z-index: 999;top:0"></view>
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
				<image class="search" src="../../static/search.png" @click="toCanlenderPage()"></image>
				<image class="more" src="../../static/more.png"></image>
			</view>		
		</view>
		
		<view>
			<!-- 输入框示例 -->
			<uni-popup ref="inputDialog1" type="dialog">
				<uni-popup-dialog ref="inputClose"  mode="input" title="添加账本" value="请输入要添加的账本名称"
					placeholder="请输入内容" @confirm="dialogInputConfirm"></uni-popup-dialog>
			</uni-popup>
		</view>
		<view>
			<!-- 输入框示例 -->
			<uni-popup ref="inputDialog2" type="dialog">
				<uni-popup-dialog ref="inputClose"  mode="input" title="设置预算" value="请输入要设置的预算"
					placeholder="请输入内容" @confirm="budgetConfirm"></uni-popup-dialog>
			</uni-popup>
		</view>
		<scroll-view class="commen_area" scroll-y="true">
			<view class="in_ex_ba">
				<view class="in_ex_ba_1">
					<view class="in_ex_ba_2">
						<view class="text0">本月收入</view>
						<view class="income">{{this.monthlyIncome}}</view>
					</view>
					<view class="in_ex_ba_2">
						<view class="text0">本月支出</view>
						<view class="expenditure">{{this.monthlyOutcome}}</view>
					</view>
					<view class="in_ex_ba_2">
						<view class="text0">本月结余</view>
						<view class="balance">{{this.monthlyRemain}}</view>
					</view>
				</view>
				<view class="in_ex_ba_3">
					<view class="text1">本月预算</view>
					<view class="percent">
						<view class="yet_month">{{this.monthlyOutcome}}</view>
						<view>/</view>
						<view class="total">{{this.monthlyBudget}}</view>
					</view>
				</view>
				<view class="progress-box">
					<progress :percent="this.progressRate"  stroke-width="4" activeColor="#E88684FF" backgroundColor="#F7B89DFF"/>
				</view>
				<view class="in_ex_ba_4">
					<view class="set-btn">
						<button @click="setMonthlyBudget()">设置本月预算</button>
					</view>
					<view class="in_ex_ba_5">
						<view class="text2">已用：</view>
						<view class="yet_day">{{this.monthlyOutcome}}</view>
					</view>
					<view class="in_ex_ba_5">
						<view class="text2">剩余日均：</view>
						<view class="balance_day">{{dailyRemain}}</view>
					</view>
				</view>
				<view class="in_ex_ba_6" @click="toAddBill()">
					<view class="add_bill">添加一条新账</view>
				</view>
			</view>
			
			<!-- 渲染帐单列表 -->
			<view class="bill">
				<!-- {{this.billTotalList.length}} -->
				<view class="day_bill" v-for="(bill,b) in this.billTotalList" :key="b">
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
					<view class="bill_info" v-for="(info,i) in bill.billInfoList" :key="i" @click="toBillDetail(info)" v-if="bill.billInfoList!=''">
						<view class="bill_info_left">
							<image class="bill_type_image" :src="info.image"/>
							<view class="bill_type_tagName">{{info.tagName}}</view>
						</view>
						<view :class="['bill_info_detail',info.enumType==0?'greenMoney':'redMoney']">￥ {{info.money}}</view>
					</view>
					<!-- 判断是否为空 -->
					<!-- <view class="">
						{{bill.billInfoList==''?'1':'2'}}
					</view> -->
					<view class="bill_none_info" @click="toAddBill()" v-if="bill.billInfoList==''">
						<!-- <image class="bill_type_image" src=""></image> -->
						<view class="bill_none_title">这天还没有记账信息,</view>
						<view class="bill_none_addbill">去添加吧！</view>
						<image class="bill_none_image" src="../../static/qianbi.png"></image>
					</view>
				</view>	
				<view class="bottom-text">
					更多信息请点击右上角查询按钮查看
				</view>
			</view>
		</scroll-view>
		
		<uni-fab  ref="fab" :pattern="pattern" :content="content" 
						 @trigger="trigger" horizontal="right" />
						 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//进度条百分比
				progressRate:0,
				//剩余日均
				dailyRemain:0,
				//本月预算
				monthlyBudget:0,
				//本月收入，支出，结余
				monthlyIncome:0,
				monthlyOutcome:0,
				monthlyRemain:0,
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
				//往前加载3天的数据
				loadDailyInfo:3,
				//账单二维数组,存放所有数据
				billTotalList:[],
				/*
				{
					date:"03月01日",
					weekday:"周一",
					in:"23.89",
					ex:"3.00",
					billInfoList:[
						{
							"image":"../../static/diet.png",
						    "accountBookId": "1646779958060707842",
						    "fundId": "1646782468737527809",
						    "fundName": "微信零钱",
						    "money": 81.400000,
						    "appendixImgUrl": "http://47.100.211.157/img/result_449.jpg",
						    "tagId": "1646785618353647618",
						    "tagName": "商场购物",
						    "notes": null,
						    "enumType": 1,
						    "enumWay": null,
						    "enumInout": 1,
						    "enumBudget": 1,
						    "enumRefund": null
						}
					]
				}
				*/
			}
		},
		watch: {
			//当本月预算改变时，对应改变剩余日均，将改变后的值写入全局变量,改变进度条
			monthlyBudget(newVal,oldVal){
				getApp().globalData.monthlyBudget = newVal;
				if(newVal - this.monthlyOutcome<=0){//预算低于支出
					this.dailyRemain = 0;//剩余日均为0
					this.progressRate = 100;//进度条满
					return;
				}
				if(this.getDayRemain()!=0){
					//调整剩余日均
					this.dailyRemain = (newVal - this.monthlyOutcome)/this.getDayRemain();
					this.dailyRemain = Math.floor(this.dailyRemain * 100) / 100;//结果保留两位小数
					//调整进度条
					this.progressRate = this.monthlyOutcome / newVal;
					this.progressRate = Math.floor(this.progressRate * 100) / 100 * 100;
				}else{
					this.dailyRemain = (newVal - this.monthlyOutcome);//今天即本月最后一天，日均即还剩下多少钱
					//调整进度条
					this.progressRate = this.monthlyOutcome / newVal;
					this.progressRate = Math.floor(this.progressRate * 100) / 100 * 100;
				}
				console.log("剩余日均、进度条已更新");
			},
			//当本月支出改变时，对应改变剩余日均
			monthlyOutcome(newVal,oldVal){
				//如果支出超过预算，
				if(newVal>=this.monthlyBudget){
					this.dailyRemain = 0;//则日均为0
					this.progressRate = 100;//进度条满
					return;
				}
				//如果支出没有超过预算
				if(this.getDayRemain()==0){
					this.dailyRemain = this.monthlyBudget - newVal;//最后一天
					//调整进度条
					this.progressRate = newVal / this.monthlyBudget;
					this.progressRate = Math.floor(this.progressRate * 100) / 100 * 100;
				}else{
					this.dailyRemain = (this.monthlyBudget - newVal)/this.getDayRemain()
					this.dailyRemain = Math.floor(this.dailyRemain * 100) / 100;//保留两位小数
					//调整进度条
					this.progressRate = newVal / this.monthlyBudget;
					this.progressRate = Math.floor(this.progressRate * 100) / 100 * 100;
				}
				console.log("剩余日均已更新");
			}
		},
		methods: {
			//获取以今天为标准，任何一天的日期,传入0表示今天，传入-1表示昨天，返回年月日数组
			getAnyDate(day){
				var today = new Date();
				var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
				today.setTime(targetday_milliseconds); //注意，这行是关键代码
				var tYear = today.getFullYear();
				var tMonth = today.getMonth();
				var tDate = today.getDate();
				var tDay = today.getDay();
				tMonth = this.doHandleMonth(tMonth + 1);
				tDate = this.doHandleMonth(tDate);
				return [tYear,tMonth,tDate,tDay];
			},
			doHandleMonth(month){
				var m = month;
 　　			if(month.toString().length == 1){
 　　　　			m = "0" + month;
 　　			}
 　　			return m;
			},
			//点击查询按钮
			toCanlenderPage(){
				uni.navigateTo({
					url:"/pages/CanlenderPage/CanlenderPage"
				})
			},
			//获取今天的日期
			getDay(){
				//1.获取今天的日期
				const today = new Date();
				
				//2.获取今天的号数
				var date = today.getDate();
				
				//3.返回
				return date;
			},
			//获取年份+月份
			getYearAndMonth(){
				//1.获取今天的日期
				const date = new Date();
				
				//2.获取今天的年月
				const year = Number(date.getFullYear());
				const month = Number(date.getMonth()) + 1;
				
				//3.返回年月
				return [year,month];
			},
			//获取本月还剩下多少天
			getDayRemain(){
				//1.获取今天的日期
				const date = new Date();
				
				//2.获取今天的年月
				const year = date.getFullYear();
				const month = date.getMonth();
				
				//3.获取本月开始时间和本月结束的日期
				let thisMonthStartDate = new Date(year,month,1);
				let thisMonthEndDate = new Date(year,month+1,0);
				
				//4.获取今天的日期和月底的日期
				var endday = thisMonthEndDate.getDate();
				var today = date.getDate();
				
				//5.返回剩余天数
				// console.log("剩余天数：" + (Number(endday) - Number(today)));
				return Number(endday) - Number(today);
			},
			//设置本月预算
			setMonthlyBudget(){
				this.$refs.inputDialog2.open()
			},
			//设置预算弹出框，选中确定按钮以后的函数
			budgetConfirm(val){
				//判断用户输入的内容是否为正数字
				if(!this.isNum(val)){//非数字
					uni.showToast({
						icon:'none',
						title:'请输入正确的数字'
					})
					return;
				}
				if(val<0){//负数
					uni.showToast({
						icon:'none',
						title:'请输入正确的数字'
					})
					return;
				}
				this.monthlyBudget = val;
			},
			//校验是否为数字的方法（正负整数，正负浮点数以及0）,是数字则返回true
			isNum(val){
				var regPos = /^[0-9]+.?[0-9]*/;
				if(regPos.test(val) ){
				    return true;
				}else{
			        return false;
			    }
			},
			//打开添加账本弹出框
			inputDialogToggle() {
				this.$refs.inputDialog1.open()
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
				// uni.navigateTo({
				// 	url:"../AddBillPage/AddBillPage",
				// })
				uni.redirectTo({
					url:"../AddBillPage/AddBillPage",
				})
			},
			//跳转到账单详情页面
			toBillDetail(billInfo){
				uni.navigateTo({
					url:"../BillDetail/BillDetail",
					success() {
						console.log("正在前往账单详情");
						getApp().globalData.billInfo = billInfo;
						console.log("已将账单信息存入" + billInfo);
					}
				})
			},
			//悬浮框点击展开
			trigger(e) {
				// console.log(e)
				// this.content[e.index].active = !e.item.active
				if(e.item.text=="拍照"){
					console.log("拍照被点击了");
					//跳转到拍照页面
					uni.navigateTo({
						url:"/pages/OCRPage/OCRPage"
					})
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
					// uni.showToast({
					// 	icon:'none',
					// 	title:"暂未开放，敬请期待"
					// })
					uni.navigateTo({
						url:'/pages/GPTTalkPage/GPTTalkPage'
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
					// console.log(this.isXiala)
				}else if(this.isXiala==1){
					this.isXiala=2
					// console.log(this.isXiala)
				}else if(this.isXiala==2){
					this.isXiala=1
					// console.log(this.isXiala)
				}
			},
			//选中账本
			xuanzeAccountBook(index,value,id){
				var that = this;
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
				this.optionType=value;//修改首页显示的账本
				
				//把账本id写入全局变量
				getApp().globalData.accountBookId = id;
				console.log("切换账本成功,当前为" + getApp().globalData.accountBookId);
				
				//发起查看账本内容的请求
				
				//查看收入,支出,结余
				uni.request({
					// url:getApp().globalData.envprefix + '/admin-api/lbt/extends/data/inout/monthly',
					url:getApp().globalData.envprefix + '/admin-api/lbt/extends/data/overview/monthly',
					method:'GET',
					header:{
						'tenant-id': 1,
						'Authorization':'Bearer ' + getApp().globalData.accessToken
					},
					data:{
						'accountBookId': getApp().globalData.accountBookId,
						// 'beginTime':that.getMonthBeginAndEnd()[0],
						// 'endTime':that.getMonthBeginAndEnd()[1]
						'month':that.getYearAndMonth()[1],
						'year':that.getYearAndMonth()[0]
					},
					success(res) {
						if(res.data.code==200){
							console.log("收入，支出，结余已获取");
							that.monthlyIncome = Number(res.data.data.income);
							that.monthlyOutcome =  - Number(res.data.data.outcome);//支出后台给的数据是18
							that.monthlyRemain = Number(res.data.data.left);
						}
						else{
							console.log("收入，支出，结余获取错误:" + res.data.code);
						}
					}
				})
				
				//查看记账
				uni.request({//第一天
					url:getApp().globalData.envprefix + "/admin-api/lbt/extends/data/bill/calendar",
					method:'GET',
					header:{
						"tenant-id":1,
						"Authorization":"Bearer " + getApp().globalData.accessToken
					},
					data:{
						'accountBookId': getApp().globalData.accountBookId,
						'day':that.getAnyDate(0)[2] + "," + that.getAnyDate(0)[2],
						'month':that.getAnyDate(0)[1],
						'year':that.getYearAndMonth(0)[0]
					},
					success(res){
						that.billTotalList = [];
						console.log("已清空列表");
						//日期需拼凑
						var b_date = that.getAnyDate(0)[1] + "月" + that.getAnyDate(0)[2] + "日";
						var b_weekday = that.getAnyDate(0)[3];//1~6的形式
						switch(b_weekday){
							case 1:
								b_weekday = "周一";
								break;
							case 2:
								b_weekday = "周二";
								break;
							case 3:
								b_weekday = "周三";
								break;
							case 4:
								b_weekday = "周四";
								break;
							case 5:
								b_weekday = "周五";
								break;
							case 6:
								b_weekday = "周六";
								break;
							case 0:
								b_weekday = "周日";
								break;	
						}
						var b_in = res.data.data.income;
						var b_ex = res.data.data.outcome;
						var b_billInfoList = res.data.data.billExtendsBaseVOList;
						//还需要对账单列表进行处理
						if(b_billInfoList!=''){//非空时,加入账单image
							var tempBillList = [];
							for(var i = 0;i<b_billInfoList.length;i++){//查找所有list中的元素
								var tempBillInfo = {
									"image":"../../static/money.png",//目前先将所有内容都设置为此图片
									"billId":b_billInfoList[i].billId,
									"year":b_billInfoList[i].year,
									"month":b_billInfoList[i].month,
									"day":b_billInfoList[i].day,
									"accountBookId": b_billInfoList[i].accountBookId,
									"fundId": b_billInfoList[i].fundId,
									"fundName": b_billInfoList[i].fundName,
									"money": b_billInfoList[i].money,
									"appendixImgUrl": b_billInfoList[i].appendixImgUrl,
									"tagId": b_billInfoList[i].tagId,
									"tagName": b_billInfoList[i].tagName,
									"notes": b_billInfoList[i].notes,
									"enumType": b_billInfoList[i].enumType,
									"enumWay": b_billInfoList[i].enumWay,
									"enumInout": b_billInfoList[i].enumInout,
									"enumBudget": b_billInfoList[i].enumBudget,
									"enumRefund": b_billInfoList[i].enumRefund
								}
								tempBillList.push(tempBillInfo);
							}
							b_billInfoList = tempBillList;//此时的b_billInfoList即,加入了图片字段的元素列表
						}
						var b_thisday = {
							date:b_date,
							weekday:b_weekday,
							in:b_in,
							ex:b_ex,
							billInfoList:b_billInfoList
						}
						console.log(b_date + "数据已获取");
						that.billTotalList.push(b_thisday);
						
						uni.request({//前一天，即昨天
							url:getApp().globalData.envprefix + "/admin-api/lbt/extends/data/bill/calendar",
							method:'GET',
							header:{
								'tenant-id': 1,
								'Authorization':'Bearer ' + getApp().globalData.accessToken
							},
							data:{
								accountBookId: getApp().globalData.accountBookId,
								'day':that.getAnyDate(-1)[2] + "," + that.getAnyDate(-1)[2],
								'month':that.getAnyDate(-1)[1],
								'year':that.getYearAndMonth(-1)[0]
							},
							success(res) {
								//日期需拼凑
								var b_date = that.getAnyDate(-1)[1] + "月" + that.getAnyDate(-1)[2] + "日";
								var b_weekday = that.getAnyDate(-1)[3];//1~6的形式
								switch(b_weekday){
									case 1:
										b_weekday = "周一";
										break;
									case 2:
										b_weekday = "周二";
										break;
									case 3:
										b_weekday = "周三";
										break;
									case 4:
										b_weekday = "周四";
										break;
									case 5:
										b_weekday = "周五";
										break;
									case 6:
										b_weekday = "周六";
										break;
									case 0:
										b_weekday = "周日";
										break;	
								}
								var b_in = res.data.data.income;
								var b_ex = res.data.data.outcome;
								var b_billInfoList = res.data.data.billExtendsBaseVOList;
								//还需要对账单列表进行处理
								if(b_billInfoList!=''){//非空时,加入账单image
									var tempBillList = [];
									for(var i = 0;i<b_billInfoList.length;i++){//查找所有list中的元素
										var tempBillInfo = {
											"image":"../../static/diet.png",//目前先将所有内容都设置为此图片
											"billId":b_billInfoList[i].billId,
											"year":b_billInfoList[i].year,
											"month":b_billInfoList[i].month,
											"day":b_billInfoList[i].day,
											"accountBookId": b_billInfoList[i].accountBookId,
											"fundId": b_billInfoList[i].fundId,
											"fundName": b_billInfoList[i].fundName,
											"money": b_billInfoList[i].money,
											"appendixImgUrl": b_billInfoList[i].appendixImgUrl,
											"tagId": b_billInfoList[i].tagId,
											"tagName": b_billInfoList[i].tagName,
											"notes": b_billInfoList[i].notes,
											"enumType": b_billInfoList[i].enumType,
											"enumWay": b_billInfoList[i].enumWay,
											"enumInout": b_billInfoList[i].enumInout,
											"enumBudget": b_billInfoList[i].enumBudget,
											"enumRefund": b_billInfoList[i].enumRefund
										}
										tempBillList.push(tempBillInfo);
									}
									b_billInfoList = tempBillList;//此时的b_billInfoList即,加入了图片字段的元素列表
								}
								var b_thisday = {
									date:b_date,
									weekday:b_weekday,
									in:b_in,
									ex:b_ex,
									billInfoList:b_billInfoList
								}
								console.log(b_date + "数据已获取");
								that.billTotalList.push(b_thisday);
								
								uni.request({//两天前，即前天
									url:getApp().globalData.envprefix + "/admin-api/lbt/extends/data/bill/calendar",
									method:'GET',
									header:{
										'tenant-id': 1,
										'Authorization':'Bearer ' + getApp().globalData.accessToken
									},
									data:{
										accountBookId: getApp().globalData.accountBookId,
										'day':that.getAnyDate(-2)[2] + "," + that.getAnyDate(-2)[2],
										'month':that.getAnyDate(-2)[1],
										'year':that.getYearAndMonth(-2)[0]
									},
									success(res) {
										//日期需拼凑
										var b_date = that.getAnyDate(-2)[1] + "月" + that.getAnyDate(-2)[2] + "日";
										var b_weekday = that.getAnyDate(-2)[3];//1~6的形式
										switch(b_weekday){
											case 1:
												b_weekday = "周一";
												break;
											case 2:
												b_weekday = "周二";
												break;
											case 3:
												b_weekday = "周三";
												break;
											case 4:
												b_weekday = "周四";
												break;
											case 5:
												b_weekday = "周五";
												break;
											case 6:
												b_weekday = "周六";
												break;
											case 0:
												b_weekday = "周日";
												break;	
										}
										var b_in = res.data.data.income;
										var b_ex = res.data.data.outcome;
										var b_billInfoList = res.data.data.billExtendsBaseVOList;
										//还需要对账单列表进行处理
										if(b_billInfoList!=''){//非空时,加入账单image
											var tempBillList = [];
											for(var i = 0;i<b_billInfoList.length;i++){//查找所有list中的元素
												var tempBillInfo = {
													"image":"../../static/diet.png",//目前先将所有内容都设置为此图片
													"billId":b_billInfoList[i].billId,
													"year":b_billInfoList[i].year,
													"month":b_billInfoList[i].month,
													"day":b_billInfoList[i].day,
													"accountBookId": b_billInfoList[i].accountBookId,
													"fundId": b_billInfoList[i].fundId,
													"fundName": b_billInfoList[i].fundName,
													"money": b_billInfoList[i].money,
													"appendixImgUrl": b_billInfoList[i].appendixImgUrl,
													"tagId": b_billInfoList[i].tagId,
													"tagName": b_billInfoList[i].tagName,
													"notes": b_billInfoList[i].notes,
													"enumType": b_billInfoList[i].enumType,
													"enumWay": b_billInfoList[i].enumWay,
													"enumInout": b_billInfoList[i].enumInout,
													"enumBudget": b_billInfoList[i].enumBudget,
													"enumRefund": b_billInfoList[i].enumRefund
												}
												tempBillList.push(tempBillInfo);
											}
											b_billInfoList = tempBillList;//此时的b_billInfoList即,加入了图片字段的元素列表
										}
										var b_thisday = {
											date:b_date,
											weekday:b_weekday,
											in:b_in,
											ex:b_ex,
											billInfoList:b_billInfoList
										}
										console.log(b_date + "数据已获取");
										that.billTotalList.push(b_thisday);
									}
								})
							}
						})
					}
				})
			},
			//日期获取方法
			getMonthBeginAndEnd(){
				//1.获取今天的日期
				const date = new Date();
				// console.log("当前时间" + date);
				
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
				// console.log("本月开始:" + thisMonthStartDate);
				// console.log("本月结束" + thisMonthEndDate);
				
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
			},
			load(){
				var that = this;
							
				//后门，先设置好用户，对接内容
				// getApp().globalData.userId = "1646777091362164738";
				// getApp().globalData.accessToken = "49a67be53d4f4de5bd6088b2b43088a9"
				
				//到首页,输出内容看看
				console.log("进入首页,全局内容为:")
				console.log(getApp().globalData.userId);
				console.log(getApp().globalData.accessToken);
				
				//获取该获取的页面信息
				this.monthlyBudget = getApp().globalData.monthlyBudget;
				
				//判断，用户未登录，则跳转到登录页面要求用户登录
				if(getApp().globalData.userId==""){
					console.log("用户未登录，跳转到登录页面");
					uni.redirectTo({
						url:"/pages/LoginAndRegistPage/LoginAndRegistPage"
					})
					return;
				}
				// console.log("用户已登录，userId为" + getApp().globalData.userId=="")
				
				//发起请求，获取信息
				uni.request({//获取所有账本信息
					url: getApp().globalData.envprefix + '/admin-api/lbt/extends/accountbook/get',
					header:{
						"tenant-id":1,
						"Authorization": 'Bearer ' + getApp().globalData.accessToken
					},
					success(res) {
						// console.log(res.data.data);
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
						//查询收入，支出，结余
						uni.request({
							// url:getApp().globalData.envprefix + '/admin-api/lbt/extends/data/inout/monthly',
							url:getApp().globalData.envprefix + '/admin-api/lbt/extends/data/overview/monthly',
							method:'GET',
							header:{
								'tenant-id': 1,
								'Authorization':'Bearer ' + getApp().globalData.accessToken
							},
							data:{
								'accountBookId': getApp().globalData.accountBookId,
								// 'beginTime':that.getMonthBeginAndEnd()[0],
								// 'endTime':that.getMonthBeginAndEnd()[1]
								'month':that.getYearAndMonth()[1],
								'year':that.getYearAndMonth()[0]
							},
							success(res) {
								if(res.data.code==200){
									console.log("收入，支出，结余已获取");
									that.monthlyIncome = Number(res.data.data.income);
									that.monthlyOutcome =  - Number(res.data.data.outcome);//支出后台给的数据是18
									that.monthlyRemain = Number(res.data.data.left);
								}
								else{
									console.log("收入，支出，结余获取错误:" + res.data.code);
								}
							}
						})
						
						//查询3天份的记账记录
						uni.request({//第一天，即今天
							url:getApp().globalData.envprefix + "/admin-api/lbt/extends/data/bill/calendar",
							method:'GET',
							header:{
								'tenant-id': 1,
								'Authorization':'Bearer ' + getApp().globalData.accessToken
							},
							data:{
								accountBookId: getApp().globalData.accountBookId,
								'day':that.getAnyDate(0)[2] + "," + that.getAnyDate(0)[2],
								'month':that.getAnyDate(0)[1],
								'year':that.getYearAndMonth(0)[0]
							},
							success(res) {
								//日期需拼凑
								var b_date = that.getAnyDate(0)[1] + "月" + that.getAnyDate(0)[2] + "日";
								var b_weekday = that.getAnyDate(0)[3];//1~6的形式
								switch(b_weekday){
									case 1:
										b_weekday = "周一";
										break;
									case 2:
										b_weekday = "周二";
										break;
									case 3:
										b_weekday = "周三";
										break;
									case 4:
										b_weekday = "周四";
										break;
									case 5:
										b_weekday = "周五";
										break;
									case 6:
										b_weekday = "周六";
										break;
									case 0:
										b_weekday = "周日";
										break;	
								}
								var b_in = res.data.data.income;
								var b_ex = res.data.data.outcome;
								var b_billInfoList = res.data.data.billExtendsBaseVOList;
								//还需要对账单列表进行处理
								if(b_billInfoList!=''){//非空时,加入账单image
									var tempBillList = [];
									for(var i = 0;i<b_billInfoList.length;i++){//查找所有list中的元素
										var tempBillInfo = {
											"image":"../../static/diet.png",//目前先将所有内容都设置为此图片
											"billId":b_billInfoList[i].billId,
											"year":b_billInfoList[i].year,
											"month":b_billInfoList[i].month,
											"day":b_billInfoList[i].day,
											"accountBookId": b_billInfoList[i].accountBookId,
											"fundId": b_billInfoList[i].fundId,
											"fundName": b_billInfoList[i].fundName,
											"money": b_billInfoList[i].money,
											"appendixImgUrl": b_billInfoList[i].appendixImgUrl,
											"tagId": b_billInfoList[i].tagId,
											"tagName": b_billInfoList[i].tagName,
											"notes": b_billInfoList[i].notes,
											"enumType": b_billInfoList[i].enumType,
											"enumWay": b_billInfoList[i].enumWay,
											"enumInout": b_billInfoList[i].enumInout,
											"enumBudget": b_billInfoList[i].enumBudget,
											"enumRefund": b_billInfoList[i].enumRefund
										}
										tempBillList.push(tempBillInfo);
									}
									b_billInfoList = tempBillList;//此时的b_billInfoList即,加入了图片字段的元素列表
								}
								var b_thisday = {
									date:b_date,
									weekday:b_weekday,
									in:b_in,
									ex:b_ex,
									billInfoList:b_billInfoList
								}
								console.log(b_date + "数据已获取");
								that.billTotalList.push(b_thisday);
								
								uni.request({//前一天，即昨天
									url:getApp().globalData.envprefix + "/admin-api/lbt/extends/data/bill/calendar",
									method:'GET',
									header:{
										'tenant-id': 1,
										'Authorization':'Bearer ' + getApp().globalData.accessToken
									},
									data:{
										accountBookId: getApp().globalData.accountBookId,
										'day':that.getAnyDate(-1)[2] + "," + that.getAnyDate(-1)[2],
										'month':that.getAnyDate(-1)[1],
										'year':that.getYearAndMonth(-1)[0]
									},
									success(res) {
										//日期需拼凑
										var b_date = that.getAnyDate(-1)[1] + "月" + that.getAnyDate(-1)[2] + "日";
										var b_weekday = that.getAnyDate(-1)[3];//1~6的形式
										switch(b_weekday){
											case 1:
												b_weekday = "周一";
												break;
											case 2:
												b_weekday = "周二";
												break;
											case 3:
												b_weekday = "周三";
												break;
											case 4:
												b_weekday = "周四";
												break;
											case 5:
												b_weekday = "周五";
												break;
											case 6:
												b_weekday = "周六";
												break;
											case 0:
												b_weekday = "周日";
												break;	
										}
										var b_in = res.data.data.income;
										var b_ex = res.data.data.outcome;
										var b_billInfoList = res.data.data.billExtendsBaseVOList;
										//还需要对账单列表进行处理
										if(b_billInfoList!=''){//非空时,加入账单image
											var tempBillList = [];
											for(var i = 0;i<b_billInfoList.length;i++){//查找所有list中的元素
												var tempBillInfo = {
													"image":"../../static/diet.png",//目前先将所有内容都设置为此图片
													"billId":b_billInfoList[i].billId,
													"year":b_billInfoList[i].year,
													"month":b_billInfoList[i].month,
													"day":b_billInfoList[i].day,
													"accountBookId": b_billInfoList[i].accountBookId,
													"fundId": b_billInfoList[i].fundId,
													"fundName": b_billInfoList[i].fundName,
													"money": b_billInfoList[i].money,
													"appendixImgUrl": b_billInfoList[i].appendixImgUrl,
													"tagId": b_billInfoList[i].tagId,
													"tagName": b_billInfoList[i].tagName,
													"notes": b_billInfoList[i].notes,
													"enumType": b_billInfoList[i].enumType,
													"enumWay": b_billInfoList[i].enumWay,
													"enumInout": b_billInfoList[i].enumInout,
													"enumBudget": b_billInfoList[i].enumBudget,
													"enumRefund": b_billInfoList[i].enumRefund
												}
												tempBillList.push(tempBillInfo);
											}
											b_billInfoList = tempBillList;//此时的b_billInfoList即,加入了图片字段的元素列表
										}
										var b_thisday = {
											date:b_date,
											weekday:b_weekday,
											in:b_in,
											ex:b_ex,
											billInfoList:b_billInfoList
										}
										console.log(b_date + "数据已获取");
										that.billTotalList.push(b_thisday);
										
										uni.request({//两天前，即前天
											url:getApp().globalData.envprefix + "/admin-api/lbt/extends/data/bill/calendar",
											method:'GET',
											header:{
												'tenant-id': 1,
												'Authorization':'Bearer ' + getApp().globalData.accessToken
											},
											data:{
												accountBookId: getApp().globalData.accountBookId,
												'day':that.getAnyDate(-2)[2] + "," + that.getAnyDate(-2)[2],
												'month':that.getAnyDate(-2)[1],
												'year':that.getYearAndMonth(-2)[0]
											},
											success(res) {
												//日期需拼凑
												var b_date = that.getAnyDate(-2)[1] + "月" + that.getAnyDate(-2)[2] + "日";
												var b_weekday = that.getAnyDate(-2)[3];//1~6的形式
												switch(b_weekday){
													case 1:
														b_weekday = "周一";
														break;
													case 2:
														b_weekday = "周二";
														break;
													case 3:
														b_weekday = "周三";
														break;
													case 4:
														b_weekday = "周四";
														break;
													case 5:
														b_weekday = "周五";
														break;
													case 6:
														b_weekday = "周六";
														break;
													case 0:
														b_weekday = "周日";
														break;	
												}
												var b_in = res.data.data.income;
												var b_ex = res.data.data.outcome;
												var b_billInfoList = res.data.data.billExtendsBaseVOList;
												//还需要对账单列表进行处理
												if(b_billInfoList!=''){//非空时,加入账单image
													var tempBillList = [];
													for(var i = 0;i<b_billInfoList.length;i++){//查找所有list中的元素
														var tempBillInfo = {
															"image":"../../static/diet.png",//目前先将所有内容都设置为此图片
															"billId":b_billInfoList[i].billId,
															"year":b_billInfoList[i].year,
															"month":b_billInfoList[i].month,
															"day":b_billInfoList[i].day,
															"accountBookId": b_billInfoList[i].accountBookId,
															"fundId": b_billInfoList[i].fundId,
															"fundName": b_billInfoList[i].fundName,
															"money": b_billInfoList[i].money,
															"appendixImgUrl": b_billInfoList[i].appendixImgUrl,
															"tagId": b_billInfoList[i].tagId,
															"tagName": b_billInfoList[i].tagName,
															"notes": b_billInfoList[i].notes,
															"enumType": b_billInfoList[i].enumType,
															"enumWay": b_billInfoList[i].enumWay,
															"enumInout": b_billInfoList[i].enumInout,
															"enumBudget": b_billInfoList[i].enumBudget,
															"enumRefund": b_billInfoList[i].enumRefund
														}
														tempBillList.push(tempBillInfo);
													}
													b_billInfoList = tempBillList;//此时的b_billInfoList即,加入了图片字段的元素列表
												}
												var b_thisday = {
													date:b_date,
													weekday:b_weekday,
													in:b_in,
													ex:b_ex,
													billInfoList:b_billInfoList
												}
												console.log(b_date + "数据已获取");
												that.billTotalList.push(b_thisday);
											}
										})
									}
								})
							}
						})
					}
				})
				
			},
			//刷新当前页面的方法
			reload(){
				this.load();
			},
		},
		onLoad(){
			this.load();
		},
	}
	
</script>

<style>
	.container{
		background-color: #F6F6F6;
		width: 100vw;
		height: 100vh;
	}
	.commen_area{
		width: 100vw;
		height: 90vh;
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
	
	.set-btn{
		background-color: #fff;
		height: 70rpx;
		width: 200rpx;
		margin-left: -200rpx;
		margin-right: 20rpx;
	}
	
	.set-btn button{
		width: 100%;
		height: 100%;
		/* margin-left: -100rpx; */
		font-size: 24rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #072750FF;
		color: white;
		/* margin-right: 40rpx; */
	}
	
	.in_ex_ba_5{
		display: flex;	
		align-items: center;
		justify-content: center;
		font-size: 24rpx;
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
		margin-top: 6vw;
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
		padding:0 5vw 5vw 5vw;
		position: relative;
		left: 2vw;
		top: 20rpx;
	}
	.bill_title{
		display: flex;
		justify-content: space-between;
		background-color: #F6F6F6;
		width: 86vw;
		padding: 4vw 5vw 1vw 5vw;
		margin-left: -5vw;
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
		font-size: 14px;
	}
	.weeekday{
		font-size: 13px;
		margin-left: -10vw;
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
		position: relative;
		display: flex;
		justify-content: space-between;
		margin-top: 6vw;
		margin-bottom: 6vw;
	}
	.bill_type_image{
		width: 6.8vw;
		height: 6.8vw;
	}
	.bill_type_tagName{
		position: absolute;
		left: 10vw;
		top: 1vw;
	}
	.bill_type_left{
		
	}
	.bill_info_detail{
		color: #FF5733FF;
	}
	
	.bill_none_info{
		width: 100%;
		height: 6.8vw;
		/* background-color: aqua; */
		margin-top: 6vw;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 6vw;
	}
	.bill_none_image{
		width: 5.5vw;
		height: 5.5vw;
	}
	.bottom-text{
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
		height: 8vw;
		/* background-color: aquamarine; */
		border-top: #072750FF solid 1px;
		color: #072750FF;
	}
	.redMoney{
		color: #FF5733FF;
	}
	.greenMoney{
		color: #43CF7CFF;
	}
</style>
