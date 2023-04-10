<template>
	<view class="container">
		<view style="height:var(--status-bar-height);width: 100%;"></view>
		<view class="topbar">
			<view  class="toptitle">主题外观</view>
			<image class="returnBack" src="../../static/return.png" @click="returnBack()"/>
		</view>
		<view class="content">
			<view class="item">
				<view class="text0">字体大小</view>
				<view class="font_size">
					<view :class="['',this.choosedIndex==0?'active_color':'not']" v-on:click="change(0)">大</view>
					<view :class="['',this.choosedIndex==1?'active_color':'not']" v-on:click="change(1)">中</view>
					<view :class="['',this.choosedIndex==2?'active_color':'not']" v-on:click="change(2)">小</view>
				</view>
			</view>
			<view class="item">
				<view class="text0">夜间模式</view>
				<switch color="#34C759"></switch>
			</view>
			<view class="item">
				<view class="text0">主题选择</view>
				<image class="gotoicon" src="../../static/gotoicon.png"></image>
			</view>
			<view class="item">
				<view class="choose">
					<view class="text0">账单金额颜色</view>
					<view class="default_choice">默认支出红色，收入绿色</view>
				</view>			
				<image class="gotoicon_else" src="../../static/gotoicon.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				choosedIndex:"1",
			}
		},
		methods: {
			returnBack(){
				uni.navigateBack({
					delta:1,
				})
			},
			change(index){
				//console.log(index) 可以正常传入
				if(index == 0){
					this.choosedIndex = 0
					//console.log(this.daytime)
				}else if(index == 1){
					this.choosedIndex = 1
				}else if(index == 2){
					this.choosedIndex = 2
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
	.content{
		background-color: white;
		padding: 3vw;
		border-radius: 10rpx;
		margin-top: 1vh;
		width: 88vw;
		margin-left: 3vw;
	}
	.item{
		display: flex;
		justify-content: space-between;
		padding: 2vw;
	}
	.text0{
		padding: 1vw;
	}
	.font_size{
		display: flex;
		justify-content: space-between;
	}
	.active_color{
		color: #000000;
		padding: 1vw;
	}
	.not{
		color: #A6A6A6;
		padding: 1vw;
	}
	.gotoicon{
		width: 6vw;
		height: 6vw;
		margin-top: 1vw;
	}
	.choose{
		display: flex;
		flex-direction: column;
	}
	.default_choice{
		color: #808080;
		font-size: 12px;
		margin-left: 1vw;
	}
	.gotoicon_else{
		margin-top: 3vw;
		width: 6vw;
		height: 6vw;
	}
	
</style>
