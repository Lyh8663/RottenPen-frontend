<template>
	<view class="container">
		<view style="height:var(--status-bar-height);width: 100%;background: white;"></view>
		<view class="topbar">
			<image class="returnBack" src="../../static/return.png" @click="returnBack()"/>
			<view  class="toptitle">愿望清单</view>
		</view>
		<view class="no_wish" v-if="wishList == ''">
			<image src="../../static/wish.png" style="width: 100%;"></image>
			愿望清单：</br>找到你想要变得富有的理由
			<view class="add_first_wish">添加第一个愿望</view>
		</view>
		<view class="wish" v-else v-for="(wish,index) in wishList" :key="index">
			<view class="line1" >
				<image :src="wish.img" class="wish_lable"></image>
				<view class="name_note">
					<view class="wish_name">{{wish.name}}</view>
					<view class="wish_note">{{wish.note}}</view>
				</view>
			</view>
			<view class="progress-box">
				<progress :percent="parseFloat((wish.yetMoney/wish.aimMoney)*100)"  stroke-width="4" activeColor="#FCC637" backgroundColor="#fceb93"/>
			</view>
			<view class="line3">
				<view class="progress_percent">{{wish.yetMoney}}/{{wish.aimMoney}}</view>
				<view class="progress_percent">{{parseFloat((wish.yetMoney/wish.aimMoney)*100).toFixed(2)}}%</view>
			</view>
			<view class="line4"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				wishList:[
					{img:"../../static/wish_lable.png",name:"第一个愿望",aimMoney:"300",yetMoney:"34",note:"这是备注",percent:45},
					{img:"../../static/wish_lable.png",name:"第一个愿望",aimMoney:"300",yetMoney:"134",note:"这是备注",percent:45},
					{img:"../../static/wish_lable.png",name:"第一个愿望",aimMoney:"300",yetMoney:"194",note:"这是备注",percent:45},
					{img:"../../static/wish_lable.png",name:"第一个愿望",aimMoney:"300",yetMoney:"244",note:"",percent:45},
					
				],
			}
		},
		methods: {
			returnBack(){
				uni.navigateBack({
					delta:1,
				})
			},
		}
	}
</script>

<style>
	.container{
		width: 100vw;
		height: 100vh;
		background-color: #F6F6F6;
	}
	.topbar{
		height: 10vw;
		background: white;
		display: flex;
		box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
		padding-top: 2vw;
	}
	.toptitle{
		font-size: 38rpx;
		font-weight: 700;
		margin-left: 3vw;
	}
	.returnBack{
		width: 6vw;
		height: 6vw;
		margin-left: 2vw;
		margin-top: 0.3vw;
		
	}
	.no_wish{
		margin-top: 2vh;
		text-align: center;
		line-height: 50rpx;
	}
	.add_first_wish{
		color: white;
		background: #FCC637;
		width: 90vw;
		height: 12vw;
		border-radius: 10rpx;
		text-align: center;
		line-height: 12vw;
		margin-left: 5vw;
		margin-top: 5vw;
	}
	.wish{
		width: 88vw;
		padding: 5vw 3vw;
		margin-left: 3vw;
		background: white;
		border-radius: 10rpx;
		margin-top: 4vw;
	}
	.line1{
		display: flex;
		position: relative;
	}
	.wish_note{
		font-size: 12px;
		color: #808080;
	}
	.progress-box{
		width: 80vw;
		margin-left: 4vw;
		margin-top: 4vw;
		
	}
	.wish_lable{
		width: 6.8vw;
		height: 6.8vw;
		margin-left: 3vw;
		margin-right: 2vw;
	}
	.line3{
		width: 80vw;
		margin-left: 4vw;
		margin-top: 1vw;
		display: flex;
		justify-content: space-between;
	}
	.progress_percent{
		color: #FCC637;
		font-size: 12px;
	}
</style>
