<template>
	<view class="container">
		<view style="height:var(--status-bar-height);width: 100%;"></view>
		<view class="status-zw" style="height:var(--status-bar-height);width: 100%; background-color: white; position: fixed;">
			
		</view>
		<view class="topbar">
			<view  class="toptitle">GPT智能分析</view>
			<image class="returnBack" src="../../static/return.png" @click="returnBack()"/>
		</view>
		<view class="topbar-zw">
			
		</view>
		
		<!-- 对话内容 -->
		<scroll-view class="chatArea" scroll-y="true">
			<view class="chatContent" v-for="(item,index) in chatList">
				<view class="avatar-gpt" v-if="item.who=='gpt'">
					<image :src="gptAvatar" mode=""></image>
				</view>
				<view class="avatar-notdisplay" v-else>
					
				</view>
				<view class="chat-word">
					{{item.word}}
				</view>
				<view class="avatar-user" v-if="item.who=='user'">
					<image :src="userAvatar" mode=""></image>
				</view>
				<view class="avatar-notdisplay" v-else>
					
				</view>
			</view>
		</scroll-view>
		
		<view class="bottom-area-zw">
			
		</view>
		<!-- 底部输入栏 -->
		<view class="bottom-area">
			<view class="bottom-area-left">
				<input type="text" v-model="userword">
			</view>
			<view class="bottom-area-right">
				<button @click="send()">
					发送
				</button>
			</view>
			
		</view>
	</view>
</template>

<script>
	// import {Blob} from 'buffer';
	export default {
		
		data() {
			return {
				//用户输入的内容
				userword:'',
				gptAvatar:"../../static/ChatGPT.png",
				userAvatar:"../../static/yonghuqianbi.png",
				chatList:[
					{
						who:"gpt",
						word:"你好，我是烂笔头APP搭载的智能分析GPT，您可以与我对话，获取财务记账相关的内容"
					},
					
					
					// {
					// 	who:"user",
					// 	word:"作为一个青年人,我这个月的总支出为2000元,总收入为4000元.食品餐饮支出占总支出的10.58%,健康医疗支出占总支出的44.37%,请帮我分析一下财务状况"
					// },
					// {
					// 	who:"gpt",
					// 	word:""
					// }
				]
			}
		},
		methods: {
			send(){
				var that = this;
				
				var userwordtemp = this.userword;
				
				//将用户输入发出的内容写入
				var userInput = {
					who:"user",
					word:this.userword
				}
				
				this.userword = "";
				
				this.chatList.push(userInput);
				console.log("现在的charList长度" + this.chatList.length);
				
				uni.showLoading({
					title:"GPT回答中...",
				})
				//利用用户的输入请求openai接口
				//有了句子，可以向chatgpt发起请求
				uni.request({
					url:"https://api.aichatos.cloud/api/generateStream",
					method:'POST',
					header:{
						'Accept':'application/json,text/plain,*/*',
						'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.39',
						'Content-Type':'application/json',
						'Origin':'https://csvaj.aichatos.com',
						'sec-ch-ua':'"Chromium";v="112", "Microsoft Edge";v="112", "Not:A-Brand";v="99"',
						'sec-ch-ua-mobile':'?0',
						'sec-ch-ua-platform':'"Windows"',
						'Sec-Fetch-Dest':'empty',
						'Sec-Fetch-Mode':'cors',
						'Sec-Fetch-Site':'cross-site'
					},
					responseType:'blob',
					data:{
						"prompt": userwordtemp,
						"userId": "#/chat/1681637384446",
						"network": true,
						"apikey": "",
						"system": "",
						"withoutContext": false
					},
					success(res) {
						// console.log("请求gpt，code" + res.data.code);
						// console.log("请求gpt，返回" + res);
						console.log(res);
						console.log(res.data)
						
						that.chatList.push({
							who:"gpt",
							word:res.data
						})
						
						uni.hideLoading();
					}
				})
				
			},
			//返回上一级页面
			returnBack(){
				uni.navigateBack({
					delta:1,
				})
			},
			//获取以今天为标准，任何一天的日期,传入0表示今天，传入-1表示昨天，返回年月日数组
			getAnyDate(day){
				var today = new Date();
				var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
				today.setTime(targetday_milliseconds); //注意，这行是关键代码
				var tYear = today.getFullYear();
				var tMonth = today.getMonth();
				var tDate = today.getDate();
				var tDay = today.getDay();
				tMonth = this.doHandleMonth(tMonth + 1);
				tDate = this.doHandleMonth(tDate);
				return [tYear,tMonth,tDate,tDay];
			},
			doHandleMonth(month){
				var m = month;
			　　	if(month.toString().length == 1){
			　　　　	m = "0" + month;
			　　	}
			　　	return m;
			},
		},
		onLoad() {
			var that = this;
			//显示加载框
			uni.showLoading({
				title:"GPT载入中..."
			})
			
			//需要给gpt发送信息
			
			//获取需要的数据
			var monthOutMoney = "";//本月支出总金额
			var monthOutKindAndPercent = [];//本月支出占比
			var monthInMoney = "";//本月收入总金额
			var monthInKindAndPercent = [];//本月收入占比
			
			//获取本月的支出
			uni.request({
				url:getApp().globalData.envprefix + "/admin-api/lbt/extends/data/bill/analyse/monthly",
				method:'GET',
				header:{
					'tenant-id':1,
					'Authorization':"Bearer " + getApp().globalData.accessToken
				},
				data:{
					'accountBookId':getApp().globalData.accountBookId,
					'enumType':1,//1表示支出
					'month':this.getAnyDate(0)[1],
					'year':this.getAnyDate(0)[0]
				},
				success(res) {
					console.log("请求的账本id：" + getApp().globalData.accountBookId)
					console.log("请求的日期：" + that.getAnyDate(0)[0] + "." + that.getAnyDate(0)[1]);
					if(res.data.code!=200){
						console.log("请求本月支出失败");
						console.log(res.data.code);
						return;
					}
					//将支出数据存入
					monthOutMoney = res.data.data.totalMoney;
					for(var i = 0;i<res.data.data.dataList.length;i++){
						var tagname = res.data.data.dataList[i].tagName;
						var percentage = res.data.data.dataList[i].percentage;
						var money = res.data.data.dataList[i].money;
						var temp = {
							'tagname':tagname,
							'percentage':percentage,
							'money':money
						}
						monthOutKindAndPercent.push(temp);
					}
					
					var _that = that;
					
					//发起本月收入查询
					uni.request({
						url:getApp().globalData.envprefix + "/admin-api/lbt/extends/data/bill/analyse/monthly",
						method:'GET',
						header:{
							'tenant-id':1,
							'Authorization':"Bearer " + getApp().globalData.accessToken
						},
						data:{
							'accountBookId':getApp().globalData.accountBookId,
							'enumType':0,//0表示收入
							'month':_that.getAnyDate(0)[1],
							'year':_that.getAnyDate(0)[0]
						},
						success(res) {
							if(res.data.code!=200){
								console.log(res.data.code);
								console.log("本月收入数据请求失败")
								return;
							}
							if(res.data.data.totalMoney==0){//总收入为0
								monthInMoney = res.data.data.totalMoney;
							}else{
								monthInMoney = res.data.data.totalMoney;
								monthInKindAndPercent = res.data.data.dataList;
								console.log("本月收入数据获取成功");
							}
							
							//开始拼凑gpt发言
							// {
							// 	who:"user",
							// 	word:"作为一个青年人,我这个月的总支出为2000元,总收入为4000元.食品餐饮支出占总支出的10.58%,健康医疗支出占总支出的44.37%,请帮我分析一下财务状况"
							// },
							var who = "user";
							var temp = "";
							//处理支出语句
							for(var i = 0;i<monthOutKindAndPercent.length;i++){
								temp = temp + monthOutKindAndPercent[i].tagname + "共支出" + monthOutKindAndPercent[i].money + "元，在支出中占" + monthOutKindAndPercent[i].percentage + "%";
								if(i!=monthInKindAndPercent.length-1){
									temp = temp + ",";
								}
							}
							var word = "作为一个年轻人，我本月支出" + monthOutMoney + "元。其中，" + temp + "。我本月收入" + monthInMoney + "元。请帮我分析一下我的财务状况";
							
							
							//有了句子，可以向chatgpt发起请求
							uni.request({
								url:"https://api.aichatos.cloud/api/generateStream",
								method:'POST',
								header:{
									'Accept':'application/json,text/plain,*/*',
									'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.39',
									'Content-Type':'application/json',
									'Origin':'https://csvaj.aichatos.com',
									'sec-ch-ua':'"Chromium";v="112", "Microsoft Edge";v="112", "Not:A-Brand";v="99"',
									'sec-ch-ua-mobile':'?0',
									'sec-ch-ua-platform':'"Windows"',
									'Sec-Fetch-Dest':'empty',
									'Sec-Fetch-Mode':'cors',
									'Sec-Fetch-Site':'cross-site'
								},
								responseType:'blob',
								data:{
									"prompt": word,
									"userId": "#/chat/1681637384446",
									"network": true,
									"apikey": "",
									"system": "",
									"withoutContext": false
								},
								success(res) {
									// console.log("请求gpt，code" + res.data.code);
									// console.log("请求gpt，返回" + res);
									console.log(res);
									console.log(res.data)
									_that.chatList.push({
										who:"user",
										word:word
									})
									_that.chatList.push({
										who:"gpt",
										word:res.data
									})
									uni.hideLoading();
								}
							})
							
						}
					})
				}
			})
		}
	}
</script>

<style>
	.container{
		/* background-color: #f6f6f6; */
		width: 100vw;
		height: 100vh;
		background-color: white;
	}
	.topbar{
		height: 12vw;
		/* background-color: white; */
		position: fixed;
		z-index: 999;
		/* background-color: black; */
		background-color: white;
	}
	.topbar-zw{
		height: 12vw;
		/* z-index: -999; */
	}
	.toptitle{
		width: 100vw;
		text-align: center;
		font-size: 36rpx;
		height: 8vw;
		position: relative;
		top: 3vw;	
		/* background-color: aquamarine; */
		/* background-color: aquamarine; */
	}
	.returnBack{
		width: 6vw;
		height: 6vw;
		position: relative;
		top: -5vw;
		left: 5vw;
	}
	.bottom-area-zw{
		height: 100rpx;
		width: 100%;
		background-color: #f6f6f6;
	}
	.bottom-area{
		height: 100rpx;
		width: 100%;
		background-color: #FDF1DAFF;
		/* position: absolute; */
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
	}
	.bottom-area-left{
		border-radius: 1000rpx;
		overflow: hidden;
		height: 80rpx;
		width: 60vw;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: white;
	}
	.bottom-area input{
		height: 80rpx;
		width: 50vw;
		/* margin-bottom: 50rpx; */
		background-color: white;
		font-size: 30rpx;
		
	}
	.bottom-area-right button{
		width: 22vw;
		margin-left: 5vw;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
		border-radius: 10000rpx;
	}
	.chatArea{
		background-color: #f6f6f6;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 30rpx;
		height: 85vh;
	}
	.chatContent{
		margin-left: 2.5vw;
		width: 95%;
		margin-bottom: 30rpx;
		display: flex;
		justify-content: space-between;
	}
	.avatar-gpt{
		width: 100rpx;
		height: 100rpx;
		/* background-color: aquamarine; */
		background-color: white;
		/* margin-top: 10rpx; */
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10000rpx;
		overflow: hidden;
	}
	.avatar-notdisplay{
		width: 100rpx;
		height: 100rpx;
		/* background-color: aquamarine; */
		/* background-color: white; */
		/* margin-top: 10rpx; */
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10000rpx;
		overflow: hidden;
	}
	.avatar-gpt image{
		width: 80%;
		height: 80%;
	}
	.avatar-user{
		width: 100rpx;
		height: 100rpx;
		/* background-color: aquamarine; */
		background-color: white;
		/* margin-top: 10rpx; */
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10000rpx;
		overflow: hidden;
		/* align-self: center; */
	}
	.avatar-user image{
		width: 75%;
		height: 75%;
	}
	.chat-word{
		width: 400rpx;
		word-break: break-all;
		background-color: white;
		padding:20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
	}
</style>
