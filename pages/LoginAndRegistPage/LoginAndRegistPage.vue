<template>
	<view class="container">
		<video 
		src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" 
		controls="false"
		muted="true"
		autoplay="true"
		loop="true"
		show-fullscreen-btn="false"
		show-play-btn="false"
		show-center-play-btn="false"
		show-loading="false"
		enable-progress-gesture="false"
		enable-play-gesture="false"
		vslide-gesture="false"
		object-fit="cover"
		:x-webkit-airplay="true"
		:webkit-playsinline="true"
		playsinlin
		>
		</video>
	</view>
	
</template>

<script>
	import videoPlayer from '../../components/video-player.vue';
	
	export default {
		data() {
			return {
				videoSrc:"../../static/loginvideo.mp4"
			}
		},
		components:{
			videoPlayer
		},
		methods: {
			
		},
		onShow() {
            // 当app切到后台再切回前台的时候会触发onShow这个时候视频应该继续播放，不这样做视频会暂停的
			this.$nextTick(() => {
				this.VideoContext = uni.createVideoContext('videoRef');
				this.VideoContext.play()
			})
		},
		onLoad() {
			// const subNvue = uni.getSubNVueById('subNvue'); // 这个id是pages.json下绑定的唯一id
			// subNvue.hide();//标识初始隐藏
			var screenHeight = uni.getSystemInfoSync().windowHeight;
			var screenwidth = uni.getSystemInfoSync().windowWidth;
		}
	}
</script>

<style>
	.container{
		height: 100vh;
		width: 100vw;
		position: relative;
		/* z-index: 9; */
		z-index: 999;
	}
	.container video{
		height: 100vh;
		width: 100vw;
		position: absolute;
		z-index: 0;
		/* margin-top: -10vh; */
	}
	/* .content{
		height: 10vh;
		width: 100vw;
		color: white;
		background-color: aquamarine;
		position: relative;
		z-index: 999;
	} */
	
</style>
