<template>
	<view class="container">
		<view style="height:var(--status-bar-height);width: 100%;"></view>
		<view class="personal_info">
			<image class="head" :src="personalInfo.headImg" @click="toLogin"></image>
			<view class="nickname">{{personalInfo.nickname}}</view>
			<view class="info_area">
				<view class="info_item" v-for="(info,i) in infoList" :key="i">
					<view class="text1">{{info.text1}}</view>
					<view class="text2">{{info.text2}}</view>
				</view>
			</view>
		</view>
		<view class="button_area">
			<view class="button_item" v-for="(item,it) in buttonList" :key="it"  @click="toPage(it)">
				<image :src="(item.image)" class="active_button_image"></image>
				<view class="active_button_text">{{item.text}}</view>
			</view>
		</view>
		<view class="data_manage">
			<view class="area_text">数据管理</view>
			<view class="area0">
				<view class="left_area">
					<image class="select_image" src="../../static/transfer.png"></image>
					<view class="select_text">导入/导出</view>
				</view>
				<image class="gotoicon" src="../../static/gotoicon.png"></image>
			</view>
			<view class="area0">
				<view class="left_area">
					<image class="select_image" src="../../static/beifen.png"></image>
					<view class="select_text">数据备份</view>
				</view>
				<image class="gotoicon" src="../../static/gotoicon.png"></image>
			</view>
		</view>
		<view class="area1">
			<view class="left_area">
				<image class="select_image" src="../../static/other.png"></image>
				<view class="select_text">其他</view>
			</view>
			<image class="gotoicon" src="../../static/gotoicon.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				personalInfo:{
					headImg:"../../static/head.png",nickname:"爱记账的小老头"					
				},
				infoList:[
					{text1:"5",text2:"目标规划"},
					{text1:"46",text2:"记账天数"},
					{text1:"132",text2:"记账笔数"},
				],
				buttonList:[
					{index:"0",image:"../../static/setting_icon.png",text:"设置"},
					{image:"../../static/theme_icon.png",text:"主题外观"},
					{image:"../../static/management_icon.png",text:"标签管理"},
					{image:"../../static/tool_icon.png",text:"智能工具 "},
					{image:"../../static/property_icon.png",text:"资产管理"},
					{image:"../../static/wish_icon.png",text:"愿望清单"},
					{image:"../../static/bill_icon.png",text:"周期记账"},
					{image:"../../static/charity_icon.png",text:"慈善公益"},
				]
			}
		},
		methods: {
			toLogin(){
				uni.navigateTo({
					url:'/pages/LoginAndRegistPage/LoginAndRegistPage'
				})
			},
			toPage(index){
				if(index==4){
					uni.navigateTo({
						url:"../AssetPage/AssetPage"
					})
				}else if(index==0){
					uni.navigateTo({
						url:"../SettingPage/SettingPage"
					})
				}else if(index==1){
					uni.navigateTo({
						url:"../ThemeChoose/ThemeChoose"
					})
				}
			}
		}
	}
</script>

<style>
	.container{
		background: linear-gradient(186.48deg, #FCC838 0%, #FFFFFF 100%);
		width: 100vw;
		height: 100vh;
		opacity: 0.7;
		//filter: blur(20px);
	}
	.personal_info{
		background-color: white;
		border-radius: 10rpx;
		text-align: center;
		width: 92vw;
		position: relative;
		left: 4vw;
		top: 10vh;
	}
	.head{
		width: 15.4vw;
		height: 15.4vw;
		border-radius: 50%;
		margin-top: -7.7vw;
	}
	.info_area{
		width: 90vw;
		text-align: center;
		display: flex;
		justify-content: space-between;
		border-top: 5rpx solid #F6F6F6;
		margin-top: 3vw;
	}
	.info_item{
		width: 30vw;
		display: flex;
		flex-direction: column;
		padding: 3vw 0;
	}
	.text1{
		//color: #072750;
		font-weight: 500;
	}
	.text2{
		color: #808080;
		font-size: 13px;
		margin-top: 1vw;
	}
	.button_area{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 3vw;
		width: 86vw;
		background-color: white;
		position: relative;
		left: 4vw;
		top: 11vh;
		border-radius: 10rpx;
	}
	.button_item{
		width: 21.5vw;
		text-align: center;
		margin-top: 2vw;
		margin-bottom: 2vw;
	}
	.active_button_image{
		width: 6vw;
		height: 6vw;
		padding: 2.3vw;
		border-radius: 50%;
	}
	.active_button_text{
		font-size: 12px;
		color: #000000;
		
	}
	.data_manage{
		background-color: white;
		padding: 2vw 5vw;
		margin-top: 12vh;
	}
	.area_text{
		color: #808080;
		font-size: 12px;
		margin-bottom: 2vw;
	}
	.area0{
		display: flex;
		justify-content: space-between;
		border-top: 2rpx solid #F6F6F6;
		padding: 3vw 0;
	}
	.left_area{
		display: flex;
	}
	.select_image{
		width:6vw ;
		height: 6vw;
	}
	.select_text{
		font-size: 14px;
		margin-left: 3vw;
		margin-top: 0.5vw;
	}
	.gotoicon{
		width: 6vw;
		height: 6vw;
	}
	.area1{
		display: flex;
		justify-content: space-between;
		background-color: white;
		padding: 3vw 5vw;
		margin-top: 2vh;
	}
</style>
