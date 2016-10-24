<template>
	<div class="hotuser-container">
		<header>
			个人主页
			<div v-link="{path:lastPath}"><img src="/images/lee/head/jian.png"/></div>
		</header>
		<section class="top">
			<div class="hImg"><img v-bind:src="imgSrc"/></div>
			<div class="user-name">{{userName}}</div>
			<div class="uAbout"><span>总分享{{shareNum}} &nbsp;| &nbsp;总收入{{golds}}</span></div>
		</section>
		<section class="main">
			<nav>
		        <ul id="user-nav">
		            <li v-for="nav in userbNav" v-on:click="toSwiper($index)" v-bind:class="curIndex == $index ? 'active': ''">{{nav}}</li>
		        </ul>
		    </nav>
		    <div class="swiper-container" id="User-swiper">
		    	<div class="swiper-wrapper">
		    		<div class="swiper-slide">
		    			<section id="hotUser-scroll">
							<ul class="userList">
							    <li v-for="mesUser in messageU">
							        <dl>
							            <dt>
							                <b>{{mesUser.title}}</b>
							                <p><span>{{mesUser.from}}</span> <span>阅读{{mesUser.reader}}</span></p>
							            </dt>
							        	<dd><img v-bind:src="mesUser.img" alt=""></dd>
							        </dl>					                  								                  	
							    </li>
							</ul>
						</section>
		    		</div>
		    		<div class="swiper-slide">
		    			2
		    		</div>
		    		<div class="swiper-slide">
		    			3
		    		</div>
		    	</div>								
		    </div>
		</section>
	
	
	</div>
	
</template>
<script>
	var Vue = require('../libs/vue.js');
	var VueResource = require('../libs/vue-resource.js');
  	Vue.use(VueResource);
  	var UserSwiper = null;
  	
  	export default{
  		data(){
  			return{
  				lastPath:"/lee",
  				curIndex:0,
  				userName:'',
  				shareNum:0,
  				golds:0,
  				imgSrc:'',
  				userbNav:['分享','收藏','点评'],
  				messageU:[]
  				
  			}
  		},
  		ready:function(){
  			var that = this;
  			this.$http.get('/mock/lee/hot1.json')
  				.then((res) => {
	  				this.messageU = res.data;
	  				setTimeout(function(){
		            	new IScroll('#hotUser-scroll');
		            }, 500);
		            
		           	 UserSwiper = new Swiper("#User-swiper",{
  					 	onSlideChangeStart: function(){
		              		that.curIndex = UserSwiper.activeIndex;
		            	}
  					 });
		           
		        });
		    var user = localStorage.getItem("uName");		   
  			this.userName = localStorage.getItem("uName");
  			this.shareNum= localStorage.getItem("share");
  			this.golds= localStorage.getItem("mIn");
  			this.imgSrc= localStorage.getItem("uImg");
  		},
  		methods:{
  			toSwiper(index){
  				this.curIndex = index;
  				UserSwiper.slideTo(index);
  			},
		
  		}
  	}
</script>