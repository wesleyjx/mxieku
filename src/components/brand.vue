<template id="brand">
	<div id="bd">
		<header>
			<div class="back" @click="fh()"></div>
			<div class="search">
				<input type="search" placeholder="输入关键字搜索"/>
				<span><img src="../assets/images/index/search.png" alt=""/></span>
			</div>
			<div id="cd">
				<img src="../assets/images/index/icon_category.png" alt="" />
			</div>
		</header>
		<div id="submenu">
			<ul>
				<li>
					<router-link to="/shouye">
						<img src="../assets/images/index/zhuye.png" alt="" />
						<p>主页</p>
					</router-link>
				</li>
				<li>
					<router-link to="/brand">
						<img src="../assets/images/index/pinpai.png" alt="" />
						<p>品牌</p>
					</router-link>
				</li>
				<li>
					<router-link to="/cart">
						<img src="../assets/images/index/iconset0308.png" alt="" />
						<p>购物车</p>
					</router-link>
				</li>
				<li>
					<router-link to="/my">
						<img src="../assets/images/index/ziyuan.png" alt="" />
						<p>我的</p>
					</router-link>
				</li>
				<button>Close</button>
			</ul>
		</div>	
							
		<main>
			<ul id="title">
				<li class="current">为您推荐</li>
				<li>男子</li>
				<li>女子</li>
				<li>童鞋童装</li>
				<li>户外</li>
				<li>配件</li>
				<li>全部品牌</li>
			</ul>	
			<div id="menu">	
				<ul class="current">
					<span>热门热销</span>
					<li v-for="(v,i) in msg1">
						<img :src="v.img" alt="" />
						<p>{{v.title}}</p>
					</li> 
				</ul>	
				<ul>
					<span>男子品牌</span>
					<li v-for="(v,i) in msg2">
						<img :src="v.img" alt="" />
						<p>{{v.title}}</p>
					</li> 
				</ul>
				<ul>
					<span>女子品牌</span>
					<li v-for="(v,i) in msg3">
						<img :src="v.img" alt="" />
						<p>{{v.title}}</p>
					</li> 
				</ul>
				<ul>
					<span>儿童品牌</span>
					<li v-for="(v,i) in msg4">
						<img :src="v.img" alt="" />
						<p>{{v.title}}</p>
					</li> 
				</ul>
				<ul>
					<span>户外运动</span>
					<li v-for="(v,i) in msg5">
						<img :src="v.img" alt="" />
						<p>{{v.title}}</p>
					</li> 
				</ul>
				<ul>
					<span>配件</span>
					<li v-for="(v,i) in msg6">
						<img :src="v.img" alt="" />
						<p>{{v.title}}</p>
					</li> 
				</ul>	
				<ul>
					<span>运动休闲品牌</span>
					<li v-for="(v,i) in msg7">
						<img :src="v.img" alt="" />
						<p>{{v.title}}</p>
					</li> 
				</ul>	
			</div>
		</main>
		
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				msg1:"",
				msg2:"",
				msg3:"",
				msg4:"",
				msg5:"",
				msg6:"",
				msg7:""
			}
		},
		methods:{
			fh(){
				this.$router.go(-1)
			}			
		},
		mounted(){
			$('#title li').click(function(){
				$(this).addClass('current').siblings().removeClass('current');
			});	
			$('header #cd .m-body .c-body ul li').click(function(){
				$(this).css("background","deepskyblue");
				$(this).children('p').css("color","#eee");
				$(this).siblings().css("background","");
			});
			
			for(var i=0;i<title.children.length;i++){
				title.children[i].setAttribute('index',i);
				title.children[i].onclick=function(){
					var index=this.getAttribute('index');
					for(var g=0;g<title.children.length;g++){
						menu.children[g].removeAttribute('class');
					}
					menu.children[index].setAttribute('class','current');
				}
			}
			
			$('#cd').click(function(){
				$('#submenu').css("display","block");
			});
			$('#submenu button').click(function(){
				$('#submenu').css("display","none");
			})
			
			this.$http.get('./src/assets/data/brand.json')
			 	.then((response)=>{
				    console.log(response);
				    this.msg1=response.data.tj;
				    this.msg2=response.data.man;
				    this.msg3=response.data.woman;
				    this.msg4=response.data.children;
				    this.msg5=response.data.hw;
				    this.msg6=response.data.parts;
				    this.msg7=response.data.all;
				})	
		}
	}
</script>

<style scoped>
	header{
		width: 100%;
		height: 40px;
		overflow: hidden;
		position: relative;
		background: red;
	}
	header .back{
		width: 15px;
		height: 15px;
		background: transparent;
		border:1px solid #333;
		border-right-color: transparent;
		border-bottom-color: transparent;
		transform: rotate(-45deg);
		position:absolute;
		top:10px;
		left:10px;
	}
	header .search{
		width: 70%;
		margin:3px auto;
		height: 35px;
		overflow: hidden;
		background: #eee;
	}
	header .search input{
		width: 80%;
		height: 35px;
		outline: none;
		border:none;
		float: left;
		font-size: 1.2em;
		background: #eee;
		padding-left: 10px;
	}
	header #cd{
		width: 10%;
		height: 30px;
		position:absolute;
		top:5px;
		right:10px;
	}
	header #cd img{
		width: 100%;
	}
	#submenu{
		position:fixed;
		top:0px;
		left:0px;
		right:0px;
		bottom:0px;
		background: rgba(0,0,0,0.5);
		display: none;
	}
	#submenu ul{
		width: 30%;
		background: #fff;
		position:absolute;
		top:45px;
		right:10px;
		border-radius: 5px;
	}
	#submenu button{
		width: 50%;
		height: 30px;
		float: right;
		margin-right: 10px;
		margin-bottom: 10px;
		background: #7b5dde;
		outline: none;
		border:none;
		color:#fff;
		border-radius: 5px;
	}
	#submenu ul li{
		width:100%;
		height: 50px;
		overflow: hidden;
		margin-top: 10px;
		padding-left: 10px;
	}
	#submenu ul li img{
		float: left;
		margin-right:10px;
	}
	#submenu ul li  p{
		color:#666;
		line-height: 30px;
	}

	#bd main{
		width: 100%;
		overflow: hidden;
		margin-top: 20px;
	}
	#bd main #title{
		width: 21%;
		float: left;
	}
	#bd main #title li{
		width: 100%;
		height: 60px;
		line-height: 60px;
		font-size: 0.8em;
		border: 1px solid #eee;
		padding-left: 3px;
		box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
	}
	#bd main #title .current{
		color:#b90bd6;
		border-left: 5px solid #b90bd6;
		background: #ccc;
	}
	#bd main #menu{
		width: 79%;
		float: right;
		margin-bottom: 40px;
		background: #ccc;
	}
	#bd main #menu .current{
		display: block;
	}
	#bd main #menu ul span{
		width: 100%;
		color:#999;
		font-size: 1.2em;
		display: block;
		margin:5px 10px;
	}
	#bd main #menu ul{
		width: 100%;
		overflow: hidden;
		display: none;
	}
	#bd main #menu ul li{
		width: 31%;
		float: left;
		margin-right:5px;
		margin-bottom: 5px;
		background: #fff;
		margin-left: 5px;
	}
	#bd main #menu ul li:nth-of-type(3n){
		margin-right: 0px;
		margin-left: 0px;
	}
	#bd main #menu ul li img{
		width: 100%;
	}
	#bd main #menu ul li p{
		text-align: center;
		color: #999;
	}
</style>