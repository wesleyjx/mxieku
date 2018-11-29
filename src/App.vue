<template>
  	<div id="app"> 
	  	<div id="nav">
	  		<ul>
			    <li>
			    	<router-link to="/shouye">
			    		<img src="src/assets/images/index/index.png" alt="">
			    		<p>首页</p>
			    	</router-link>
			    </li>
			    <li>
			    	<router-link to="/brand">
			    		<img src="src/assets/images/index/brand.png" alt="">
			    		<p>品牌</p>
			    	</router-link>
			    </li>    
			    <li>
			    	<router-link to="/sort">
			    		<img src="src/assets/images/index/sort.png" alt="">
			    		<p>分类</p>
			    	</router-link>
			    </li>
			    <li>
			    	<router-link to="/cart">
			    		<img src="src/assets/images/index/cart.png" alt="">
			    		<p>购物车</p>
			    	</router-link>
			    </li>
			    <li>
			    	<router-link to="/my">
			    		<img src="src/assets/images/index/my.png" alt="">
			    		<p>我的</p>
			    	</router-link>
			    </li>
		   </ul>
	  	</div>
	   <router-view></router-view>
  </div>
</template>


<script>
export default{
	mounted(){
		$('#nav ul li').click(function(){
			$('ul li p').css("color","darkred");
			$(this).siblings('li').children().children('p').css("color","");
		});
	}
}

</script>

<style scoped>
	*{
		margin:0px;
		padding:0px;
		list-style: none;
		text-decoration:none;
	}
	#app{
		width: 100%;
	}
	ul{
		display: flex;
		width: 100%;
		height: 50px;
		background: #eee;
		position:fixed;
		bottom:0px;
	}
	ul li{
		flex: 1;
	}
	ul li p{
		color:#333;
		font-size: 1.2em;
		margin-left: 10px;
	}
	ul li img{
		width: 30%;
		margin-left: 15px;
	}
</style>
