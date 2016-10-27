<template>
	<div id="search-container">
		<div class="search-ser">
		 	<img src="/images/lxn/searchImg/search_gray.png"/ class="search-icon" >
		 	<span class="search-moni"><input type="text" v-model='inputText' placeholder="搜索感兴趣的内容" v-on:keyup.enter="keyAction"/></span>
		</div>

		<section class="iscroll-wrap"  id="iscroll-wrap">
		<div class="search-core">
			<div class="upLoad"  id="load1" v-bind:class="upIsShow ? 'load' : ''">
				<img src="/images/lxn/searchImg/xsearch_loading.png" />
				<p>正在加载...</p>

			</div>
			<div class="search-core-hot">
				<div class="search-core-title">
					<i><img src="/images/lxn/searchImg/abc_list_longpressed_holo.9.png"/></i>
					<span>实时热点</span>
				</div>
				<ul>
					<li v-for="hotItem in hotList" v-link="{path:'/results',name: 'results', params: { key: hotItem.key}}">
						<span>{{hotItem.desc}}</span>
						<img v-if="hotItem.hot" src="/images/lxn/searchImg/find_hot.png" class="hot-icon"/>
					</li>
				</ul>
			</div>
			<div class="search-core-life">
				<div class="search-core-title">
					<i><img src="/images/lxn/searchImg/abc_list_longpressed_holo.9.png"/></i>
					<span>贴心生活</span>
				</div>
				<ul class="search-core-iconUl">
					<li v-for='lifeItem in lifeList'>
						<dl>
							<dt class="iconfont search-icon" v-bind:style="lifeItem.color">{{{lifeItem.iconText}}}</dt>
							<dd class="ser-life-dd">{{lifeItem.text}}</dd>
						</dl>
					</li>
				</ul>
			</div>
			<div class="search-core-knowladge">
				<div class="search-core-title">
					<i><img src="/images/lxn/searchImg/abc_list_longpressed_holo.9.png"/></i>
					<span>知识库</span>
				</div>
				<ul class="search-news-ul">
					<li v-for="newsList in knowladgeList" v-on:click="ToDetails(newsList)">
						<dl>
								<dt>
									<img v-bind:src="newsList.img"/>
								</dt>
								<dd>
									<p>{{newsList.desc}}</p>
									<span><img src="/images/lxn/searchImg/right_arrows.png"/></span>
								</dd>
						</dl>
					</li>
				</ul>
			</div>
			<div class="downLoad" id="load2" v-bind:class="upIsShow ? 'load' : ''">
				<img src="/images/lxn/searchImg/xsearch_loading.png" />
				<p>努力加载...</p>
			</div>
		</div>
	</section>

	</div>
</template>
<script type="text/javascript">
  var Vue = require('../libs/vue.js');
  var VueResource = require('../libs/vue-resource.js');
	import vuex from "../vuex/actions.js";
  Vue.use(VueResource);
	var str='';
	export default{
		data(){
			return {
				hotList:[],
				lifeList:[],
				knowladgeList:[],
				moreList:[],
				upIsShow:true,
				downIsshow:true,
				keyText:'',
				inputText:''
			}
		},
		vuex:{
			actions:{
				setdetailsPath:vuex.detailsPath
			}
		},
		ready:function(){
			var myScroll;
			var that=this;
			this.$http.get('/zhixiao/hotList')
			.then(
				(res)=>{
					that.hotList=res.data.data;
				}
			);
			this.$http.get('/zhixiao/list')
			.then(
				(res)=>{
					that.knowladgeList=res.data.data;
				}
			);
			this.$http.get("/zhixiao/iconList")
			.then(
				(res)=>{
					that.lifeList=res.data.data;
					setTimeout(function(){
						myScroll=new IScroll("#iscroll-wrap",{
							bounce:false,
							click:true,
							mouseWheel:true,
							probeType:3
						});
						that.upIsShow =false;
						myScroll.scrollBy(0,-30);
						setTimeout(function(){
							myScroll.refresh();
						},0);
						myScroll.on("scrollEnd",function(){
							if(this.y>=0){
									that.$http.get("/zhixiao/moreList").then(
										(res)=>{
											 setTimeout(function () {
												myScroll.scrollTo(0,-30);
												that.moreList=res.data.data;
												that.knowladgeList=that.moreList.concat(that.knowladgeList);
											}, 500);
											setTimeout(function(){
												myScroll.refresh();
											},1000);
										}
									)
							 }
							 var maxY = this.maxScrollY - this.y;
							 if(maxY>=0){
								 console.log(0);
									that.$http.get("/zhixiao/moreList").then(
										(res)=>{

											 setTimeout(function () {
												that.moreList=res.data.data;
												that.knowladgeList=that.knowladgeList.concat(that.moreList);
													myScroll.scrollTo(0,myScroll.maxScrollY-110);
											}, 500);
											setTimeout(function(){
												myScroll.refresh();
											},1000);
										}
									)
							 }
						})
					},500);
				}
			);

		},
		methods:{
			keyAction(event){
				console.log(this.inputText);
				this.$route.router.go({path:'/results',name: 'results', params: { key: this.inputText}});
			},
			ToDetails(newsList){
				this.setdetailsPath({path:this.$route.path,title:newsList.desc});
        this.$route.router.go({path:'/results',name: 'details',params:{id:newsList.id}});
			}
		}
	}

</script>
