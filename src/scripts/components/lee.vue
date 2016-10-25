<template>
  <div class="hot-container">
  		<header>
  				<nav>
		          <ul id="swiper-nav">
		              <li v-for="nav in headNav" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index ? 'active': ''">{{nav}}</li>
		          </ul>
		      </nav>
  		</header>
  		<section>
  			<div class="swiper-container" id="hot-swiper">
  				<div class="swiper-wrapper">

  					<div class="swiper-slide first">
  							<nav>
  								<ul>
  										<li id="allFirst">
  											<div>全部</div>
  										</li>
				              <li v-for="nav in navList" v-on:click="changeSwiper($index)" v-bind:class="bodyIndex == $index ? 'active': ''"><div>{{nav}}</div></li>
				         </ul>
  							</nav>
  							<div class="swiper-container" id="body-swiper">
  									<div id="allList">
  												<span>全部</span>
  												<span>推荐</span>
  												<span>搞笑</span>
  												<span>健康</span>

  												<span>情感</span>
  												<span>两性</span>
  												<span>猎奇</span>
  												<span>励志</span>

  												<span>育儿</span>
  												<span>科技</span>
  												<span>汽车</span>
  												<span>星座</span>

  												<span>职场</span>
  												<span>美容</span>
  												<span>化妆</span>
  												<span>发型</span>

  												<span>娱乐</span>
  												<span>八卦</span>
  												<span>军事</span>
  												<span>佛学</span>
  									</div>
  									<div class="swiper-wrapper">
  											<div class="swiper-slide">
  													<section id="hot-scroll">
  														<div>
  															<div class="Hhead">
								                    <img v-bind:src="imgArrow"/>
								                    <span>下拉刷新...</span>
								                </div>
								                <ul class="mesList">
								                  <li v-for="mes1 in message">
								                  	<dl>
								                  		<dt>
								                  			<b>{{mes1.title}}</b>
								                  			<p><span>{{mes1.from}}</span> <span>阅读{{mes1.reader}}</span></p>
								                  		</dt>
								                  		<dd><img v-bind:src="mes1.img" alt=""></dd>
								                  	</dl>
								                  </li>
								                </ul>
								                <div class="Hfoot">
								                  <img v-bind:src="imgArrow"/>
								                  <span>上拉加载更多...</span>
								                </div>  															
  														</div>  														
							              </section>
  											</div>
  											<div class="swiper-slide">七天</div>
  											<div class="swiper-slide">总榜</div>

  									</div>
  							</div>
  					</div>



  					<div class="swiper-slide second">
  							<nav>
  								<ul>
  									<li id="allSecond"><div>全部</div>	</li>
				              <li v-for="nav in userList" v-on:click="changeUserSwiper($index)" v-bind:class="userIndex == $index ? 'active': ''"><div>{{nav}}</div></li>
				         </ul>
  							</nav>
  							<div class="swiper-container" id="user-swiper">
  									<div id="allList1">
  											<span>今日</span>
  											<span>本周</span>
  											<span>总榜</span>
  									</div>
  									<div class="swiper-wrapper">

  											<div class="swiper-slide">
  													<section id="hot2-scroll">
							                <ul class="usersList">
							                  <li v-for="usermes in userMessage" v-on:click="pastMes(usermes.img,usermes.uName,usermes.num,usermes.money)"  v-link="{path:usermes.path}">
							                  	<div><span>{{$index + 1}}</span></div>
							                  	<div class="headImg"><img v-bind:src="usermes.img"/></div>
							                  	<p class="uName">{{usermes.uName}}</p>
							                  	<p class="share">{{usermes.num}}分享</p>

							                  </li>
							                </ul>
							              </section>
  											</div>

  											<div class="swiper-slide">
  												<section id="hot21-scroll">
							                <ul class="usersList">
							                  <li v-for="readMes in reads" v-on:click="pastMes(readMes.img,readMes.uName,readMes.num,readMes.money)"  v-link="{path:readMes.path}">
							                  	<div><span>{{$index + 1}}</span></div>
							                  	<div class="headImg"><img v-bind:src="readMes.img"/></div>
							                  	<p class="uName">{{readMes.uName}}</p>
							                  	<p class="share">{{readMes.read}}阅读</p>

							                  </li>
							                </ul>
							              </section>
  											</div>

  											<div class="swiper-slide">
  												<section id="hot22-scroll">
							                <ul class="usersList">
							                  <li v-for="moneyMes in moneyM" v-on:click="pastMes(moneyMes.img,moneyMes.uName,moneyMes.num,moneyMes.money)"  v-link="{path:moneyMes.path}">
							                  	<div><span>{{$index + 1}}</span></div>
							                  	<div class="headImg"><img v-bind:src="moneyMes.img"/></div>
							                  	<p class="uName">{{moneyMes.uName}}</p>
							                  	<p class="share">{{moneyMes.money}}金币</p>

							                  </li>
							                </ul>
							              </section>
  											</div>

  									</div>
  							</div>
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

  	var mySwiper = null;
  	var bodySwiper = null;
  	var userSwiper = null;
  	var doPai = null;
  	var hotScroll = null;
  	export default{
  		data(){
  			return{
  				imgArrow: './images/lee/arrow.png',
  				curIndex:0,
  				bodyIndex:0,
  				userIndex:0,
  				headNav:['爆文榜','用户榜'],
  				navList:['蹿红','七天','总榜'],
  				userList:['分享榜','阅读榜','收入榜'],
  				message:[],
  				userMessage:[],
  				reads:[],
  				moneyM:[]
  			}
  		},
  		ready:function(){

  			var that = this;
  			this.$http.get('/zhixiao/hot')
  				.then((res) => {
  					 this.message = res.data;
  					 setTimeout(function(){
	            	hotScroll = new IScroll('#hot-scroll',{
	            			probeType: 3,//每滚动一像素触发一次
                    mouseWheel: true,
                    click: true//默认没有点击事件
	            	});
	            	hotScroll.scrollTo(0, -35);
	            	
	            	var head = $('.Hhead img'),
                           topImgHasClass = head.hasClass('up');
                var foot = $('.Hfoot img'),
                           bottomImgHasClass = head.hasClass('down');

                hotScroll.on('scroll', function() {
                    var y = this.y,
                    maxY = this.maxScrollY - y;
                    if (y >= 0) {
                        !topImgHasClass && head.addClass('up');
                        return '';
                    }
                    if (maxY >= 0) {
                        !bottomImgHasClass && foot.addClass('down');
                        return '';
                    }
                });

                hotScroll.on('scrollEnd', function() {
                    if (this.y >= -35 && this.y < 0) {
                        hotScroll.scrollTo(0, -35);
                        head.removeClass('up');
                    } else if (this.y >= 0) {
                        head.attr('src', './images/lee/ajax-loader.gif');

                         // ajax下拉刷新数据
                        that.$http.get('/zhixiao/hotRefresh')
                            .then((res) => {
                                that.message = res.data.concat(that.message);
                                hotScroll.scrollTo(0, -35);
                                head.removeClass('up');
                                head.attr('src', './images/lee/arrow.png');
                                Vue.nextTick(function() {
                                	hotScroll.refresh();
                                });
                            })
                      }
	            	var self = this;
                var maxY = this.maxScrollY - this.y;
                
                
                
                if (maxY > -35 && maxY < 0) {
                    hotScroll.scrollTo(0, self.maxScrollY + 35);
                    foot.removeClass('down')
                } else if (maxY >= 0) {
                    foot.attr('src', './images/lee/ajax-loader.gif');
                    //ajax上拉加载数据
                    that.$http.get('/zhixiao/hotRefresh')
                        .then((res) => {
                            that.message = that.message.concat(res.data);
                            foot.removeClass('down');
                            foot.attr('src', './images/lee/arrow.png');
                            Vue.nextTick(function() {
                                hotScroll.refresh();
                                hotScroll.scrollTo(0, self.maxScrollY + 35);
                            });
                        });
                  }
	            });	
	            	
	            	
	            	
	            	new IScroll('#hot2-scroll',{preventDefault:false});
	            	new IScroll('#hot21-scroll',{preventDefault:false});
	            	new IScroll('#hot22-scroll',{preventDefault:false});
	           }, 500);
							
						
  					 mySwiper = new Swiper("#hot-swiper",{
  					 			onSlideChangeStart: function(){
		              		that.curIndex = mySwiper.activeIndex;
		            	}
  					 });
  					 bodySwiper = new Swiper("#body-swiper",{
					 			onSlideChangeStart: function(){
		              		that.bodyIndex = bodySwiper.activeIndex;
		            	}
  					 });
  					 userSwiper = new Swiper("#user-swiper",{
					 			onSlideChangeStart: function(){
		              		that.userIndex = userSwiper.activeIndex;
		            	}
  					 })

  				});
  				this.$http.get('/mock/lee/users.json')
  					.then((res) => {
  							var userMes  =  res.data;
  							var len = userMes.length;
  							function doPai(userMes,len,xxx){
  										var arr = userMes.concat();
											for(var i=0;i<len-1;i++){
					  								for(var j=i+1;j<len;j++){
					  									 if(arr[j][xxx]>arr[i][xxx]){
					  									 		var t=0;
					  									 		t = arr[j];
					  									 		arr[j] = arr[i];
					  									 		arr[i] = t;
					  									 }
					  								}
				  							}
											return arr
								}
  							this.userMessage = doPai(userMes,len,'num');
							 	this.reads = doPai(userMes,len,'read');
								this.moneyM = doPai(userMes,len,'money');

  					 		//this.userMessage = userMes;

  				});

						$('#allFirst').on('click',function(){
								if($(this).children("div").text() != "收起"){

										$('#allList').css({"visibility":"visible"})
										$(this).children("div").text('收起');

								}else{
										$('#allList').css({"visibility":"hidden"})
										$(this).children("div").text("全部")
								}

						});
						$('#allList').on('click','span',function(){
								var txt = $(this).text();
								$('#allFirst div').text(txt);
								$('#allList').css({"visibility":"hidden"})
						});


						$('#allSecond').on('click',function(){
								if($(this).children("div").text() != "收起"){

										$('#allList1').css({"visibility":"visible"})
										$(this).children("div").text('收起');

								}else{
										$('#allList1').css({"visibility":"hidden"})
										$(this).children("div").text("全部")
								}

						});
						$('#allList1').on('click','span',function(){
								var txt = $(this).text();
								$('#allSecond div').text(txt);
								$('#allList1').css({"visibility":"hidden"})
						})
  		},

  		methods:{
  				switchSwiper(index){
  						this.curIndex = index;
  						mySwiper.slideTo(index);
  				},
  				changeSwiper(index){
  						this.bodyIndex = index;
  						bodySwiper.slideTo(index);
  				},
  				changeUserSwiper(index){
  						this.userIndex = index;
  						userSwiper.slideTo(index);
  				},
  				pastMes(img,uName,share,money){
  					localStorage.setItem("uImg",img);
  					localStorage.setItem("uName",uName);
  					localStorage.setItem("share",share);
  					localStorage.setItem("mIn",money);
  				}

  		}

  	}

</script>
