<template>
	<view class="container">
		<view style="height:var(--status-bar-height);width: 100%;background: white;"></view>
		<view class="topbar">
			<image class="returnBack" src="../../static/return.png" @click="returnBack()"/>
			<view  class="toptitle">周期记账</view>
			<view class="add">新增</view>
		</view>
		<image src="../../static/blank.webp" style="width: 100%;" mode="widthFix"></image>
		<view class="no_note">空空如也</view>
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
		justify-content: space-between;
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
	.add{
		margin-right: 3vw;
	}
	.no_note{
		text-align: center;
		color: #808080;
	}
</style>
