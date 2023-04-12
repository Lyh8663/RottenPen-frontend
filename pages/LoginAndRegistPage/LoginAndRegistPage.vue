<template>
	<view class="container">
		<video 
		src="../../static/loginvideo.mp4" 
		controls="false"
		muted="true"
		autoplay="true"
		show-fullscreen-btn="false"
		show-play-btn="false"
		show-center-play-btn="false"
		show-loading="false"
		enable-progress-gesture="false"
		enable-play-gesture="false"
		vslide-gesture="false"
		object-fit="cover">
		</video>
		<!-- <video-player :videoSrc="videoSrc">
			
		</video-player> -->
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
			
		}
	}
</script>

<style>
	.container{
		height: 100vh;
		width: 100vw;
	}
	.container video{
		height: 100%;
		width: 100%;
	}
</style>
