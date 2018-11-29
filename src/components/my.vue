<template id="my">
	<div id="box v-cloak">
		<header>
			<div id="back" @click="back()">
			</div>
			<div id="title">
				<h4>名鞋库-用户登录</h4>
			</div>
			<div id="zhuce">
				<router-link to="/zhuce"><p>注册</p></router-link>			
			</div>
		</header>
		
		<div id="main">		
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1"><p class="current">账号登录</p></mt-tab-item>
			  <mt-tab-item id="2"><p>短信验证登录</p></mt-tab-item>
			</mt-navbar>

			<mt-tab-container v-model="selected">
			  	<mt-tab-container-item id="1">
				   <main>
						<div class="m-login">
							<span id="tip"></span>
							<form action="" onsubmit="return false" id="txt" name="forms">
								<ul>
									<li class="user">
										<label for="user">
										</label>
										<input type="text" name="user" id="user" placeholder="请输入手机号或E-mail"/>										
									</li>
									<li class="pass">
										<label for="pass">
										</label>
										<input type="password" name="pass" id="pass" placeholder="请输入您的密码" maxlength="15"/>
										<span class="hide">
										</span>
										<span class="show">
										</span>
									</li>
								</ul>
								<div>
									<span class="check">
										<input type="checkbox" name="ckb" id="ckb" value="" checked="checked"/>
										<label for="ckb">一个月内免登录</label>
									</span>
									<input type="submit" value="登录" class="login">
								</div>
							</form>	
							<div class="foot">
								<span class="forget">忘记密码？</span>
								<span class="lj"><router-link to="/zhuce"><p>立即注册</p></router-link></span>
							</div>
						</div>
					</main>

				</mt-tab-container-item>
			
			  	<mt-tab-container-item id="2">
			    	<main>
						<div class="m-login">
							<form action="">
								<ul>
									<li class="phone">
										<label for="phone">
										</label>
										<input type="text" name="phone" id="phone" placeholder="请输入手机号"/>
									</li>
									<li class="yzm">
										<label for="yzm">
										</label>
										<input type="text" name="yzm" id="yzm" placeholder="请输入手机验证码"/>
										<span>发送验证码</span>
									</li>
								</ul>
								<div>
									<span class="check">
										<input type="checkbox" name="ckb" id="ckb1" value="" checked="checked"/>
										<label for="ckb">一个月内免登录</label>
									</span>
									<input type="submit" value="登录" class="login">
								</div>
							</form>	
							<div class="foot">
								<span class="forget">忘记密码？</span>
								<span class="lj"><router-link to="/zhuce"><p>立即注册</p></router-link></span>
							</div>
						</div>
					</main>
			  	</mt-tab-container-item>
			</mt-tab-container>
		</div>
		
		<div class="m-btn">无需注册，手机短信直接登录</div>
	
		<footer>
			<div class="hz">
				<p>合作账号登录</p>
				<div class="account">
					<span class="zfb"></span>
					<span class="qq"></span>
					<span class="weibo"></span>
				</div>
			</div>
		</footer>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				selected:"1"
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		},
		mounted(){
			$('.mint-tab-item-label').click(function(){
				$(this).children('p').addClass('current');
				$(this).parent('.mint-tab-item').siblings('.mint-tab-item').children('.mint-tab-item-label')
				.children('p').removeClass('current');	
				$('.m-btn').toggle();
			})
			
			$('main .m-login form .pass .hide').click(function(){
				$(this).css("display","none").siblings('.show').css("display","block");
				$('main .m-login form .pass input').prop("type","text");
			})
			$('main .m-login form .pass .show').click(function(){
				$(this).css("display","none").siblings('.hide').css("display","block");
					$('main .m-login form .pass input').prop("type","password");
			})
			
			
			txt.onsubmit=function(s){
				var flag=true;
				var phone=document.forms.user;
					if(phone.value==''){
					flag=false;
					tip.innerHTML='请输入正确信息';
					tip.style.color='red'
				}else{
					tip.innerHTML='输入成功';
					tip.style.color='lime'
				}	
				
				var mm=document.forms.pass;
					if(mm.value==''){
					flag=false;
					tip.innerHTML='请输入正确密码';
					tip.style.color='red'
				}else{
					tip.innerHTML='密码无误';
					tip.style.color='lime'
				}	
					if(!flag){
					s.preventDefault();
				}
			}
			
		}
	}
</script>

<style scoped>
	[v-cloak]{
		display: none;
	}
	header{
		width: 100%;
		height: 45px;
		position:relative;
		background: #eee;
	}
	header #back{
		width: 15%;
		height: 45px;
		background: url('../assets/images/index/msn_userbg.png');
		background-position: 10px -452px;
		position: absolute;
		top:0px;
		left:0px;
	}
	header #back img{
		width: 80%;
	}
	header #title{
		width: 70%;
		height: 45px;
		margin:0px auto;
		background: #f9f9f9;
	}
	header #title h4{
		color:#666;
		font-size: 1.1em;
		text-align: center;
		line-height: 45px;
	}
	header #zhuce{
		width: 15%;
		height: 45px;
		position: absolute;
		top:0px;
		right:0px;
		background: #ffe5e5;
	}
	header #zhuce p{
		text-align: center;
		line-height: 45px;
		color:#e98686;
	}

#tip{
	font-size: 1.1em;
	width: 50%;
	margin:0px auto;
}
	#main{
		width: 100%;
		background: url('../assets/images/index/mscn_logbg.jpg');
		background-size: 100% 100%;
		overflow: hidden;
	}
	.mint-navbar{
		width: 95%;
		margin-top: 10px;
		margin-left: auto;
		margin-right: auto;
	}
	.mint-navbar .mint-tab-item{
		border-bottom-color: #46cfb0;
		border-bottom-width: 5px;
		margin-bottom: -3px;
	}
	.mint-tab-item{
		padding:0px;
		margin:0px;
		height: 50px;
		text-align: center;
		line-height: 50px;
	}
	.mint-tab-item-label p{
		line-height: 50px;
		font-size: 1.3em;
	}
	.mint-tab-item-label .current{
		color:#46cfb0;
	}
	main .m-login{
		padding:10px;
		width: 100%;
	}
	main .m-login form{
		width: 100%;
	}
	main .m-login form ul{
		margin:0px;
		width: 100%;
		border:1px solid #ccc;	
	}
	main .m-login form ul li{
		width: 100%;
		height: 50px;
		background: #f8f6f4;
		border-bottom: 1px solid #ccc;
	}
	main .m-login ul li input{
		width: 85%;
		height: 49px;
		outline: none;
		border:none;
		background: #f8f6f4;
		float: right;
	}
	main .m-login form ul .user label{
		width: 55px;
		height: 40px;
		background: url('../assets/images/index/msn_userbg.png');
		background-position: 10px 0px;
		position: absolute;
		top:10px;
		left:0px;
		margin:0px;
	}
	main .m-login form ul .user{
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		position: relative;
	}
	main .m-login form ul .pass{
		position: relative;
	}
	main .m-login form ul .pass label{
		width: 55px;
		height: 40px;
		background: url('../assets/images/index/msn_userbg.png');
		background-position: 10px 0px;
		position: absolute;
		top:10px;
		left:0px;
		margin:0px;
	}
	main .m-login form ul .pass .hide{
		width: 55px;
		height: 50px;
		background: url('../assets/images/index/msn_userbg.png');
		background-position: 0px 501px;
		background-size: 100%;
		position: absolute;
		top:0px;
		right:10px;
		display: block;
	}
	main .m-login form ul .pass .show{
		width: 55px;
		height: 50px;
		background: url('../assets/images/index/msn_userbg.png');
		background-position: 0px 463px;
		background-size: 100%;
		position: absolute;
		top:0px;
		right:10px;
		display: none;
	}

	main .m-login form>div{
		width: 100%;
		height: 50px;
		margin-top: 15px;
		overflow: hidden;
	}
	main .m-login form>div .check{
		width: 45%;
		height: 50px;
		display: block;
		float: left;
		position:relative;
	}
	main .m-login form>div .check input{
		width: 20px;
		height: 20px;
		background-color: #fff;
		margin-top: 10px;
		margin-right: 5px;
	}
	main .m-login form>div .check label{
		color:#666;
		font-size: 0.9em;
	}
	main .m-login form>div>input{
		width: 50%;
		height: 45px;
		float: right;
		font-size: 1.2em;
		line-height: 45px;
		background: #f77373;
		outline: none;
		border:none;
		border-radius: 5px;
		color:#fff;
	}
	
	main .m-login .foot{
		width: 100%;
		height: 40px;
		margin-top: 10px;
		position: relative;
	}
	main .m-login .foot span{
		display: block;
		width: 40%;
		height: 40px;
		float: left;
		position: absolute;
		line-height: 40px;
		color:#333;
	}
	main .m-login .foot .forget{
		top:0px;
		left:0px;
	}
	main .m-login .foot .lj{
		top:0px;
		right:0px;
		text-align: right;
	}
	main .m-login .foot .lj p{
		color: #333;
	}
	.m-btn{
		width: 95%;
		height: 40px;
		background: #6db248;
		margin:10px auto;
		color:#fff;
		text-align: center;
		line-height: 40px;
		font-size: 1em;
	}
	
	
	footer{
		width: 100%;
		margin-top: 20px;
	}
	footer .hz{
		width: 100%;
		margin:0px auto;
	}
	footer .hz p{
		color:#333;
		width: 30%;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		padding-top: 10px;
		font-size: 0.8em;
	}
	footer .hz .account{
		width: 80%;
		display: flex;
		margin:0px auto;
	}
	footer .hz span{
		flex: 1;
	}
	footer .hz .weibo{
		margin-right: 0px;
	}
	footer .hz .zfb{
		width: 80px;
		display: block;
		height: 80px;
		background: url('../assets/images/index/unionLoginIcon.png') no-repeat;
		background-position: -104px 9px;
		float: left;
	}
	footer .hz .qq{
		width: 80px;
		display: block;
		height: 80px;
		background: url('../assets/images/index/unionLoginIcon.png') no-repeat;
		background-position: 4px 9px;
		float: left;
	}
	footer .hz .weibo{
		width: 80px;
		display: block;
		height: 80px;
		background: url('../assets/images/index/unionLoginIcon.png') no-repeat;
		background-position: -240px 9px;
		float: left;
	}
	.phone{
		width: 100%;
		position:relative;
		height: 50px;
	}
	.s-sure{
		width: 100%;
		position:relative;
		height: 50px;
	}
	.phone label{
		width: 55px;
		height: 35px;
		background: url('../assets/images/index/msn_userbg.png');
		background-position: 10px 347px;
		background-size: 100%;
		position: absolute;
		top:0px;
		left:0px;
		margin:0px;
		display: block;
	}
	.s-sure>span{
		width: 55px;
		height: 26px;
		background: url('../assets/images/index/msn_userbg.png');
		background-position: 10px 294px;
		background-size: 100%;
		position: absolute;
		top:20px;
		left:0px;
		margin:0px;
		display: block;
	}
	.s-sure>div{
		width: 80%;
		height: 40px;
		float: right;
		margin-top: 5px;
		border:1px solid #999;
		margin-right: 10px;
	}
	.s-sure>div span{
		width: 15%;
		height: 38px;
		background: red;
		display: block;
		background: #ccc;
		text-align: center;
		line-height: 40px;
	}
	.yzm{
		width:100%;
		position:relative;
		height: 40px;
	}
	.yzm span{
		display: block;
		width: 30%;
		height: 35px;
		position: absolute;
		top:10px;
		right:10px;
		font-size: 0.9em;
		background: #6db248;
		color:#fff;
		text-align: center;
		line-height: 35px;
		border-radius: 5px;
	}
	.yzm label{
		width: 55px;
		height: 35px;
		background: url('../assets/images/index/msn_userbg.png');
		background-position: 10px 255px;
		background-size: 100%;
		position: absolute;
		top:5px;
		left:0px;
		margin:0px;
		display: block;
	}
</style>