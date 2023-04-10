<template>
	<view class="zyCharts">
		<!-- 饼状图 -->
	    <!-- #ifdef H5 -->
		<template>
			<canvas :canvas-id="options.canvasId" :id="options.canvasId" :style="{
				width: options.width , 
				height: options.height  
		    }" @touchstart="mouseenter"></canvas>
		</template>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		    <template v-if="options.shape == 'pie'">
		    	<canvas :canvas-id="options.canvasId" :id="options.canvasId" :style="{
					width:style.width,height:style.height
				}" @touchstart="mouseenter"></canvas>
		    </template>
		<!-- #endif -->
	</view>
</template>

<script>
	import { initPie , axiosPieSubmit , judgeDeg} from './chartPie.js'; 
    import { chartsBar } from './chartBar.js'
	// import { initPie , axiosPieSubmit , judgeDeg} from './chartPie.js'; 
	export default {
		name:"zyCharts",
		data() {
			return {
				pieOptions:{
					
				},
				style:{
					width: typeof this.options.width == 'number' ? this.options.width  + 'px' : 
					typeof this.options.width == 'string' && this.options.width.indexOf('%') ? 
					this.options.width : typeof this.options.width == 'string' && this.options.width.indexOf('rpx') ? 
					this.options.width  : 0
					, 
					height:typeof this.options.height == 'number' ? this.options.height + 'px' : 
					typeof this.options.height == 'string' && this.options.height.indexOf('%') ? 
					this.options.height : typeof this.options.height == 'string' && this.options.height.indexOf('rpx') ? 
					this.options.height : 0
				}
			};
		},
		props:{
			options:{
				type:Object,
				required:true,
			}
		},
		mounted() {
			uni.getSystemInfo({
				success: res => {
					console.log(res)
					if(this.options.width.indexOf('%') != -1){
						this.options.width = parseFloat(this.options.width) / 100 * res.windowWidth
					}
					if(this.options.height.indexOf('%') != -1){
						this.options.height = parseFloat(this.options.height) / 100 * res.windowHeight
						console.log(this.options.height )
					}
				}
			})
			var that = this
			if(this.options.shape == 'pie'){
				console.log(this.options)
				initPie(this.options,function(obj){
					// axiosPieSubmit(0,0,obj.radius)
                    that.pieOptions = JSON.parse(JSON.stringify(obj))		
				})
			}
			if(this.options.series && (this.options.series[0].type == 'bar'  || this.options.series[0].type == 'line')){
				chartsBar(this.options)
			}
		},
		watch:{
			options:{
				handler(newVal,oldVal){
					this.options = newVal
				},
				deep:true
			}
		},
		methods:{
			mouseenter(e){
				if(this.options.shape == 'pie'){
				    judgeDeg(e.changedTouches[0].x - this.pieOptions.width , e.changedTouches[0].y - this.pieOptions.height , this.options)
					axiosPieSubmit(e.changedTouches[0].x - this.pieOptions.width,e.changedTouches[0].y - this.pieOptions.height,this.options ,this.pieOptions )
				}
			}
		}
	}
</script>

<style lang="less" scoped>
    .zyCharts{
		canvas{
			display: block;
			margin: 120rpx auto 0;
		}
	}
</style>