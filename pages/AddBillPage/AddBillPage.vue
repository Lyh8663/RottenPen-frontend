<template>
	<view class="container">
		<view style="height:var(--status-bar-height);width: 100%;"></view>
		
		<view class="menu">
			<image class="return_image" src="../../static/return.png" @click="returnBack()"></image>
			<view :class="['',this.choosedIndex==0?'active_color':'not']" v-on:click="changeTopIndex(0)">支出</view>
			<view :class="['',this.choosedIndex==1?'active_color':'not']" v-on:click="changeTopIndex(1)">收入</view>
			<view :class="['',this.choosedIndex==2?'active_color':'not']" v-on:click="changeTopIndex(2)">转账</view>	
			<view class="edit_button" ></view>
		</view>
		<!-- 大类型选择 -->
		<view>
			<view class="button_area" v-if="this.choosedIndex==0">
				<view class="button_item" v-for="(item,it) in buttonList" :key="it" @click="changeButton(it,item)">
					<image :src="item.image" :class='buttonIndex==it? "active_button_image":"button_image"'></image>
					<view :class='buttonIndex==it? "active_button_text":"button_text"'>{{item.text}}</view>
				</view>
			</view>
		</view>
		
		<!-- 小类型选择 -->
		<!-- <view class="button_area0">
			<view class="button_item" v-for="(item,index) in this.subButtonList">
				<view  >
					<image :src="item.image" :class='buttonIndex==10? "active_button_image":"button_image"'></image>
					<view :class='buttonIndex==10? "active_button_text":"button_text"'>{{item.text}}</view>
				</view>						
			</view>
		</view> -->
		
		<!-- 大类型选择 -->
		<view>
			<view class="button_area" v-if="this.choosedIndex==1">
				<view class="button_item" v-for="(item,it) in buttonList" :key="it" @click="changeButton(it,item)">
					<image :src="item.image" :class='buttonIndex==it? "active_button_image":"button_image"'></image>
					<view :class='buttonIndex==it? "active_button_text":"button_text"'>{{item.text}}</view>
				</view>
			</view>
		</view>
		
		<!--日期弹出窗设置-->
		<uni-popup :mask-click="false" ref="popup_calender" background-color="#fff" @change="change">
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
		<!-- 普通弹窗 -->
		<uni-popup ref="popup_accountbook" background-color="#fff">
			<view class="popup_accountbook-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
				<text class="accountbook-text">目前您的记账账本</text>
				<view :class="['accountbook-item',accountbookIndex==accountindex?'accountbook-itemChosen':'']" 
				v-for="(accountitem,accountindex) in this.accountBookInfo"
				@click="changeAccountbookIndex(accountitem,accountindex)">
					{{accountitem.title}}
				</view>
				<!-- <view class="accountbook-item" v-for="(accountitem,accountindex) in this.accountBookInfo">
					{{accountitem.title}}
				</view> -->
			</view>
		</uni-popup>
		<!-- 普通弹窗 -->
		<uni-popup ref="popup_fund" background-color="#fff">
			<view class="popup_fund-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
				<text class="fund-text">请选择账本资产</text>
				<view :class="['fund-item', fundIndexChosen==fundindex?'fundbook-itemChosen':'']" 
				v-for="(funditem,fundindex) in this.fundList"
				@click="changeFundIndex(funditem,fundindex)">
					{{funditem.title}}
				</view>
			</view>
		</uni-popup>
		<!--呼出固定键盘-->
		<view class="bottom_view">
			<view class="input_area">
				<view class="add_tag_view">
					<image class="tag_img" src="../../static/add_tag.png"></image>
					<view class="add_tag_text">{{tagchosen}}</view>
				</view>
				<view class="remarks_view">
					<input placeholder-style="color:#808080;font-size:14px" placeholder="添加备注(不超过50字)" maxlength="50" v-model="inputNotes"/>
				</view>
				<view class="number_display">￥{{stringInput}}</view>
			</view>
			<!-- 选择日期 -->
			<view class="choose_view flex_style">
				<view class="choose_item flex_style" @click="toggle('center')">
					<image class="choose_img" src="../../static/today.png"></image>
					<view class="choose_text">{{chooseDate}}</view>
				</view>
				<view class="choose_item flex_style" @click="toggleAccountbook('right')">
					<image class="choose_img" src="../../static/billBook.png"></image>
					<view class="choose_text">{{accountBookChosen}}</view>
				</view>
				<view class="choose_item flex_style" @click="toggleFund('right')">
					<image class="choose_img" src="../../static/account.png"></image>
					<view class="choose_text">{{fundChosen}}</view>
				</view>
				<view class="choose_item flex_style" @click="changeBaoxiao()">
					<image class="choose_img" src="../../static/expenses-.png"></image>
					<view class="choose_text">{{baoxiaoString}}</view>
				</view>
			</view>
			<!--键盘-->
			<view class="kerboard_view flex_style_evenly">
				<view class="column_view flex_style flex_column">
					<view class="column_item" @click="oneClicked()">1</view>
					<view class="column_item" @click="fourClicked()">4</view>
					<view class="column_item" @click="sevenClicked()">7</view>
					<view class="column_item zaijiqvxiao" @click="cleanInput()">清空</view>
				</view>
				<view class="column_view flex_style flex_column">
					<view class="column_item" @click="twoClicked()">2</view>
					<view class="column_item" @click="fiveClicked()">5</view>
					<view class="column_item" @click="eightClicked()">8</view>
					<view class="column_item" @click="zeroClicked()">0</view>
				</view>
				<view class="column_view flex_style flex_column">
					<view class="column_item" @click="threeClicked()">3</view>
					<view class="column_item" @click="sixClicked()">6</view>
					<view class="column_item" @click="nineClicked()">9</view>
					<view class="column_item" @click="pointClicked()">.</view>
				</view>
				<view class="column_view flex_style flex_column">
					<view class="column_item" @click="deleteInput()">
						<image class="delete_button" src="../../static/delete.png" mode="widthFix"></image>
					</view>
					<view class="column_item flex_style flex_wrap zaiji jia_jian_cheng_chu fujian" @click="uploadFujian()">
						<!-- <view class="accumulate" @click="opClicked()">+</view>
						<view class="accumulate" @click="opClicked()">-</view>
						<view class="accumulate" @click="opClicked()">×</view>
						<view class="accumulate" @click="opClicked()">÷</view> -->
						附件上传
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
				//附件内容
				appendix:"http://dummyimage.com/400x400",
				//是否需要报销
				baoxiaoString:"不报销",
				//用户选定账本下的资产信息
				fundList:[],
				//用户选中的资产
				fundChosen:"资产",
				//用户选中的资产index
				fundIndexChosen:0,
				//用户选中的资产id
				fundId:0,
				//用户的账本信息
				accountBookInfo:[],
				//用户选中的账本
				accountBookChosen:"账本",
				//用户选中的账本index
				accountbookIndex:0,
				//选中的记账年份
				billYear:"",
				//选中的记账月份
				billMonth:"",
				//选中的记账日期
				billDate:"",
				//输入的备注信息
				inputNotes:"",
				//选中的tag内容
				tagchosen:"购物消费",
				//后台管理的支出标签
				outcometags:[],
				//后台管理的收入标签
				incometags:[],
				//此处保留的是设置后的时间
				form:{
					str:""
				},
				//时间选择器的模式hour-minute
				mode:'hi',
				//此处是点击设置日期时间“确定”按钮后的时间
				chooseTime:"",
				//此处是点击设置日期时间“确定”按钮后的日期
				chooseDate:"今天",
				info: {
					lunar: true,
					range: true,
					insert: false,
					selected: []
				},
				type:'center',
				//该变量保存输入的金额
				numberInput:"0.00",
				//该变量保存输入的内容
				stringInput:"0.00",
				choosedIndex:"0",
				buttonIndex:"0",
				index:"0",
				//大类型列表
				buttonList:[
					{image:"../../static/tag/gouwuxiaofei.png",text:"购物消费"},
					{image:"../../static/tag/shipin.png",text:"食品餐饮"},
					{image:"../../static/tag/yulexiuxian.png",text:"娱乐休闲"},
					{image:"../../static/tag/jiaotongchuxing.png",text:"出行交通"},
					{image:"../../static/tag/jujia.png",text:"居家"},
					{image:"../../static/tag/wenhuajiaoyu.png",text:"文化教育"},
					{image:"../../static/tag/songli.png",text:"送礼"},
					{image:"../../static/tag/tingzhenqi.png",text:"医疗健康"},
					{image:"../../static/tag/qita.png",text:"其他"},
					{image:"../../static/tag/setting.png",text:"管理"},
				],
				// 将要显示的小类型列表
				subButtonList:[
					{image:"../../static/shoppingg.png",text:"购物消费"},
					{image:"../../static/meal.png",text:"食品餐饮"},
					{image:"../../static/entertainment.png",text:"娱乐休闲"}
				],
				//待选的小类型列表,暂时不要小类型了
				// gouwuxiaofeiList:[],
				// shipincanyinList:[],
				// yulexiuxianList:[],
				// chuxingjiaotongList:[],
				// jujiaList:[],
				// wenhuajiaoyuList:[],
				// songliList:[],
				
				buttonElseList:[
						{image:"",text:"",index:"10"},
						{image:"",text:""},
						{image:"",text:""},
				
				]
			}
		},
		methods: {
			//切换是否报销
			changeBaoxiao(){
				if(this.baoxiaoString =="不报销"){
					this.baoxiaoString = "报销";
				}else{
					this.baoxiaoString = "不报销";
				}
			},
			//切换用户选中资产
			changeFundIndex(funditem,fundindex){
				this.fundChosen = funditem.title;
				this.fundIndexChosen = fundindex;
				this.fundId = funditem.fundId;
			},
			//切换用户选中账本
			changeAccountbookIndex(accountitem,accountindex){
				// this.accountbookIndex = accountindex;
				// this.accountBookChosen = accountitem.title;
				uni.showToast({
					icon:'none',
					title:"请前往首页切换账本"
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
			//上传附件函数
			uploadFujian(){
				uni.showToast({
					title: '暂未开放,敬请期待',
					icon:'none'
				});
			},
			//键盘函数
			oneClicked(){//1
				if(this.stringInput=="0.00"){//第一次输入应当清空
					this.stringInput="";
				}
				this.stringInput=this.stringInput + "1";
			},
			twoClicked(){//2
				if(this.stringInput=="0.00"){//第一次输入应当清空
					this.stringInput="";
				}
				this.stringInput=this.stringInput + "2";
			},
			threeClicked(){//3
				if(this.stringInput=="0.00"){//第一次输入应当清空
					this.stringInput="";
				}
				this.stringInput=this.stringInput + "3";
			},
			fourClicked(){//4
				if(this.stringInput=="0.00"){//第一次输入应当清空
					this.stringInput="";
				}
				this.stringInput=this.stringInput + "4";
			},
			fiveClicked(){//5
				if(this.stringInput=="0.00"){//第一次输入应当清空
					this.stringInput="";
				}
				this.stringInput=this.stringInput + "5";
			},
			sixClicked(){//6
				if(this.stringInput=="0.00"){//第一次输入应当清空
					this.stringInput="";
				}
				this.stringInput=this.stringInput + "6";
			},
			sevenClicked(){//7
				if(this.stringInput=="0.00"){//第一次输入应当清空
					this.stringInput="";
				}
				this.stringInput=this.stringInput + "7";
			},
			eightClicked(){//8
				if(this.stringInput=="0.00"){//第一次输入应当清空
					this.stringInput="";
				}
				this.stringInput=this.stringInput + "8";
			},
			nineClicked(){//9
				if(this.stringInput=="0.00"){//第一次输入应当清空
					this.stringInput="";
				}
				this.stringInput=this.stringInput + "9";
			},
			zeroClicked(){//0
				if(this.stringInput=="0.00"){//第一次输入应当清空
					this.stringInput="";
				}
				this.stringInput = this.stringInput + "0";
			},
			pointClicked(){//.
				if(this.stringInput=="0.00"){
					this.stringInput = "0."
					return;
				}
				this.stringInput = this.stringInput + ".";
			},
			//取消被点击的函数
			cleanInput(){
				//清空输入
				this.stringInput = "0.00";
			},
			//删除按钮被点击的函数
			deleteInput(){
				if(this.stringInput=="0.00"){
					uni.showToast({
						icon:'none',
						title:"已经清空啦"
					})
					return;
				}
				//获取字符串的长度
				var length = this.stringInput.length;
				if(length == 1){
					this.stringInput = "0.00";
				}else{
					this.stringInput = this.stringInput.slice(0,length-1);
				}
			},
			monthSwitch(e) {
				console.log('monthSwitchs 返回:', e)
			},
			//改变序号,呈现分区选中状态
			changeTopIndex(index){
				console.log("点击" + index)
				this.choosedIndex = index;
			},
			//改变序号,呈现按钮选中状态
			changeButton(it,item){
				
				if(item.text=="管理"){
					//前往管理标签的页面
					
					return;
				}
				this.buttonIndex = it;
				this.tagchosen = item.text;
			},
			//返回按钮点击函数
			returnBack(){
				// var pages = getCurrentPages();//获取页面列表
				// var Page = pages[pages.length-1];//获取当前页面
				// var prePage = pages[pages.length-2];//获取上一个页面
				// uni.navigateBack({//返回上一个页面
				// 	delta:1,
				// 	success:(event)=>{//刷新页面的方法
				// 		prePage.$vm.reload();
				// 	}
				// })
				uni.switchTab({
					url:"/pages/HomePage/HomePage"
				})
			},
			//打开日历弹窗
			open() {
				this.$refs.calendar.open()
			},
			//日历中进行日期选择时将选择的日期保存到两个变量中，
			//只有最后点击“确认”才会把日期保存到chooseDate中
			change(e) {
				// console.log('change 返回:', e);
				var _this = this;
				_this.billMonth = e.month;
				_this.billDate = e.date;
				console.log('fanhui',this.billMonth);
			},
			//点击弹窗里的“取消”按钮，此时取消弹窗，不保存数据
			closePop(){
				this.$refs.popup_calender.close();
				this.chooseDate = "今天"
			},
			//点击弹窗的“确认”按钮后将日期时间保存到相应的两个变量里
			closePopEnsure(){
				var _this = this;
				this.chooseDate = _this.billMonth + "-" + _this.billDate;
				this.chooseTime = this.form.str;
				console.log("选中了" + this.chooseDate);
				this.$refs.popup_calender.close();
			},
			//关闭弹窗popup_calender
			close() {
				this.$refs.popup_calender.close()
			},
			//打开popup_calender
			toggle(type) {
				this.type = type
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup_calender.open(type)
			},
			//打开popup_account
			toggleAccountbook(type){
				this.type = type;
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup_accountbook.open(type);
			},
			toggleFund(type){
				this.type = type;
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup_fund.open(type);
			},
			//校验是否为数字的方法（正负整数，正负浮点数以及0）,是数字则返回true
			isNum(val){
				var regPos = /^[0-9]+.?[0-9]*/;
				if(regPos.test(val) ){
				    return true;
				}else{
			        return false;
			    }
			},
			//记账确认按钮，判断numberInput是否为0
			uploadData(){
				var that = this;
				
				if(this.stringInput=="0.00"){//金额默认值判断
					uni.showToast({
						title:"请输入有效金额！",
						icon:"none",
						duration:2000
					})
					return;
				}
				if(!this.isNum(this.stringInput)){//判断是否为数字
					uni.showToast({
						title:"请输入有效金额！",
						icon:"none",
						duration:2000
					})
					return;
				}
				//根据支出,收入,转账分区,来决定本页面的数据如何使用
				//choosedIndex  0:支出  1:收入  2:转账
				if(this.choosedIndex==0){//请求支出
					//先获取参数
					
					//1.获取tagId
					var tagTitle = this.tagchosen;
					var tagId = 0;
					for(var i = 0;i<this.outcometags.length;i++){
						if(this.outcometags[i].text==tagTitle){
							tagId = this.outcometags[i].id;
						}
					}
					
					//2.获取fundId
					
				
					uni.request({
						url:getApp().globalData.envprefix + "/admin-api/lbt/extends/bill/create",
						method:'POST',
						header:{
							"tenant-id":1,
							"Authorization": 'Bearer ' + getApp().globalData.accessToken
						},
						data:{
							"enumType":1,
							"tagId":tagId,
							"year": that.billYear,
							"notes": that.inputNotes,
							"enumBudget": 1,
							"enumWay": null,
							"day": that.billDate,
							"fundId":that.fundId,
							"accountBookId": getApp().globalData.accountBookId,
							"money": Number(that.stringInput),
							"enumRefund":null,
							"enumInout": 1,
							"month":Number(that.billMonth),
							"appendixImgUrl": that.appendix
						},
						success(res) {
							console.log("tagId " + tagId);
							console.log("year " + that.billYear);
							console.log("notes " + that.inputNotes);
							console.log("day " + that.billDate);
							console.log("fundId " + that.fundId);
							console.log("accountBookId " + getApp().globalData.accountBookId);
							console.log("money " + Number(that.stringInput));
							console.log("month " + that.billMonth);
							console.log("appendixImgUrl " + that.appendix)
							if(res.data.code!=200){
								console.log("新增记账信息失败");
								uni.showToast({
									icon:'none',
									title:"新增记账信息失败"
								})
								return;
							}
							console.log("新增记账信息成功");
							uni.showToast({
								icon:'none',
								title:"记录成功"
							})
						}
					})
				}else if(this.choosedIndex==1){//请求收入
					
				}else{//转账
					
				}
			},
			//加减乘除被点击时
			opClicked(){
				uni.showToast({
					title:"敬请期待",
					icon:"none"
				})
			}
		},
		onLoad(){
			//加载需要的数据信息
			var that = this;
			var accountBookId = getApp().globalData.accountBookId;
			
			//获取今天的日期,填入内容中[tYear,tMonth,tDate,tDay]
			this.billYear = this.getAnyDate(0)[0];
			this.billMonth = this.getAnyDate(0)[1];
			this.billDate = this.getAnyDate(0)[2];
			this.chooseDate = this.billMonth + "-" + this.billDate;
			
			//发起请求,获取当前用户的tag
			uni.request({
				url:getApp().globalData.envprefix + "/admin-api/lbt/extends/tag/get/tags",
				method:'GET',
				header:{
					'tenant-id':1,
					'Authorization':"Bearer " + getApp().globalData.accessToken
				},
				success(res){
					// console.log(res.data.code);
					// console.log("Bearer " + getApp().globalData.accessToken)
					if(res.data.code!=200){
						console.log("tag信息加载错误");
						return;
					}
					that.outcometags = res.data.data.outcomeTag;
					that.incometags = res.data.data.incomeTag;
					console.log("tag信息加载成功");
				}
			})
			
			//发起请求,获取用户的账本
			uni.request({//获取所有账本信息
				url: getApp().globalData.envprefix + '/admin-api/lbt/extends/accountbook/get',
				header:{
					"tenant-id":1,
					"Authorization": 'Bearer ' + getApp().globalData.accessToken
				},
				success(res) {
					// console.log(res.data.data);
					// console.log(res.data.code);
					//确定有账本以后
					if(res.data.code!=200){
						console.log("用户的账本信息加载失败");
						return;
					}
					//显示用户当前选择的账本
					var tempindex = 0;
					for(var i = 0;i<res.data.data.length;i++){
						if(getApp().globalData.accountBookId== res.data.data[i].id){
							that.accountBookInfo = res.data.data;
							that.accountBookChosen = res.data.data[i].title;
							that.accountbookIndex = Number(i);
							tempindex = i;
						}
					}
					// that.accountBookInfo = res.data.data;
					// that.accountBookChosen = res.data.data[res.data.data.length-1].title;
					// that.accountbookIndex = Number(res.data.data.length-1);
					// console.log(accountbookIndex)
					console.log("用户的账本信息已加载");
					
					var initAccountbookId = res.data.data[tempindex].id;
					var _that = that;
					//查询用户账本信息下的资产
					uni.request({
						url: getApp().globalData.envprefix + '/admin-api/lbt/extends/fund/get',
						header:{
							"tenant-id":1,
							"Authorization": 'Bearer ' + getApp().globalData.accessToken
						},
						data:{
							'accountBookId':initAccountbookId
						},
						success(res){
							if(res.data.code!=200){
								console.log("根据账本获得资产失败");
								return;
							}
							_that.fundList = res.data.data.fundExtendsGetVOList;//用户选定账本下的资产信息
							_that.fundChosen = res.data.data.fundExtendsGetVOList[res.data.data.fundExtendsGetVOList.length-1].title;//用户选中的资产
							_that.fundIndexChosen = res.data.data.fundExtendsGetVOList.length-1;//用户选中的资产index
							_that.fundId = res.data.data.fundExtendsGetVOList[res.data.data.fundExtendsGetVOList.length-1].fundId;
							// console.log(_that.fundId);
							console.log("根据账本获得资产成功");
						}
					})
				}
			})
			
			
			
			
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
		width: 5vw;
		height: 5vw;
		margin-right: 3vw;
	}
	.choose_text{
		font-size: 24rpx;
	}
	.flex_style{
		display: flex;
		justify-content: space-between;
		align-items: center;
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
	/* 账本弹框布局 */
	.popup_accountbook-content{
		display: flex;
		align-items: center;
		justify-content: center; 
		background-color: #FCC637;
		/* width:100%; */
		height:100%;
	}
	.accountbook-text{
		margin-bottom: 5vw;
		color: #072750FF;
		font-size: 30rpx;
		font-weight: 600;
	}
	.accountbook-item{
		width: 80%;
		height: 70rpx;
		background-color: white;
		margin-bottom: 5vw;
		border-radius: 50rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
	}
	.accountbook-itemChosen{
		font-weight: 600;
		color: white;
		background-color: #072750FF;
	}
	.fujian{
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
	}
	
	.popup_fund-content{
		display: flex;
		align-items: center;
		justify-content: center; 
		background-color: #FCC637;
		/* width:100%; */
		height:100%;
	}
	.fund-text{
		margin-bottom: 5vw;
		color: #072750FF;
		font-size: 30rpx;
		font-weight: 600;
	}
	.fund-item{
		width: 80%;
		height: 70rpx;
		background-color: white;
		margin-bottom: 5vw;
		border-radius: 50rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
	}
	.fundbook-itemChosen{
		font-weight: 600;
		color: white;
		background-color: #072750FF;
	}
</style>
