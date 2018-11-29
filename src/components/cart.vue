<template id="cart">
	<div id="box">
		<header>
			<div id="back" @click="back()">
				<img src="../assets/images/index/return.png" alt="" />
			</div>
			<div class="menu">
				<img src="../assets/images/index/sort.png" alt="" />
			</div>
			<div class="title">
				<p>S.CN名鞋库 我的购物车</p>
			</div>
			<div class="my">
				<router-link to="/my"><img src="../assets/images/index/my.png" alt="" /></router-link>
			</div>
			<div class="cart">
				<router-link to="/cart"><img src="../assets/images/index/cart.png" alt="" /></router-link>
			</div>
		</header>
		
		<div id="tab">
			<ul>
				<li>
					<router-link to="/shouye">
						<img src="../assets/images/index/c-icon/shouye.png" alt="" />
						<p>首页</p>
					</router-link>
					<span></span>
				</li>
				<li>
					<img src="../assets/images/index/c-icon/huiyuanlibao.png" alt="" />
					<p>会员日</p>
					<span></span>
				</li>
				<li>
					<img src="../assets/images/index/c-icon/nanxie.png" alt="" />
					<p>休闲鞋</p>
					<span></span>
				</li>
				<li>
					<img src="../assets/images/index/c-icon/yifu.png" alt="" />
					<p>休闲服</p>
					<span></span>
				</li>
				<li>
					<img src="../assets/images/index/c-icon/tiyu-paobu.png" alt="" />
					<p>跑步馆</p>
					<span></span>
				</li>
				<li>
					<img src="../assets/images/index/c-icon/lanqiu.png" alt="" />
					<p>篮球馆</p>
					<span></span>
				</li>
				<li>
					<img src="../assets/images/index/c-icon/zuqiu-copy.png" alt="" />
					<p>足球馆</p>
					<span></span>
				</li>
				<li>
					<img src="../assets/images/index/c-icon/chaoyipu.png" alt="" />
					<p>包包/配件</p>
					<span></span>
				</li>
				<li>
					<img src="../assets/images/index/c-icon/huwaixie.png" alt="" />
					<p>户外馆</p>
					<span></span>
				</li>
				<li>
					<img src="../assets/images/index/c-icon/nanxie.png" alt="" />
					<p>男鞋馆</p>
					<span></span>
				</li>
				<li>
					<img src="../assets/images/index/c-icon/tongxie.png"" />
					<p>童鞋馆</p>
					<span></span>
				</li>
				<button>Close</button>
			</ul>
		</div>
		
		
		
		
		<main>
			<div class="car">
				<img src="../assets/images/index/car.png" alt="" />
			</div>
			<p>您还没有挑选商品哦</p>
			<span><router-link to="/shouye"><button>去挑选商品</button></router-link></span>
			
		</main>

		<footer>
			<div class="login">
				<span><router-link to="/my"><p>登陆</p></router-link></span>
				<span><router-link to="/my"><p>注册</p></router-link></span>
				<span><router-link to="/shouye"><p>首页</p></router-link></span>
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
				<ul class="choose">
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
					<ul>
						<li><router-link to="/my"><p>意见反馈</p></router-link></li>
						<li><router-link to="/my"><p>商圈</p></router-link></li>
						<li><router-link to="/my"><p>问答</p></router-link></li>
						<li><router-link to="/my"><p>标签</p></router-link></li>
						<li><router-link to="/my"><p>主题</p></router-link></li>
						<li><router-link to="/my"><p>长尾词</p></router-link></li>
					</ul>
					<p>©2008-2018 s.cn 名鞋库 闽ICP备08106896号</p>
				</div>
			</div>
		</footer>	
	</div>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			}
		},
		mounted(){
			$('header .menu').click(function(){
				$('#tab').fadeIn(300)
			})
			$('#tab ul button').click(function(){
				$('#tab').css("display","none")
			})
			
		}
	}
</script>

<style scoped>
	header{
		width: 100%;
		background: #b91d23;
		height: 45px;
		position: relative;
		border-right: 1px solid #a90b0e;
	}
	header #back{
		width: 13%;
		height: 45px;
		position:absolute;
		left:0px;
		top:0px;
		border-right: 1px solid #a90b0e;
	}
	header  img{
		width: 60%;
		margin-left: 10px;
		margin-top: 10px;
	}
	header .menu{
		width: 13%;
		height: 45px;
		position: absolute;
		top:0px;
		left:45px;
		border-right: 1px solid #a90b0e;
	}
	header .title{
		width: 50%;
		height: 45px;
		margin:0px auto;
		border-right: 1px solid #a90b0e;
	}
	header .title p{
		width: 80%;
		height: 45px;
		margin:0px auto;
		color:#fff;
		font-size: 1.1em;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		line-height: 45px;
		padding-left: 2px;
		font-weight: bold;
	}
	header .my{
		width: 13%;
		height: 45px;
		position:absolute;
		top:0px;
		right:45px;
		border-right: 1px solid #a90b0e;
	}
	header .cart{
		width: 13%;
		height: 45px;
		position:absolute;
		top:0px;
		right:0px;
	}
	main{
		width: 100%;
		overflow: hidden;
	}
	main .car{
		width: 30%;
		margin-left: auto;
		margin-right: auto;
		margin-top: 20px;
	}
	main .car img{
		width: 100%;
	}
	main p{
		width: 60%;
		margin-left: auto;
		margin-right: auto;
		margin-top: 10px;
		font-weight: bold;
		font-size: 1.5em;
		color:#999;
	}
	main button{
		width: 80%;
		height: 50px;
		background: #ff8a00;
		margin-left: 30px;
		outline: none;
		border-radius: 4px;
		color:#fff;
		font-weight: bold;
		border:1px solid #cd4900;
	}
	
	 footer{
		width: 100%;
		color:#666;
		margin-bottom: 70px;
		margin-top: 50px;
	}
	 footer .login{
		width: 100%;
		height: 35px;
		font-size: 1.2em;
		overflow: hidden;
		margin:15px 0px;
	}
	footer .login span{
		margin:10px;
		display: block;
		float: left;
	}
	footer .login span:nth-of-type(3){
		float: right;
	}
	footer .login span:nth-of-type(3) p{
		color:#333;
	}
	 footer .login span p{
		color:deepskyblue;
	}
	 footer .f_menu{
		width: 100%;
	}
	footer .f_menu ul{
		display: flex;
	}
	footer .f_menu ul li{
		flex: 1;
	}
	footer .s_menu{
		width: 100%;
		margin-top: 10px;
		text-align: center;
	}
	footer .s_menu ul{
		width:80%;
		display: flex;
		margin:0px auto;
	}
	 footer .s_menu ul li{
		flex: 1;
	}
	 footer .other{
		width: 100%;
		margin-top: 10px;
		text-align: center;
	}
	footer .other .choose{
		width:100%;
		display: flex;
		margin:0px auto;
	}
	footer .other .choose li{
		flex: 1;
		background: #ccc;
		margin-right: 10px;
		border-radius: 5px;
	}
	footer .other .choose li:nth-of-type(2){
		margin-right: 0px;
	}
	footer .other .choose li p{
		float: left;
		text-align: center;
		line-height: 30px;
	}
	footer .other .choose li span{
		width: 45%;
		display:block;
		margin:0px auto;
	}
	footer .other .yj{
		width: 100%;
		margin-top: 15px;
	}
	footer .other .yj ul{
		width: 95%;
		overflow: hidden;
		margin:0px auto;
	}
	footer .other .yj ul li{
		float: left;
		margin-right: 20px;
	}
	footer .other .yj ul li:nth-of-type(6){
		margin-right: 0px;
	}
	footer .other .yj ul li p{
		color:#666;
		margin:0px;
	}
	
	#tab{
		position:fixed;
		top:0px;
		left:0px;
		right:0px;
		bottom:0px;
		background: rgba(0,0,0,0.5);
		display: none;
	}
	#tab ul{
		width: 45%;
		background: #000;
		padding:10px 0px;
	}
	#tab ul li{
		width: 100%;
		height: 45px;
		position:relative;
	}
	#tab ul li img{
		float: left;
		margin-right: 15px;
		margin-left: 10px;
		margin-top: 5px;
	}
	#tab ul li p{
		color:#fff;
	}
	#tab ul li span{
		display: block;
		width: 8px;
		height: 8px;
		position:absolute;
		right:10px;
		top:10px;
		border:1px solid #fff;
		border-top: none;
		border-left: none;
		transform: rotate(-45deg);
	}
	#tab ul button{
		width: 80%;
		height: 30px;
		background: #333;
		margin-left: 10px;
		outline: none;
		border:none;
		border-radius: 4px;
		font-size: 1.2em;
		color: #fff;
	}
</style>