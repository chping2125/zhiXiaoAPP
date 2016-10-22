<template>
	<div id="search-container">
		<div class="search-ser">
		 	<img src="/images/lxn/searchImg/search_gray.png"/ class="search-icon">
		 	<span class="search-moni"><input type="text" placeholder="搜索感兴趣的内容"/><span>
		</div>
		<section class="iscroll-wrap">
		<div class="search-core">
			<div class="search-core-hot">
				<div class="search-core-title">
					<i><img src="/images/lxn/searchImg/abc_list_longpressed_holo.9.png"/></i>
					<span>实时热点</span>
				</div>
				<ul>
					<li v-for="hotItem in hotList">
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
							<dt class="iconfont search-icon" style="color:{{lifeItem.color}}">{{{lifeItem.iconText}}}</dt>
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
					<li v-for="newsList in hotList">
						<dl>
								<dt>
									<img src="{{newsList.img}}"/>
								</dt>
								<dd>
									<p>{{newsList.contain}}</p>
									<span><img src="/images/lxn/searchImg/right_arrows.png"/></span>
								</dd>
						</dl>
					</li>
				</ul>
			</div>
		</div>
	</section>
	</div>
</template>
<script type="text/javascript">
  var Vue = require('../libs/vue.js');
  var VueResource = require('../libs/vue-resource.js');
  Vue.use(VueResource);
	export default{
		data(){
			return {
				hotList:[],
				lifeList:[],
				knowladgeList:[]
			}
		},
		ready:function(){
			var that=this;
			this.$http.get('/mock/lxn/hotList.json')
			.then(
				(res)=>{
					that.hotList=res.data;
				}
			);
			this.$http.get("/mock/lxn/iconList.json")
			.then(
				(res)=>{
					that.lifeList=res.data;
				}
			);
		}
	}
</script>
