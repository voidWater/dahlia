<template>
	<div class="content">

    <iframe
      src="https://open.ys7.com/ezopen/h5/iframe?url=ezopen://DDSFPH@open.ys7.com/210735026/1.live&autoplay=0&accessToken=at.08mcbmww42cjolgg8uzzgwao1djwa74f-3usvmvbi4q-1flt5c6-pxjvqew1s"
      width="600"
      height="400"
      id="ysopen"
      allowfullscreen
      autoplay
    >
    </iframe>
 
	  <video
		id="myPlayer"
		autoplay
		src="http://hls.open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.m3u8"
		controls
		playsInline
		webkit-playsinline
	  >
	  </video>

	</div>
</template>

<script>
	export default{
		name:"view",
		data(){
			return{
				}

		},
		created:function(){

		},
		mounted:function(){
			var player = new EZUIPlayer('myPlayer');
			//player.on('log', this.log);
		},
		methods:{
			log:function(str) {
				var div = document.createElement('DIV');
				div.innerHTML = (new Date()).Format('yyyy-MM-dd hh:mm:ss.S') + JSON.stringify(str);
				document.body.appendChild(div);
			  }
		}
	}
</script>

<style scoped>
.content{
  text-align: left;
	padding: 5px;
}
.hint {
      font-size: 14px;
      line-height: 3em;
      color: gray;
    }

    #url {
      width: 100%;
    }

    .btn-container {
      margin: 10px;
    }

    #myPlayer {
      max-width: 600px;
      width: 100%;
    }
</style>
