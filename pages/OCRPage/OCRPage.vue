<template>
	<view class="container">
		<view style="height:var(--status-bar-height);width: 100%;"></view>
		<view class="topbar">
			<view  class="toptitle">图片识别</view>
			<image class="returnBack" src="../../static/return.png" @click="returnBack()"/>
		</view>	
			<!-- 上传图片 -->
			<text class="Voice_title">上传图片:</text>
		<view class="input-area">
			<view class="Voice_input">
				
				<view class="Image_box">
					<div class="box" v-for="(item,index) in totalImg" :key='index'>
						<!-- //选择图片后回显的图片 -->
						<image :src="item" mode=""></image>
					</div>
					<div class="box" id='fileUploadBtn' @click="chooseImgs()" v-show="totalImg.length < 9">
						<!-- //静态页面图片 -->
						<image class='upload_img' src="../../static/add_lable.png" alt="">
					</div>
				</view>
			</view>
		</view>
		
		<view class="scan-btn-area">
			<button class="scan-btn" @click="uploadAndScan()">
				上传识别
			</button>
		</view>
		<text class="Voice_title">识别结果:</text>
		<view class="result-card-area">
			<view class="result-card" v-for="(item,index) in this.resultList">
				<!-- //选择图片后回显的图片 -->
				<view class="image-area">
					<image :src="item.appendixImgUrl" mode=""></image>
				</view>
				<view class="image-text" @click="toOCRAddBillPage(item)">
					<view class="info-money">
						￥{{item.money}}
					</view>
					<view class="info-tag">
						{{item.tag}}
					</view>
					<view class="info-go">
						前往记账页面进行编辑
					</view>
					
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import urlToCanvas from '@/utils/pic2base64.js'
	import { pathToBase64, base64ToPath } from 'image-tools'
	export default {
		data() {
			return {
				//图片内容
				totalImg:[],
				item:'',
				//图片base64格式
				Img64List:[],
				resultList:[],
			}
		},
		methods: {
			//返回函数
			returnBack(){
				uni.navigateBack({
					delta:1,
				})
			},
			//上传识别按钮点击的函数
			uploadAndScan(){
				var that = this;
				
				//加个判断
				if(this.Img64List.length==0&&this.Img64List==null){
					uni.showToast({
						icon:'none',
						title:"图片未选择"
					})
					return;
				}
				
				console.log("要请求的次数为" + this.Img64List.length);
				for(var i = 0;i<this.Img64List.length;i++){
					//添加加载
					uni.showLoading({
						title:"正在识别"
					})
					
					uni.request({
						url:"http://47.100.211.157/ocr/identify/",
						method:'POST',
						data:this.Img64List[i],
						success(res) {
							console.log(res)
							if(res.data.code!=200){
								console.log(res.data.code);
								console.log("扫描失败")
								uni.hideLoading();
								uni.showToast({
									icon:'none',
									title:"识别失败"
								})
								return;
							}
							uni.hideLoading();
							console.log(res.data.result);
							that.resultList.push(res.data.result);
							console.log(res.data.result.money);
							console.log(res.data.result.notes);
						}
					})
				}
			},
			// 上传图片start
			// 选择图片
			chooseImgs:function(){
				var _this = this
				//选择图片
				uni.chooseImage({
					count:9,
					sizeType:['original', 'compressed'],
					sourceType: ['camera','album'], //从相册选择
					success:(res) => {
						console.log("tempFilePaths")
						console.log(res.tempFilePaths)//输出文件默认路径
						const tempFilePaths = res.tempFilePaths
						//将图片地址写入图片数组进行显示
						for(var i=0;i<tempFilePaths.length;i++){
							 _this.totalImg.push(tempFilePaths[i]);
							console.log("tempFilePaths" + tempFilePaths[i])
							var that = _this;
							pathToBase64(tempFilePaths[i])
							  .then(base64 => {
							    console.log(base64)
								that.Img64List.push(base64)
							  })
							  .catch(error => {
							    console.error(error)
							  })
							
							// 将图片转为base64,手机上失败
							// urlToCanvas(tempFilePaths[i]).then(res=>{
							// 	console.log(res);
							// 	_this.Img64List.push(res)
							// }).catch((err)=>{
							// 	console.log(err);
							// })
							
							// 试试ajax,手机上失败
							// let xhr = new XMLHttpRequest();
							// xhr.open('get',tempFilePaths[i], true);
							// // 重点1
							// xhr.responseType = 'blob';
							
							// var that = _this;
							// xhr.onload = function() {
							//     if (this.status == 200) {
							//         //得到一个blob对象
							//         let blob = this.response;
							//         // 重点2
							//         let oFileReader = new FileReader();
							//         oFileReader.onloadend = function(e) {
							//             // 结果
							//             const base64 = e.target.result
							// 			console.log(base64);
							// 			that.Img64List.push(base64)
							// 			console.log(that.Img64List.length);
							//         };
							//         oFileReader.readAsDataURL(blob);
							//     }
							// };
							// xhr.send();
							
							//试试新方法
							// this.urlTobase64(tempFilePaths[i]);
							
							
							
							
						}
									
					}
				})
				
			},
			// urlTobase64(url){
			//                     uni.getFileSystemManager().readFile({
			//                         filePath: url, //选择图片返回的相对路径
			//                         encoding: 'base64', //编码格式
			//                         success: res => { //成功的回调
			//                         console.log(res);
			//                             let base64 = 'data:image/jpeg;base64,' + res.data //不加上这串字符，在页面无法显示的哦
			// 							console.log(base64);
			//                         },fail: (e) => {
			//                             console.log("图片转换失败");
			//                         }
			//                     })
			                
			//             },
			// /////////////////////////////////////////////////////////////////////////////////////////////////////
			
			
			//图片预览
			previewImage:function(e){
				var _this = this
				var index = e.currentTarget.dataset.index;
				//所有图片
				var imgbox = _this.totalImg;
				wx.previewImage({
					//当前显示图片
					current: imgbox[index],
					//所有图片
					urls: imgbox
				})
			},
			//跳转到记账页面
			toOCRAddBillPage(item){
				//将要识别的结果写入全局
				getApp().globalData.OCRresult = item;
				//跳转到新页面
				uni.navigateTo({
					url:"/pages/OCRAddBillPage/OCRAddBillPage"
				})
			}
		}
	}
</script>

<style>
	.container{
		background-color: #f6f6f6;
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
	.input-area{
		/* margin-top: 3vw; */
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	/* 上传图片 */
	.Voice_input{
		/* border-bottom: 1px solid rgba(215,215,215,0.50); */
		background-color: white;
		width: 95%;
	}
	.Voice_title{
		height: 25px;
		line-height: 41px;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #1F1F26;
		margin-left: 2.5vw;
		font-weight: 600;
	}
	.Image_box{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 15px;
		padding-bottom: 15px;
		/* margin-left: v; */
		margin-left:0.6vw;
	}
	.box{
		width: 216rpx;
		height: 216rpx;
		margin-right: 10px;
		margin-bottom: 10px;
		/* background-color: aquamarine; */
	}
	.box image{
		width: 216rpx;
		height: 216rpx;
	}
	.upload_img{
		height: 100%;
		width: 100%;
	}
	.scan-btn-area{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 3vw;
		/* margin-bottom: 3vw; */
	}
	.scan-btn{
		width: 95%;
		font-size: 30rpx;
		background-color: #072750FF;
		color: white;
	}
	.result-card-area{
		width:100%;
		/* height: 300rpx; */
		/* background-color: aquamarine; */
	}
	
	.result-card{
		height: 300rpx;
		width: 95%;
		margin-left: 2.5vw;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: white;
	}
	
	.image-area{
		height: 270rpx;
		margin-left: 0.5vw;
	}
	.image-area image{
		height: 100%;
		width: 360rpx;
	}
	.image-text{
		font-size: 30rpx;
		/* text-decoration: underline; */
		margin-right: 0.5vw;
	}
	.info-money{
		/* text-decoration: none; */
	}
	.info-go{
		text-decoration: underline;
		margin-top: 30rpx;
	}
</style>
