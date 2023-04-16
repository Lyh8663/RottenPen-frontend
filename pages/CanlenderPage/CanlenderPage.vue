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
				<view class="right_boreder">收 {{dayInfo.income}}</view>
				<view>支 {{dayInfo.expecse}}</view>
			</view>
		</view>
		<view class="bill_info" v-for="(info,i) in billInfoList" :key="i" @click="toBillDetail()">
			<image class="bill_type_image" :src="info.image"></image>
			<view class="bill_type_text">{{info.type}}</view>
			<view class="bill_info_detail">{{info.money}}</view>
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
					lunar:"5",
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
			open() {
				this.$refs.calendar.open()
				},	
			//用户改变日期时相应的收入支出也要改变，此处没有对收入支出赋值
			change(e) {
				console.log('change 返回:', e);
				this.dayInfo.month = e.month;
				this.dayInfo.date = e.date;
				this.dayInfo.lunar = e.lunar.IDayCn;			
				},
			monthSwitch(e) {
				console.log('monthSwitchs 返回:', e)
				},
			returnBack(){
				uni.navigateBack({
					delta:1
				})
			},
			toBillDetail(){
				uni.navigateTo({
					url:"../BillDetail/BillDetail"
				})
			}
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
</style>
