<template>
	<view class="content">
		<view class="xuanze" @click="selectIsXiala">
			<text>{{optionIndex}}</text>
			<image src="/static/xiala.png" mode=""></image>
			<view class="xiala" v-if="isXiala">
				<view class="xiala-xuan" :class="[isXiala==1?'open':'',isXiala==2?'close':'']">
					<scroll-view scroll-y="true"  class="scrollArea">
						<view class="xiala-hang" v-for="(item,index) in option" :key="index" @click="xuanzeMoban(item.lable,item.value)">
							<text>{{item.value}}</text>
						</view>	
					</scroll-view>
									
				</view>
			</view>
		</view>
		<view class="111">
			11111111
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				isXiala:0,
				option:[
					{lable:0,value:"模板1"},
					{lable:1,value:"模板2"},
					{lable:2,value:"模板3"},
					{lable:3,value:"模板4"},
					{lable:3,value:"模板4"},
					{lable:3,value:"模板4"},
				],
				ptionIndex:"选择",
				
			}
		},
		methods: {
			//isXiala=0时，表示还没有选中内容
			//isXiala=1时，表示下拉菜单展开
			//isXiala=2时，表示已经选中内容
			selectIsXiala(){
				console.log("被点击了")
				console.log(this.isXiala)
				if(this.isXiala==0){
					this.isXiala=1
					console.log(this.isXiala)
				}else if(this.isXiala==1){
					this.isXiala=2
					console.log(this.isXiala)
				}else if(this.isXiala==2){
					this.isXiala=1
					console.log(this.isXiala)
				}
			},
			xuanzeMoban(label,value){
				this.optionIndex=value
				console.log("模板---",label,value);
			}
		}
	}
</script>

<style>
	/* flex居中 */
	.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		.xuanze{
			/* margin-top: 40rpx; */
			width: 200rpx;
			height: 60rpx;
			border-radius: 20rpx;
			background-color:rgba(36, 44, 61, 1);
			border: 1px solid #efefef;
			padding: 0 20rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: relative;
		}
		.xuanze text{
			color:#fff;
	 
		}
		.xuanze image{
			width: 40rpx;
			height: 40rpx;
		}
		.xiala{
			position: absolute;
			bottom: -240rpx;
			left: 0;
			height: 230rpx;
			width: 200rpx;
		}
		.xiala-xuan{
			height: 210rpx;
			width: 200rpx;
			background-color: rgba(36, 44, 61, 1);
			box-sizing: border-box;
			overflow: hidden;
		}
		.scrollArea{
			height: 100%;
			width: 100%;
		}
		.xiala-hang{
			height: 50rpx;
			width: 100%;
			border-bottom: 1px solid #efefef;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.xiala-hang:last-child{
			border: 0px;
		}
		    /* 显示或关闭动画*/
		    .open {
		        animation: slideContentUp 0.2s linear both;
		    }
		 
		    .close {
		        animation: slideContentDown 0.2s linear both;
		    }
		 
		    /* 动态设置高度 */
		    @keyframes slideContentUp {
		        from {
		            height: 0;
		        }
		 
		        to {
		            height: -230rpx;
		        }
		    }
		 
		    @keyframes slideContentDown {
		        from {
		            height: -230rpx;
		        }
		 
		        to {
		            height: 0;
		        }
		    }
	
</style>
