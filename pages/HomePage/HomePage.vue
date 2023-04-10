<template>
	<view class="container">
		<view style="height:var(--status-bar-height);width: 100%;"></view>
		<view class="topbar">
			<view class="topbar_view">
				<image class="accountbook" src="../../static/accountbook.png"></image>
				<view class="account_type">生活账本</view>
			</view>
			<view class="topbar_view">
				<image class="search" src="../../static/search.png"></image>
				<image class="more" src="../../static/more.png"></image>
			</view>		
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
					active: false
				    },
					{
					iconPath: "../../static/sound3.png",
					selectedIconPath:"../../static/sound3.png",
					text: '语音',
					active: false
					},
					{
					iconPath: "../../static/write.png",
					selectedIconPath:"../../static/write.png",
					text: '写入',
					active: false
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
				]
			}
		},
		methods: {
			toAddBill(){
				uni.navigateTo({
					url:"../AddBillPage/AddBillPage",
				})
			},
			toBillDetail(){
				uni.navigateTo({
					url:"../BillDetail/BillDetail",
				})
			},
			trigger(e) {
				console.log(e)
				this.content[e.index].active = !e.item.active
				if(e.item.text=="动态"){
								
				}else if(e.item.text=="提问"){
									
				}else{
								
				}
				
			},
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
		//top: 90px;
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
