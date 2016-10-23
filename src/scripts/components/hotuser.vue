<template>
	<div class="hotuser-container">
		<header></header>
		<section class="top">
			
		</section>
		<section class="main"></section>
	
	
	</div>
	
</template>
<script>
	var Vue = require('../libs/vue.js');
	var VueResource = require('../libs/vue-resource.js');
  	Vue.use(VueResource);
  	
  	
  	export default{
  		ready:function(){
  			var naame = localStorage.getItem("uName");
  			console.log(naame)
  		},
  		methods:{
  			
  		}
  	}
</script>