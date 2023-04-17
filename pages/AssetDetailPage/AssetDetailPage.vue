<template>
	<view class="container">
		<view style="height:var(--status-bar-height);width: 100%;"></view>
		<view class="topbar">
			<view  class="toptitle">资产详情</view>
			<image class="returnBack" src="../../static/return.png" @click="returnBack()"/>
		</view>
		<view class="top_area">
			<view class="left_right">
				<view class="text0">{{this.title}}</view>
				<view class="text1">￥{{this.money}}</view>
				<view class="text2">fundId: {{this.fundId}}</view>
			</view>
			<view class="left_right">
				<view class="text3" @click="toVirtualAssetPage()" v-show="false">虚拟资产管理</view>
				<view class="text2 text2_else">变动总条数:{{this.detailList.length}}</view>
			</view>
		</view>
		<!-- <view class="assetcard">
			<view class="ac-time">
				2023年4月17日
			</view>
			<view class="ac-way">
				购物消费
			</view>
			<view class="ac-money">
				100
			</view>
		</view> -->
		<view class="assetcard" v-for="(item,index) in this.detailList">
			<view class="ac-time">
				{{item.year + "年" + item.month + "月" + item.day + "日"}}
			</view>
			<view class="ac-way">
				{{item.tagName==null?'无标签':item.tagName}}
			</view>
			<view :class="['ac-money',item.enumType==1?'redMoney':'greenMoney']">
				￥{{item.money}}
			</view>
		</view>
	</view>
</template>

<script>
// import { getNameOption } from '../OCRPage/__VLS_types';
	export default {
		data() {
			return {
				title:"资产",
				money:0,
				fundId:'',
				detailList:[],
			}
		},
		methods: {
			//返回上一级页面
			returnBack(){
				uni.navigateBack({
					delta:1,
				})
			},
		},
		onLoad(){
			var that = this;
			//进入页面,加载虚拟资产详情
			
			//获取该资产信息
			this.title = getApp().globalData.assetInfo.title;
			this.money = getApp().globalData.assetInfo.money;
			this.fundId = getApp().globalData.assetInfo.fundId;
			
			//发起查看资产便当信息的请求
			uni.request({
				url:getApp().globalData.envprefix + "/admin-api/lbt/extends/fund/get/detail",
				header:{
					'tenant-id':1,
					'Authorization':'Bearer ' + getApp().globalData.accessToken
				},
				data:{
					'accountBookId':getApp().globalData.accountBookId,
					'fundId':getApp().globalData.assetInfo.fundId
				},
				success(res){
					console.log(getApp().globalData.accountBookId);
					console.log(getApp().globalData.assetInfo.fundId);
					if(res.data.code!=200){
						console.log(res.data.code);
						console.log("获取虚拟资产变动信息失败");
						return;
					}
					that.detailList = res.data.data;
				}
			})
			
		}
	}
</script>

<style>
	.container{
		background-color:#F6F6F6;
		width: 100vw;
		height: 100vh;
	}
	.topbar{
		/* border-bottom: ; */
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
	.top_area{
		background-image:linear-gradient(to right,#072750,#633534);
		display: flex;
		justify-content: space-between;
		border-radius: 6rpx;
		width: 84vw;
		margin-left: 3vw;
		margin-top: 1vh;
		padding: 4vw 5vw;
		color: white;
	}
	.left_right{
		display: flex;
		flex-direction: column;
	}
	.text3{
		color: #E88684;
		border-radius: 40rpx;
		background-color: white;
		padding: 2vw 4vw;
		margin-top: 6vw;
	}
	.text0{
		font-size: 12px;
	}
	.text1{
		font-size: 20px;
		font-weight: 700;
		margin-top: 4vw;
	}
	.text2{
		font-size: 12px;
		font-weight: 700;
		margin-top: 6vw;
	}
	.text2_else{
		margin-top: 4vw;
		margin-left: 4vw;
	}
	.content{
		border-radius: 10px;
		width: 94vw;
		margin-left: 3vw;
		padding: 4vw 0vw;
	}
	.title_area{
		
		padding: 3vw 5vw;
		border-radius: 8px 8px 0 0;
	}
	.assetcard{
		width: 95%;
		height: 10vw;
		display: flex;
		align-items: center;
		/* justify-content: space-around; */
		background-color: white;
		margin-top: 3vw;
		margin-bottom: 3vw;
		font-size: 30rpx;
	}
	.ac-time{
		flex: 3;
		display: flex;
		align-self: center;
		justify-content: center;
	}
	.ac-way{
		flex: 2;
		display: flex;
		align-self: center;
		justify-content: center;
	}
	.ac-money{
		flex:2;
		display: flex;
		align-self: center;
		justify-content: center;
	}
	.redMoney{
		color: #FF5733FF;
	}
	.greenMoney{
		color: #43CF7CFF;
	}
</style>
