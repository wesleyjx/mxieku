<template id="shouye">
	<div class="index">
		<header>
			<div id="logo">
				<img src="../assets/images/index/logo.jpg" alt=""/>
			</div>
			<form action="" method="post">
				<div id="search">
					<input type="search" value="" placeholder="输入关键字搜索"/>
					<span><img src="../assets/images/index/search.png" alt=""/></span>
				</div>	
			</form>
			<div class="fenlei">
				<router-link to="/sort">
					<img src="../assets/images/index/headsort.jpg" alt="" />
				</router-link>
			</div>
		</header>
		
		<div id="banner">
			<mt-swipe :auto="3000">
			  <mt-swipe-item><img src="../assets/images/index/banner01.jpg" alt="" /></mt-swipe-item>
			  <mt-swipe-item><img src="../assets/images/index/banner02.jpg" alt="" /></mt-swipe-item>
			  <mt-swipe-item><img src="../assets/images/index/banner03.jpg" alt="" /></mt-swipe-item>
			  <mt-swipe-item><img src="../assets/images/index/banner04.jpg" alt="" /></mt-swipe-item>
			  <mt-swipe-item><img src="../assets/images/index/banner05.jpg" alt="" /></mt-swipe-item>
			</mt-swipe>
		</div>
		
		<div class="hot">
			<ul>
				<li><img src="../assets/images/index/hot/hot_12.jpg" alt="" /></li>
				<li><img src="../assets/images/index/hot/hot_11.jpg" alt="" /></li>
				<li><img src="../assets/images/index/hot/hot_03.jpg" alt="" /></li>
				<li><img src="../assets/images/index/hot/hot_04.jpg" alt="" /></li>
				<li><img src="../assets/images/index/hot/hot_05.jpg" alt="" /></li>
				<li><img src="../assets/images/index/hot/hot_06.jpg" alt="" /></li>
				<li><img src="../assets/images/index/hot/hot_07.jpg" alt="" /></li>
				<li><img src="../assets/images/index/hot/hot_08.jpg" alt="" /></li>
			</ul>
			<div class="sp">
				<ul>
					<img src="../assets/images/index/shoes/bag/01.jpg" alt="" />
					<li v-for="(v,i) in msg1">
						<img :src="v.img" alt="" />
						<p>{{v.title}}</p>
						<span>{{v.price}}</span>
					</li>
				</ul>
				<ul>
					<img src="../assets/images/index/shoes/children/ch_01.jpg" alt="" />
					<li v-for="(v,i) in msg2">
						<img :src="v.img" alt="" />
						<p>{{v.title}}</p>
						<span>{{v.price}}</span>
					</li>
				</ul>
				<ul>
					<img src="../assets/images/index/shoes/run/01.jpg" alt="" />
					<li v-for="(v,i) in msg3">
						<img :src="v.img" alt="" />
						<p>{{v.title}}</p>
						<span>{{v.price}}</span>
					</li>
				</ul>
				<ul>
					<img src="../assets/images/index/shoes/arder/01.jpg" alt="" />
					<li v-for="(v,i) in msg4">
						<img :src="v.img" alt="" />
						<p>{{v.title}}</p>
						<span>{{v.price}}</span>
					</li>
				</ul>
				<ul>
					<img src="../assets/images/index/shoes/arder/20.jpg" alt="" />
					<li v-for="(v,i) in msg5">
						<img :src="v.img" alt="" />
						<p>{{v.title}}</p>
						<span>{{v.price}}</span>
					</li>
				</ul>
				<ul>
					<img src="../assets/images/index/shoes/arder/43.jpg" alt="" />
					<li v-for="(v,i) in msg6">
						<img :src="v.img" alt="" />
						<p>{{v.title}}</p>
						<span>{{v.price}}</span>
					</li>
				</ul>
			</div>
		</div>
		
		<footer>
			<div class="login">
				<span><router-link to="/my"><p>登陆</p></router-link></span>
				<span><router-link to="/my"><p>注册</p></router-link></span>
			</div>
			<div class="f_menu">
				<ul>
					<li>
						<img src="../assets/images/index/footer/icon/zhengpinbaozhang2.png" alt="" />
						<p>正品保证</p>
					</li>
					<li>
						<img src="../assets/images/index/footer/icon/tianmaobaoyouqia.png" alt="" />
						<p>满399包邮</p>
					</li>
					<li>
						<img src="../assets/images/index/footer/icon/tuikuantuihuo.png" alt="" />
						<p>自由退货</p>
					</li>
					<li>
						<img src="../assets/images/index/footer/icon/fukuan.png" alt="" />
						<p>货到付款</p>
					</li>
				</ul>
			</div>
			<div class="s_menu">
				<ul>
					<li>
						<img src="../assets/images/index/footer/icon/dianhua.png" alt="" />
						<p>4001162228</p>
					</li>
					<li>
						<img src="../assets/images/index/footer/icon/wx.png" alt="" />
						<p>scnmall</p>
					</li>
				</ul>
			</div>
			<div class="other">
				<ul>
					<li>
						<span>
							<p>触屏版</p>
							<img src="../assets/images/index/footer/icon/shouji.png" alt="" />
						</span>
					</li>
					<li>
						<span>
							<p>电脑版</p>
							<img src="../assets/images/index/footer/icon/diannao.png" alt="" />
						</span>
					</li>
				</ul>
				<div class="yj">
					<p>©2008-2018 s.cn 名鞋库 闽ICP备08106896号
						<router-link to="/my"><p>意见反馈</p></router-link>
						<router-link to="/my"><p>商圈</p></router-link>
					</p>
				</div>
			</div>
		</footer>
		
		<div class="gd">
			<span class="top"></span>
			<span class="bottom"></span>
		</div>
		
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
					msg6:""
				}
			},
			mounted(){
				$('.gd').click(function(event) {
					$('html,body').animate({'scrollTop': '0px'}, 1500)
				});			
				this.$http.get('./src/assets/data/index.json')
				 	.then((response)=>{
					    console.log(response);
					    this.msg1=response.data.bag;
					    this.msg2=response.data.children;
					    this.msg3=response.data.run;
					    this.msg4=response.data.arder_shoes;
					    this.msg5=response.data.arder_clo;
					    this.msg6=response.data.arder_ball;
					})
			}
	}
</script>

<style scoped>
	*{
		text-decoration: none;
	}
	header{
		width: 100%;
		height: 45px;
		background: #b80211;
	}
	header #logo{
		position:absolute;
		top:0px;
		left:10px;
		width: 60px;
		height: 30px;
	}
	header #logo img{
		width: 100%;
	}
	header form{
		width: 60%;
		height: 45px;
		margin-left: auto;
		margin-right: auto;
		overflow: hidden;
	}
	header form #search{
		width: 100%;
		height: 35px;
		background: #fff;
		margin-top: 5px;
		zoom: 1;
		border-radius: 5px;
	}
	header form #search::after{
		display: block;
		content: "";
		clear: both;
	}
	header form #search input{
		width: 85%;
		height: 35px;
		float: left;
		outline: none;
		border: none;
		font-size: 1.2em;
		border-bottom-left-radius: 5px;
		border-top-left-radius: 5px;
		padding-left: 10px;
	}
	header .fenlei{
		position: absolute;
		top: 5px;
		right:10px;
		height: 40px;
		width: 42px;
	}
	header .fenlei img{
		height: 100%;
	}
	.index #banner{
		width: 100%;
		height: 160px;
	}
	.index #banner .mint-swipe-items-wrap{
		padding-bottom:43.75%;
		height:0px;
	}
	.index #banner img{
		width:100%
	}
	.index #banner .mint-search{
		height: 6vh;
	}
	.index .hot{
		width: 100%;
	}
	.index .hot img{
		width: 100%;
	}
	.index .hot .sp{
		width: 100%;
	}
	.index .hot .sp ul{
		width: 100%;
	}
	.index .hot .sp ul>img{
		margin:10px 0px;
	}
	.index .hot .sp ul li{
		width: 48%;
		float: left;
		margin-right: 10px;
		background: #ccc;
		margin-bottom: 10px;
		height: 260px;	
	}
	.index .hot .sp ul li p{
		font-weight: 500;
	}
	.index .hot .sp ul li span{
		width: 50px;
		float: right;
		color:red;
		font-weight: bold;
		margin-bottom: 10px;
	}
	.index .hot .sp ul li:nth-of-type(2n){
		margin-right: 0px;
	}
	
	.index footer{
		width: 100%;
		color:#666;
		margin-bottom: 70px;
	}
	.index footer .login{
		width: 100%;
		height: 35px;
		font-size: 1.2em;
		overflow: hidden;
		margin:10px 0px;
	}
	.index footer .login span{
		margin:10px;
		display: block;
		float: left;
	}
	.index footer .login span p{
		color:deepskyblue;
	}
	.index footer .f_menu{
		width: 100%;
	}
	.index footer .f_menu ul{
		display: flex;
	}
	.index footer .f_menu ul li{
		flex: 1;
	}
	.index footer .s_menu{
		width: 100%;
		margin-top: 10px;
		text-align: center;
	}
	.index footer .s_menu ul{
		width:80%;
		display: flex;
		margin:0px auto;
	}
	.index footer .s_menu ul li{
		flex: 1;
	}
	.index footer .other{
		width: 100%;
		margin-top: 10px;
		text-align: center;
	}
	.index footer .other ul{
		width:100%;
		display: flex;
		margin:0px auto;
	}
	.index footer .other ul li{
		flex: 1;
		background: #ccc;
		margin-right: 10px;
		border-radius: 5px;
	}
	.index footer .other ul li:nth-of-type(2){
		margin-right: 0px;
	}
	.index footer .other ul li p{
		float: left;
		text-align: center;
		line-height: 30px;
	}
	.index footer .other ul li span{
		width: 45%;
		display:block;
		margin:0px auto;
	}
	.index footer .other .yj{
		width: 100%;
		margin-top: 10px;
	}
	.index footer .other .yj p{
		width: 100%;
		color:#666;
	}
	.index .gd{
		width: 40px;
		height: 40px;
		background: #ccc;
		border-radius: 50%;
		position:fixed;
		bottom: 70px;
		right:10px;
	}
	.index .gd .top{
		width: 12px;
		height: 12px;
		display: block;
		margin-top: 10px;
		margin-left: auto;
		margin-right: auto;
		transform: rotate(45deg);
		border:2px solid #333;
		border-right-color: transparent;
		border-bottom-color: transparent;
	}
	.index .gd .bottom{
		width: 2px;
		height: 20px;
		background: #333;
		display: block;
		position:absolute;
		top:11px;
		left:18px;
	}
</style>