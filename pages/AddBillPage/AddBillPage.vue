<template>
	<view class="container">
		<view style="height:var(--status-bar-height);width: 100%;"></view>
		
		<view class="menu">
			<image class="return_image" src="../../static/return.png" @click="returnBack()"></image>
			<view :class="['',this.choosedIndex==0?'active_color':'not']" v-on:click="change(0)">支出</view>
			<view :class="['',this.choosedIndex==1?'active_color':'not']" v-on:click="change(1)">收入</view>
			<view :class="['',this.choosedIndex==2?'active_color':'not']" v-on:click="change(2)">转账</view>	
			<view class="edit_button" >编辑</view>
		</view>
		<!-- 大类型选择 -->
		<view>
			<view class="button_area">
				<view class="button_item" v-for="(item,it) in buttonList" :key="it" @click="changeButton(it)">
					<image :src="item.image" :class='buttonIndex==it? "active_button_image":"button_image"'></image>
					<view :class='buttonIndex==it? "active_button_text":"button_text"'>{{item.text}}</view>
				</view>
			</view>
		</view>
		<!-- 小类型选择 -->
		<view class="button_area0">
			<view class="button_item" @click="changeButton(10)">
				<view  >
					<image src="../../static/fine.png" :class='buttonIndex==10? "active_button_image":"button_image"'></image>
					<view :class='buttonIndex==10? "active_button_text":"button_text"'>罚款赔偿</view>
				</view>						
			</view>
			<view class="button_item" @click="changeButton(11)">
				<view  >
					<image src="../../static/property.png" :class='buttonIndex==11? "active_button_image":"button_image"'></image>
					<view :class='buttonIndex==11? "active_button_text":"button_text"'>理财支出</view>
				</view>						
			</view>	
			<view class="button_item" @click="changeButton(12)">
				<view  >
					<image src="../../static/donation.png" :class='buttonIndex==12? "active_button_image":"button_image"'></image>
					<view :class='buttonIndex==12? "active_button_text":"button_text"'>爱心捐助</view>
				</view>						
			</view>	
		</view>
		
		
		<!--日期弹出窗设置-->
		<uni-popup :mask-click="false" ref="popup" background-color="#fff" @change="change">
			<view>
				<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
					<view class="cancel_ensure">
						<view @click="closePop()" class="qvxiao">取消</view>
						<view @click="closePopEnsure()" class="queding">确定</view>
					</view>
					<!--日期-->
					<view class="down">
						<uni-calendar
							:showMonth="false"
							:selected="info.selected"
						    :insert="true"
						    :lunar="true" 
						    @change="change"
						/>
						
					</view>				
				</view>
				<!--时间-->
				<view class="time_pick">
					<image class="time_img" src="../../static/time.png"></image>
					<xp-picker :mode="mode" v-model="form.str"/>
				</view>
			</view>			
		</uni-popup>
		<!--呼出固定键盘-->
		<view class="bottom_view">
			<view class="input_area">
				<view class="add_tag_view">
					<image class="tag_img" src="../../static/add_tag.png"></image>
					<view class="add_tag_text">添加标签</view>
				</view>
				<view class="remarks_view">
					<input placeholder-style="color:#808080;font-size:14px" placeholder="添加备注(不超过50字)" maxlength="50"/>
				</view>
				<view class="number_display">￥{{numberInput}}</view>
			</view>
			<view class="choose_view flex_style">
				<view class="choose_item flex_style" @click="toggle('center')">
					<image class="choose_img" src="../../static/today.png"></image>
					<view class="choose_text">{{chooseDate}}</view>
				</view>
				<view class="choose_item flex_style">
					<image class="choose_img" src="../../static/billBook.png"></image>
					<view class="choose_text">账本</view>
				</view>
				<view class="choose_item flex_style">
					<image class="choose_img" src="../../static/account.png"></image>
					<view class="choose_text">账户</view>
				</view>
				<view class="choose_item flex_style">
					<image class="choose_img" src="../../static/expenses-.png"></image>
					<view class="choose_text">不报销</view>
				</view>
			</view>
			<!--键盘-->
			<view class="kerboard_view flex_style_evenly">
				<view class="column_view flex_style flex_column">
					<view class="column_item">1</view>
					<view class="column_item">4</view>
					<view class="column_item">7</view>
					<view class="column_item zaijiqvxiao" @click="returnBack()">取消</view>
				</view>
				<view class="column_view flex_style flex_column">
					<view class="column_item">2</view>
					<view class="column_item">5</view>
					<view class="column_item">8</view>
					<view class="column_item">0</view>
				</view>
				<view class="column_view flex_style flex_column">
					<view class="column_item">3</view>
					<view class="column_item">6</view>
					<view class="column_item">9</view>
					<view class="column_item">.</view>
				</view>
				<view class="column_view flex_style flex_column">
					<view class="column_item">
						<image class="delete_button" src="../../static/delete.png" mode="widthFix"></image>
					</view>
					<view class="column_item flex_style flex_wrap zaiji jia_jian_cheng_chu">
						<view class="accumulate" @click="opClicked()">+</view>
						<view class="accumulate" @click="opClicked()">-</view>
						<view class="accumulate" @click="opClicked()">×</view>
						<view class="accumulate" @click="opClicked()">÷</view>
					</view>
					<view class="column_item zaijiqvxiao" @click="uploadData()">确认</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	function getDate(date, AddDayCount = 0) {
				if (!date) {
					date = new Date()
				}
				if (typeof date !== 'object') {
					date = date.replace(/-/g, '/')
				}
				const dd = new Date(date)
				dd.setDate(dd.getDate() + AddDayCount) // 获取AddDayCount天后的日期
				const y = dd.getFullYear()
				const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1 // 获取当前月份的日期，不足10补0
				const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 获取当前几号，不足10补0
				return {
					fullDate: y + '-' + m + '-' + d,
					year: y,
					month: m,
					date: d,
					day: dd.getDay(),
				}
			}
	export default {
		data() {
			return {
				form:{
					str:""//此处保留的是设置后的时间
				},
				mode:'hi',//时间选择器的模式hour-minute
				chooseTime:"",//此处是点击设置日期时间“确定”按钮后的时间
				chooseDate:"今天",//此处是点击设置日期时间“确定”按钮后的日期
				info: {
					lunar: true,
					range: true,
					insert: false,
					selected: []
				},
				type:'center',
				numberInput:"0.00",//该变量保存输入的金额
				choosedIndex:"0",
				buttonIndex:"0",
				index:"0",
				buttonList:[
					
					{image:"../../static/shoppingg.png",text:"购物消费"},
					{image:"../../static/meal.png",text:"食品餐饮"},
					{image:"../../static/entertainment.png",text:"娱乐休闲"},
					{image:"../../static/traffic.png",text:"出行交通"},
					{image:"../../static/home.png",text:"居家"},
					{image:"../../static/education.png",text:"文化教育"},
					{image:"../../static/gift.png",text:"送礼"},
					{image:"../../static/healthy.png",text:"医疗健康"},
					{image:"../../static/setting.png",text:"管理"},
					{image:"../../static/else.png",text:"其他"},
				],
				buttonElseList:[
						{image:"",text:"",index:"10"},
						{image:"",text:""},
						{image:"",text:""},
				
				]
			}
		},
		methods: {
			open() {
				this.$refs.calendar.open()
				},	
				monthSwitch(e) {
					console.log('monthSwitchs 返回:', e)
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
			//改变序号,呈现按钮选中状态
			changeButton(it){
				if(this.buttonIndex == it){
					return;
				}
				this.buttonIndex = it;
			},
			//返回按钮点击函数
			returnBack(){
				uni.navigateBack({
					delta:1,
				})
			},
			//打开日历弹窗
			open() {
				this.$refs.calendar.open()
			},
			//日历中进行日期选择时将选择的日期保存到两个变量中，
			//只有最后点击“确认”才会把日期保存到chooseDate中
			change(e) {
				console.log('change 返回:', e);
					var _this = this;
				_this.billMonth = e.month;
				_this.billDate = e.date;
				console.log('fanhui',this.billMonth);
			},
			//点击弹窗里的“取消”按钮，此时取消弹窗，不保存数据
			closePop(){
				this.$refs.popup.close();
				this.chooseDate = "今天"
			},
			//点击弹窗的“确认”按钮后将日期时间保存到相应的两个变量里
			closePopEnsure(){
				var _this = this;
				this.chooseDate = _this.billMonth + "-" + _this.billDate;
				this.chooseTime = this.form.str;
				this.$refs.popup.close();				
			},
			//关闭弹窗popup
			close() {
				this.$refs.popup.close()
			},
			toggle(type) {
				this.type = type
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open(type)
			},
			//记账确认按钮，判断numberInput是否为0
			uploadData(){
				if(this.numberInput=="0.00"){
					uni.showToast({
						title:"请输入有效金额！",
						icon:"none",
						duration:2000
					})
				}else{
					//是否判断如果是支出类型，输出负值表示收入；反之亦然
				}
			},
			//加减乘除被点击时
			opClicked(){
				uni.showToast({
					title:"敬请期待",
					icon:"none"
				})
			}
		}
	}
</script>

<style>
	.container{
		background-color: #F6F6F6;
		width: 100vw;
		height: 100vh;
	}
	.notplay{
		display: none;
	}
	.not{
		color: #808080FF;
	}
	.return_image{
		width: 6.8vw;
		height: 6.8vw;
	}
	.menu{
		height: 5vh;
		width:100vw;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: black;	
		background-color: #FFFFFF;
		
	}
	.active_color{	
		padding: 10rpx 0;
		border-bottom: 5rpx solid #F7B89DFF;
	}
	.edit_button{
		color: #F7B89DFF;
		padding-right: 5vw;
	}
	.ex_area{
		background-color: #808080FF;
		position: relative;
		top: 20vw;
	}
	.button_area{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 3vw;
		width: 90vw;
		background-color: white;
		position: relative;
		left: 2vw;
		top: 2vw;
	}
	.button_item{
		width: 16vw;
		text-align: center;
		margin-top: 2vw;
		margin-bottom: 2vw;
	}
	.button_image{
		width: 5.6vw;
		height: 5.6vw;
		padding: 2.3vw;
		border-radius: 50%;
		//background-color: #FCC637;
		background-color: #EDEFF3;
	}
	.active_button_image{
		width: 5.6vw;
		height: 5.6vw;
		padding: 2.3vw;
		border-radius: 50%;
		background-color: #FCC637;
	}
	.button_text{
		font-size: 12px;
		color: #808080;
		margin-top: 2vw;
	}
	.active_button_text{
		font-size: 12px;
		color: #000000;
		margin-top: 2vw;
	}
	.button_area0{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 3vw;
		width: 54vw;
		position: relative;
		left: 2vw;
		top: 2vw;
	}
	.input_area{
		display: flex;
		justify-content: space-between;
		padding: 4vw 5vw;
		background-color: white;
	}
	.add_tag_view{
		display: flex;
	}
	.tag_img{
		width: 5.6vw;
		height: 5.6vw;
	}
	.add_tag_text{
		color: #FCC637;
		font-size: 14px;
	}
	.remarks_view{
		width: 50vw;
		color: #808080;
		
	}
	.rmb{
		color: red;
	}
	.choose_view{
		background-color: white;
		padding: 2vw 5vw;
	}
	.choose_img{
		width: 5.6vw;
		height: 5.6vw;
	}
	.flex_style{
		display: flex;
		justify-content: space-between;
	}
	.flex_style_evenly{
		display: flex;
		justify-content: space-evenly;
	}
	.number_display{
		color: red;
	}
	@mixin flex {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}
	
	@mixin height {
		/* #ifndef APP-NVUE */
		height: 100%;
		/* #endif */
		/* #ifdef APP-NVUE */
		flex: 1;
		/* #endif */
	}
	.cancel_ensure{
		display: flex;
		justify-content: space-between;
		width: 90vw;
		padding: 2vw 0;
		font-size: 14px;
	}	
	.qvxiao{
		color: #FCC637;
	}
	.queding{
		color: white;
		background-color: #FCC637;
		border-radius: 10rpx;
		padding: 1vw 3vw;
	}
	.popup-content {
		@include flex;
		align-items: center;
		justify-content: center;
		padding: 15px;
		//height: 50px;
		background-color: #fff;
		display: flex;
		flex-direction: column;		
	}
	
	.popup-height {
		@include height;
		width: 200px;
		display: flex;
		flex-direction: column;
	}
	.time_pick{
		display: flex;
		width: 90vw;
		margin-left: 5vw;
		padding-bottom: 4vw;
	}
	.time_img{
		width: 8vw;
		height: 8vw;
		margin-top: -1vw;
	}
	.kerboard_view{
		width: 100vw;
		background-color: #efefef;
	}
	.bottom_view{
		position: absolute;
		bottom: 0;
	}
	.flex_column{
		flex-direction: column;
	}
	.column_item{
		font-size: 20px;
		font-weight: 500;
		border-radius: 10rpx;
		background-color: white;
		text-align: center;
		width: 23.75vw;
		margin-top: 1vw ;
		padding: 2vw 0;
	}
	.zaiji{
		background-color: #e2e2e2;
		font-size: 400;
	}
	.zaijiqvxiao{
		background-color: #e2e2e2;
		font-size: 14px;
		font-weight: 400;
		padding: 3.12vw 0;
	}
	.delete_button{
		width: 6vw;
		position: relative;
		top: 0.5vw;
	}
	.flex_wrap{
		flex-wrap: wrap;
	}
	.accumulate{
		width: 50%;
		position: relative;
		top: 1vw;
	}
	.jia_jian_cheng_chu{
		height: 19.6vw;
	}
</style>
