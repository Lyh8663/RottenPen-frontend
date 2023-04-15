<template>
	<view class="container">
		<view style="height:var(--status-bar-height);width: 100%;"></view>
		<view class="topbar">
			<view  class="toptitle">账单详情</view>
			<image class="returnBack" src="../../static/return.png" @click="returnBack()"/>
		</view>
		<view class="bill_info">
			<image class="bill_type_image" src="../../static/income.png"></image>
			<view class="bill_type_text">{{this.fundid}}</view>
			<view class="bill_number">{{"￥" + this.money}}</view>
		</view>
		<view class="bill_info">
			<view class="text_left">记账日期</view>
			<view class="text_right_time">{{this.date}}</view>
		</view>
		<view class="bill_info">
			<view class="text_left">备注</view>
			<view class="text_right">{{this.notes}}</view>
		</view>
		<view class="bill_info">
			<view class="text_left">标签</view>
			<view class="text_right">{{this.tagName}}</view>
		</view>
		<view class="bill_info">
			<view class="text_left">附件</view>
			<view class="text_right">
				<a :href="this.fujian">内容</a>
			</view>
		</view>
		<view class="bill_info">
			<view class="text_left">记账方式</view>
			<view class="text_right_method">{{this.billway}}</view>
		</view>
		<view class="bill_info">
			<view class="text_left">不计入收支</view>
			<view class="text_right">{{this.countInInOut}}</view>
		</view>
		<view class="bill_info">
			<view class="text_left">不计入预算</view>
			<view class="text_right">{{this.countInBudget}}</view>
		</view>
		<view class="bill_info">
			<view class="text_left">是否退款</view>
			<view class="text_right">{{this.refund}}</view>
		</view>
		<view class="two_button ">
			<view class="refund  commen" @click="refund()">退款</view>
			<view class="delete  commen" @click="deleteBill()">删除</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fundid:"微信零钱",
				tagName:"标签名",
				money:100.00,
				date:"01月01日",
				notes:"这里是备注",
				fujian:"无",
				billway:"手动录入",
				countInInOut:"否",
				countInBudget:"否",
				refund:"否"
			}
		},
		methods: {
			//删除按钮点击函数
			deleteBill(){
				//添加删除的逻辑
			},
			//退款按钮点击函数
			refund(){
				uni.showToast({
					icon:'none',
					title:"暂未开放,敬请期待"
				})
			},
			returnBack(){
				uni.navigateBack({
					delta:1,
				})
			},
			//查看账单信息是否已经写入
			getBillInfo(){
				if(getApp().globalData.billInfo==""){
					console.log("账单信息未写入")
					return false;
				}else{
					console.log("账单信息已写入")
					return true;
				}
			}
		},
		onLoad() {
			//查看账单信息是否已经写入
			if(!this.getBillInfo()){//未写入成功
				// console.log("未找到该账单信息")
				uni.showLoading({
					title: '信息缺失'
				})
				setTimeout(() => {
					uni.hideLoading();
					uni.switchTab({
						url:"/pages/HomePage/HomePage"
					})
				}, 2000)
			}
			
			//从全局变量中获取账单信息
			var billInfo = getApp().globalData.billInfo;
			
			//将为对应字段赋值
			this.tagName = billInfo.tagName;
			this.money = billInfo.money;
			this.date = "01月01日";//信息中没有日期信息
			this.notes = billInfo.notes==null?"无":billInfo.notes;
			this.fujian = billInfo.appendixImgUrl;
			this.billway = billInfo.enumway==null?"手动录入":billInfo.enumway;
			this.countInInOut = billInfo.enumInout==1?"是":"否";
			this.countInBudget = billInfo.enumBudget==1?"是":"否";
			this.refund = billInfo.enumRefund==null?"否":"是";
			this.date = billInfo.year + "年" + billInfo.month + "月" + billInfo.day + "日";
		}
	}
</script>

<style>
	.container{
		background-color: #F6F6F6;
		width: 100vw;
		height: 100vh;
	}
	.topbar{
		border-bottom: ;
		height: 12vw;
		background-color: white;
		
	}
	.toptitle{
		text-align: center;
		font-size: 36rpx;
		height: 8vw;
		position: relative;
		top: 3vw;	
	}
	.returnBack{
		width: 6vw;
		height: 6vw;
		position: relative;
		top: -5vw;
		left: 5vw;
	}
	.bill_info{
		background-color: white;
		display: flex;
		justify-content: space-between;
		padding: 5vw 5vw;
		border-top: #f0f0f0 solid 5rpx;
	}
	.bill_type_image{
		width: 6.2vw;
		height: 6.2vw;
	}
	.bill_type_text{
		margin-left: -35vw;
	}
	.bill_number{
		color: #43CF7C;
		font-size: 18px;
	}
	.text_left{
		color: #383838;
	}
	.text_right{
		color: #808080;
	}
	.two_button{
		display: flex;
		justify-content: space-around;
		margin-top: 5vh;
	}
	.refund{
		background-color: rgba(252, 198, 55, 1);
		
	}
	.delete{
		
		background-color: rgba(232, 134, 132, 1);
		
	}
	.commen{
		padding: 3vw 10vw;
		text-align: center;
		color: white;
		border-radius: 10rpx;
	}
	
</style>
