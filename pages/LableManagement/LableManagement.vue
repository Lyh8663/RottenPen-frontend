<template>
	<view class="container">
		<view style="height:var(--status-bar-height);width: 100%;background: white;"></view>
		<view class="topbar">
			<view class="top_side">
				<image class="returnBack" src="../../static/return.png" @click="returnBack()"/>
				<view  class="toptitle">标签管理</view>
			</view>
			<view class="top_side">
				<view  class="add_text">新增 </view>
				<image class="lable_img" src="../../static/lable.png"/>			
			</view>
		</view>
		<view class="lable_item" v-for="(lable,index) in lableList" :key="index">
			<view class="side">
				<image class="item_img" :src="lable.img"/>
				{{lable.info}}
			</view>
			<view class="side">
				<image class="item_img add" src="../../static/add_lable.png"/>	
				<image class="item_img list" src="../../static/list.png"/>	
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lableList:[
					{img:"../../static/dot0.png",info:"自定义标签1"},
					{img:"../../static/dot1.png",info:"自定义标签2"},
					{img:"../../static/dot2.png",info:"自定义标签3"},
					{img:"../../static/dot3.png",info:"自定义标签4"},
				]
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
		height: 12vw;
		background: white;
		display: flex;
		justify-content: space-between;
		box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
	}
	.side{
		display: flex;
		justify-content: space-between;
		padding: 2vw 0;
	}
	.top_side{
		display: flex;
		justify-content: space-between;
		padding: 2vw 0;
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
		margin-top:0.5vw;
	}
	.lable_img{
		width: 6vw;
		height: 6vw;
		margin-right: 5vw;
		margin-top: 1vw;
	}
	.add_text{
		margin-right: 5vw;
		font-size: 32rpx;
		margin-top: 1vw;
	}
	.lable_item{
		display: flex;
		justify-content: space-between;
		background: white;
		border-radius: 10rpx;
		padding: 2vw 5vw;
		width: 84vw;
		margin-top: 4vw;
		margin-left: 3vw;
		vertical-align: middle;
	}
	.item_img{
		width: 6vw;
		height: 6vw;
		margin-right: 2vw;
	}
	.add{
		margin-right: 5vw;
	}
	.list{
		margin-right: 0;
	}
</style>
