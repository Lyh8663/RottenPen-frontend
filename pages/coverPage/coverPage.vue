<template>
	<view class="container">
		<view class="title-area">
			<image src="../../static/fengmiantitle.png" mode=""></image>
		</view>
		<view class="subtitle-area">
			<image src="../../static/fengmiansubtitle.png" mode=""></image>
		</view>
		<view class="btn-area">
			<button class="btn"  @click="toLoginAndRegistPage()">
				<view class="btn-title">
					开启
				</view>
				<image src="../../static/jiantou.png" mode=""></image>
			</button>
		</view>
		<view class="bg-area">
			<image src="../../static/fengmian.png" mode=""></image>
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
			toLoginAndRegistPage(){
				uni.navigateTo({
					url:"/pages/LoginAndRegistPage/LoginAndRegistPage"
				})
			}
		},
		onLoad() {
			if(getApp().globalData.userId!=""||getApp().globalData.accessToken!=""){
				uni.switchTab({
					url:"/pages/HomePage/HomePage"
				})
			}
		}
	}
</script>

<style>
	.container{
		background-color: white;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.title-area{
		width: 80%;
		height: 10vh;
		/* background-color: aquamarine; */
		display: flex;
		/* justify-content: center; */
		align-items: center;
	}
	.title-area image{
		height: 7vh;
		width: 20.8vh;
		margin-left: -10rpx;
	}
	.subtitle-area{
		width: 80%;
		height: 8vh;
		/* background-color: aqua; */
	}
	.subtitle-area image{
		height: 3.5vh;
		width: 33.375vh;
		margin-left: -10rpx;
	}
	.btn-area{
		width: 80%;
		height: 15vh;
		/* background-color: bisque; */
	}
	.btn{
		width: 45vw;
		height: 14vw;
		background-color: #072750FF;
		border-radius: 0;
		position: absolute;
		left: 0;
		margin-left: 10vw;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.btn-title{
		color: white;
		font-weight: 600;
		font-size: 35rpx;
	}
	.btn image{
		height: 6vw;
		width: 6vw;
	}
	.bg-area{
		width: 100%;
		/* height: 30vh; */
		/* background-color: brown; */
	}
	.bg-area image{
		width: 100%;
		height: 80.76vw;
	}
</style>
