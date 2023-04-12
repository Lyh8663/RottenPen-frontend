<template>
	<!-- autoplay="false" -->
	    <view name="videoPlayer" class="flex flex-direction">
	        <video id="myVideo" 
	            class="response" 
	            :src="videoUrl"
	            :title="videoTitle"
	            controls="true"
	            page-gesture="true"
	            object-fit="contain"
	            show-mute-btn="true"
	            enable-play-gesture="true"
	            vslide-gesture="true"
	            @error="videoErrorCallback" 
	            @waiting="videoWaiting"
	            @loadedmetadata="videoLoadOk"
	        ></video>
	    </view>
</template>

<script>
	export default {
		name:"video-player",
		props: {
		    title: {
		        type: String,
		        default: ''
		    },
		    firstPic: {
		        type: String,
		        default: ''
		    },
		    videoType: {
		       type: String,
		        default: ''
		    },
		    videoSrc: {
		        type: String,
		        default: ''
		    }
		},
		data() {
			return {
				
			};
		},
		watch: {
		    videoSrc() {
		        this.setVideoUrl();
		    }
		},
		mounted() {
		    this.setVideoUrl();
		},
		 
		onReady: function(res) {
		    // #ifndef MP-ALIPAY
		    this.videoContext = uni.createVideoContext('myVideo');
		    // #endif
		},
		methods: {
		        setVideoUrl() {
		            console.log(this.videoSrc)
		            // uni.setNavigationBarTitle({
		            // 	title: this.title
		            // });
		            this.videoUrl = this.videoSrc;
		            this.firstImg = this.firstPic;
		            this.videoTitle = this.title;
		            
		            console.log(this.firstImg + '___' + this.firstPic)
		            
		            console.log(this.title + '___' + this.videoTitle)
		        },
		        videoErrorCallback(e) {
		            uni.showModal({
		                content: e.target.errMsg,
		                showCancel: false
		            });
		        },
		        videoWaiting() {
		            // uni.showLoading({
		            //     title: '加载中'
		            // });
		        },
		        videoLoadOk() {
		             // uni.hideLoading();
		        }
		    }
	}
</script>

<style>

</style>