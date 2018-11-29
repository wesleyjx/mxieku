<template id="zhuce">
	<div id="reg" v-cloak>
		<header>
			<div id="back" @click="back()">
			</div>
			<div id="title">
				<h4>名鞋库-用户注册</h4>
			</div>
			<div id="zhuce">
				<router-link to="/my"><p>登录</p></router-link>			
			</div>
		</header>	
		
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
					<span>注册</span>
				</form>	
			</div>
		</main>

		
		
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
			$('main .m-login form .pass .hide').click(function(){
				$(this).css("display","none").siblings('.show').css("display","block");
				$('main .m-login form .pass input').prop("type","text");
			})
			$('main .m-login form .pass .show').click(function(){
				$(this).css("display","none").siblings('.hide').css("display","block");
					$('main .m-login form .pass input').prop("type","password");
			})
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
	
	
	main{
		width: 100%;
		background: url('../assets/images/index/mscn_logbg.jpg');
		background-size: 100% 100%;
		overflow: hidden;
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
	form>span{
		width: 100%;
		height: 45px;
		background: #6db248;
		display: block;
		margin:10px auto;
		text-align: center;
		line-height: 45px;
		color:#fff;
		font-size: 1.2em;
		letter-spacing: 10px;
		border-radius: 5px;
	}

	
	
	
	
	
	
	
	
	
	
	
</style>