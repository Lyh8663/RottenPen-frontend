<template>
	<view class="container">
		<view style="height:var(--status-bar-height);width: 100%;"></view>
		<view class="topbar">
			<view  class="toptitle">账单详情</view>
			<image class="returnBack" src="../../static/return.png" @click="returnBack()"/>
		</view>
		<view class="bill_info">
			<image class="bill_type_image" src="../../static/income.png"></image>
			<view class="bill_type_text">收入-工资</view>
			<view class="bill_number">￥6000.00</view>
		</view>
		<view class="bill_info">
			<view class="text_left">记账日期</view>
			<view class="text_right_time">2023年03月15日21:36</view>
		</view>
		<view class="bill_info">
			<view class="text_left">备注</view>
			<view class="text_right">无</view>
		</view>
		<view class="bill_info">
			<view class="text_left">标签</view>
			<view class="text_right">无</view>
		</view>
		<view class="bill_info">
			<view class="text_left">附件</view>
			<view class="text_right">无</view>
		</view>
		<view class="bill_info">
			<view class="text_left">记账方式</view>
			<view class="text_right_method">手动录入</view>
		</view>
		<view class="bill_info">
			<view class="text_left">不计入收支</view>
			<view class="text_right">无</view>
		</view>
		<view class="bill_info">
			<view class="text_left">不计入预算</view>
			<view class="text_right">无</view>
		</view>
		<view class="two_button ">
			<view class="refund  commen">退款</view>
			<view class="delete  commen">删除</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			returnBack(){
				uni.navigateBack({
					delta:1,
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
