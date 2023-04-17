<template>
	<view class="container">
		<view style="height:var(--status-bar-height);width: 100%;"></view>
		<view class="topbar">
			<view  class="toptitle">虚拟资产管理</view>
			<image class="returnBack" src="../../static/return.png" @click="returnBack()"/>
		</view>
		<view class="top_area">
			<view class="left_right">
				<view class="text0">虚拟资产种类</view>
				<view class="text1">{{this.inHandList.length}}</view>
				<!-- <view class="text2">总资产：{{this.total}}</view> -->
			</view>
			<view class="left_right">
				<view class="text3">1</view>
				<view class="text2 text2_else">
					
					<a class="question-link" href="https://baike.baidu.com/item/%E8%99%9A%E6%8B%9F%E7%BB%8F%E6%B5%8E/2623185">对虚拟资产的疑问</a>
				</view>
			</view>
		</view>
		<view class="kindtitle">
			- - - - - - - - 持有 - - - - - - - -
		</view>
		<view class="content" v-for="(item,index) in this.inHandList">
			<view class="title_area flex_style  color_style0">
				<view class="text4">{{item.title}}</view>
				<view class="text4">购入￥{{item.buyMoney}}</view>
			</view>
			<view class="content_area flex_style">
				<view class="left_area flex_style">
					<image class="left_image" src="../../static/assetpage.png"></image>
					<view class="left_text">备注</view>
				</view>
				<view class="number">{{item.notes}}</view>
			</view>
		</view>
		<view class="kindtitle">
			- - - - - - - - 已售 - - - - - - - -
		</view>
		<view class="content-none" v-if="this.alreadySoldList.length==0">
			暂无内容
		</view>
		<view class="content" v-for="(item,index) in this.alreadySoldList" >
			<view class="title_area flex_style  color_style0">
				<view class="text4">{{item.title}}</view>
				<view class="text4">售出￥{{item.buyMoney}}</view>
			</view>
			<view class="content_area flex_style">
				<view class="left_area flex_style">
					<image class="left_image" src="../../static/assetpage.png"></image>
					<view class="left_text">备注</view>
				</view>
				<view class="number">{{item.notes}}</view>
			</view>
			
		</view>
		
		<!-- <view class="content">
			<view class="title_area flex_style  color_style1">
				<view class="text4">微信钱包</view>
				<view class="text4">￥2423.24</view>
			</view>
			<view class="content_area flex_style">
				<view class="left_area flex_style">
					<image class="left_image" src="../../static/assetpage.png"></image>
					<view class="left_text">微信零钱</view>
				</view>
				<view class="number">￥53</view>
			</view>
			<view class="content_area flex_style">
				<view class="left_area flex_style">
					<image class="left_image" src="../../static/assetpage.png"></image>
					<view class="left_text">零钱通</view>
				</view>
				<view class="number">￥243.3</view>
			</view>
		</view>
		<view class="content">
			<view class="title_area flex_style  color_style2">
				<view class="text4">支付宝</view>
				<view class="text4">￥3423.24</view>
			</view>
			<view class="content_area flex_style">
				<view class="left_area flex_style">
					<image class="left_image" src="../../static/assetpage.png"></image>
					<view class="left_text">支付宝余额</view>
				</view>
				<view class="number">￥3400.78</view>
			</view>
		</view>
		<view class="content">
			<view class="title_area flex_style  color_style3">
				<view class="text4">借记卡</view>
				<view class="text4">￥3423.24</view>
			</view>
			<view class="content_area flex_style">
				<view class="left_area flex_style">
					<image class="left_image" src="../../static/assetpage.png"></image>
					<view class="left_text">中国农业银行</view>
				</view>
				<view class="number">￥340.7</view>
			</view>
		</view> -->
		<!-- 悬浮窗 -->
		<uni-fab  ref="fab" :pattern="pattern" :content="content"
						 @trigger="trigger" horizontal="right" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//总资产
				total:0,
				//负债
				debt:0,
				//已售
				alreadySoldList:[],
				//持有
				inHandList:[],
				//悬浮窗内容
				content: [{
					conPath: "../../static/assetpage.png",
					selectedIconPath:"../../static/assetpage.png",
					text: '添加',
					active: true
				    }
				],
				//悬浮框颜色
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#7A7E83',
					buttonColor: '#072750',
					iconColor: '#fff'
				},
			}
		},
		methods: {
			//返回上一级页面
			returnBack(){
				uni.navigateBack({
					delta:1,
				})
			},
			//悬浮框点击展开
			trigger(e) {
				// console.log(e)
				// this.content[e.index].active = !e.item.active
				if(e.item.text=="添加"){
					console.log("添加被点击了");
					uni.showToast({
						icon:'none',
						title:'暂未开放,敬请期待'
					})
				}
			}
		},
		onLoad() {
			var that = this;
			
			//进入虚拟资产管理页面的时候,加载虚拟资产内容
			
			uni.request({
				url:getApp().globalData.envprefix + "/admin-api/lbt/extends/fundureal/get/list",
				header:{
					'tenant-id':1,
					'Authorization':"Bearer " + getApp().globalData.accessToken
				},
				data:{
					'accountBookId':getApp().globalData.accountBookId
				},
				success(res){
					if(res.data.code!=200){
						console.log("获取虚拟资产信息失败");
						console.log(res.data.code);
						return;
					}
					
					that.inHandList = res.data.data.inHand;
					that.alreadySoldList = res.data.data.alreadySold;
					console.log("获取虚拟资产信息成功");
					console.log(that.alreadySoldList)
				}
			})
		}
	}
</script>
	
<style>
	.container{
		background-color: #ffffff;
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
		z-index: -1;
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
		text-decoration: underline;
	}
	.question-link{
		color: white;
	}
	.kindtitle{
		width: 100%;
		height: 10vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.content-none{
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 3vw;
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
	.content_area{
		padding: 5vw 5vw 2vw 5vw;
	}
	.left_image{
		width: 5.6vw;
		height: 5.6vw;
	}
	.left_text{
		margin-left: 2vw;
		
	}
	.text4{
		font-size: 12px;
		font-weight: 700;
		color: white;
	}
	.flex_style{
		display: flex;
		justify-content: space-between;
	}
	.color_style0{
		background-image:linear-gradient(to right,#FCC838,#F7B89D);
	}
	.color_style1{
		background-image:linear-gradient(to right,#A5D63F,#43CF7C);
	}
	.color_style2{
		background-image:linear-gradient(to right,#4FA1FF,#2178DB);
	}
	.color_style3{
		background-image: linear-gradient(90deg, #FF8D1A 0%, #D43030 99.44%);
	}
</style>
