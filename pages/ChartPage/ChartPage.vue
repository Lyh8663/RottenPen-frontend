<template>
	<view class="container">
		<view style="height:var(--status-bar-height);width: 100%;"></view>
		<!-- 顶部切换按钮 -->
		<view class="topBar">
			<view :class="['',this.choosedIndex==0?'active_color':'not']" v-on:click="change(0)">日常</view>
			<view :class="['',this.choosedIndex==1?'active_color':'not']" v-on:click="change(1)">月统计</view>
			<view :class="['',this.choosedIndex==2?'active_color':'not']" v-on:click="change(2)">年统计</view>
			<view :class="['',this.choosedIndex==3?'active_color':'not']" v-on:click="change(3)">自定义</view>	
			<image class="calender_image" src="../../static/calendarpage.png" @click="toCanlender()"></image>
		</view>
		<!--日常区域-->
		<scroll-view @touchmov.stop :class="['daily_area commen_area',this.choosedIndex==0?'':'notplay']" scroll-y="true">
			<view class="column_area">
				<view class="title_bar">
					<view class="title_left" @click="changeInAndOut()">
						<view class="text0">支出</view>
						<image class="switch_button" src="../../static/switch.png"></image>
					</view>
					<view class="title_right">
						<view :class="['',this.timeChoosedIndex==0?'f_active_color':'not']" v-on:click="changeTime(0)">近七日</view>
						<view :class="['',this.timeChoosedIndex==1?'f_active_color':'not']" v-on:click="changeTime(1)">本周</view>
					</view>
				</view>
				<!-- 支出统计表数据 -->
				<view>
				    <histogram-chart
				            :dataAs="histogramData"
				            canvasId="ht"
				            labelKey="label"
				            valueKey="value"
				            :yAxisAs="{
				                formatter: {
									//type:number percent String,额外参数:fixed:NUmber,name:String
				                    type: 'Number',
									fixed: 2,
									name: '元'
				                }
				            }"
				        />
				</view>
			</view>
			<!-- 日常-支出-收支信息 -->
			<view class="info">
				<view class="info_item">
					<view class="text1">总收入</view>
					<view class="text2">{{rctotalincome}}</view>
				</view>
				<view class="info_item">
					<view class="text1">日均收入</view>
					<view class="text2">{{rcdailyincome}}</view>
				</view>
				<view class="info_item">
					<view class="text1">总支出</view>
					<view class="text2">{{rctotaloutcome}}</view>
				</view>
				<view class="info_item">
					<view class="text1">日均支出</view>
					<view class="text2">{{rcdailyoutcome}}</view>
				</view>
			</view>
			<!-- 日常-资产 -->
			<view class="column_area">
				<view class="title_bar">
					<view class="title_left">
						<view class="text0">资产</view>
					</view>
					<view class="title_right">
						<view :class="['',this.properChoosedIndex==0?'f_active_color':'not']" v-on:click="changeProperty(0)">净资产</view>
						<view :class="['',this.properChoosedIndex==1?'f_active_color':'not']" v-on:click="changeProperty(1)">负债</view>
					</view>
				</view>
				<view class="ring_view">
					<view class="ring_chart">
						<ring-chart 
							:dataAs="pieData"
							canvasId="index_ring_0"
							:titleAs="{
								title: {
									name: ''
								},
								subtitle: {
									name: '￥ 24293'
								}
							}"
						/>
					</view>
				</view>			
			</view>
		</scroll-view>
		
		<!--月统计-->
		<scroll-view @touchmov.stop  :class="['month_area commen_area',this.choosedIndex==1?'':'notplay']" scroll-y="true">
			<!-- 月统计顶部收入支出结余 -->
			<view class="month_info_area" @click="toggle('center')">
				<view class="month_info_item" v-for="(info,i) in monthInfoList" :key="i">
					<view class="text1">{{info.text1}}</view>
					<view class="text2">{{info.text2}}</view>
				</view>
			</view>
			<!-- 月统计-收支统计表 -->
			<view class="column_area">
				<view class="title_bar">
					<view class="text0">收支统计</view>
					<view class="title_right">
						<view :class="['',this.monthChoosedIndex==0?'f_active_color':'not']" v-on:click="changeMonthInfo(0)">支出</view>
						<view :class="['',this.monthChoosedIndex==1?'f_active_color':'not border_set']" v-on:click="changeMonthInfo(1)">收入</view>
						<view :class="['',this.monthChoosedIndex==2?'f_active_color':'not']" v-on:click="changeMonthInfo(2)">结余</view>
					</view>
				</view>
				<view>
				    <histogram-chart						
				            :dataAs="histogramDataMonth"
				            canvasId="ht1"
				            labelKey="label"
				            valueKey="value"
				            :yAxisAs="{
								
				                formatter: {
				                    type: 'Number' //type:number percent String,额外参数:fixed:NUmber,name:String
									
								}
				            }"
				        />
				</view>
				
			</view>
			
			<!-- 月统计-支出占比表 -->
			<view class="column_area">
				<view class="title_bar">
					<view class="title_left">
						<view class="text0">支出占比</view>
						<image class="switch_button" src="../../static/switch.png"></image>
					</view>
					<view class="month_bill_text">当月账单</view>
				</view>
				<view class="ring_view">
					<view class="ring_chart_1">
						<ring-chart 
							:dataAs="pieDataMonth"
							canvasId="index_ring_1"
							:titleAs="{
								title: {
									name: ''
								},
								subtitle: {
									name: '￥ 24293'
								}
							}"
						/>
					</view>
				</view>	
				<view class="type_number_percent" v-for="(proMon,pm) in progressDataMonth" :key="pm">
					<image class="type_image" :src="proMon.img"></image>
					<view class="middle_area">
						<view class="middle_up">
							<view class="middle_type">{{proMon.type}}</view>
							<view class="common_middle">{{proMon.number}} {{proMon.percent}}%</view>
						</view>
						<view class="progress-box">
							<progress :percent="proMon.percent"  stroke-width="2" :activeColor="proMon.activeColor" backgroundColor="#f6f6f6"/>
						</view>
					</view>
					<view class="total">{{proMon.money}}</view>
				</view>
			</view>
			
			<!-- 月统计-资产走势表 -->
			<view class="line">
				<view class="title_bar_else">
					<view class="text3_else">资产走势</view>
					<view>
						<view  @click="hideLineChart()" v-if="isShowLineChart">
							<image class="up_down_button" :src="downImage"/>
						</view>
						<view  @click="showLineChart()" v-else>
							<image class="up_down_button" :src="upImage"/>
						</view>
					</view>
				</view>
				<view :class="['',this.imgChoosedIndex==0?'':'notplay']">
					<line-chart canvasId="index_line_month" :dataAs="lineDataMonth" />
				</view>				
			</view>
			
			<!-- 月统计-收支报表 -->
			<view class="column_area">
				<view class="title_bar">
					<view class="text3">收支报表</view>
					<view class=""></view>
				</view>
				<view class="date_ex_in_ba">
					<view class="text0">日期</view>
					<view class="text0">支出</view>
					<view class="text0">收入</view>
					<view class="text0">结余</view>
				</view>
				<view class="date_ex_in_ba" v-for="(item,i) in dateExInBa" :key="i">
					<view class="text_date">{{item.date}}</view>
					<view class="text_ex">{{item.ex}}</view>
					<view class="text_in">{{item.in}}</view>
					<view class="text_ba">{{item.ba}}</view>
				</view>
			</view>
			
			<!--月统计弹出窗-->
			<uni-popup :mask-click="true" ref="popup" background-color="transparent" @change="change">
				<view class="chart_popup">
					<view class="chart_view">
						<view class="chart_item" v-for="(md,m) in monthChartData" :key="m">
							<view class="chart_text">{{md.text1}}</view>
							<view class="chart_data">{{md.text2}}</view>
						</view>	
					</view>
					<!-- <image @click="close()" class="chart_cancel" src="../../static/cancel_chart.png"></image>	 -->
				</view>			
			</uni-popup>
		</scroll-view>
		
		<!--年统计-->
		<scroll-view @touchmov.stop :class="['year_area commen_area',this.choosedIndex==2?'':'notplay']" scroll-y="true">
			<!-- 年统计顶部内容 -->
			<view class="month_info_area" @click="toggleYear('center')">
				<view class="month_info_item" v-for="(info,i) in yearInfoList" :key="i">
					<view class="text1">{{info.text1}}</view>
					<view class="text2">{{info.text2}}</view>
				</view>
			</view>
			
			<!-- 年统计-收支统计 -->
			<view class="column_area">
				<view class="title_bar">
					<view class="text0">收支统计</view>
					<view class="title_right">
						<view :class="['',this.yearChoosedIndex==0?'f_active_color':'not']" v-on:click="changeYearInfo(0)">支出</view>
						<view :class="['',this.yearChoosedIndex==1?'f_active_color':'not border_set']" v-on:click="changeYearInfo(1)">收入</view>
						<view :class="['',this.yearChoosedIndex==2?'f_active_color':'not']" v-on:click="changeYearInfo(2)">结余</view>
					</view>
				</view>	
				<view>
				    <histogram-chart
							
				            :dataAs="histogramDataYear"
				            canvasId="ht2"
				            labelKey="label"
				            valueKey="value"
				            :yAxisAs="{
								
				                formatter: {
				                    type: 'Number' //type:number percent String,额外参数:fixed:NUmber,name:String
									
								}
				            }"
				        />
				</view>
			</view>
			
			<!-- 年统计-支出占比 -->
			<view class="column_area">
				<view class="title_bar">
					<view class="title_left">
						<view class="text0">支出占比</view>
						<image class="switch_button" src="../../static/switch.png"></image>
					</view>
					<view class=""></view>
				</view>
				<view class="ring_view">
					<view class="ring_chart">
						<ring-chart 
							:dataAs="pieDataYear"
							canvasId="index_ring_2"
							:titleAs="{
								title: {
									name: ''
								},
								subtitle: {
									name: '￥ 24293'
								}
							}"
						/>
					</view>
				</view>	
				<view class="type_number_percent" v-for="(proY,py) in progressDataYear" :key="py">
					<image class="type_image" :src="proY.img"></image>
					<view class="middle_area">
						<view class="middle_up">
							<view class="middle_type">{{proY.type}}</view>
							<view class="common_middle">{{proY.number}} {{proY.percent}}%</view>
						</view>
						<view class="progress-box">
							<progress :percent="proY.percent"  stroke-width="2" :activeColor="proY.activeColor" backgroundColor="#f6f6f6"/>
						</view>
					</view>
					<view class="total">{{proY.money}}</view>
				</view>
			</view>
			
			<!-- 年统计-资产走势 -->
			<view class="line">
				<view class="title_bar">
					<view class="text3_else">资产走势</view>
					<view class=""></view>
				</view>
				<line-chart canvasId="index_line_year" :dataAs="lineDataYear" />				
			</view>
			
			<!-- 年统计-收支报表 -->
			<view class="column_area">
				<view class="title_bar">
					<view class="text0">收支报表</view>
					<view class=""></view>
				</view>
				<view class="date_ex_in_ba">
					<view class="text0">日期</view>
					<view class="text0">支出</view>
					<view class="text0">收入</view>
					<view class="text0">结余</view>
				</view>
				<view class="date_ex_in_ba" v-for="(item,i) in dateExInBa" :key="i">
					<view class="text_date">{{item.date}}</view>
					<view class="text_ex">{{item.ex}}</view>
					<view class="text_in">{{item.in}}</view>
					<view class="text_ba">{{item.ba}}</view>
				</view>
			</view>
			
			<!--年统计-弹出窗设置-->
			<uni-popup :mask-click="true" ref="popupYear" background-color="transparent" @change="change">
				<view class="chart_popup">
					<view class="chart_view">
						<view class="chart_item" v-for="(yd,y) in yearChartData" :key="y">
							<view class="chart_text">{{yd.text1}}</view>
							<view class="chart_data">{{yd.text2}}</view>
						</view>	
					</view>
					<!-- <image @click="close()" class="chart_cancel" src="../../static/cancel_chart.png"></image>	 -->
				</view>			
			</uni-popup>
		</scroll-view>
		
		
		<!--自定义
		<scroll-view :class="['daily_area',this.choosedIndex==3?'':'notplay']">
			这是自定义
		</scroll-view>-->
		
	</view>
</template>

<script>
	//引入图标组件
	import HistogramChart from '@/components/stan-ucharts/HistogramChart.vue';
	import RingChart from '@/components/stan-ucharts/RingChart.vue';
	import PieChart from '@/components/stan-ucharts/PieChart.vue';
	import LineChart from '@/components/stan-ucharts/LineChart.vue';
	export default {
		name: 'Index',
		    components: {
		        HistogramChart,
				RingChart,
				PieChart,
				LineChart,
		    },
		data() {
			return {
				//日常总收入
				rctotalincome:0,
				//日常总支出
				rctotaloutcome:0,
				//日常日均支出
				rcdailyoutcome:0,
				//日常日均收入
				rcdailyincome:0,
				//控制日常分区处  切换(支出/收入)
				dailyInAndOut:0,
				//控制月统计-资产走势栏目的显示和隐藏
				imgChoosedIndex:"0",
				isShowLineChart:"true",
				//向上的箭头 图片地址
				upImage:"../../static/up.png",
				//向下的箭头 图片地址
				downImage:"../../static/down.png",
				//年统计-收支统计处 切换(支出/收入/结余)
				yearChoosedIndex:"0",
				//月统计-收支统计
				monthChoosedIndex:"0",
				titleName:"总资产",
				titleSubname:"2222.3",
				//日常-资产处 切换(净资产/负债)
				properChoosedIndex:"0",
				//控制本页上方切换菜单(日常/月统计/年统计/自定义)
				choosedIndex:"0",
				//日常-支出处 切换(近七日/本周)
				timeChoosedIndex:"0",
				//月统计-弹出窗内容
				monthChartData:[
					{text1:"月收入",text2:"3243.45"},{text1:"月支出",text2:"3243.45"},{text1:"月结余",text2:"3243.45"},
					{text1:"日均收入",text2:"3243.45"},{text1:"日均支出",text2:"3243.45"},{text1:"日均结余",text2:"3243.45"},
					{text1:"报销",text2:"3243.45"},{text1:"报销到账",text2:"3243.45"},{text1:"待报销",text2:"3243.45"},
					{text1:"借入",text2:"3243.45"},{text1:"借出",text2:"3243.45"},{text1:"退款",text2:"3243.45"},
					{text1:"转账",text2:"3243.45"},{text1:"还款",text2:"3243.45"},{text1:"收款",text2:"3243.45"},
				],
				//年统计弹出窗内容
				yearChartData:[
					{text1:"年收入",text2:"3243.45"},{text1:"年支出",text2:"3243.45"},{text1:"年结余",text2:"3243.45"},
					{text1:"月均收入",text2:"3243.45"},{text1:"月均支出",text2:"3243.45"},{text1:"月均结余",text2:"3243.45"},
					{text1:"报销",text2:"3243.45"},{text1:"报销到账",text2:"3243.45"},{text1:"待报销",text2:"3243.45"},
					{text1:"借入",text2:"3243.45"},{text1:"借出",text2:"3243.45"},{text1:"退款",text2:"3243.45"},
					{text1:"转账",text2:"3243.45"},{text1:"还款",text2:"3243.45"},{text1:"收款",text2:"3243.45"},
				],
				//月统计-资产走势(！！！此处的date默认单位是千)
				lineDataMonth: {
					categories: ['1', '2', '3', '4','5','6','7', '8', '9', '10','11','12'],
					series: [
						{ name: '变化', data: [-2.3, 10.5, 3.4, 4, 2.93, 1, 9.2, 3.4, 4, 2.93, 1, 9.2] },
					]
				},
				//年统计-资产走势(！！！此处的date默认单位是千)
				lineDataYear: {
					categories: ['1', '2', '3', '4','5','6','7', '8', '9', '10','11','12'],
					series: [
						{ name: '', data: [2.3, 10.5, 3.4, 4, 2.93, 1, 9.2, 3.4, 4, 2.93, 1, 9.2] },
					]
				},
				//日常的柱状统计图
				histogramData: {
				               //柱状图Compent  //label应为series value 应为
				               label: ['周一', '周二', '周三', '周四','周四','周四','周四'],
				               value: [
				                   {
				                       name: '支出',
				                       data: [23, 115, 34, 4, 223, 100, 92]
				                   }
				               ],
				           },
				//月统计的柱状统计图
				histogramDataMonth: {
				               //柱状图Compent  //label应为series value 应为
				               label: ['1', '2', '3', '4','5','6','7', '8', '9', '10','11','12',
							   '13', '14', '15','16','17', '18', '19', '20','21','22',
							    '23', '24','25','26','27', '28', '29','30','31'],
				               value: [
				                   {
				                       name: '支出',
				                       data: [2.3, 10.5, 3.4, 4, 2.93, 1, 9.2, 3.4, 4, 2.93, 1, 9.2,
									   2.3, 10.5, 3.4, 4, 2.93, 1, 9.2, 3.4, 4, 2.93, 1, 9.2,
									   2.3, 10.5, 3.4, 4, 2.93, 1, 9.2, 3.4]
				                   }
				               ],
							   
												
				           },
				//年统计的柱状统计图
				histogramDataYear: {
				               //柱状图Compent  //label应为series value 应为
				               label: ['1', '2', '3', '4','5','6','7', '8', '9', '10','11','12'],
				               value: [
				                   {
				                       name: '支出',
				                       data: [2.3, 10.5, 3.4, 4, 2.93, 1, 9.2, 3.4, 4, 2.93, 1, 9.2]
				                   }
				               ],
							   
												
				           },
				infoList:[
					{text1:"总收入：",text2:"852.00"},
					{text1:"日均支出：",text2:"121.56"},
					{text1:"总收入：",text2:"0"},
					{text1:"日均收入：",text2:"21.34"},
				],
				//日常的环状图
				pieData: {
					//饼状图数据
					series: [
						{
							name: '支付宝',
							data: 245
						},
						{
							name: '微信',
							data: 24
						},
						{
							name: '现金',
							data: 134
						},
						{
							name: '农行',
							data: 34
						}
					]
				},
				//月统计的环状图
				pieDataMonth: {
					//饼状图数据
					series: [
						{
							name: '食品餐饮',
							data: 55.78
						},
						{
							name: '购物消费',
							data: 30.90
						},
						{
							name: '出行交通',
							data: 206.67
						},
						{
							name: '健康医疗',
							data: 234
						}
					]
				},
				//此列表内容和上面的环状图数据对应
				progressDataMonth:[
					{img:"../../static/diet.png",type:"食品餐饮",number:"17笔",percent:"31.5",activeColor:"#B0153C",money:"234.90"},
					{img:"../../static/diet.png",type:"购物消费",number:"12笔",percent:"34",activeColor:"#D84E5F",money:"234.90"},
					{img:"../../static/diet.png",type:"出行交通",number:"11笔",percent:"34.5",activeColor:"#E88684",money:"234.90"},
					{img:"../../static/diet.png",type:"健康医疗",number:"4笔",percent:"21.5",activeColor:"#F7B89D",money:"234.90"},
				],
				//年统计的环状图
				pieDataYear: {
					//饼状图数据
					series: [
						{
							name: '食品餐饮',
							data: 55.78
						},
						{
							name: '购物消费',
							data: 30.90
						},
						{
							name: '出行交通',
							data: 206.67
						},
						{
							name: '健康医疗',
							data: 234
						}
					]
				},
				//此列表内容和上面的环状图数据对应
				progressDataYear:[
					{img:"../../static/diet.png",type:"食品餐饮",number:"17笔",percent:"31.5",activeColor:"#B0153C",money:"234.90"},
					{img:"../../static/diet.png",type:"购物消费",number:"12笔",percent:"34",activeColor:"#D84E5F",money:"234.90"},
					{img:"../../static/diet.png",type:"出行交通",number:"11笔",percent:"34.5",activeColor:"#E88684",money:"234.90"},
					{img:"../../static/diet.png",type:"健康医疗",number:"4笔",percent:"21.5",activeColor:"#F7B89D",money:"234.90"},
				],
				monthInfoList:[
					{text1:"月收入",text2:"2324.2"},
					{text1:"月支出",text2:"243"},
					{text1:"月结余",text2:"123.34"},
				],
				yearInfoList:[
					{text1:"年收入",text2:"2324.2"},
					{text1:"年支出",text2:"243"},
					{text1:"年结余",text2:"123.34"},
				],
				dateExInBa:[
					{date:"01-13",ex:"32.32",in:"0.32",ba:"23.13"},
					{date:"01-13",ex:"32.32",in:"0.32",ba:"23.13"},
					{date:"01-13",ex:"32.32",in:"0.32",ba:"23.13"},
					{date:"01-13",ex:"32.32",in:"0.32",ba:"23.13"},
					{date:"01-13",ex:"32.32",in:"0.32",ba:"23.13"},
					{date:"01-13",ex:"32.32",in:"0.32",ba:"23.13"},
				],
				
			}
		},
		methods: {
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
			//日常分区处 切换(支出/收入)
			changeInAndOut(){
				// this.dailyInAndOut = index;
				if(this.dailyInAndOut == 0){//0: 支出
					this.dailyInAndOut = 1;
					
					//获取收入信息
					
					//首先查看,选择了什么标签 timeChoosedIndex
					if(this.timeChoosedIndex==0){//要查询近七日的数据
						
						//发起查询近七天数据的请求
						
					}else if(this.timeChoosedIndex==1){//要查询本周的数据
						
					}
					
				}else{//1: 收入
					this.dailyInAndOut = 0;
					// 获取支出信息
				}
			},
			//顶部区域按钮被点击时的函数
			change(index){
				//console.log(index) 可以正常传入
				if(index == 0){
					this.choosedIndex = 0
				}else if(index == 1){
					this.choosedIndex = 1
				}else if(index == 2){
					this.choosedIndex = 2
				}else if(index == 3){
					// this.choosedIndex = 3
					uni.showToast({
						title: '暂未开通,敬请期待',
						icon:'none'
					});
				}
				
			},
			//日常分区-选择(近七日/本周)
			changeTime(index){
				//console.log(index) 可以正常传入
				if(index == 0){
					this.timeChoosedIndex = 0
					//console.log(this.daytime)
				}else if(index == 1){
					this.timeChoosedIndex = 1
				}
				
			},
			//月统计-收支统计处 切换(支出/收入/结余)
			changeMonthInfo(index){
				if(index == 0){
					this.monthChoosedIndex = 0
					//console.log(this.daytime)
				}else if(index == 1){
					this.monthChoosedIndex = 1
				}else if(index == 2){
					this.monthChoosedIndex = 2
				}
			},
			//年统计-收支统计处 切换(支出/收入/结余)
			changeYearInfo(index){
				if(index == 0){
					this.yearChoosedIndex = 0
					//console.log(this.daytime)
				}else if(index == 1){
					this.yearChoosedIndex = 1
				}else if(index == 2){
					this.yearChoosedIndex = 2
				}
			},
			//日常-资产处,选择(净资产/负债)
			changeProperty(index){
				//console.log(index) 可以正常传入
				if(index == 0){
					this.properChoosedIndex = 0
					//console.log(this.daytime)
				}else if(index == 1){
					this.properChoosedIndex = 1
				}
			},
			//前往日历查询页面
			toCanlender(){
				uni.navigateTo({
					url:"../CanlenderPage/CanlenderPage"
				})
			},
			showLineChart(){
				this.imgChoosedIndex == "0";
				this.isShowLineChart = "true"
			},
			hideLineChart(){
				// this.imgChoosedIndex == "1";
				this.isShowLineChart = "false"
			},
			//popup弹窗所使用的方法
			close() {
				this.$refs.popup.close()
			},
			toggleYear(type) {
				this.type = type
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popupYear.open(type)
			},
			
			toggle(type) {
				this.type = type
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open(type)
			},
		},
		onLoad() {
			var that = this;
			var rctotalincome = 0;
			var rctotaloutcome = 0;
			var rcdailyincome = 0;
			var rcdailyoutcome = 0;
			var outcomedatatemp = [];
			var incomedatatemp = [];
			
			//进入图标页面的时候，需要提前加载数据
			
			//日常-支出/收入是第一个显示的
			
			//查询近七日的支出/收入
			uni.request({
				url:getApp().globalData.envprefix + "/admin-api/lbt/extends/data/bill/calendar",
				header:{
					"tenant-id":1,
					"Authorization":"Bearer " + getApp().globalData.accessToken
				},
				data:{
					'accountBookId':getApp().globalData.accountBookId,
					'day':that.getAnyDate(-6)[2] + "," + that.getAnyDate(-6)[2],
					'month':that.getAnyDate(-6)[1],
					'year':that.getAnyDate(-6)[0]
				},
				success(res){
					if(res.data.code!=200){
						console.log(that.getAnyDate(-6)[0] + "年" + that.getAnyDate(-6)[1] + "月" + that.getAnyDate(-6)[2] + "日" + "的请求失败")
						return;
					}
					console.log(that.getAnyDate(-6)[0] + "年" + that.getAnyDate(-6)[1] + "月" + that.getAnyDate(-6)[2] + "日" + "的请求成功")
					
					//成功后处理返回的数据
					rctotalincome += res.data.data.income;//总收入
					rctotaloutcome += res.data.data.outcome;//总支出
					incomedatatemp.push(res.data.data.income);//收入数组
					outcomedatatemp.push(res.data.data.outcome);//支出数组
					
					//处理完毕，再次发起请求
					uni.request({
						url:getApp().globalData.envprefix + "/admin-api/lbt/extends/data/bill/calendar",
						header:{
							"tenant-id":1,
							"Authorization":"Bearer " + getApp().globalData.accessToken
						},
						data:{
							'accountBookId':getApp().globalData.accountBookId,
							'day':that.getAnyDate(-5)[2] + "," + that.getAnyDate(-5)[2],
							'month':that.getAnyDate(-5)[1],
							'year':that.getAnyDate(-5)[0]
						},
						success(res) {
							if(res.data.code!=200){
								console.log(that.getAnyDate(-5)[0] + "年" + that.getAnyDate(-5)[1] + "月" + that.getAnyDate(-5)[2] + "日" + "的请求失败")
								return;
							}
							console.log(that.getAnyDate(-5)[0] + "年" + that.getAnyDate(-5)[1] + "月" + that.getAnyDate(-5)[2] + "日" + "的请求成功")
							
							//成功后处理返回的数据
							rctotalincome += res.data.data.income;//总收入
							rctotaloutcome += res.data.data.outcome;//总支出
							incomedatatemp.push(res.data.data.income);//收入数组
							outcomedatatemp.push(res.data.data.outcome);//支出数组
							
							//处理完毕，再次发起请求
							uni.request({
								url:getApp().globalData.envprefix + "/admin-api/lbt/extends/data/bill/calendar",
								header:{
									"tenant-id":1,
									"Authorization":"Bearer " + getApp().globalData.accessToken
								},
								data:{
									'accountBookId':getApp().globalData.accountBookId,
									'day':that.getAnyDate(-4)[2] + "," + that.getAnyDate(-4)[2],
									'month':that.getAnyDate(-4)[1],
									'year':that.getAnyDate(-4)[0]
								},
								success(res) {
									if(res.data.code!=200){
										console.log(that.getAnyDate(-4)[0] + "年" + that.getAnyDate(-4)[1] + "月" + that.getAnyDate(-4)[2] + "日" + "的请求失败")
										return;
									}
									console.log(that.getAnyDate(-4)[0] + "年" + that.getAnyDate(-4)[1] + "月" + that.getAnyDate(-4)[2] + "日" + "的请求成功")
									
									//成功后处理返回的数据
									rctotalincome += res.data.data.income;//总收入
									rctotaloutcome += res.data.data.outcome;//总支出
									incomedatatemp.push(res.data.data.income);//收入数组
									outcomedatatemp.push(res.data.data.outcome);//支出数组
									
									//处理完毕，再次发起请求
									uni.request({
										url:getApp().globalData.envprefix + "/admin-api/lbt/extends/data/bill/calendar",
										header:{
											"tenant-id":1,
											"Authorization":"Bearer " + getApp().globalData.accessToken
										},
										data:{
											'accountBookId':getApp().globalData.accountBookId,
											'day':that.getAnyDate(-3)[2] + "," + that.getAnyDate(-3)[2],
											'month':that.getAnyDate(-3)[1],
											'year':that.getAnyDate(-3)[0]
										},
										success(res) {
											if(res.data.code!=200){
												console.log(that.getAnyDate(-3)[0] + "年" + that.getAnyDate(-3)[1] + "月" + that.getAnyDate(-3)[2] + "日" + "的请求失败")
												return;
											}
											console.log(that.getAnyDate(-3)[0] + "年" + that.getAnyDate(-3)[1] + "月" + that.getAnyDate(-3)[2] + "日" + "的请求成功")
											
											//成功后处理返回的数据
											rctotalincome += res.data.data.income;//总收入
											rctotaloutcome += res.data.data.outcome;//总支出
											incomedatatemp.push(res.data.data.income);//收入数组
											outcomedatatemp.push(res.data.data.outcome);//支出数组
											
											//处理完毕，再次发起请求
											uni.request({
												url:getApp().globalData.envprefix + "/admin-api/lbt/extends/data/bill/calendar",
												header:{
													"tenant-id":1,
													"Authorization":"Bearer " + getApp().globalData.accessToken
												},
												data:{
													'accountBookId':getApp().globalData.accountBookId,
													'day':that.getAnyDate(-2)[2] + "," + that.getAnyDate(-2)[2],
													'month':that.getAnyDate(-2)[1],
													'year':that.getAnyDate(-2)[0]
												},
												success(res) {
													if(res.data.code!=200){
														console.log(that.getAnyDate(-2)[0] + "年" + that.getAnyDate(-2)[1] + "月" + that.getAnyDate(-2)[2] + "日" + "的请求失败")
														return;
													}
													console.log(that.getAnyDate(-2)[0] + "年" + that.getAnyDate(-2)[1] + "月" + that.getAnyDate(-2)[2] + "日" + "的请求成功")
													
													//成功后处理返回的数据
													rctotalincome += res.data.data.income;//总收入
													rctotaloutcome += res.data.data.outcome;//总支出
													incomedatatemp.push(res.data.data.income);//收入数组
													outcomedatatemp.push(res.data.data.outcome);//支出数组
													
													//处理完毕，再次发起请求
													uni.request({
														url:getApp().globalData.envprefix + "/admin-api/lbt/extends/data/bill/calendar",
														header:{
															"tenant-id":1,
															"Authorization":"Bearer " + getApp().globalData.accessToken
														},
														data:{
															'accountBookId':getApp().globalData.accountBookId,
															'day':that.getAnyDate(-1)[2] + "," + that.getAnyDate(-1)[2],
															'month':that.getAnyDate(-1)[1],
															'year':that.getAnyDate(-1)[0]
														},
														success(res) {
															if(res.data.code!=200){
																console.log(that.getAnyDate(-1)[0] + "年" + that.getAnyDate(-1)[1] + "月" + that.getAnyDate(-1)[2] + "日" + "的请求失败")
																return;
															}
															console.log(that.getAnyDate(-1)[0] + "年" + that.getAnyDate(-1)[1] + "月" + that.getAnyDate(-1)[2] + "日" + "的请求成功")
															
															//成功后处理返回的数据
															rctotalincome += res.data.data.income;//总收入
															rctotaloutcome += res.data.data.outcome;//总支出
															incomedatatemp.push(res.data.data.income);//收入数组
															outcomedatatemp.push(res.data.data.outcome);//支出数组
															
															//处理完毕，再次发起请求
															uni.request({
																url:getApp().globalData.envprefix + "/admin-api/lbt/extends/data/bill/calendar",
																header:{
																	"tenant-id":1,
																	"Authorization":"Bearer " + getApp().globalData.accessToken
																},
																data:{
																	'accountBookId':getApp().globalData.accountBookId,
																	'day':that.getAnyDate(0)[2] + "," + that.getAnyDate(0)[2],
																	'month':that.getAnyDate(0)[1],
																	'year':that.getAnyDate(0)[0]
																},
																success(res) {
																	if(res.data.code!=200){
																		console.log(that.getAnyDate(0)[0] + "年" + that.getAnyDate(0)[1] + "月" + that.getAnyDate(0)[2] + "日" + "的请求失败")
																		return;
																	}
																	console.log(that.getAnyDate(0)[0] + "年" + that.getAnyDate(0)[1] + "月" + that.getAnyDate(0)[2] + "日" + "的请求成功")
																	
																	//成功后处理返回的数据
																	rctotalincome += res.data.data.income;//总收入
																	rctotaloutcome += res.data.data.outcome;//总支出
																	incomedatatemp.push(res.data.data.income);//收入数组
																	outcomedatatemp.push(res.data.data.outcome);//支出数组
																	
																	//数据处理完毕
																	var label = [that.getAnyDate(-6)[3],that.getAnyDate(-5)[3],that.getAnyDate(-4)[3],that.getAnyDate(-3)[3],that.getAnyDate(-2)[3],that.getAnyDate(-1)[3],that.getAnyDate(0)[3]]
																	var value = [
																		{
																			name:'支出',
																			data:outcomedatatemp
																		},
																	]
																	that.histogramData = {
																		'label':label,
																		'value':value
																	};
																	console.log("正在为图标赋值");
																	console.log(that.histogramData)
																	that.rctotaloutcome = rctotaloutcome;
																	that.rctotalincome = rctotalincome;
																	that.rcdailyincome = (rctotalincome / 7).toFixed(2)
																	that.rcdailyoutcome = (rctotaloutcome / 7).toFixed(2)
																	
																}
															})
														}
													})
												}
											})
										}
									})
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
	.notplay{
		display: none;
	}
	.container{
		background-color: #F6F6F6;
		width: 100vw;
		height: 100vh;
	}
	.topBar{
		height: 5vh;
		width:90vw;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: black;	
		background-color: #FFFFFF;
		padding: 3vw 5vw;
		font-size: 14px;
	}
	.not{
		color: #808080;
		padding: 1vw 2vw;
	}
	.active_color{
		background-color: #072750;
		color: white;
		padding: 1vw 2vw;
		border-radius: 10rpx;
	}
	.calender_image{
		width: 6.8vw;
		height: 6.8vw;
	}
	.column_area{
		background-color: #FFFFFF;
		margin-top: 2vw;
		padding: 4vw ;
		width: 88vw;
		position: relative;
		left: 2vw;
	}
	.ring_view{
		padding: 4vw ;
		width: 88vw;
		position: relative;
		left: -11vw; 
		top: -5vw;
		height: 30vh;
	}
	.content{
		
	}
	.title_bar{
		display: flex;
		justify-content: space-between;
	}
	.switch_button{
		width: 4.5vw;
		height: 4.5vw;
		margin-top: 1vw;
		margin-left: 2vw;
	}
	.title_left{
		display: flex;
	}
	.title_right{
		display: flex;
		font-size: 13px;
		border: 2rpx solid #072750;
		border-radius: 10rpx;
	}
	.f_active_color{
		background-color: #072750;
		color: white;
		padding: 1vw 2vw;
				
	}
	.info{
		background-color: #FFFFFF;
		/* background-color: red; */
		display: flex;
		width: 90vw;
		flex-wrap: wrap;
		padding: 3vw;
		position: relative;
		left: 2vw;
		margin-top: 2vw;
		font-size: 14px;
	}
	.info_item{
		width: 41vw;
		display: flex;
		padding: 2vw;
		align-items: center;
		/* justify-content: center; */
		/* background-color: #FF5733; */
	}
	.month_info_area{
		width: 96vw;
		text-align: center;
		display: flex;
		justify-content: space-between;
		background-color: #072750;
		border-radius: 4px;
		margin-left: 2vw;
		margin-top: 2vw;
		padding: 3vw 0;
	}
	.month_info_item{
		width: 30vw;
		display: flex;
		flex-direction: column;
		color: #FFFFFF;
	}
	.text2{
		/* margin-top: 2vw; */
		font-weight: 500;
		font-size: 14px;
	}
	.text1{
		font-size: 14px;
		margin-right: 50rpx;
	}
	.text0{
		font-weight: 500;
	}
	.border_set{
		border-left: 2rpx solid #072750;
		border-right: 2rpx solid #072750;
	}
	.month_bill_text{
		opacity: 1;
		border-radius: 4px;
		background: #FFFFFF;		
		border: 1px solid #072750;
		color: #072750;
		font-size: 13px;
		padding: 1vw 2vw;
	}
	.commen_area{
		width: 100vw;
		height: 88vh;
	}
	.date_ex_in_ba{
		display: flex;
		justify-content: space-between;
		padding: 2vw 4vw;
	}
	.text3{
		padding: 2vw 0;
	}
	.text3_else{
		padding: 2vw 3vw;
	}
	.text_date{
		font-size: 14px;
	}
	.text_ex{
		font-size: 14px;
		color: #FF5733;
	}
	.text_in{
		color: #43CF7C;
		font-size: 14px;
	}
	.text_ba{
		font-size: 14px;
		color: #072750;
	}
	.type_number_percent{
		display: flex;
		justify-content: space-between;
		padding: 3vw;
	}
	.type_image{
		width: 6vw;
		height: 6vw;
	}
	.middle_up{
		display: flex;
		//justify-content: space-between;
		margin-top: -1vw;
		
		width: 45vw;
	}
	.progress-box{
		margin-top: 2vw;
	}
	.middle_area{
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		width: 55vw;
		//margin-left: 2vw;
	}
	.middle_type{
		font-size: 14px;
	}
	.common_middle{
		color: #808080;
		font-size: 13px;
		position: relative;
		left: 3vw;
		top: 1vw;
	}		
	.total{
		color: #FF5733;
		text-align: end;
	}
	.line{
		background-color: white;
		margin-top: 2vw;
		padding: 2vw ;
		width: 92vw;
		position: relative;
		left: 2vw;
	}
	.up_down_button{
		width: 6vw;
		height: 6vw;
		position: relative;
		left: -2vw;
		top: 2vw;
	}
	.title_bar_else{
		display: flex;
		
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
	.chart_popup{
		width: 96vw;
		background-color: #072750;
		color: white;
		font-size: 14px;
		border-radius: 10rpx;
		padding-top: 5vw;
		padding-bottom: 8vw;
	}
	.chart_view{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.popup-height {
		@include height;
		width: 200px;
		display: flex;
		flex-direction: column;
	}
	.chart_item{
		display: flex;
		flex-direction: column;
		text-align: center;
		width: 30%;
		padding: 2vw 0;
	}
	.chart_cancel{
		width: 6vw;
		height: 6vw;
		position: relative;
		left: 45vw;
		top: 4vw;
	}
</style>
