<template>
	<view class="container">
		<view style="height:var(--status-bar-height);width: 100%;"></view>
		<view class="topbar">
			<view  class="toptitle">设置</view>
			<image class="returnBack" src="../../static/return.png" @click="returnBack()"/>
		</view>
		<view class="content">
			<view class="title">安全</view>
			<view class="item">
				<view class="choose">
					<view class="text0">面容/指纹识别解锁</view>
					<view class="default_choice">启动应用时应经过面容/指纹安全验证</view>
				</view>	
				<switch color="#34C759" class="switch_button" style="transform:scale(0.8)"></switch>
			</view>
			<view class="item">
				<view class="choose">
					<view class="text0">手势/密码解锁</view>
					<view class="default_choice">启动应用时应经过手势/密码安全验证</view>
				</view>	
				<switch checked color="#34C759" class="switch_button" style="transform:scale(0.8)"></switch>
			</view>
		</view>
		<view class="content">
			<view class="title">账单设置</view>
			<view class="item">
				<view class="choose">
					<view class="text0">时间显示</view>
					<view class="default_choice">在账单流水中显示账单的具体时间</view>
				</view>	
				<switch color="#34C759" class="switch_button" style="transform:scale(0.8)"></switch>
			</view>
			<view class="item">
				<view class="choose">
					<view class="text0">账单备注优先显示</view>
					<view class="default_choice">将备注作为主要显示字段</view>
				</view>	
				<switch  color="#34C759" class="switch_button" style="transform:scale(0.8)"></switch>
			</view>
		</view>
		<view class="content">
			<view class="title">偏好设置</view>
			<view class="item">
				<view class="choose">
					<view class="text0">快速操作</view>
					<view class="default_choice">启动应用后直接进入操作页面</view>
				</view>			
				<image class="gotoicon_else" src="../../static/gotoicon.png"></image>
			</view>
			<view class="item">
				<view class="choose">
					<view class="text0">定位显示</view>
					<view class="default_choice">在记账时会自动记录记账所在地点</view>
				</view>	
				<switch color="#34C759" class="switch_button" style="transform:scale(0.8)"></switch>
			</view>
			<view class="item">
				<view class="choose">
					<view class="text0">账单起始日</view>
					<view class="default_choice">月账单的起始日期</view>
				</view>	
				<view class="date_choose">
					<view class="date">1号</view>
					<image class="gotoicon_else" src="../../static/gotoicon.png"></image>
				</view>
				
			</view>
			<view class="item">
				<view class="choose">
					<view class="text0">历史备注提示</view>
					<view class="default_choice">记账输入备注时，实时匹配历史备注</view>
				</view>	
				<switch checked  color="#34C759" class="switch_button" style="transform:scale(0.8)"></switch>
			</view>
			<view class="item">
				<view class="choose">
					<view class="text0">预算显示</view>
					<view class="default_choice">在应用首页显示预算模块</view>
				</view>	
				<switch checked  color="#34C759" class="switch_button" style="transform:scale(0.8)"></switch>
			</view>
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
		box-shadow: 0 2px 2px rgba(0, 0, 0, .1);
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
	.choose{
		display: flex;
		flex-direction: column;
	}
	.default_choice{
		color: #808080;
		font-size: 12px;
		margin-left: 1vw;
	}
	.text0{
		padding: 1vw;
	}
	.switch_button{
		margin-top: 1vw;
	}
	.title{
		color: #808080;
		font-size: 14px;
		margin-left: 3vw;
		padding: 1vw 0;
	}
	.gotoicon_else{
		margin-top: 4vw;
		width: 6vw;
		height: 6vw;
	}
	
	.date{
		color: #808080;
		font-size: 12px;
		margin-top: 5vw;
	}
	.date_choose{
		display: flex;
	}
</style>
