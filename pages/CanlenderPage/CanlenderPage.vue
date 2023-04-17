<template>
	<view class="container">
		<view style="height:var(--status-bar-height);width: 100%;"></view>
		<uni-calendar
			:showMonth="false"
			:selected="info.selected"
		    :insert="true"
		    :lunar="true" 
		    @change="change"
		/>
		<image class="returnBack" src="../../static/return.png" @click="returnBack()"></image>
		<view class="day_info">
			<view class="info">
				<view>{{dayInfo.month}}月{{dayInfo.date}}日</view>
				<view class="left_border">{{dayInfo.lunar}}</view>
			</view>
			<view class="info right">
				<view class="right_boreder">收 {{thedayincome}}</view>
				<view>支 {{thedayoutcome}}</view>
			</view>
		</view>
		<view class="bill_info" v-for="(info,i) in thedaybill" :key="i" @click="toBillDetail(info)">
			<image class="bill_type_image" src="../../static/diet.png"></image>
			<view class="bill_type_text">{{info.tagName}}</view>
			<view :class="['bill_info_detail',info.enumType==1?'redMoney':'greenMoney']">¥{{info.money}}</view>
		</view>
	</view>
</template>

<script>
	/**
		 * 获取任意时间
		 */
		function getDate(date, AddDayCount = 0) {
			if (!date) {
				date = new Date()
			}
			if (typeof date !== 'object') {
				date = date.replace(/-/g, '/')
			}
			const dd = new Date(date)
	
			dd.setDate(dd.getDate() + AddDayCount) // 获取AddDayCount天后的日期
	
			const y = dd.getFullYear()
			const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1 // 获取当前月份的日期，不足10补0
			const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 获取当前几号，不足10补0
			return {
				fullDate: y + '-' + m + '-' + d,
				year: y,
				month: m,
				date: d,
				day: dd.getDay(),
			}
		}
	export default {
		data() {
			return {
				//选中日期的账单
				thedaybill:[],
				//选中日期的收入
				thedayincome:'',
				//选中日期的支出
				thedayoutcome:'',
				//控制日历的展示
				showCalender:"false",
				info: {
					lunar: true,
					range: true,
					insert: false,
					selected: []
				},
				dayInfo:{
					//加载该页面时获取当天月、日、农历以及支出收入
					month:"2",
					date:"3",
					lunar:"",
					income:"23.45",
					expecse:"34.23"
				},
				billInfoList:[
					{image:"../../static/diet.png",type:"食品餐饮-请客吃饭",money:"-10.00"},
					{image:"../../static/diet.png",type:"食品餐饮-请客吃饭",money:"-10.00"},
					{image:"../../static/diet.png",type:"食品餐饮-请客吃饭",money:"-10.00"},
					{image:"../../static/diet.png",type:"食品餐饮-请客吃饭",money:"-10.00"},
				]
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
			open() {
				this.$refs.calendar.open()
				},	
			//用户改变日期时相应的收入支出也要改变，此处没有对收入支出赋值
			change(e) {
				var that = this;
				
				console.log('change 返回:', e);
				this.dayInfo.month = e.month;
				this.dayInfo.date = e.date;
				this.dayInfo.lunar = e.lunar.IDayCn;
				console.log(this.dayInfo.month);
				console.log(this.dayInfo.date);
				console.log(this.dayInfo.lunar);
				
				//获取年份
				var year = e.year;
				console.log(year)
				
				//发起请求
				uni.request({
					url: getApp().globalData.envprefix + "/admin-api/lbt/extends/data/bill/calendar",
					header:{
						'tenant-id':1,
						'Authorization':"Bearer " + getApp().globalData.accessToken
					},
					data:{
						'accountBookId':getApp().globalData.accountBookId,
						'day':this.dayInfo.date + "," + this.dayInfo.date,
						'month':this.dayInfo.month,
						'year':year
					},
					success(res) {
						if(res.data.code!=200){
							console.log("加载当日账单数据失败")
							return;
						}
						that.thedaybill = res.data.data.billExtendsBaseVOList;
						that.thedayincome = res.data.data.income;
						that.thedayoutcome = res.data.data.outcome;
						console.log("加载当日账单数据成功")
					}
				})
				
			},
			monthSwitch(e) {
				console.log('monthSwitchs 返回:', e)
				},
			returnBack(){
				uni.navigateBack({
					delta:1
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
		},
		onLoad() {
			var that = this;
			
			//设置今天的月日
			this.dayInfo.month = this.getAnyDate(0)[1];
			this.dayInfo.date = this.getAnyDate(0)[2];
			
			//在页面加载时 加载今天的账单thedaybill:[]，今天的收入thedayincome:'',今天的支出thedayoutcome:''
			uni.request({
				url:getApp().globalData.envprefix + "/admin-api/lbt/extends/data/bill/calendar",
				header:{
					'tenant-id':1,
					'Authorization':"Bearer " + getApp().globalData.accessToken
				},
				data:{
					'accountBookId':getApp().globalData.accountBookId,
					'day':this.getAnyDate(0)[2] + "," + this.getAnyDate(0)[2],
					'month':this.getAnyDate(0)[1],
					'year':this.getAnyDate(0)[0]
				},
				success(res) {
					if(res.data.code!=200){
						console.log("加载今日账单数据失败")
						return;
					}
					that.thedaybill = res.data.data.billExtendsBaseVOList;
					that.thedayincome = res.data.data.income;
					that.thedayoutcome = res.data.data.outcome;
					console.log("加载今日账单数据成功")
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
	.returnBack{
		width: 6.8vw;
		height: 6.8vw;
		position: relative;
		left: 2vw;
		top: -47.5vh;
	}
	.day_info{
		display: flex;
		justify-content: space-between;
		color: white;
		background-color: #F7B89D;
		font-size: 13px;
		padding: 4vw 5vw 2vw 5vw;
		margin-top: -10vw;
	}
	.info{
		display: flex;		
		width: 45vw;
	}
	.left_border{
		margin-left: 2vw;
	}
	.right{
		text-align: end;
		justify-content: space-between;
	}
	.right_boreder{
		position: relative;
		left: 15vw;
	}
	.bill_info{
		display: flex;
		justify-content: space-between;
		//margin-top: 6vw;
		//margin-bottom: 6vw;
		padding: 4vw 5vw;
		background-color: #ffffff;
		border-bottom: 2rpx solid #F6F6F6;
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
	.redMoney{
		color: #FF5733FF;
	}
	.greenMoney{
		color: #43CF7CFF;
	}
</style>
